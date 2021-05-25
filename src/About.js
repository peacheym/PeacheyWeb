import React from "react";

import {
  Center,
  SimpleGrid,
  Text,
  Box,
  Image,
  Link,
  Icon,
} from "@chakra-ui/react";

import { FiTwitter, FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

import headshot from "./headshot.jpg";
// todo: Make this more responsive and less bad.
export default function About() {
  return (
    <SimpleGrid columns={2} p="50" mt="50px" id="About">
      <Box p={7}>
        <Center>
          ill
          <Text fontSize="40px">Hello!</Text>
        </Center>

        <Center mt="20px">
          <Text>
            My name is Matt Peachey, I am a fourth year student at Dalhousie
            University in Halifax, Nova Scotia. I am currently studying Computer
            Science and have a particular interest in Computer Vision / Machine
            Learning as well as Human Computer Interaction and Modern Web
            Development Technologies.
          </Text>
        </Center>

        <Center mt="20px">
          <Text>
            I have completed three Co-op placements where I worked both as a
            software developer as well as a researcher in a Lab. Though each of
            these experiences differed in significant ways, I learned countless
            valuable lessons at each of them that have shaped the foundation of
            my computing knowledge and interests.
          </Text>
        </Center>

        <Center mt="20px">
          <Text>
            Through my studies I have developed a strong understanding of
            Computer Science topics such as machine learning, data structures
            &amp; algorithms, and network computing. I have also enjoyed
            learning about modern web technologies such as React, GraphQL, and
            other interesting frameworks and technologies in the web-development
            space.
          </Text>
        </Center>
      </Box>
      <Center>
        <Box boxSize="sm">
          <Image
            src={headshot}
            alt="Matt Peachey Headshot"
            borderRadius="15px"
          />
          <Center mt="10px">
            <Link href="https://twitter.com/mattpeachey3" isExternal>
              <Icon fontSize="24px" m="10px" hov as={FiTwitter} />
            </Link>
            <Link href="https://github.com/peacheym" isExternal>
              <Icon fontSize="24px" m="10px" as={FiGithub} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/matt-peachey-02bb11152/"
              isExternal
            >
              <Icon fontSize="24px" m="10px" as={FiLinkedin} />
            </Link>
            <Link href="mailto:peacheym@dal.ca" isExternal>
              <Icon fontSize="24px" m="10px" as={FiMail} />
            </Link>
          </Center>
        </Box>
      </Center>
    </SimpleGrid>
  );
}
