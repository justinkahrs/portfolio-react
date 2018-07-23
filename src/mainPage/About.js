import React, { Component } from 'react'

class About extends Component {
  styles = () => {
    const { big } = this.props
    return {
      aboutPage: {
        backgroundColor: '#DBE6E3',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '70vh',
        padding: big ? '' : '10rem 1rem',
      },
      bq: {
        fontFamily: 'Libre Baskerville',
        fontWeight: 'bold',
        fontSize: '24px',
        marginLeft: 0,
      },
      header: {
        fontSize: '18px',
        textTransform: 'uppercase',
      },
      text: {
        color: '#212C21',
        padding: this.props.big ? '1rem 22%' : '0 3rem',
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
      <div id="about" style={this.styles().aboutPage}>
        <h1 style={this.styles().header}>
          A little bit about myself
          <hr style={this.styles().hr} />
        </h1>
        <div style={this.styles().text}>
          <p>
            I have a passion for creating engaging digital experiences through
            user-centered design and information architecture. With degrees in
            both art and information science, I am obsessed with visual goodness
            and systemic details.
          </p>
          <blockquote style={this.styles().bq}>
            I enjoy finding that sweet spot where form meets function.
          </blockquote>
          <p>
            Besides UX, I've taken a deep dive into creative coding with JS and
            D3 to broaden my prior knowledge of web technologies like HTML and
            CSS. When I'm not staring at a screen, I enjoy pinball and my cat.
            Just look at her.
          </p>
        </div>
      </div>
    )
  }
}

export default About
