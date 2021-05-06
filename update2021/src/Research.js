import React from 'react'
import { Text, SimpleGrid, Center, Button, Box } from '@chakra-ui/react'
import ResearchProject from './ResearchProject'

export default function Research() {
  return (
    <Box mt="100px">
      <Center>
        <Text fontSize="40px">Research Projects</Text>
      </Center>
      <Center>
        <Text p="0 150px">
          Since 2020 I have been a member of the GEM Lab within Dalhousie's
          Faculty of Computer Science. In this time I have had the opportunity
          to work on several interesting research projects.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          feugiat arcu non metus finibus, ornare convallis lacus mollis. Sed sed
          ipsum nec libero ornare bibendum. Aliquam aliquam ac lorem at
          eleifend. Praesent eu feugiat libero, sit amet porttitor justo. Fusce
          in arcu condimentum, rhoncus leo sit amet, dignissim erat. Phasellus
          facilisis nec nunc in condimentum. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Quisque dictum ornare nisl, quis elementum tortor
          tristique eu. Morbi porta lacus nec cursus luctus. Nunc venenatis
          fermentum mi id aliquet. Duis eleifend porttitor ex, vitae tincidunt
          felis tincidunt vitae. Mauris consequat vulputate nulla eget interdum.
          Proin a magna velit. Donec venenatis fringilla mauris.
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
          imgsrc="https://www.microsoft.com/en-us/research/uploads/prod/2020/10/Picture1.png"
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
          imgsrc="https://www.microsoft.com/en-us/research/uploads/prod/2020/10/Picture1.png"
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
