import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";

import Header from "./Header";
import About from "./About";
import Research from "./Research";
import Experience from "./Experience";
import Footer from "./Footer";
import Construction from "./Construction";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <About />
      <Research />
      <Experience />
      <Footer />
      {/* <Construction /> */}
    </ChakraProvider>
  );
}

export default App;
