import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../assets/icons/Logo";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("white", "white")}
      color={useColorModeValue("gray.700", "gray.200")}
      borderTopWidth={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("#D2D2D2", "#D2D2D2")}
      padding="2px"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />

        <Stack
          direction={"row"}
          spacing={6}
          borderBottomWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("#D2D2D2", "#D2D2D2")}
          padding="5px"
        >
          <Link href={"#"}>
            <b>SOCIALS</b>
          </Link>
          <Link href={"#"}>
            <b>TERMS OF USE</b>
          </Link>
          <Link href={"#"}>
            <b>ABOUT US</b>
          </Link>
        </Stack>
      </Container>

      <Box>
        <Container
          as={Stack}
          py={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>
            <b>© Black Steel & Co.</b>
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
