import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "react-bootstrap";
import MainPage from "./mainPage";
import PortfolioPage from "./portfolio";
import Nav from "./common/Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav match={this.props.match} />
          <Grid fluid>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/portfolio/:name" component={PortfolioPage} />
            </Switch>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
