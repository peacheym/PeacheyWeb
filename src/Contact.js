import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Link,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      pb="50px"
      id="contact"
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
          <Text
            fontSize="2xl"
            color={useColorModeValue("gray.700", "white")}
            fontWeight="700"
          >
            Contact Me!
          </Text>
          <Text mt={2} color={useColorModeValue("gray.600", "gray.300")}>
            Please feel free to get in touch with me on the following platforms:
          </Text>
          <UnorderedList>
            <ListItem>
              <Link
                fontWeight="bold"
                color="orange.400"
                href="mailto:peacheym@dal.ca"
                isExternal
              >
                Email
              </Link>
            </ListItem>
            <ListItem>
              <Link
                fontWeight="bold"
                color="orange.400"
                href="https://www.linkedin.com/in/matt-peachey-02bb11152/"
                isExternal
              >
                LinkedIn
              </Link>
            </ListItem>
            <ListItem>
              <Link
                fontWeight="bold"
                color="orange.400"
                href="https://twitter.com/MattPeachey3"
                isExternal
                display={"inline"}
              >
                Twitter
              </Link>
              <Text display={"inline"} fontSize={"sm"} color="gray.600">
                {" "}
                &rarr; (I tend to do significantly more 'liking' than
                'tweeting'!)
              </Text>
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Flex>
  );
}

// <Link color="orange.300" href="mailto:peacheym@dal.ca" isExternal>
// Email
// </Link>{" "}
// or{" "}
// <Link
//   color="orange.300"
//   href="https://www.linkedin.com/in/matt-peachey-02bb11152/"
//   isExternal
// >
//   LinkedIn
// </Link>
// . I am also on Twitter at{" "}
// <Link
//   color="orange.300"
//   href="https://twitter.com/MattPeachey3"
//   isExternal
// >
//   @mattpeachey3
// </Link>{" "}
// but I tend to do significantly more 'liking' than 'tweeting'!
