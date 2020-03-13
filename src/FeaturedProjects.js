import React, { Component } from 'react';
import './App.css';
import { Card, Button, Container, Row, Col} from 'react-bootstrap';
import corg_img from './corg.png';
import gj_2018 from './gamejam.png';
import personal from './personal.png';

class FeaturedProjects extends Component {
  render() {
      return <Container>
      <h1 className="fp">Featured Projects</h1>
          <Row>
            <Col md className="fpcard">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={corg_img}/>
                    <Card.Body>
                        <Card.Title><strong>CorgPredicts</strong></Card.Title>
                        <Card.Text>
                            corgpredicts.com is a website that gives information about the statistical model used to predict a winning bracket for the 2020 march madness tournament.
                        </Card.Text>
                        <Button variant="primary" href="https://github.com/peacheym/CorgPredicts">Read more on GitHub</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col md className="fpcard">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={gj_2018}/>
                    <Card.Body>
                        <Card.Title><strong>Game Jam (Fall 2018)</strong></Card.Title>
                        <Card.Text>
                            A small game made with P5.js and P5.play that recreates a space invader vibe with a few added twists.
                        </Card.Text>
                        <Button variant="primary" href="https://github.com/peacheym/GameJamFall2018">Read more on GitHub</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col md className="fpcard">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={personal}/>
                    <Card.Body>
                        <Card.Title><strong>Personal Website</strong></Card.Title>
                        <Card.Text>
                            This personal website was built with React.js and Node.js. It was built without the use of templates, and designed by me.
                        </Card.Text>
                        <Button variant="primary" href="https://github.com/peacheym/PeacheyWeb">Read more on GitHub</Button>
                    </Card.Body>
                </Card>
            </Col>

          </Row>
        </Container>
  }
}
export default FeaturedProjects; // Don’t forget to use export default!
