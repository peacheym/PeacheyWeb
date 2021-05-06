import React from 'react';

import { Center, SimpleGrid, Text, Box, Image } from '@chakra-ui/react';

import headshot from './headshot.jpg';

export default function About() {
  return (
    <SimpleGrid columns={2} p="50">
      <Box p={7}>
        <Center>
          <Text fontSize="40px">Hello!</Text>
        </Center>
        <Center>
          <Text>
            My name is Matt Peachey, I am a 4th year undergraduate student
            studying computer science at Dalhousie University.
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
        </Box>
      </Center>
    </SimpleGrid>
  );
}
