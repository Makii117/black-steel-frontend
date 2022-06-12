import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

const terms = () => {
  return (
    <Box textAlign="center" py={10} px={6} height={"60vh"}>
      <InfoIcon boxSize={"50px"} color={"blue.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        This is a test website!
      </Heading>
      <Text color={"gray.500"}>
        This webpage has been constructed for university work, payments or any
        sort of transactions from this domain are not real!
      </Text>
    </Box>
  );
};

export default terms;
