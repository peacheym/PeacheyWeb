import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import '../App.css';
import headshot from './matt_headshot.jpeg';

class About extends Component {
  render() {
      return <Container className="about" id="about">
        <Row>
            <Col md>
                <Image className="headshot" src={headshot} rounded />
            </Col>
            <Col md>
                <h2>About Me</h2>
                <p>I am a third year student at Dalhousie University in Halifax, Nova Scotia. I am currently studying Computer Science and have a particular interest in the Internet of Things (IOT). I am also interested in learning more about Machine Learning and Artificial Intelligence as well as software development as a whole.</p>
                <p>Through my studies I have developed a strong understanding of the fundamentals of Computer Science such as data structures and algorithims, as well as object oriented programming techniques. I have also recently enjoyed learning about web development and the interesting frameworks and technologies built around it.</p>
            </Col>
        </Row>
      </Container>
  }
}
export default About; // Don’t forget to use export default!
