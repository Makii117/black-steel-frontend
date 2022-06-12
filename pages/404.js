import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bg={"#FB574C"}
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={"gray.500"} mb={6}>
        The page you are looking for does not seem to exist
      </Text>

      <Button
        bg={"#FB574C"}
        color="white"
        variant="solid"
        _hover={{
          bg: "#FB574C",
        }}
      >
        <Link href="/">Go to Home</Link>
      </Button>
    </Box>
  );
}
