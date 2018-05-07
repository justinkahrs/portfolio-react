import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './mainPage';
import PortfolioPage from './portfolio';
import Navigation from './common/Nav';

const mql = window.matchMedia(`(min-width:768px)`);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mql: mql,
      big: false
    };
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({
      mql: mql,
      big: mql.matches
    });
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged = () => {
    this.setState({
      mql: mql,
      big: this.state.mql.matches
    });
  };

  render() {
    const { big } = this.state;
    return (
      <Router>
        <div>
          <Navigation big={big} />
          <Switch>
            <Route
              path="/"
              exact
              render={({ match }) => <MainPage big={big} match={match} />}
            />
            <Route
              path="/portfolio/:name"
              render={({ match }) => <PortfolioPage big={big} match={match} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
