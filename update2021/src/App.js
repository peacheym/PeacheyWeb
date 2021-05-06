import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';

import Header from './Header';
import ResearchProject from './ResearchProject';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header></Header>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Text>Research Projects</Text>

            <ResearchProject
              imgsrc="https://www.microsoft.com/en-us/research/uploads/prod/2020/10/Picture1.png"
              alttext="Header Img"
              badges={['AR / VR', 'CV', 'blank']}
              title="MoveBox: Democratizing MoCap for the Microsoft Rocketbox Avatar Library"
              venue="IEEE AIVR"
              date="December 2020"
              url="#"
              isLoaded={true}
            />
            <ResearchProject
              imgsrc="https://www.microsoft.com/en-us/research/uploads/prod/2020/10/Picture1.png"
              alttext="Header Img"
              badges={[]}
              title="Story CreatAR: a Toolkit for Spatially-Adaptive AR
              Storytelling"
              venue="IEEE VR"
              date="November 2020"
              url="#"
              isLoaded={false}
            />
            <ResearchProject
              imgsrc="https://www.microsoft.com/en-us/research/uploads/prod/2020/10/Picture1.png"
              alttext="Header Img"
              badges={[]}
              title="Using Space Syntax to Enable Walkable AR Experiences"
              venue="IEEE ISMAR"
              date="???"
              url="#"
              isLoaded={false}
            />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
