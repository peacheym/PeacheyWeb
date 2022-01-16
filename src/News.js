import {
  Box,
  Heading,
  Divider,
  List,
  ListItem,
  Text,
  Link,
  ListIcon,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Timeline() {
  return (
    <Box
      maxW={"7xl"}
      py="50px"
      px={{ base: "30px", md: 0 }}
      m="0px auto"
      mb={{ base: "0px", md: "50px" }}
      id="experience"
    >
      <Heading
        as="h2"
        px={{ base: "10px", lg: 0 }}
        fontSize={{ base: "22px", md: "36px" }}
        textAlign={{ base: "center", md: "left" }}
      >
        In the News
      </Heading>
      <Divider marginTop="5" marginBottom="10" />
      <List spacing={3}>
        <ListItem>
          <ListIcon
            as={ExternalLinkIcon}
            fontSize={"22px"}
            color="orange.500"
          />
          <Text fontSize={"20px"} display={"inline"}>
            <Link
              isExternal
              fontSize={"22px"}
              href="https://www.cbc.ca/news/canada/nova-scotia/students-float-creative-ideas-for-future-bedford-ferry-1.6244736"
            >
              Students float creative ideas for future Bedford ferry
            </Link>{" "}
            | CBC News (2021)
          </Text>
        </ListItem>
        <ListItem>
          {" "}
          <ListIcon
            as={ExternalLinkIcon}
            fontSize={"22px"}
            color="orange.500"
          />
          <Text fontSize={"20px"} display={"inline"}>
            <Link
              isExternal
              fontSize={"22px"}
              href="https://www.dal.ca/faculty/computerscience/news-events/news/2020/11/02/new_covid_19_screening_app_for_health_students_born_from_necessity_and_collaboration.html?fbclid=IwAR2r8ygLq_woBwngySTSSqMwAmBrIC24Rdrjb4eP5Vz6xwYP6B9dNbZm5qI"
            >
              New COVID‑19 screening app for Health students born from necessity
              and collaboration{" "}
            </Link>{" "}
            | Dalhousie News (2020)
          </Text>
        </ListItem>{" "}
        <ListItem>
          {" "}
          <ListIcon
            as={ExternalLinkIcon}
            fontSize={"22px"}
            color="orange.500"
          />
          <Text fontSize={"20px"} display={"inline"}>
            <Link
              isExternal
              fontSize={"22px"}
              href="https://www.dal.ca/faculty/computerscience/news-events/news/2020/04/24/dal_students_takes_part_in_innovative_government_co_op_program.html?fbclid=IwAR0jFXrOUovqzjj2Tf3PFZsB1DyBI6BX0nJcm1cxX6YeFJV1eZNP0leHfp4"
            >
              Dal students takes part in innovative Government co‑op program
            </Link>{" "}
            | Dalhousie News (2020)
          </Text>
        </ListItem>{" "}
        {/* <ListItem>
          <Text fontSize={"20px"}>
            <Link
              isExternal
              fontSize={"22px"}
              href=""
            >
              <TITLE HERE>
            </Link>{" "}
            | <PAPER HERE>
          </Text>
        </ListItem> */}
      </List>
    </Box>
  );
}
