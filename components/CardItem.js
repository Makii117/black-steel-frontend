import React from "react";
import { Flex, Box, Image, useColorModeValue } from "@chakra-ui/react";

const CardItem = () => {
  return (
    <Flex p={50} w="full" alignItems="left" justifyContent="left">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image src="/hero.png" alt="loading" roundedTop="lg" />

        <Box p="6">
          <Box d="flex" alignItems="baseline"></Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              Name of product{" "}
            </Box>
          </Flex>

          <Flex justifyContent="space-between" alignContent="left">
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg"></Box>$ USD
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default CardItem;
