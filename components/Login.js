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
  return (
    <div>
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
        >
          Log in
        </Button>
      </Stack>
    </div>
  );
};

export default Login;
