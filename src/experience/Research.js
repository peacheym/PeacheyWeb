import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
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
          to several exciting projects in that time. Please see below for links
          to publications that I have contributed to.
        </p>
        <p>
          I am currently working under the supervision of{" "}
          <a
            padding="0px"
            href="https://www.dal.ca/faculty/computerscience/faculty-staff/joseph-malloch.html"
          >
            Dr. Joseph Malloch
          </a>{" "}
          towards the completion of my honours thesis. For this project, we are
          exploring hand-tracking technologies and how to best represent the
          data they produce. We are not looking for a singular best way, but
          rather looking to represent the data in such a manner that as many use
          cases can be easily implemented with one structure. This work is
          currently ongoing, and this page will be updated as progress is made.
        </p>
        <h2 className="exph2">Selected Publications</h2>
        <Row>
          <p>
            <a
              color="black"
              href="https://www.microsoft.com/en-us/research/publication/movebox-democratizing-mocap-for-the-microsoft-rocketbox-avatar-library/"
            >
              Mar Gonzalez-Franco, Zelia Egan, <strong>Matthew Peachey</strong>,
              Angus Antley, Tanmay Randhavane, Payod Panda, Yaying Zhang, Cheng
              Yao Wang, Derek F. Reilly, Tabitha C Peck, Andrea Stevenson Won,
              Anthony Steed and Eyal Ofek (2020){" "}
              <i>
                "MoveBox: Democratizing MoCap for the Microsoft Rocketbox Avatar
                Library"
              </i>
              . IEEE International Conference on Artificial Intelligence and
              Virtual Reality (AIVR)
            </a>
          </p>
        </Row>
        <br></br>
        <Row>
          <p>
            <a
              color="black"
              href="https://ieeexplore.ieee.org/document/9288424"
            >
              Derek Reilly, Joseph Malloch, Abbey Singh, Issac Fresia, Shivam
              Mahajan, Jake Moore and <strong>Matthew Peachey</strong> (2020)
              <i>“Using Space Syntax to Enable Walkable AR Experiences”</i>.
              IEEE International Symposium on Mixed and Augmented Reality
              (ISMAR)
            </a>
          </p>
        </Row>
        <br></br>
        <Row>
          <p>
            <a color="black" href="https://mattpeachey.ca/research">
              Abbey Singh, Ramanpreet Kaur, Peter Haltner,{" "}
              <strong>Matthew Peachey</strong>, Mar Gonzalez-Franco, Joseph
              Malloch and Derek Reilly (2021){" "}
              <i>
                “Story CreatAR: a Toolkit for Spatially-Adaptive AR
                Storytelling”
              </i>
              . IEEE Virtual Reality
            </a>
          </p>
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
