import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const register = async () => {
    try {
      const res = await fetch("https://besirevic.dev/auth/", {
        header: "Access-Control-Allow-Origin: *",
        method: "POST",
        body: formData,
      });

      const json = await res.json();

      return json;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Stack spacing={8} py={12} px={6}>
      <Stack spacing={4}>
        <HStack>
          <Box>
            <FormControl id="firstName" isRequired>
              <FormLabel>First Name</FormLabel>
              <Input type="text" />
            </FormControl>
          </Box>
          <Box>
            <FormControl id="lastName">
              <FormLabel>Last Name</FormLabel>
              <Input type="text" />
            </FormControl>
          </Box>
        </HStack>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input type={showPassword ? "text" : "password"} />
            <InputRightElement h={"full"}>
              <Button
                variant={"ghost"}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Stack
          spacing={10}
          pt={2}
          align={"center"}
          justify={"center"}
          marginTop="2rem"
        >
          <Button
            loadingText="Submitting"
            size="lg"
            rounded={"full"}
            bg={"#FB574C"}
            color={"white"}
            _hover={{
              bg: "#FB574C",
            }}
            width={"200px"}
            onClick={() => register()}
          >
            Register
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Register;
