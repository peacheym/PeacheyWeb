import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./home/Home";
import Experience from "./work-experience/Experience";
// import Projects from './projects/Projects';

import Footer from "./Footer";

import "./App.css";
import Research from "./research-experience/Research";
import Volunteer from "./volunteer-experience/Volunteer";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/research">
            <Research />
          </Route>
          <Route path="/volunteer">
            <Volunteer />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
