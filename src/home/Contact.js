import React, { Component } from 'react';
import {Container, Button, Form} from 'react-bootstrap';
import '../App.css';


class Contact extends Component {
  render() {
      return <Container>
	<h2>Contact me!</h2>
	<br/>	
	<Form className="contact">
	  <Form.Group controlId="exampleForm.ControlInput1">
	    <Form.Label>Email address</Form.Label>
	    <Form.Control type="email" placeholder="name@example.com" />
	  </Form.Group>
	  <Form.Group controlId="exampleForm.ControlSelect1">
	    <Form.Label>Reason for email</Form.Label>
	    <Form.Control as="select">
	      <option>Cool Ideas</option>
	      <option>Coffee</option>
	      <option>Random</option>
	      <option>Other</option>
	    </Form.Control>
	  </Form.Group>
	  <Form.Group controlId="exampleForm.ControlTextarea1">
	    <Form.Label>Message</Form.Label>
	    <Form.Control as="textarea" rows="3" />
	  </Form.Group>
	</Form>
	<Button onClick={()=>{alert("Email form currently under construction. Please contact me at peacheym@dal.ca")}}>Send Message</Button>
      </Container>
  }
}
export default Contact;
