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
        fontSize: '27px',
        marginLeft: 0,
        borderLeft: 'none',
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
        background: '#24170A',
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
            About me
            <hr style={this.styles().hr} />
          </h1>
          <div style={this.styles().text}>
            <p>
              I'm a multidisciplinary designer specializing in service design, user experience, and information architecture. I believe the value of my work is in understanding people, context, and systems to design solutions that create value for users and businesses. 
            </p>
            <blockquote style={this.styles().bq}>
              Along with my motivation to deliver meaningful experiences that champion the user, simplifying the way people interact with technology through empathy, research, and iteration is what inspires me.
            </blockquote>
            <p>
              I enjoy fast-paced environments, learning new topics, and collaborating with people that have different perspectives. When I'm not doing design work, you'll find me cooking, working on a DIY project, or exploring San Francisco.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
