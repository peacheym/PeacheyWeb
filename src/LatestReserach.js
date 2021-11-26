import React from "react";

import {
  Box,
  Heading,
  Divider,
  chakra,
  Flex,
  Link,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

export default function LatestResearch() {
  return (
    <Box maxW={"7xl"} pt="25px" m="100px auto" id="research">
      <Heading
        as="h1"
        px={{ base: "10px", lg: 0 }}
        fontSize={{ base: "24px", md: "40px" }}
      >
        Latest Research
      </Heading>
      <Divider marginTop="5" />
      <Flex px={20} w="full">
        <Box
          bg={useColorModeValue("white", "gray.800")}
          px={8}
          py={20}
          mx="auto"
        >
          <SimpleGrid
            alignItems="start"
            columns={{ base: 1, md: 2 }}
            mb={24}
            spacingY={{ base: 10, md: 32 }}
            spacingX={{ base: 10, md: 24 }}
          >
            <Box>
              <chakra.h2
                mb={4}
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{ base: "center", md: "left" }}
                color={useColorModeValue("gray.900", "gray.400")}
                lineHeight={{ md: "shorter" }}
              >
                MoveBox: Democratizing MoCap for the Microsoft Rocketbox Avatar
                Library
              </chakra.h2>{" "}
              <chakra.h4
                mb={5}
                textAlign={{ base: "center", sm: "left" }}
                fontSize={{ md: "md" }}
              >
                2020 IEEE Artificial Intelligence / Virtual Reality{" "}
              </chakra.h4>
              <chakra.p
                mb={5}
                textAlign={{ base: "center", sm: "left" }}
                color={useColorModeValue("gray.600", "gray.400")}
                fontSize={{ md: "lg" }}
              >
                Mar Gonzalez-Franco, Zelia Egan,{" "}
                <strong>Matthew Peachey</strong>, Angus Antley, Tanmay
                Randhavane, Payod Panda, Yaying Zhang, Cheng Yao Wang, Derek F.
                Reilly, Tabitha C Peck, Andrea Stevenson Won, Anthony Steed and
                Eyal Ofek.
              </chakra.p>
              <Link
                color={useColorModeValue("blue.400", "gray.200")}
                href="https://www.microsoft.com/en-us/research/publication/movebox-democratizing-mocap-for-the-microsoft-rocketbox-avatar-library/"
                isExternal
              >
                View Paper
              </Link>
              {" | "}
              <Link
                color={useColorModeValue("blue.400", "gray.200")}
                href="https://github.com/microsoft/MoveBox-for-Microsoft-Rocketbox"
                isExternal
              >
                View Github
              </Link>
            </Box>
            <Box
              w="full"
              h="full"
              py={48}
              bg={useColorModeValue("gray.200", "gray.700")}
              borderRadius="10px"
            ></Box>
          </SimpleGrid>
          <SimpleGrid
            alignItems="center"
            columns={{ base: 1, md: 2 }}
            flexDirection="column-reverse"
            mb={24}
            spacingY={{ base: 10, md: 32 }}
            spacingX={{ base: 10, md: 24 }}
          >
            <Box order={{ base: "none", md: 2 }}>
              <chakra.h2
                mb={4}
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{ base: "center", md: "left" }}
                color={useColorModeValue("gray.900", "gray.400")}
                lineHeight={{ md: "shorter" }}
              >
                Story CreatAR: a Toolkit for Spatially-Adaptive AR Storytelling
              </chakra.h2>
              <chakra.h4
                mb={5}
                textAlign={{ base: "center", sm: "left" }}
                fontSize={{ md: "md" }}
              >
                2021 IEEE Virtual Reality
              </chakra.h4>
              <chakra.p
                mb={5}
                textAlign={{ base: "center", sm: "left" }}
                color={useColorModeValue("gray.600", "gray.400")}
                fontSize={{ md: "lg" }}
              >
                Abbey Singh, Ramanpreet Kaur, Peter Haltner,{" "}
                <strong>Matthew Peachey</strong>, Mar Gonzalez-Franco, Joseph
                Malloch and Derek Reilly
              </chakra.p>
              <Link
                color={useColorModeValue("blue.400", "gray.200")}
                href="http://ieeevr.org/2021/"
                isExternal
              >
                View Paper
              </Link>
            </Box>
            <Box
              w="full"
              h="full"
              py={48}
              bg={useColorModeValue("gray.200", "gray.700")}
              borderRadius="10px"
            ></Box>
          </SimpleGrid>
          <SimpleGrid
            alignItems="start"
            columns={{ base: 1, md: 2 }}
            mb={24}
            spacingY={{ base: 10, md: 32 }}
            spacingX={{ base: 10, md: 24 }}
          >
            <Box>
              <chakra.h2
                mb={4}
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{ base: "center", md: "left" }}
                color={useColorModeValue("gray.900", "gray.400")}
                lineHeight={{ md: "shorter" }}
              >
                Using Space Syntax to Enable Walkable AR Experiences
              </chakra.h2>
              <chakra.h4
                mb={5}
                textAlign={{ base: "center", sm: "left" }}
                // color={useColorModeValue("gray.600", "gray.400")}
                fontSize={{ md: "md" }}
              >
                2020 IEEE International Symposium on Mixed and Augmented Reality
              </chakra.h4>
              <chakra.p
                mb={5}
                textAlign={{ base: "center", sm: "left" }}
                color={useColorModeValue("gray.600", "gray.400")}
                fontSize={{ md: "lg" }}
              >
                Derek Reilly, Joseph Malloch, Abbey Singh, Issac Fresia, Shivam
                Mahajan, Jake Moore and <strong>Matthew Peachey</strong>
              </chakra.p>

              <Link
                color={useColorModeValue("blue.400", "gray.200")}
                href="https://ieeexplore.ieee.org/document/9288424"
                isExternal
              >
                View Paper
              </Link>
            </Box>
            <Box
              w="full"
              h="full"
              py={48}
              bg={useColorModeValue("gray.200", "gray.700")}
              borderRadius="10px"
            ></Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
}
