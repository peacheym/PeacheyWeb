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
import About from './About';
import Research from './Research';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <About />
      <Research />
    </ChakraProvider>
  );
}

export default App;
