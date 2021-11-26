import React from "react";
import { ChakraProvider, theme, Text } from "@chakra-ui/react";

import Footer from "./Footer";
import NavBar from "./NavBar";
import Hero from "./Hero";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Hero />
      <Text textAlign="center">More coming soon...</Text>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
