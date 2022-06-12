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

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    alert(inputs);
    console.log(inputs);

    try {
      const res = fetch("https://besirevic.dev/auth/login", {
        method: "POST",
        body: JSON.stringify(inputs),
      });

      console.log(res);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  };

  return (
    <div>
      <FormControl id="login-email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl id="login-password" isRequired>
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
          Log in
        </Button>
      </Stack>
    </div>
  );
};

export default Login;
