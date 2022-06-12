import { ReactNode } from "react";
import { Image } from "next/image";
import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
} from "@chakra-ui/react";

import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

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
              <Button>
                <Link href="/login">Register / Login</Link>
              </Button>
              <Button>
                <Box as={AiOutlineHeart} size="24px" />
              </Button>
              <Button>
                <Link href="/cart">
                  <Box as={AiOutlineShoppingCart} size="24px" />
                </Link>
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
