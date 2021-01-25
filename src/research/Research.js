import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../App.css";

export default function Research() {
  return (
    <>
      <Container className="research-jumbo grad-header" fluid>
        <Container>
          <h1 className="researchH1">Research Experience</h1>
          <p>
            Thanks to my interest in academic research, I have long aspired to
            pursue graduate studies following the completion of my Bachelor of
            Computer Science degree. In order to gain experience as an
            independent researcher, I have actively pursued research
            opportunities during my undergraduate degree. I have been fortunate
            enough to work with the GEM Lab as both a USRA recipient as well as
            an honours student. I have been working with various teams at GEM
            Lab since early 2020, and have contributed to several exciting and
            multi-disciplinary projects in that time.
          </p>
          <p>
            I am currently working under the supervision of{" "}
            <a
              padding="0px"
              href="https://www.dal.ca/faculty/computerscience/faculty-staff/joseph-malloch.html"
            >
              Dr. Joseph Malloch
            </a>{" "}
            towards the completion of an undergraduate honours thesis. For this
            project, we are exploring computer vision based hand-tracking
            technologies and how to best represent the data they produce. We are
            not looking for a singular best way, but rather looking to represent
            the data in such a manner that as many use cases can be easily
            implemented with one structure. This work is currently ongoing, and
            this page will be updated appropriately as progress is made.
          </p>
          <br />

          <p>
            Please see below for links to publications that I have contributed
            to.
          </p>
        </Container>
        <br /> <br />
        <br />
        <br />
        <br />
      </Container>
      <Container>
        <h2 className="exph2">Selected Publications</h2>
        <Row>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>
                  MoveBox: Democratizing MoCap for the Microsoft Rocketbox
                  Avatar Library
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  2020 - IEEE International Conference on Artificial
                  Intelligence and Virtual Reality (AIVR)
                </Card.Subtitle>
                <Card.Text>
                  Mar Gonzalez-Franco, Zelia Egan,{" "}
                  <strong>Matthew Peachey</strong>, Angus Antley, Tanmay
                  Randhavane, Payod Panda, Yaying Zhang, Cheng Yao Wang, Derek
                  F. Reilly, Tabitha C Peck, Andrea Stevenson Won, Anthony Steed
                  and Eyal Ofek.
                </Card.Text>
                <Card.Link href="https://www.microsoft.com/en-us/research/publication/movebox-democratizing-mocap-for-the-microsoft-rocketbox-avatar-library/">
                  Link to paper
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr style={{ width: "60%", marginTop: "30px", marginBottom: "50px" }} />
        <Row>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>
                  Using Space Syntax to Enable Walkable AR Experiences
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  2020 - IEEE International Symposium on Mixed and Augmented
                  Reality (ISMAR)
                </Card.Subtitle>
                <Card.Text>
                  Derek Reilly, Joseph Malloch, Abbey Singh, Issac Fresia,
                  Shivam Mahajan, Jake Moore and{" "}
                  <strong>Matthew Peachey</strong>
                </Card.Text>
                <Card.Link href="https://ieeexplore.ieee.org/document/9288424">
                  Link to paper
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr style={{ width: "60%", marginTop: "30px", marginBottom: "50px" }} />
        <Row>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>
                  Story CreatAR: a Toolkit for Spatially-Adaptive AR
                  Storytelling
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  2021 - IEEE Virtual Reality (VR)
                </Card.Subtitle>
                <Card.Text>
                  Abbey Singh, Ramanpreet Kaur, Peter Haltner,{" "}
                  <strong>Matthew Peachey</strong>, Mar Gonzalez-Franco, Joseph
                  Malloch and Derek Reilly
                </Card.Text>
                <Card.Link href="http://ieeevr.org/2021/">
                  Paper accepted (Pre-Print)
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Container>
    </>
  );
}
