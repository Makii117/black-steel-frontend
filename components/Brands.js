import { Box, chakra, SimpleGrid, Container } from "@chakra-ui/react";
import Image from "next/image";

const BRANDS = [
  {
    id: 1,
    url: "/brands/brand1.png",
  },
  {
    id: 2,
    url: "/brands/brand3.png",
  },
  {
    id: 3,
    url: "/brands/brand3.png",
  },
];

export default function BasicStatistics() {
  return (
    <Box
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
      bg={"#F0F0F0"}
      paddingBottom="4rem"
    >
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        Our Brands
      </chakra.h1>
      <Container color="white" style={{ maxWidth: "50vw" }}>
        <SimpleGrid columns={{ base: 1, md: 3 }}>
          {BRANDS.map((brand) => {
            return (
              <div key={brand.id}>
                <img src={brand.url} />
              </div>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
