import React, { Component } from 'react'

class Contact extends Component {
  styles = () => {
    return {
      contactList: {
        listStyleType: 'none',
      },
      contactListItem: {
        color: 'white',
        fontFamily: 'Lato, sans',
        fontSize: '15.5px',
        fontWeight: '700',
        letterSpacing: '1.5px',
        display: 'inline',
        marginRight: '2rem',
      },
      contactPage: {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#37474F',
        minHeight: '88vh',
      },
      header: {
        color: 'white',
        fontSize: '18px',
        textAlign: 'center',
      },
      hr: {
        background: 'white',
        border: 0,
        height: '2px',
        maxWidth: '100px',
        marginTop: '1rem',
      },
    }
  }
  render() {
    return (
      <div id="contact" style={this.styles().contactPage}>
        <h1 style={this.styles().header}>
          LET'S CONNECT
          <hr style={this.styles().hr} />
        </h1>
        <ul style={this.styles().contactList}>
          <li style={this.styles().contactListItem}>
            <a
              style={{ color: 'white' }}
              href="mailto:hello@annavanderjagt.com"
            >
              EMAIL
            </a>
          </li>
          <li style={this.styles().contactListItem}>
            <a
              style={{ color: 'white' }}
              href="https://www.linkedin.com/in/annavanderjagt"
            >
              LINKEDIN
            </a>
          </li>
          <li style={this.styles().contactListItem}>
            <a style={{ color: 'white' }} href="https://twitter.com/avanderj">
              TWITTER
            </a>
          </li>
          <li style={this.styles().contactListItem}>
            <a style={{ color: 'white' }} href="https://github.com/avanderj">
              GITHUB
            </a>
          </li>
          <li style={this.styles().contactListItem}>
            <a style={{ color: 'white' }} href="https://codepen.io/avanderj">
              CODEPEN
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Contact
