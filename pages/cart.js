import React from "react";
import {
  Box,
  Heading,
  Button,
  Text,
  Stack,
  useColorModeValue,
  Divider,
  Flex,
} from "@chakra-ui/react";
import CardItem from "../components/CardItem";
import { TiDeleteOutline } from "react-icons/ti";

const cart = () => {
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
          </Stack>
          <Divider />
          <Flex h={10} alignItems={"center"} justifyContent={"space-between"}>
            <Button
              rounded={"full"}
              bg={"#FB574C"}
              color={"white"}
              _hover={{
                bg: "#FB574C",
              }}
              width={"185px"}
            >
              <a href="/shop">
                <b>Checkout</b>
              </a>
            </Button>

            <Text>
              {" "}
              <b>TOTAL:</b> $
            </Text>
          </Flex>
        </Stack>
      </Stack>
    </Box>
  );
};

export default cart;
