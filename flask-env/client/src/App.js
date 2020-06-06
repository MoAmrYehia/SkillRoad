import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import FileSubmission from "./components/FileSubmission";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <hr />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/submit" component={FileSubmission} />
            <Route path="/footer" component={Footer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
