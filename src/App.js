import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import MainPage from "./mainPage";
import PortfolioPage from "./portfolio";
import Navigation from "./common/Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <Container fluid>
          <Navigation />
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/portfolio/:name" component={PortfolioPage} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
