import React from "react";
// import FeaturedProjects from "../FeaturedProjects";
import About from "./About";
import Contact from "./Contact";
import { Jumbotron, Container, Button } from "react-bootstrap";
import "../App.css";

export default function Home() {
  return (
    <div>
      <Jumbotron fluid className="jt jumbotron-g">
        <Container style={{ margin: "0px auto" }}>
          <h1>Matt Peachey</h1>
          <p>Fourth year Computer Science student from Dalhousie University!</p>
          <Button className="btn-dark" href="#about">
            About Me
          </Button>
        </Container>
      </Jumbotron>
      <About />
      <Contact />
      <br /> <br />
    </div>
  );
}

//TODO: Insert FeaturedProjects back into return
