import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  SimpleGrid,
  theme,
  Container,
} from '@chakra-ui/react';

import Header from './Header';
import ResearchProject from './ResearchProject';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Text>Research Projects</Text>
      <SimpleGrid columns={3} spacing={10}>
        <ResearchProject
          imgsrc="https://www.microsoft.com/en-us/research/uploads/prod/2020/10/Picture1.png"
          alttext="Header Img"
          badges={['AR / VR', 'CV']}
          title="MoveBox: Democratizing MoCap for the Microsoft Rocketbox Avatar Library"
          venue="IEEE AIVR"
          date="December 2020"
          url="#"
          isLoaded={true}
        />
        <ResearchProject
          imgsrc="https://www.microsoft.com/en-us/research/uploads/prod/2020/10/Picture1.png"
          alttext="Header Img"
          badges={['AR / VR', 'Space Syntax', 'Story Telling']}
          title="Story CreatAR: a Toolkit for Spatially-Adaptive AR
          Storytelling"
          venue="IEEE VR"
          date="March 2021"
          url="#"
          isLoaded={false}
        />
        <ResearchProject
          imgsrc="https://www.microsoft.com/en-us/research/uploads/prod/2020/10/Picture1.png"
          alttext="Header Img"
          badges={['AR / VR', 'Space Syntax']}
          title="Using Space Syntax to Enable Walkable AR Experiences"
          venue="IEEE ISMAR"
          date="November 2020"
          url="#"
          isLoaded={false}
        />
      </SimpleGrid>
    </ChakraProvider>
  );
}

export default App;
