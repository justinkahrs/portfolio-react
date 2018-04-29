import React, { Component } from 'react';

const styles = {
  aboutPage: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr',
    gridTemplateColumns: '1fr 4fr 1fr',
    minHeight: '88vh',
    backgroundColor: '#9EBCB6'
  },
  header: {
    gridRow: '1',
    gridColumn: '2',
    textAlign: 'center',
    padding: '2rem'
  },
  text: {
    gridRow: '2',
    gridColumn: '2'
  }
};

class About extends Component {
  render() {
    return (
      <div style={styles.aboutPage} id="about">
        <div style={styles.header}>
          I specialize in information architecture & UX
        </div>
        <div style={styles.text}>
          <p>
            As an information architect intern for IU Communications, I work
            with a team to develop seamless user experiences for websites across
            IU. Currently pursuing dual master’s degrees in information science
            and library science, I focus my coursework in information
            architecture, user-experience design, and front-end development. I
            also hold a bachelors degree in art history from Kendall College of
            Art & Design.
          </p>
          <blockquote>
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
