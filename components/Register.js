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
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    const inputJson=JSON.stringify(inputs)


    try {
      const res = fetch("https://besirevic.dev/auth/", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer',
        },
        credentials: 'include',

        body: inputJson,
      });

      return res;
      const token = res.accessToken
    } catch (err) {
      
      console.log("Error: ", err.message);
    
    }
  };

  return (
    <Stack spacing={8} py={12} px={6}>
      <Stack spacing={4}>
        <HStack>
          <Box>
            <FormControl id="name" isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl id="surname">
              <FormLabel>Last Name</FormLabel>
              <Input
                name="surname"
                type="text"
                value={inputs.surname || ""}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
        </HStack>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              value={inputs.password || ""}
              onChange={handleChange}
            />
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
            onClick={() => handleSubmit()}
          >
            Register
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Register;
