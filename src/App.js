import React from "react";
import { ChakraProvider, theme, Text } from "@chakra-ui/react";

import Footer from "./Footer";
import NavBar from "./NavBar";
import Hero from "./Hero";
import LatestResearch from "./LatestReserach";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Hero />
      <LatestResearch />
      <Text mb="100px" textAlign="center" id="contact">
        More coming soon...
      </Text>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
