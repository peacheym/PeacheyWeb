import React from "react";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar className="color-nav" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand className="nav-link" href="/">
        Matt Peachey
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="nav-link" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="nav-link" href="/experience">
            Work
          </Nav.Link>
          <Nav.Link className="nav-link" href="/volunteer">
            Volunteer
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
