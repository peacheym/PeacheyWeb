import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

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
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.900", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Twitter"}
            href={"https://twitter.com/MattPeachey3"}
          >
            <FaTwitter />
          </SocialButton>
          <SocialButton
            label={"LinkedIn"}
            href={"https://www.linkedin.com/in/matt-peachey-02bb11152/"}
          >
            <FaLinkedin />
          </SocialButton>
        </Stack>
        <Text color={useColorModeValue("gray.700", "gray.200")}>
          © 2021 Matt Peachey
        </Text>
        <Text>
          Powered by{" "}
          <Link
            color={"blue.400"}
            // href="http://www.driftwooddevelopment.ca"
            isExternal
          >
            Driftwood
          </Link>
        </Text>
      </Container>
    </Box>
  );
}
