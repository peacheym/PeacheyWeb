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
          <h4>
            <a href="https://www.microsoft.com/en-us/research/publication/movebox-democratizing-mocap-for-the-microsoft-rocketbox-avatar-library/">
              MoveBox: Democratizing MoCap for the Microsoft Rocketbox Avatar
              Library
            </a>
          </h4>
          <p>
            Mar Gonzalez-Franco, Zelia Egan, <strong>Matthew Peachey</strong>,
            Angus Antley, Tanmay Randhavane, Payod Panda, Yaying Zhang, Cheng
            Yao Wang, Derek F. Reilly, Tabitha C Peck, Andrea Stevenson Won,
            Anthony Steed and Eyal Ofek.
            <br></br>
            2020 - IEEE International Conference on Artificial Intelligence and
            Virtual Reality (AIVR)
          </p>
        </Row>

        <Row>
          <h4>
            <a href="https://ieeexplore.ieee.org/document/9288424">
              Using Space Syntax to Enable Walkable AR Experiences
            </a>
          </h4>
          <p>
            Derek Reilly, Joseph Malloch, Abbey Singh, Issac Fresia, Shivam
            Mahajan, Jake Moore and <strong>Matthew Peachey</strong>
            <br></br>
            2020 - IEEE International Symposium on Mixed and Augmented Reality
            (ISMAR)
          </p>
        </Row>

        <Row>
          <h4>
            <a href="https://mattpeachey.ca/research">
              Story CreatAR: a Toolkit for Spatially-Adaptive AR Storytelling
            </a>
          </h4>
          <p>
            Abbey Singh, Ramanpreet Kaur, Peter Haltner,{" "}
            <strong>Matthew Peachey</strong>, Mar Gonzalez-Franco, Joseph
            Malloch and Derek Reilly
            <br></br>2021 - IEEE Virtual Reality
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
