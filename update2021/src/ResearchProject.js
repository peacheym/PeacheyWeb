import React from 'react';
import {
  Box,
  Image,
  Badge,
  LinkBox,
  LinkOverlay,
  Skeleton,
} from '@chakra-ui/react';

function generateBadgeColor(badge) {
  switch (badge) {
    case 'AR / VR':
      return 'green';
    case 'CV':
      return 'blue';
    case 'Space Syntax':
      return 'pink';
    default:
      return 'purple';
  }
}

function ResearchProject(props) {
  return (
    <LinkBox maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Skeleton
        isLoaded={props.isLoaded}
        startColor="#4b6cb7"
        endColor=" #1E2B49"
      >
        <Image src={props.imgsrc} alt={props.alttext} />
      </Skeleton>

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          {props.badges.map(badge => {
            return (
              <Badge
                borderRadius="full"
                px="2"
                colorScheme={generateBadgeColor(badge)}
                mr="2"
              >
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
          <LinkOverlay href={props.url}>{props.title}</LinkOverlay>
        </Box>
        <Box>
          {props.venue}
          <Box as="span" color="gray.600" fontSize="sm">
            {' '}
            | {props.date}
          </Box>
        </Box>
      </Box>
    </LinkBox>
  );
}

export default ResearchProject;
