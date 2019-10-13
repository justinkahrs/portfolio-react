import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from './mainPage'
import IUPUI50th from './projects/IUPUI50thAnniversary/Page'
import IUCorps from './projects/IUCorps/Page'
import College529 from './projects/College529/Page'
import LotusFetstival from './projects/LotusFetstival/Page'
import HelpCenter from './projects/HelpCenter/Page'

const mql = window.matchMedia(`(min-width:960px)`)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mql: mql,
      big: false,
    }
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged)
    this.setState({
      mql: mql,
      big: mql.matches,
    })
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged)
  }

  mediaQueryChanged = () => {
    this.setState({
      mql: mql,
      big: this.state.mql.matches,
    })
  }

  render() {
    const { big } = this.state
    return (
      <Router>
        <div>
          <Route path="/" exact render={() => <MainPage big={big} />} />
          <Route
            path="/portfolio/1"
            render={() => <IUPUI50th big={big} />}
          />
          <Route
            path="/portfolio/2"
            render={() => <IUCorps big={big} />}
          />
          <Route
            path="/portfolio/3"
            render={() => <College529 big={big} />}
          />
          <Route
            path="/portfolio/4"
            render={() => <LotusFetstival big={big} />}
          />
          <Route
            path="/portfolio/5"
            render={() => <HelpCenter big={big} />}
          />
        </div>
      </Router>
    )
  }
}

export default App
