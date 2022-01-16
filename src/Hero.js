import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

import headshot from "./images/headshot.jpg";

export default function Hero() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
        minH={'90vh'}
      >
        <Stack
          flex={1}
          p={{ base: "0px 50px", md: 0 }}
          spacing={{ base: 5, md: 7 }}
        >
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text as={"span"} position={"relative"}>
              Matt Peachey
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            I am a PhD student at{" "}
            <Link color="orange.500" href="https://www.dal.ca/" isExternal>
              Dalhousie University
            </Link>{" "}
            in the{" "}
            <Link
              color="orange.500"
              href="https://www.dal.ca/faculty/computerscience.html"
              isExternal
            >
              Faculty of Computer Science
            </Link>
            . My supervisor is{" "}
            <Link
              color="orange.500"
              href="https://josephmalloch.wordpress.com/"
              isExternal
            >
              Dr. Joseph Malloch
            </Link>{" "}
            and I am a member of the{" "}
            <Link color="orange.500" href="https://gem.cs.dal.ca/" isExternal>
              GEM Lab
            </Link>
            !
          </Text>
          <Box>
            <Text mb="10px" fontSize="lg" color={"gray.500"}>
              My research interests are:
            </Text>
            <UnorderedList color={"gray.500"}>
              <ListItem>Human Computer Interaction.</ListItem>
              <ListItem> Machine Learning.</ListItem>
              <ListItem>Digital Musical Instruments.</ListItem>
              <ListItem>Plenty more!</ListItem>
            </UnorderedList>
          </Box>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"500px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"75%"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={headshot}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
