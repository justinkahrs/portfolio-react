import React, { Component } from 'react';

const styles = {
  contactPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#37474F',
    minHeight: '88vh'
  },
  header: {
    color: '#C15C2E',
    textTransform: 'uppercase',
    textAlign: 'center'
  }
};
class Contact extends Component {
  render() {
    return (
      <div id="contact" style={styles.contactPage}>
        <div style={styles.header}>
          Let's connect
        </div>
      </div>
    );
  }
}

export default Contact;
