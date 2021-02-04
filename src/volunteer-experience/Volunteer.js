import React, { Component } from "react";
import { Container, Row, Col, ListGroup, Jumbotron } from "react-bootstrap";
import "../App.css";

class Volunteer extends Component {
  render() {
    return (
      <>
        <Jumbotron fluid className="grad-header">
          <Container>
            <h1 className="exph1">Volunteer Experience</h1>
            <p>
              I have had the opportunity to volunteer with several organizations
              on several different projects.
            </p>
            <p>
              A list of the most recent volunteer positions can be found below.
            </p>
          </Container>
        </Jumbotron>
        <Container>
          <Row className="expRow">
            <Col>
              <h2>Web Developer</h2>
              <h3 className="employer">Dalhousie Faculty of Health</h3>
              <p>
                In September of 2020, as a response to the Covid19 pandemic, I
                created a dynamic web-application for the Faculty of Health that
                allowed them to streamline their contact tracing process. The
                web-app allowed students to confidentially fill out a
                questionnaire and once completed, the application would notify
                them wether or not they were permitted to enter the in-person
                session. Instructors were able to login to a secure section of
                the web-app and download a .csv file for each of their classes
                on a given day in the event that an exposure had occurred.
              </p>
              <p>
                Since the initial deployment of this web-app, the Faculty of
                Health to maintain and update the application as their needs
                evolve.
              </p>

              <ListGroup className="listGroup" style={{ width: "70%" }}>
                <ListGroup.Item variant="primary">
                  <strong>Tools used</strong>
                </ListGroup.Item>
                <ListGroup.Item action href="https://www.nodejs.org">
                  Node.js
                </ListGroup.Item>
                <ListGroup.Item action href="https://graphql.org">
                  GraphQL
                </ListGroup.Item>
                <ListGroup.Item action href="https://reactjs.org">
                  React.js
                </ListGroup.Item>
                <ListGroup.Item action href="https://chakra-ui.com/">
                  ChakraUI
                </ListGroup.Item>
              </ListGroup>

              <h5 className="workterm">September 2020 - Present</h5>
            </Col>
          </Row>
          <hr style={{ width: "60%", marginBottom: "100px" }} />

          <Row className="expRow">
            <Col>
              <h2>Web Developer</h2>
              <h3 className="employer">FUNSports</h3>
              <p>
                In April 2019, I created a website for a new non-profit
                organization called FUNSports. The website&lsquo;s goal is to be
                a page filled with information about the new but growing
                organization. For the remainer of 2019, I continued to work with
                the organization to ensure that their website meet their needs
                and desires.
              </p>
              <p>
                FUNSports goal is to provide access to sports for kids who
                otherwise may not have the oppertunity. Many organizations
                already provide access to summer camps or other short-term
                programs, but FUNSports aims to help kids pursue full time
                athletic careers. This means that kids who are high achieving
                athletes but do not have the necessary finacial support will not
                be forced to give up their dreams of competing at the highest
                levels.
              </p>

              <h5 className="workterm">April 2019 - December 2019</h5>
            </Col>
          </Row>
          <hr style={{ width: "60%", marginBottom: "100px" }} />
          <Row className="expRow">
            <Col>
              <h2>WiTS Peer Mentor</h2>
              <h3 className="employer">Dalhousie University</h3>
              <p>
                In September 2018, Dalhousie&lsquo;s Women in Technology Society
                launched their peer mentorship program. I was eager to be
                involved as I understand the value of supporting women who are
                new to the technology field.
              </p>
              <p>
                I acted as a peer mentor for two female students coming to
                Dalhousie for their first year of computer science. I offered
                connections and resources to my mentees to help make their first
                year as effective and useful as possible.
              </p>

              <h5 className="workterm">September 2018 - April 2019</h5>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default Volunteer; // Don’t forget to use export default!
