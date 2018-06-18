import React, { Component } from 'react';

class Landing extends Component {
  styles = () => ({
    blurb: {
      padding: this.props.big ? '' : '0 5rem'
    },
    page: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: this.props.big ? 'row' : 'column',
      minHeight: this.props.big ? '88vh' : '60vh',
      textAlign: 'center'
    },
    landingHeader: {
      marginRight: this.props.big ? '5rem' : '',
      marginBottom: this.props.big ? '' : '2rem',
      fontFamily: 'Playfair Display, serif',
      fontSize: '38px',
      color: '#C15C2E'
    }
  });
  render() {
    return (
      <div style={this.styles().page} id="annavanderjagt">
        <div style={this.styles().landingHeader}>
          <div>Anna</div>
          <div>VanderJagt</div>
        </div>
        <div style={this.styles().blurb}>
          <div style={{ color: '#C15C2E', textTransform: 'uppercase' }}>
            I specialize in information architecture & UX
          </div>
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
