import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to <strong>mattpeachey.ca</strong>! This page is currently under construction.
        </p>
        <div>
        <a
          className="App-link"
          href="https://web.cs.dal.ca/~peachey"
          target="_blank"
          rel="noopener noreferrer"
        >
        Old Website
        </a> |&nbsp;
        <a
          className="App-link"
          href="https://www.linkedin.com/in/matt-peachey-02bb11152?originalSubdomain=ca"
          target="_blank"
          rel="noopener noreferrer"
        >
        LinkedIn
        </a> |&nbsp;
        <a
          className="App-link"
          href="https://github.com/peacheym"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        </div>
      </header>
    </div>
  );
}

export default App;
