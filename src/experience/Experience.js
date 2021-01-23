import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  Jumbotron,
} from "react-bootstrap";
import "../App.css";
import goc from "./goc.png";
import ultra from "./ultra.png";
import dal from "./dal.jpg";
import gem from "./gem.png";

export default function Experience() {
  return (
    <>
      <Jumbotron fluid className="grad exph1">
        <h1>Work Experience</h1>
      </Jumbotron>
      <Container>
        <Row className="expRow" style={{ marginBottom: "50px" }}>
          <Col md={4}>
            <Image
              style={{ width: "60%", margin: "auto auto" }}
              src={gem}
              alt="Image"
              rounded
            />
          </Col>
          <Col md>
            <h2>Undergraduate Research Assistant</h2>
            <h3 className="employer">GEM Lab</h3>
            <p>
              Through funding provided by a undergraduate student research award
              (USRA), I conducted research in the GEM Lab on the StoryCreatAR
              project. This project's goal was to utilize space syntax (a set of
              measurements about a physical space, originally defined in the
              study of architecture) to place virtual objects in meaningful
              locations while constructing augmented reality narratives.
            </p>
            <p>
              I also had the pleasure of collaborating with the EPIC team from
              Microsoft Research on their open-source project, MoveBox. The
              MoveBox project is a tool kit that aims to provide accessible
              motion capture software for researchers and developers that may
              have otherwise been limited by the cost of professional setups.
              MoveBox uses a depth sensing camera such as Microsoft Kinect V2 or
              Azure Kinect to track a person's real life movement, and project
              that information onto a digital avatar. For more information, feel
              free to read the publication as linked on the 'research' tab of
              this website.
            </p>
            <ListGroup className="listGroup" style={{ width: "70%" }}>
              <ListGroup.Item variant="primary">
                <strong>Tools used</strong>
              </ListGroup.Item>
              <ListGroup.Item action href="https://unity.com">
                Unity (C#)
              </ListGroup.Item>
              <ListGroup.Item action href="https://www.overleaf.com/">
                Overleaf
              </ListGroup.Item>
              <ListGroup.Item action href="https://developer.oculus.com/quest/">
                Oculus Quest SDK
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="https://developer.microsoft.com/en-us/windows/kinect/"
              >
                Microsoft Kinect SDK
              </ListGroup.Item>
            </ListGroup>
            <h5 className="workterm">April 2020 - August 2020</h5>
          </Col>
        </Row>
        <hr style={{ width: "60%", marginBottom: "100px" }} />
        <Row className="expRow" style={{ marginTop: "100px" }}>
          <Col md={4}>
            <Image
              style={{ width: "60%", margin: "auto auto" }}
              src={goc}
              alt="Image"
              rounded
            />
          </Col>
          <Col md>
            <h2>Cyber Developer (Co-op)</h2>
            <h3 className="employer">Government of Canada</h3>
            <p>
              As a Cyber Developer (Co-op) at the Government of Canada, I worked
              on a small team of developers that together implemented a
              web-application that allowed organizations to inspect their email
              domain security profile
            </p>
            <p>
              During this work term, I was able to learn many new programming
              principles and industry tools. I was also able to see the entire
              software development life cycle of our project, from inital
              planning to deployment.
            </p>
            <ListGroup className="listGroup" style={{ width: "70%" }}>
              <ListGroup.Item variant="primary">
                <strong>Tools used</strong>
              </ListGroup.Item>
              <ListGroup.Item action href="https://github.com">
                Git / Github
              </ListGroup.Item>
              <ListGroup.Item action href="https://www.python.org">
                Python 3
              </ListGroup.Item>
              <ListGroup.Item action href="https://reactjs.org">
                React.js
              </ListGroup.Item>
              <ListGroup.Item action href="https://graphql.org">
                GraphQL
              </ListGroup.Item>
            </ListGroup>
            <h5 className="workterm">January 2020 - August 2020</h5>
          </Col>
        </Row>
        <hr style={{ width: "60%", marginBottom: "100px" }} />
        <Row className="expRow">
          <Col md={4}>
            <Image
              style={{ width: "60%", margin: "auto auto" }}
              src={ultra}
              alt="Image"
              rounded
            />
          </Col>
          <Col md={8}>
            <h2>Software Developer (Co-op)</h2>
            <h3 className="employer">Ultra Electronics Maratime Systems</h3>
            <p>
              As a software developer (co-op) at Ultra Electronics Maritime
              Systems I worked on an agile team to implement features for UEMSs
              suite of services using Java, C++, and Python. Being my first work
              term, this valuable experience taught me the fundamentals of
              professional software development.{" "}
            </p>
            <p>
              Thank you to the team at UEMS for having me as a Co-op student, I
              really enjoyed my time working with you all!
            </p>
            <ListGroup className="listGroup" style={{ width: "70%" }}>
              <ListGroup.Item variant="primary">
                <strong>Tools used</strong>
              </ListGroup.Item>
              <ListGroup.Item action href="https://bitbucket.org/product">
                Git / BitBucket
              </ListGroup.Item>
              <ListGroup.Item action href="https://java.com/">
                Java
              </ListGroup.Item>
              <ListGroup.Item action href="http://www.cplusplus.com/">
                C++
              </ListGroup.Item>
              <ListGroup.Item action href="https://www.python.org">
                Python
              </ListGroup.Item>
            </ListGroup>
            <h5 className="workterm">May 2019 - August 2019</h5>
          </Col>
        </Row>
        <hr style={{ width: "60%", marginBottom: "100px" }} />
        <Row className="expRow">
          <Col md={4}>
            <Image
              className="dalLogo"
              style={{ width: "60%", margin: "auto auto" }}
              src={dal}
              alt="Image"
              rounded
            />
          </Col>
          <Col md={8}>
            <h2>Teaching Assistant</h2>
            <h3 className="employer">Dalhousie University</h3>
            <p>
              I have been a teaching assistant for CSCI1110 (Intro To Computer
              Science), CSCI1170 (Intro to Web Development), and CSCI2170 (Intro
              to Server Side Scripting). In these roles I am responsible for
              giving tutorial presentations on class material to groups of 50+
              students as well as holding weekly office hours to meet with
              students individually. I also work in the class lab where I
              present weekly activities and provide assistance to students when
              required. This experience forces me to communicate important
              concepts in a way that my fellow students are able to comprehend.
            </p>
            <p>
              I value this experience as it is a well known fact that teaching
              somebody is the best way to ensure that you have mastered the
              material yourself. Futhermore, my responsibilites as a TA also
              include marking weekly assignments as well as proctoring tests
              throughout each semester.
            </p>

            <h5 className="workterm">September 2018 - December 2019</h5>
          </Col>
        </Row>
        <hr style={{ width: "60%", marginBottom: "100px" }} />
      </Container>
    </>
  );
}
