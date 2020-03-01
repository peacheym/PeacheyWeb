import React from 'react';
import NavBar from './NavBar';
import FeaturedProjects from './FeaturedProjects'
import {Jumbotron, Container, Button} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
    <Jumbotron fluid class="jt">
        <Container>
            <h1>Matt Peachey</h1>
            <p>
                I am a Computer Science Student from Dalhousie University.
            </p>
            <Button href="/about">About Me</Button>
        </Container>
    </Jumbotron>
    </header>
    <FeaturedProjects proj1="testprops"></FeaturedProjects>
    </div>
  );
}

export default App;
