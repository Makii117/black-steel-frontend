import {
  Box,
  Heading,
  Button,
  Text,
  Stack,
  useColorModeValue,
  Divider,
  Flex,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";
import CardItem from "../components/CardItem";
import { TiDeleteOutline } from "react-icons/ti";
import Link from "next/link";
import { getCookie, getCookies } from 'cookies-next';
import ProductCard from "../components/ProductCard";


const cart = (props) => {

  const {cart}=props;
  console.log(cart)

  return (
    <Box
      maxW={{ base: "3xl", lg: "7xl" }}
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        align={{ lg: "flex-start" }}
        spacing={{ base: "8", md: "16" }}
      >
        <Stack spacing={{ base: "8", md: "10" }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold">
            Your Shopping Cart (0 items)
          </Heading>

          <Stack spacing="2">
            {/* cart item 1 */}
            
            <Stack direction={"reverse-column"}>
              <CardItem />
              <Stack
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box as={TiDeleteOutline} size="45px"></Box>{" "}
                <Text align={"center"} justifty={"center"}>
                  Remove from Cart
                </Text>
              </Stack>
            </Stack>
            <Divider />  
            {/* <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
        {cart.map((cart) => {
          return (
            <Link
              key={cart.CartItem.Product.id}
              href={`/shop/[id]`}
              as={`/shop/${cart.CartItem.Product.id}`}
            >
              <Container key={cart.CartItem.Product.id} style={{ cursor: "pointer" }}>
                <ProductCard
                  name={cart.CartItem.Product.name}
                  img={cart.CartItem.Product.img}
                  price={cart.CartItem.Product.price}
                />
              </Container>
            </Link>
          );
        })}
      </SimpleGrid>        */}
            
          </Stack>
          <Flex h={10} alignItems={"center"} justifyContent={"space-between"}>
            
            {/* chechout button */}
            <Button
              rounded={"full"}
              bg={"#FB574C"}
              color={"white"}
              _hover={{
                bg: "#FB574C",
              }}
              width={"185px"}
            >
              <Link href="/success">
                <b>Checkout</b>
              </Link>
            </Button>

            <Text>
              {" "}
              <b>TOTAL: `${cart.totalPrice}`</b> $
            </Text>
          </Flex>
        </Stack>
      </Stack>
    </Box>
  );
};

export async function getServerSideProps(context){
  const cookies = context.req.headers.cookie;

  const res = await fetch("http://localhost:5000/api/cart",{
    method:'GET',  
    mode:"cors", 
  credentials: 'include',  
  headers: {
    'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      Cookie:cookies
    },
    withCredentials:true,
    cookies:cookies,
    
    });

  console.log(res)
  const cart = await res.json();
  
  return{
    props:{
      cart,
    },
  };

}


export default cart;
