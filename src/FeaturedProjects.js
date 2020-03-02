import React, { Component } from 'react';
import './App.css';
import { Card, Button, Container, Row, Col} from 'react-bootstrap';
import img from './logo192.png';


class FeaturedProjects extends Component {
  render() {
      return <Container>
      <h1 class="fp">Featured Projects</h1>
          <Row>
            <Col md className="fpcard">
                <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src={img}/>
                    <Card.Body>
                        <Card.Title>Project 1</Card.Title>
                        <Card.Text>
                            Project details coming soon!
                        </Card.Text>
                        <Button variant="primary" href="/projects">Read more</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col md className="fpcard">
                <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src={img}/>
                    <Card.Body>
                        <Card.Title>Project 2</Card.Title>
                        <Card.Text>
                            Project details coming soon!
                        </Card.Text>
                        <Button variant="primary" href="/projects">Read more</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col md className="fpcard">
                <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src={img}/>
                    <Card.Body>
                        <Card.Title>Project 3</Card.Title>
                        <Card.Text>
                            Project details coming soon!
                        </Card.Text>
                        <Button variant="primary" href="/projects">Read more</Button>
                    </Card.Body>
                </Card>
            </Col>

          </Row>
        </Container>
  }
}
export default FeaturedProjects; // Don’t forget to use export default!
