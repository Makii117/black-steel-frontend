import { ReactNode } from "react";
import { Image } from "next/image";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
} from "@chakra-ui/react";

import { AiOutlineShoppingCart } from "react-icons/ai";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Topbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("#F0F0F0", "#F0F0F0")} px={2}>
        <Flex h={10} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Text>
              <b>ENG</b>/BA
            </Text>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={1}>
              <Button>Login</Button>
              <Button>Register</Button>
              <Button>
                <Box as={AiOutlineShoppingCart} size="24px" />
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
