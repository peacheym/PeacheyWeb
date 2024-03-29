import React from "react";

import {
  Box,
  Heading,
  Divider,
  chakra,
  Flex,
  Link,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import movebox from "./images/Movebox_Image.png";
import scar from "./images/SCAR_Image.jpg";
import walkable from "./images/Walkable_Image.png";

export default function LatestResearch() {
  return (
    <Box bg={useColorModeValue("#F9FAFB", "gray.600")}>
      <Box
        maxW={"7xl"}
        pt={{ base: "0px", md: "50px" }}
        m="0px auto"
        id="research"
      >
        <Heading
          as="h1"
          px={{ base: "10px", lg: 0 }}
          fontSize={{ base: "24px", md: "36px" }}
          textAlign={{ base: "center", md: "left" }}
        >
          Latest Research
        </Heading>
        <Divider marginTop="5" />
        <Flex px={{ base: "30px", md: 20 }} w="full">
          <Box
            bg={useColorModeValue("#F9FAFB", "gray.600")}
            px={8}
            py={{ base: 5, md: 20 }}
            mx="auto"
          >
            <SimpleGrid
              alignItems="start"
              columns={{ base: 1, md: 2 }}
              mb={{ base: 10, md: 24 }}
              spacingY={{ base: 10, md: 32 }}
              spacingX={{ base: 10, md: 24 }}
            >
              <Box>
                <chakra.h2
                  mb={4}
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="extrabold"
                  letterSpacing="tight"
                  color={useColorModeValue("gray.900", "gray.400")}
                  lineHeight={{ md: "shorter" }}
                >
                  MoveBox: Democratizing MoCap for the Microsoft Rocketbox
                  Avatar Library
                </chakra.h2>{" "}
                <chakra.h4 mb={5} fontSize={{ md: "md" }}>
                  2020 IEEE Artificial Intelligence / Virtual Reality{" "}
                </chakra.h4>
                <chakra.p
                  mb={5}
                  color={useColorModeValue("gray.600", "gray.400")}
                  fontSize={{ md: "md" }}
                >
                  Mar Gonzalez-Franco, Zelia Egan,{" "}
                  <strong> Matthew Peachey</strong>, Angus Antley, Tanmay
                  Randhavane, Payod Panda, Yaying Zhang, Cheng Yao Wang, Derek
                  F. Reilly, Tabitha C Peck, Andrea Stevenson Won, Anthony Steed
                  and Eyal Ofek.
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
              <Image
                alt={"Movebox Image"}
                align={"center"}
                border={useColorModeValue("gray.200", "gray.700")}
                borderRadius="10px"
                h="80%"
                src={movebox}
                display={{ base: "none", md: "block" }}
              />
            </SimpleGrid>
            <SimpleGrid
              alignItems="center"
              columns={{ base: 1, md: 2 }}
              flexDirection="column-reverse"
              mb={{ base: 10, md: 24 }}
              spacingY={{ base: 10, md: 32 }}
              spacingX={{ base: 10, md: 24 }}
            >
              <Box order={{ base: "none", md: 2 }}>
                <chakra.h2
                  mb={4}
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="extrabold"
                  letterSpacing="tight"
                  color={useColorModeValue("gray.900", "gray.400")}
                  lineHeight={{ md: "shorter" }}
                >
                  Story CreatAR: a Toolkit for Spatially-Adaptive AR
                  Storytelling
                </chakra.h2>
                <chakra.h4 mb={5} fontSize={{ md: "md" }}>
                  2021 IEEE Virtual Reality
                </chakra.h4>
                <chakra.p
                  mb={5}
                  color={useColorModeValue("gray.600", "gray.400")}
                  fontSize={{ md: "md" }}
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
              <Image
                alt={"Story Creat AR Image"}
                align={"center"}
                border={useColorModeValue("gray.200", "gray.700")}
                borderRadius="10px"
                h="80%"
                src={scar}
                display={{ base: "none", md: "block" }}
              />
            </SimpleGrid>
            <SimpleGrid
              alignItems="start"
              columns={{ base: 1, md: 2 }}
              mb={{ base: 10, md: 24 }}
              spacingY={{ base: 10, md: 32 }}
              spacingX={{ base: 10, md: 24 }}
            >
              <Box>
                <chakra.h2
                  mb={4}
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="extrabold"
                  letterSpacing="tight"
                  color={useColorModeValue("gray.900", "gray.400")}
                  lineHeight={{ md: "shorter" }}
                >
                  Using Space Syntax to Enable Walkable AR Experiences
                </chakra.h2>
                <chakra.h4 mb={5} fontSize={{ md: "md" }}>
                  2020 IEEE International Symposium on Mixed and Augmented
                  Reality
                </chakra.h4>
                <chakra.p
                  mb={5}
                  color={useColorModeValue("gray.600", "gray.400")}
                  fontSize={{ md: "md" }}
                >
                  Derek Reilly, Joseph Malloch, Abbey Singh, Issac Fresia,
                  Shivam Mahajan, Jake Moore and{" "}
                  <strong>Matthew Peachey</strong>
                </chakra.p>

                <Link
                  color={useColorModeValue("blue.400", "gray.200")}
                  href="https://ieeexplore.ieee.org/document/9288424"
                  isExternal
                >
                  View Paper
                </Link>
              </Box>
              <Image
                alt={"Walkable AR Image"}
                align={"center"}
                border={useColorModeValue("gray.200", "gray.700")}
                borderRadius="10px"
                src={walkable}
                h="80%"
                display={{ base: "none", md: "block" }}
              />
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
