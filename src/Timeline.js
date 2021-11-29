import { Timeline as TL, Event } from "react-timeline-scribble";
import { Box, Heading, Divider } from "@chakra-ui/layout";

export default function Timeline() {
  return (
    <Box
      maxW={"7xl"}
      pt="25px"
      m="0px auto"
      mb={{ base: "40px", md: "100px" }}
      id="experience"
    >
      <Heading
        as="h1"
        px={{ base: "10px", lg: 0 }}
        fontSize={{ base: "24px", md: "40px" }}
      >
        Education &amp; Experience
      </Heading>
      <Divider marginTop="5" marginBottom="10" />
      <TL>
        <Event
          interval={"2021 – Present"}
          title={"PhD (Computer Science)"}
          subtitle={"Dalhousie University"}
        >
          dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </Event>
        <Event
          interval={"2017 – 2021"}
          title={"Bachelor of Computer Science"}
          subtitle={"Dalhousie University"}
        >
          dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Event>
      </TL>
      <br />
      <br />
      <br />
      <br />
      <TL>
        <Event
          interval={"Winter 2020"}
          title={"Cyber Developer (Co-op)"}
          subtitle={"Government of Canada"}
        >
          As a Cyber Developer (Co-op) at the Government of Canada, I worked on
          a small team of developers that together implemented a web-application
          that allowed organizations to inspect their email domain security
          profile. This project used React, Node, GraphQL, and other modern
          web-technologies.
        </Event>
        <Event
          interval={"Summer 2019"}
          title={"Software Developer (Co-op)"}
          subtitle={"Ultra Electronics Maritime Systems"}
        >
          As a software developer at Ultra Electronics Maritime Systems I worked
          on an agile team to implement features for UEMSs suite of services
          using Java, C++, and Python.
        </Event>
      </TL>
    </Box>
  );
}
