import { Timeline as TL, Event } from "react-timeline-scribble";
import { Box, Heading, Divider } from "@chakra-ui/layout";

export default function Timeline() {
  return (
    <Box
      maxW={"7xl"}
      py="50px"
      m="0px auto"
      mb={{ base: "0px", md: "50px" }}
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
          I am currently pursuing a PhD in Computer Science at Dalhousie
          University. As a member of the GEM Lab, I have worked on projects
          involving Human Computer Interaction, Augmented &amp; Virtual Reality,
          and more. I have also collaborated on projects with other faculties at
          Dalhousie as well as external research groups such as MSR.
          <br />
          <br />I am excited to collaborate on projects involving HCI, ML, DMIs
          and other topics, so please get in touch!
        </Event>
        <Event
          interval={"2017 – 2021"}
          title={"Bachelor of Computer Science"}
          subtitle={"Dalhousie University"}
        >
          I graduated from Dalhousie with a Bachelor of Computer Science (First
          Class Honours) in 2021. I also earned a certificate in Communications
          Technology &amp; Cyber Security during my degree. My Classwork
          included topics such as Machine Learning, Network Computing, Cloud
          Computing and more!
          <br />
          <br />
          The title of my Honours Thesis was "Effectively and Efficiently
          Representing Hand-Tracking Data Using Named Signal Instances" and my
          supervisor was Dr. Joseph Malloch.
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
