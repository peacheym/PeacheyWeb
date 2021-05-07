import React from 'react'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import { Text, Box, Center, SimpleGrid } from '@chakra-ui/react'

export default function Experience() {
  return (
    <Box mt="100px" id="Experience">
      <Center>
        <Text fontSize="40px" mb="30px">
          Professional Experience
        </Text>
      </Center>
      <Center>
        <Text p="0 250px">
          Thanks to participating in the Co-Op program as part of my
          undergraduate degree, I have had several great opportunities to work
          in the software development industry. In these roles, I was able to
          apply the skills learned in the classroom while acquiring new skills
          on the job. Each of these experiences have had tremendous impact on my
          journey as a developer and Computer Scientist. I have also worked as a
          researcher, teaching assistant as well as a volunteer with several
          organizations. The volunteer positions have been a great opportunity
          to put my computing skills to good use by helping organizations with
          their projects.
        </Text>
      </Center>

      <SimpleGrid columns={[1, 1, 2]} p="50">
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
            </Timeline>
          </Box>
        </Center>
      </SimpleGrid>
    </Box>
  )
}
