import { Box, Heading, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function Success() {
  return (
    <Box textAlign="center" py={10} px={6} height="40vh">
      <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Congratulations!
      </Heading>
      <Text color={"gray.500"}>Your order has been placed!</Text>
      <Text color={"gray.500"}>
        If you have any questions feel free to contact us at any time!
      </Text>
    </Box>
  );
}
