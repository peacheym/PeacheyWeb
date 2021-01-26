import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "../App.css";

export default function ResearchPaper(props) {
  return (
    <Row>
      <Col>
        <Card style={{ border: "none" }}>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {props.venue}
            </Card.Subtitle>
            <Card.Text>{props.authors}</Card.Text>
            <Card.Link href={props.url}>
              {props.preprint ? "Paper Accepted (Pre-print)" : "Link to Paper"}
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
