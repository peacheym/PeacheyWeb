import React, { Component } from 'react';
import './App.css';
import { Card, Button, Container, Row, Col} from 'react-bootstrap';
import img from './logo192.png';


class FeaturedProjects extends Component {
  render() {
      return <Container>
      <h1 class="fp">Featured Projects</h1>
          <Row>

            <Col md>
                <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src={img}/>
                    <Card.Body>
                        <Card.Title>Project 1</Card.Title>
                        <Card.Text>
                            {this.props.proj1}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col md>
                <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src={img}/>
                    <Card.Body>
                        <Card.Title>Project 2</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col md>
                <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src={img}/>
                    <Card.Body>
                        <Card.Title>Project 3</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>

          </Row>
        </Container>
  }
}
export default FeaturedProjects; // Don’t forget to use export default!
