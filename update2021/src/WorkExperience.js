import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import { Text, Box, Center, SimpleGrid } from '@chakra-ui/react';

export default function WorkExperience() {
  return (
    <SimpleGrid columns={2} p="50">
      <Center>
        <Box>
          <Center>
            <Text fontSize="2rem" p="15px">
              Work Experience
            </Text>
          </Center>
          <Timeline>
            <TimelineItem>
              <TimelineOppositeContent>
                <Text color="textSecondary">Summer 2020</Text>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Text>GEM Lab (USRA)</Text>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Text color="textSecondary">Winter 2020</Text>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Text>Communications Security Establishment (CSE)</Text>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Text color="textSecondary">Summer 2019</Text>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                {/* <TimelineConnector /> */}
              </TimelineSeparator>
              <TimelineContent>
                <Text>Ultra Electronics Maritime Systems</Text>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Center>

      <Center>
        <Box>
          <Center>
            <Text fontSize="2rem" p="15px">
              Volunteer Experience
            </Text>
          </Center>
          <Timeline>
            <TimelineItem>
              <TimelineOppositeContent>
                <Text color="textSecondary">Summer 2020 - Present</Text>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Text>
                  Web Developer (Faculty of Health, Dalhousie University)
                </Text>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Text color="textSecondary">Spring/Summer 2019</Text>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Text>Web Developer (FUNSports)</Text>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Text color="textSecondary">Fall 2018</Text>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                {/* <TimelineConnector /> */}
              </TimelineSeparator>
              <TimelineContent>
                <Text>Peer Mentor (WiTs, Dalhousie University)</Text>
              </TimelineContent>
            </TimelineItem>
          </Timeline>{' '}
        </Box>
      </Center>
    </SimpleGrid>
  );
}
