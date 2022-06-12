import React from "react";
import {
  SimpleGrid,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Stack,
  Container,
  Text,
} from "@chakra-ui/react";
import ProductCard from "../../components/ProductCard";
import Link from "next/link";
import { FiFilter } from "react-icons/fi";

const shop = (props) => {
  const { products } = props;

  return (
    <div>
      <Stack
        direction={{ base: "row", md: "row" }}
        align={"center"}
        justify={"center"}
        marginBottom="4rem"
      >
        <Box textAlign="left" py={10} px={6} flex={1}>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" fontWeight={"light"}>
                HOME
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="/shop" fontWeight={"light"}>
                SHOP
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box direction={{ base: "column", md: "column" }}>
          <Box as={FiFilter} size="24px" />
        </Box>
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/shop/[id]`}
              as={`/shop/${product.id}`}
            >
              <Container key={product.id} style={{ cursor: "pointer" }}>
                <ProductCard
                  name={product.name}
                  img={product.img}
                  price={product.price}
                />
              </Container>
            </Link>
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://besirevic.dev/api/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

export default shop;
