import React, { Component } from 'react';

class About extends Component {
  styles = () => ({
    aboutPage: {
      backgroundColor: '#DBE6E3',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
    },
    bq: {
      fontWeight: 'bold',
    },
    header: {
      textTransform: 'uppercase',
      textAlign: 'center',
      padding: this.props.big ? '' : '3rem',
    },
    text: {
      color: '#212C21',
      padding: this.props.big ? '1rem 45rem' : '0 3rem',
    },
  });
  render() {
    return (
      <div id="about" style={this.styles().aboutPage}>
        <h1 style={this.styles().header}>A little bit about myself</h1>
        <div style={this.styles().text}>
          <p>
            I have a passion for creating engaging digital experiences through
            user research and information architecture. With degrees in both art
            and information science, I am obsessed with visual goodness and the
            details.
          </p>
          <blockquote style={this.styles().bq}>
            I enjoy finding that sweet spot where form meets function.
          </blockquote>
          <p>
            Recently, I've taken a deep dive into creative coding with JS and D3
            to broaden my prior knowledge of web technologies like HTML and CSS.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
