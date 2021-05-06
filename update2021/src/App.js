import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'

import Header from './Header'
import About from './About'
import Research from './Research'
import WorkExperience from './WorkExperience'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <About />
      <Research />
      <WorkExperience />
    </ChakraProvider>
  )
}

export default App
