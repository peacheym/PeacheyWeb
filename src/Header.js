import React from 'react'
import { Box, Heading, Flex, Text, Link } from '@chakra-ui/react'

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} ml={6} display="block">
    <Link href={'#' + children}>{children}</Link>
  </Text>
)

const Header = props => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="#4b6cb7"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
          Matt Peachey
        </Heading>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'flex' }}
        width={{ sm: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>About</MenuItems>
        <MenuItems>Research</MenuItems>
        <MenuItems>Experience</MenuItems>
      </Box>
    </Flex>
  )
}

export default Header
