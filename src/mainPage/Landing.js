import React, { Component } from 'react'
import landingBackground from '../images/landing.jpeg'

class Landing extends Component {
  styles = () => {
    const { big } = this.props
    return {
      contactMeButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '62px',
        width: big ? '192px' : '',
        backgroundColor: '#BB6655',
        color: 'white',
        marginTop: '6rem',
        fontFamily: 'Lato',
        fontWeight: 'bold',
        letterSpacing: '1.5px',
        textDecoration: 'none',
      },
      blurb: {
        color: '#212C21',
        fontSize: '23px',
        maxWidth: '470px',
        padding: big ? '' : '0 8rem 0 0',
        textAlign: 'left',
      },
      page: {
        alignItems: 'left',
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.6) 100%), url(${landingBackground})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '0 7.3%',
      },
      hero: {
        textAlign: 'left',
      },
      heroTitle: {
        fontSize: '18px',
        textTransform: 'uppercase',
      },
      heroName: {
        fontFamily: 'Old Standard TT, serif',
        fontSize: big ? '80px' : '72px',
        fontWeight: '400',
        marginTop: '2rem',
      },
      hr: {
        background: '#24170A',
        border: 0,
        height: '2px',
        maxWidth: '100px',
        marginTop: '1rem',
      },
    }
  }

  render() {
    return (
      <div style={this.styles().page} id="annavanderjagt">
        <div style={this.styles().hero}>
          <div style={this.styles().heroName}>Anna VanderJagt</div>
          <p style={this.styles().blurb}>
            Design and content strategist based in San Francisco.
          </p>
          <a style={this.styles().contactMeButton} href="#contact">
            CONTACT ME
          </a>
        </div>
      </div>
    )
  }
}

export default Landing
