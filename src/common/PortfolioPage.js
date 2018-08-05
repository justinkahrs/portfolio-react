import React from 'react'
import { Link } from 'react-router-dom'

import Footer from './Footer'
import Navigation from './Nav'

export default class PortfolioPage extends React.Component {
  styles = () => {
    const { big } = this.props
    return {
      container: {
        display: 'flex',
        flexDirection: 'column',
        padding: big ? '0 25%' : '4rem',
        textAlign: 'center',
        alignItems: big ? 'center' : '',
      },
      content: {
        maxWidth: big ? '960px' : '',
      },
      projectNav: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: big ? '20rem' : '5rem',
      },
      projectNavLink: {
        color: 'black',
        fontSize: '15.5px',
        fontFamily: 'Lato',
        fontWeight: 'bold',
        letterSpacing: '1.5px',
      },
    }
  }
  render() {
    const { big, children, id } = this.props
    return (
      <React.Fragment>
        <Navigation big={big} />
        <div style={this.styles().container}>
          <div style={this.styles().content}>{children}</div>
          <div style={this.styles().projectNav}>
            {id > 1 && (
              <Link
                to={`/portfolio/${id - 1}`}
                style={this.styles().projectNavLink}
              >
                &lt; PREV
              </Link>
            )}
            {id > 1 && id < 4 && <span style={{ margin: '0 2rem' }}>/</span>}
            {id < 4 && (
              <Link
                to={`/portfolio/${id + 1}`}
                style={this.styles().projectNavLink}
              >
                NEXT &gt;
              </Link>
            )}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}
