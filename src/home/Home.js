import React from "react";
// import FeaturedProjects from "../FeaturedProjects";
import About from "./About";
import Contact from "./Contact";
import { Jumbotron, Container } from "react-bootstrap";
import "../App.css";

export default function Home() {
  return (
    <div>
      <Jumbotron fluid className="jt">
        <Container>
          <h1>Matt Peachey</h1>
          <p>Fourth year Computer Science student from Dalhousie University!</p>
        </Container>
      </Jumbotron>
      <About />
      <Contact />
      <br /> <br />
    </div>
  );
}

//TODO: Insert FeaturedProjects back into return
