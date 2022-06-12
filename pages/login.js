import {
  Flex,
  Box,
  Center,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Stack spacing={8} mx={"auto"} py={12} px={6}>
          <Stack direction={["column", "row"]} spacing="200px">
            <Box maxWidth="400px">
              <Stack align={"center"} justify={"center"} paddingBottom="4rem">
                <Heading fontSize={"4xl"} textAlign={"center"}>
                  Log in
                </Heading>
              </Stack>
              <Login />
            </Box>
            <Center>
              <Divider orientation="vertical" />
            </Center>
            <Box maxWidth="400px">
              <Stack align={"center"} justify={"center"} paddingBottom="1rem">
                <Heading fontSize={"4xl"} textAlign={"center"}>
                  Dont have an account?
                </Heading>
              </Stack>
              <Register />
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
}
