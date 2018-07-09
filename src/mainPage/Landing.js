import React, { Component } from 'react'
import landingBackground from '../landingImage.jpeg'
import ScrollIntoView from 'react-scroll-into-view'

class Landing extends Component {
  styles = () => {
    const { big } = this.props
    return {
      aboutMeButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '62px',
        width: '192px',
        backgroundColor: '#BB6655',
        color: 'white',
        marginTop: '3rem',
        fontFamily: 'Noto Sans',
      },
      blurb: {
        color: '#212C21',
        fontSize: '23px',
        maxWidth: '470px',
        padding: big ? '' : '0 5rem',
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
        textAlign: big ? 'left' : 'center',
      },
      heroTitle: {
        fontSize: '18px',
        textTransform: 'uppercase',
      },
      heroName: {
        fontFamily: 'Playfair Display',
        fontSize: '118px',
        fontWeight: '400',
        marginTop: '2rem',
      },
      hr: {
        background: 'black',
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
          <h1 style={this.styles().heroTitle}>
            Hello World
            <hr align="left" style={this.styles().hr} />
          </h1>
          <div style={this.styles().heroName}>I'm Anna</div>
          <p style={this.styles().blurb}>
            I'm an information architect and UX designer living in San
            Francisco.
          </p>
          <div style={this.styles().aboutMeButton}>
            <ScrollIntoView selector={'#about'}>ABOUT ME</ScrollIntoView>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
