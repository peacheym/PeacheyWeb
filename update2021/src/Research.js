import React from 'react';
import { Text, SimpleGrid, Center } from '@chakra-ui/react';
import ResearchProject from './ResearchProject';

export default function Research() {
  return (
    <>
      <Center>
        <Text fontSize="40px">Research Projects</Text>
      </Center>
      <Center>
        <Text>
          Since 2020 I have been a member of the GEM Lab within Dalhousie's
          Faculty of Computer Science. In this time I have had the opportunity
          to work on several interesting research projects.
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
    </>
  );
}
