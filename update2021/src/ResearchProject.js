import React from 'react';
import { Box, Image, Badge, LinkBox, LinkOverlay } from '@chakra-ui/react';

function ResearchProject(props) {
  return (
    <LinkBox maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={props.imgsrc} alt={props.alt_text} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          {props.badges.map(badge => {
            return (
              <Badge borderRadius="full" px="2" colorScheme="blue" mr="2">
                {badge}
              </Badge>
            );
          })}
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          //   isTruncated
        >
          <LinkOverlay href="#">
            {
              'MoveBox: Democratizing MoCap for the Microsoft Rocketbox Avatar Library'
            }
          </LinkOverlay>
        </Box>
        <Box>
          IEEE AIVR 2020
          <Box as="span" color="gray.600" fontSize="sm">
            {' '}
            | December 2020
          </Box>
        </Box>
      </Box>
    </LinkBox>
  );
}

export default ResearchProject;
