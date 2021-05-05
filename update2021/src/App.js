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
            <ResearchProject />
            <ResearchProject />
            <ResearchProject />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
