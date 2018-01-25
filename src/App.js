import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "react-bootstrap";
import MainPage from "./mainPage";
import PortfolioPage from "./portfolio";
import Navigation from "./common/Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <Grid>
          <Navigation />
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/portfolio/:name" component={PortfolioPage} />
          </Switch>
        </Grid>
      </Router>
    );
  }
}

export default App;
