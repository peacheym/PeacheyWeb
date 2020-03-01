import React from 'react';
import NavBar from './NavBar';
import {Jumbotron, Container} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>
    <Jumbotron fluid>
        <Container>
            <h1>Welcome</h1>
            <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
            </p>
        </Container>
    </Jumbotron>
    </div>
  );
}

export default App;
