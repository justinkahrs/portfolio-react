import React from 'react'
import Landing from './Landing.js'
import About from './About.js'
import Portfolio from './Portfolio.js'
import Contact from './Contact.js'
import Navigation from '../common/Nav'

const styles = {
  app: {
    display: 'grid',
  },
}

class MainPage extends React.Component {
  render() {
    const { big } = this.props
    return (
      <div>
        <Navigation big={big} {...this.props} />
        <div style={styles.app}>
          <Landing big={big} />
          <About big={big} />
          <Portfolio big={big} />
          <Contact big={big} />
        </div>
      </div>
    )
  }
}

export default MainPage
