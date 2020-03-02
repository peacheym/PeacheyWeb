import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import '../App.css';

class Experience extends Component {
  render() {
      return <Container>
	<h1>Work Experience</h1>
	<Row className="expRow">
		<Col md={4}>
		<Image src="a" alt="Image" rounded />
		</Col>
		<Col md={8}>
		<h2>Cyber Developer (Co-op)</h2><h3>Government of Canada</h3>
		<p>Tools used: Git, GitHub, Python, React, GraphQL, PostgreSQL</p>
		<p>This experience has been excellent!</p>
		<h5>January 2020 - Present</h5>
		</Col>
	</Row>
		
	<Row className="expRow">
		<Col md={4}>
		<Image src="a" alt="Image" rounded />
		</Col>
		<Col md={8}>
		<h2>Software Developer (Co-op)</h2><h3>Ultra Electronics Maratime Systems</h3>
		<p>As a software developer (co-op) at Ultra Electronics Maritime Systems I worked on an agile team to implement features for UEMSs suite of services using Java, C++, and Python. Being my first work term, this valuable experience taught me the fundamentals of professional software development. I gained important experience working with industry tools such as Linux, Git (Bit-Bucket), JIRA, and many more.</p>
		<p>Thank you to the team at UEMS for having me as a Co-op student, I really enjoyed my time working with you all!</p>
		<h5>May 2019 - August 2019</h5>
		</Col>
	</Row>
	<h1>Volunteer Experience</h1>
	</Container>
  }
}
export default Experience; // Don’t forget to use export default!
