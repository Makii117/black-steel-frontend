import { Button, Flex, Image, Stack, chakra } from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"lg"}>
          <chakra.h1
            textAlign={"center"}
            fontSize={"2xl"}
            fontWeight={"medium"}
          >
            Find the most premium kitchen and outdoor knives best suited for
            you.
          </chakra.h1>

          <Stack
            direction={{ base: "row", md: "row" }}
            align={"center"}
            justify={"center"}
          >
            <Button
              rounded={"full"}
              bg={"#FB574C"}
              color={"white"}
              _hover={{
                bg: "#FB574C",
              }}
              width={"200px"}
            >
              Explore
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src="/Hero.png" />
      </Flex>
    </Stack>
  );
}
