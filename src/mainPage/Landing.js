import React, { Component } from 'react';

class Landing extends Component {
  styles = () => ({
    blurb: {
      gridColumn: this.props.big ? '3' : '1',
      gridRow: this.props.big ? '3' : '2'
    },
    page: {
      display: 'grid',
      gridGap: this.props.big ? '5rem' : '2rem',
      gridTemplateRows: this.props.big ? '1fr 1fr 1fr 1fr' : '1fr 1fr 1fr',
      gridTemplateColumns: this.props.big ? '1fr 1fr 1fr 1fr' : '1fr',
      textAlign: 'center',
      minHeight: this.props.big ? '88vh' : '40vh',
      marginTop: this.props.big ? '0' : '15rem'
    },
    landingHeader: {
      gridColumn: this.props.big ? '2' : '1',
      gridRow: this.props.big ? '3' : '1',
      fontFamily: 'Playfair Display, serif',
      fontSize: '38px',
      color: '#C15C2E'
    }
  });
  render() {
    return (
      <div style={this.styles().page} id="annavanderjagt">
        <div style={this.styles().landingHeader}>Anna VanderJagt</div>
        <div style={this.styles().blurb}>
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
