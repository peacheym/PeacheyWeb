import React from "react";
import { chakra, Box, Flex, useColorModeValue, Link } from "@chakra-ui/react";

export default function Contact() {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      pb="50px"
    >
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue("white", "gray.800")}
        w={{ base: "100%", md: "70%" }}
      >
        <Box mt={2}>
          <Link
            fontSize="2xl"
            color={useColorModeValue("gray.700", "white")}
            fontWeight="700"
            _hover={{
              color: useColorModeValue("gray.600", "gray.200"),
              textDecor: "underline",
            }}
          >
            Contact Me!
          </Link>
          <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
            Please feel free to get in touch with me via{" "}
            <Link color="orange.300" href="mailto:peacheym@dal.ca" isExternal>
              Email
            </Link>{" "}
            or{" "}
            <Link
              color="orange.300"
              href="https://www.linkedin.com/in/matt-peachey-02bb11152/"
              isExternal
            >
              LinkedIn
            </Link>
            . I am also on Twitter at{" "}
            <Link
              color="orange.300"
              href="https://twitter.com/MattPeachey3"
              isExternal
            >
              @mattpeachey3
            </Link>
            !
          </chakra.p>
        </Box>
      </Box>
    </Flex>
  );
}
