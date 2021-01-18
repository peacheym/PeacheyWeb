import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import "../App.css";

class Research extends Component {
  render() {
    return (
      <Container>
        <h1 className="exph1">Selected Publications</h1>
        <Row>Test paper #1.</Row>
        <Row>Test paper #2.</Row>
        <Row>Test paper #3.</Row>
      </Container>
    );
  }
}
export default Research; // Don’t forget to use export default!
