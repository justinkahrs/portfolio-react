import React, { Component } from 'react';

const styles = {
  blurb: {
    gridColumn: '3',
    gridRow: '3'
  },
  page: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr 1fr',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    minHeight: '88vh'
  },
  landingHeader: {
    gridColumn: '2',
    gridRow: '3',
    fontFamily: 'Playfair Display, serif',
    fontSize: '38px',
    color: '#C15C2E'
  }
};
class Landing extends Component {
  render() {
    return (
      <div style={styles.page}>
        <div style={styles.landingHeader}>Anna VanderJagt</div>
        <div style={styles.blurb}>
          <div>I specialize in information architecture & UX</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
            eros aliquam, tincidunt eros.
          </p>
        </div>
      </div>
    );
  }
}

export default Landing;
