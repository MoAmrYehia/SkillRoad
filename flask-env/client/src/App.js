import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import FileSubmission from "./components/FileSubmission";

class App extends Component {
  render() {
    return (
      // <h1>Hello</h1>
      <Router>
        <div>
          <h2>Welcome to SkillRoad</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to={"/"} className="nav-link">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link to={"/header"} className="nav-link">
                  Header
                </Link>
              </li>
              <li>
                <Link to={"/footer"} className="nav-link">
                  Footer
                </Link>
              </li>
              <li>
                <Link to={"/submit"} className="nav-link">
                  FileSubmission
                </Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/header" component={Header} />
            <Route path="/footer" component={Footer} />
            <Route path="/submit" component={FileSubmission} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
