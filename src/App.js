import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";

import About from "./About";
import Research from "./Research";
import Experience from "./Experience";
import Footer from "./Footer";
import Construction from "./Construction";
import NavBar from "./NavBar";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <About />
      <Research />
      <Experience />
      <Footer />
      {/* <Construction /> */}
    </ChakraProvider>
  );
}

export default App;
