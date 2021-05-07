import React from 'react'
import { Text, SimpleGrid, Center, Button, Box, Link } from '@chakra-ui/react'
import ResearchProject from './ResearchProject'

export default function Research() {
  return (
    <Box mt="100px" id="Research">
      <Center>
        <Text fontSize="40px" mb="30px">
          Research Projects
        </Text>
      </Center>
      <Center>
        <Text p="0 150px">
          Thanks to my interest in academic research, I have long aspired to
          pursue graduate studies following the completion of my Bachelor of
          Computer Science degree. In order to gain experience as an independent
          researcher, I have actively pursued research opportunities during my
          undergraduate degree. I have been fortunate enough to work with the
          GEM Lab as both a USRA recipient as well as an honours student. I have
          been working with various teams at GEM Lab since early 2020, and have
          contributed to several exciting and multi-disciplinary projects in
          that time.
        </Text>
      </Center>
      <Center mt="20px">
        <Text p="0 150px">
          I am currently working under the supervision of{' '}
          <Link
            color="#4b6cb7"
            href="https://www.dal.ca/faculty/computerscience/faculty-staff/joseph-malloch.html"
          >
            Dr. Joseph Malloch
          </Link>{' '}
          towards the completion of an undergraduate honours thesis. For this
          project, we are exploring computer vision based hand-tracking
          technologies and how to best represent the data they produce. We are
          not looking for a singular best way, but rather looking to represent
          the data in such a manner that as many use cases can be easily
          implemented with one structure. This work is currently ongoing, and
          this page will be updated appropriately as progress is made. A full
          list of projects that I have collaborated on is found below.
        </Text>
      </Center>

      <SimpleGrid columns={[1, 1, 3]} p="50">
        <ResearchProject
          imgsrc="https://www.microsoft.com/en-us/research/uploads/prod/2020/10/Picture1.png"
          alttext="Header Img"
          badges={['AR / VR', 'CV']}
          title="MoveBox: Democratizing MoCap for the Microsoft Rocketbox Avatar Library"
          venue="IEEE AIVR"
          date="December 2020"
          url="#"
          isLoaded={true}
        />
        <ResearchProject
          imgsrc=""
          alttext="Header Img"
          badges={['AR / VR', 'Space Syntax', 'Story Telling']}
          title="Story CreatAR: a Toolkit for Spatially-Adaptive AR
          Storytelling"
          venue="IEEE VR"
          date="March 2021"
          url="#"
          isLoaded={false}
        />
        <ResearchProject
          imgsrc=""
          alttext="Header Img"
          badges={['AR / VR', 'Space Syntax']}
          title="Using Space Syntax to Enable Walkable AR Experiences"
          venue="IEEE ISMAR"
          date="November 2020"
          url="#"
          isLoaded={false}
        />
      </SimpleGrid>
      <Center>
        <Button colorScheme="blue" variant="ghost">
          See More
        </Button>
      </Center>
    </Box>
  )
}
