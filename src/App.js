import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";

import Footer from "./Footer";
import NavBar from "./NavBar";
import Hero from "./Hero";
import LatestResearch from "./LatestResearch";
import Timeline from "./Timeline";
import Contact from "./Contact";
import News from "./News";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Hero />
      <LatestResearch />
      <News />
      <Contact />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
