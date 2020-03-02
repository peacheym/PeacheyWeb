import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav} from 'react-bootstrap';


class NavBar extends Component {
  render() {
      return <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Matt Peachey</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/experience">Experience</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  }
}
export default NavBar; // Don’t forget to use export default!
