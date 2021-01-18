import React, { Component } from "react";
// import FeaturedProjects from "../FeaturedProjects";
import About from "./About";
// import Contact from "./Contact";
import { Jumbotron, Container } from "react-bootstrap";
import "../App.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid className="jt">
          <Container>
            <h1>Matt Peachey</h1>
            <p>
              Fourth year Computer Science student from Dalhousie University!
            </p>
            {/* <Button className="btn-dark" href="#about">
              About Me
            </Button> */}
          </Container>
        </Jumbotron>
        <About />
        {/* <FeaturedProjects />
        <br /> <br /> <br />
        <Contact />
        <br /> <br /> <br /> */}
      </div>
    );
  }
}
export default Home; // Don’t forget to use export default!

//TODO: Insert FeaturedProjects back into return
