import React from "react";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">Matt Peachey</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/research">Research</Nav.Link>
          <Nav.Link href="/experience">Work</Nav.Link>
          <Nav.Link href="/volunteer">Volunteer</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
