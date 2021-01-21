import React, { Component } from "react";
import { Container, Row, Card } from "react-bootstrap";
import "../App.css";

class Research extends Component {
  render() {
    return (
      <Container>
        <h1 className="exph1">Research Experience</h1>
        <p>
          Thanks to my interest in graduate studies following the completion of
          my Bachelor of Computer Science, I have actively pursued research
          opportunities during my undergraduate degree. I have been fortunate
          enough to work with the GEM Lab since early 2020, and have contributed
          to several exciting projects in that time.
        </p>
        <p>
          I am currently working under the supervision of{" "}
          <a
            padding="0px"
            href="https://www.dal.ca/faculty/computerscience/faculty-staff/joseph-malloch.html"
          >
            Dr. Joseph Malloch
          </a>{" "}
          towards the completion of my undergraduate honours thesis. For this
          project, we are exploring hand-tracking technologies and how to best
          represent the data they produce. We are not looking for a singular
          best way, but rather looking to represent the data in such a manner
          that as many use cases can be easily implemented with one structure.
          This work is currently ongoing, and this page will be updated as
          progress is made.
        </p>
        <p>
          Please see below for links to publications that I have contributed to.
        </p>

        <h2 className="exph2">Selected Publications</h2>
        <Row>
          <Card>
            <Card.Body>
              <Card.Title>
                MoveBox: Democratizing MoCap for the Microsoft Rocketbox Avatar
                Library
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                2020 - IEEE International Conference on Artificial Intelligence
                and Virtual Reality (AIVR)
              </Card.Subtitle>
              <Card.Text>
                Mar Gonzalez-Franco, Zelia Egan,{" "}
                <strong>Matthew Peachey</strong>, Angus Antley, Tanmay
                Randhavane, Payod Panda, Yaying Zhang, Cheng Yao Wang, Derek F.
                Reilly, Tabitha C Peck, Andrea Stevenson Won, Anthony Steed and
                Eyal Ofek.
              </Card.Text>
              <Card.Link href="https://www.microsoft.com/en-us/research/publication/movebox-democratizing-mocap-for-the-microsoft-rocketbox-avatar-library/">
                Link to paper
              </Card.Link>
            </Card.Body>
          </Card>
        </Row>

        <Row>
          <Card>
            <Card.Body>
              <Card.Title>
                Using Space Syntax to Enable Walkable AR Experiences
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                2020 - IEEE International Symposium on Mixed and Augmented
                Reality (ISMAR)
              </Card.Subtitle>
              <Card.Text>
                Derek Reilly, Joseph Malloch, Abbey Singh, Issac Fresia, Shivam
                Mahajan, Jake Moore and <strong>Matthew Peachey</strong>
              </Card.Text>
              <Card.Link href="https://ieeexplore.ieee.org/document/9288424">
                Link to paper
              </Card.Link>
            </Card.Body>
          </Card>
        </Row>

        <Row>
          <Card>
            <Card.Body>
              <Card.Title>
                Story CreatAR: a Toolkit for Spatially-Adaptive AR Storytelling{" "}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                2020 - IEEE International Symposium on Mixed and Augmented
                Reality (ISMAR)
              </Card.Subtitle>
              <Card.Text>
                Abbey Singh, Ramanpreet Kaur, Peter Haltner,{" "}
                <strong>Matthew Peachey</strong>, Mar Gonzalez-Franco, Joseph
                Malloch and Derek Reilly
              </Card.Text>
              <Card.Link href="https://mattpeachey.ca/research">
                Paper accepted (Pre-Print)
              </Card.Link>
            </Card.Body>
          </Card>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Container>
    );
  }
}
export default Research; // Don’t forget to use export default!
