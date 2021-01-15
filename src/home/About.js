import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../App.css";
import headshot from "./matt_headshot.jpeg";

class About extends Component {
  render() {
    return (
      <Container className="about" id="about">
        <Row>
          <Col md>
            <Image className="headshot" src={headshot} rounded />
          </Col>
          <Col md>
            <h2>About Me</h2>
            <p>
              I am a fourth year student at Dalhousie University in Halifax,
              Nova Scotia. I am currently studying Computer Science and have a
              particular interest in Computer Vision as well as the Internet of
              Things (IOT).
            </p>
            <p>
              Through my studies I have developed a strong understanding of the
              fundamentals of Computer Science such as data structures,
              algorithms, and machine learning. I have also recently enjoyed
              learning about web development and the interesting frameworks and
              technologies built around it.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default About; // Don’t forget to use export default!
