import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import ResearchProject from './ResearchProject';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Text>Research Projects</Text>
            <ResearchProject
              imgsrc="https://www.microsoft.com/en-us/research/uploads/prod/2020/10/Picture1.png"
              badges={['test', 'test2']}
            />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
