import {
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "3xl" }}>
            <Text as={"span"} fontWeight="300">
              Find the most premium kitchen and outdoor knives best suited for
              you.
            </Text>
          </Heading>

          <Stack direction={{ base: "row", md: "row" }}>
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
