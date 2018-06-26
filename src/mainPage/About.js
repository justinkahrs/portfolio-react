import React, { Component } from 'react';
import './About.css';

class About extends Component {
  styles = () => ({
    aboutPage: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh'
    },
    bq: {
      fontWeight: 'bold'
    },
    header: {
      color: 'white',
      textTransform: 'uppercase',
      textAlign: 'center',
      padding: this.props.big ? '' : '3rem'
    },
    text: {
      color: '#212C21',
      padding: this.props.big ? '1rem 45rem' : '0 3rem'
    }
  });
  render() {
    return (
      <div id="about">
        <div style={this.styles().aboutPage} id="aboutBackground">
          <div id="aboutForeground">
            <div style={this.styles().header}>A little bit about myself</div>
            <div style={this.styles().text}>
              <p>
                I have a passion for creating engaging digital experiences
                through user research and information architecture. With degrees
                in both art and information science, I am obsessed with visual
                goodness and the details.
              </p>
              <blockquote style={this.styles().bq}>
                I enjoy finding that sweet spot where form meets function.
              </blockquote>
              <p>
                Recently, I've taken a deep dive into creative coding with JS
                and D3 to broaden my prior knowledge of web technologies like
                HTML and CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
