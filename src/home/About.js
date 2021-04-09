import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../App.css";
import headshot from "./headshot.jpg";

export default function About() {
  return (
    <Container className="about" id="about">
      <Row>
        <Col md>
          <Image className="headshot" src={headshot} rounded />
        </Col>
        <Col md>
          <h2>About Me</h2>
          <p>
            I am a fourth year student at Dalhousie University in Halifax, Nova
            Scotia. I am currently studying Computer Science and have a
            particular interest in Computer Vision / Machine Learning as well as 
            Human Computer Interaction and Modern Web Development Technologies.
          </p>

          <p>
            I have completed three Co-op placements where I worked both as a
            software developer as well as a researcher in a Lab. Though each of
            these experiences differed in significant ways, I learned countless
            valuable lessons at each of them that have shaped the foundation of
            my computing knowledge and interests.
          </p>

          <p>
            Through my studies I have developed a strong understanding of the
            fundamentals of Computer Science such as machine learning, data
            structures &amp; algorithms, and networks. I have also enjoyed
            learning about modern web technologies such as React, GraphQL, and
            several other interesting frameworks and technologies in that area.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
