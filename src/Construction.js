import { Text, Center, Spinner, Box } from "@chakra-ui/react";
import React from "react";

export default function Construction() {
  return (
    <Center>
      <Box mt="20%">
        <Center>
          <Spinner
            thickness="4px"
            speed="0.8s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
        <Center>
          <Text fontSize="20px" mt="20px">
            This page is currently under construction, check back soon!
          </Text>
        </Center>
      </Box>
    </Center>
  );
}
