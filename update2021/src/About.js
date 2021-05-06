import React from 'react';

import { Center, SimpleGrid, Text, Box, Image } from '@chakra-ui/react';

import headshot from './headshot.jpg';

export default function About() {
  return (
    <SimpleGrid columns={2} p="50" mt="50px">
      <Box p={7}>
        <Center>
          <Text fontSize="40px">Hello!</Text>
        </Center>
        <Center>
          <Text>
            My name is Matt Peachey, I am a 4th year undergraduate student
            studying computer science at Dalhousie University.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            feugiat arcu non metus finibus, ornare convallis lacus mollis. Sed
            sed ipsum nec libero ornare bibendum. Aliquam aliquam ac lorem at
            eleifend. Praesent eu feugiat libero, sit amet porttitor justo.
            Fusce in arcu condimentum, rhoncus leo sit amet, dignissim erat.
            Phasellus facilisis nec nunc in condimentum. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Quisque dictum ornare nisl, quis
            elementum tortor tristique eu. Morbi porta lacus nec cursus luctus.
            Nunc venenatis fermentum mi id aliquet. Duis eleifend porttitor ex,
            vitae tincidunt felis tincidunt vitae. Mauris consequat vulputate
            nulla eget interdum. Proin a magna velit. Donec venenatis fringilla
            mauris.
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
