import React, { Component } from 'react'

class About extends Component {
  styles = () => {
    const { big } = this.props
    return {
      aboutPage: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '70vh',
        padding: big ? '' : '10rem 1rem',
      },
      bq: {
        fontFamily: 'Libre Baskerville',
        fontWeight: '500',
        fontSize: '32px',
        marginLeft: 0,
        borderLeft: 'none',
        letterSpacing: '2px',
      },
      content: {
        maxWidth: '960px',
      },
      header: {
        fontSize: '18px',
        textTransform: 'uppercase',
        textAlign: 'center',
      },
      text: {
        color: '#212C21',
        padding: big ? '' : '0 3rem',
      },
      hr: {
        background: 'black',
        border: 0,
        height: '2px',
        maxWidth: '100px',
        marginTop: '2rem',
        marginBottom: '6rem',
      },
    }
  }

  render() {
    return (
      <div id="about" style={this.styles().aboutPage}>
        <div style={this.styles().content}>
          <h1 style={this.styles().header}>
            A little bit about myself
            <hr style={this.styles().hr} />
          </h1>
          <div style={this.styles().text}>
            <p>
              I have a passion for creating engaging digital experiences through
              user-centered design and information architecture. With degrees in
              both art and information science, I am obsessed with visual
              goodness and systemic details.
            </p>
            <blockquote style={this.styles().bq}>
              I enjoy finding that sweet spot where form meets function.
            </blockquote>
            <p>
              Apart from UX, I've taken a deep dive into creative coding to
              broaden my prior knowledge of HTML, CSS, and JS. When I'm not
              staring at a screen, I enjoy pinball, food, and my cat.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
