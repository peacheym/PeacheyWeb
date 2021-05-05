import React from 'react';
import { Box, Image, Badge } from '@chakra-ui/react';

function ResearchProject() {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        src={
          'https://www.microsoft.com/en-us/research/uploads/prod/2020/10/Picture1.png'
        }
        alt={property.imageAlt}
      />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="pink">
            AR/VR
          </Badge>
          <Badge borderRadius="full" px="2" colorScheme="blue" ml="2">
            CV
          </Badge>
          <Badge borderRadius="full" px="2" colorScheme="teal" ml="2">
            test
          </Badge>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          //   isTruncated
        >
          {
            'MoveBox: Democratizing MoCap for the Microsoft Rocketbox Avatar Library'
          }
        </Box>
        <Box>
          IEEE AIVR 2020
          <Box as="span" color="gray.600" fontSize="sm">
            {' '}
            | December 2020
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ResearchProject;
