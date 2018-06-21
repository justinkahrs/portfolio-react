import React, { Component } from 'react';

class Landing extends Component {
  styles = () => {
    const { big } = this.props;
    return {
      blurb: {
        padding: big ? '' : '0 5rem'
      },
      page: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: big ? 'row' : 'column',
        minHeight: big ? '88vh' : '60vh',
        textAlign: big ? 'left' : 'center'
      },
      landingHeader: {
        marginRight: big ? '5rem' : '',
        marginBottom: big ? '' : '2rem',
        fontFamily: 'Playfair Display, serif',
        fontSize: '38px',
        color: '#C15C2E',
        textAlign: big ? 'left' : 'center'
      }
    };
  };

  render() {
    return (
      <div style={this.styles().page} id="annavanderjagt">
        <div style={this.styles().landingHeader}>
          <div>Anna</div>
          <div>VanderJagt</div>
        </div>
        <div style={this.styles().blurb}>
          <div style={{ color: '#C15C2E', textTransform: 'uppercase' }}>
            Hello World
          </div>
          <p>
            I'm an information architect and UX/UI designer in San Francisco.
          </p>
        </div>
      </div>
    );
  }
}

export default Landing;
