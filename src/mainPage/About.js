import React, { Component } from 'react';

class About extends Component {
  styles = () => ({
    aboutPage: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '88vh',
      backgroundColor: '#9EBCB6'
    },
    bq: {
      fontWeight: 'bold'
    },
    header: {
      color: 'white',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    text: {
      padding: this.props.big ? '1rem 25rem' : '2rem'
    }
  });
  render() {
    return (
      <div style={this.styles().aboutPage} id="about">
        <div style={this.styles().header}>
          I specialize in information architecture & UX
        </div>
        <div style={this.styles().text}>
          <p>
            As an information architect intern for IU Communications, I work
            with a team to develop seamless user experiences for websites across
            IU. Currently pursuing dual master’s degrees in information science
            and library science, I focus my coursework in information
            architecture, user-experience design, and front-end development. I
            also hold a bachelors degree in art history from Kendall College of
            Art & Design.
          </p>
          <blockquote style={this.styles().bq}>
            The best word to describe how we work: partnership.
          </blockquote>
          <p>
            As a frequent wanderer of the complex
            <a href="https://youtu.be/f99PcP0aFNE">"series of tubes"</a> we call
            the internet, I enjoy doing my part to make things a little more
            easy to navigate, &lt;div&gt; by &lt;/div&gt;.
          </p>
          <p>
            In my spare time, I enjoy traveling, cooking, pinball, and disc
            golf.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
