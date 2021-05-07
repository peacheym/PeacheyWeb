import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { FiLinkedin, FiTwitter, FiGithub, FiMail } from "react-icons/fi";
import "../App.css";

export default function Contact() {
  return (
    <Container>
      <p>You can find me on the following platforms</p>
      <ListGroup horizontal as="ul" style={{ justifyContent: "center" }}>
        <ListGroup.Item as="li">
          <a
            class="icon-class"
            href="https://github.com/peacheym"
            style={{ color: "black", fontSize: "20px", padding: "10px" }}
          >
            <FiGithub />
          </a>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <a
            class="icon-class"
            href="https://www.linkedin.com/in/matt-peachey-02bb11152"
            style={{ color: "black", fontSize: "20px", padding: "10px" }}
          >
            <FiLinkedin />
          </a>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <a
            class="icon-class"
            href="https://twitter.com/mattpeachey3"
            style={{ color: "black", fontSize: "20px", padding: "10px" }}
          >
            <FiTwitter />
          </a>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <a
            class="icon-class"
            href="mailto://peacheym@dal.ca"
            style={{ color: "black", fontSize: "20px", padding: "10px" }}
          >
            <FiMail />
          </a>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
