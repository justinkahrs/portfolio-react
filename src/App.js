import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './mainPage';
import PortfolioPage from './portfolio';
import Navigation from './common/Nav';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/portfolio/:name" component={PortfolioPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
