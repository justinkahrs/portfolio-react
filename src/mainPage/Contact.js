import React, { Component } from "react";

class Contact extends Component {
  styles = () => {
    const { big } = this.props;
    return {
      contactList: {
        listStyleType: "none",
        paddingLeft: "0"
      },
      contactListItem: {
        fontFamily: "Lato, sans",
        fontSize: "15.5px",
        fontWeight: "700",
        letterSpacing: "1.5px",
        lineSpacing: "2px",
        display: big ? "inline" : "",
        marginRight: big ? "2rem" : "",
        textAlign: big ? "" : "center",
        paddingBottom: big ? "" : "1.5rem"
      },
      contactPage: {
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#37474F",
        minHeight: "72vh"
      },
      header: {
        color: "white",
        fontSize: "18px",
        textAlign: "center"
      },
      hr: {
        background: "white",
        border: 0,
        height: "2px",
        maxWidth: "100px",
        marginTop: "2rem",
        marginBottom: "6rem"
      }
    };
  };
  render() {
    return (
      <div id="contact" style={this.styles().contactPage}>
        <div style={this.styles().content}>
          <h1 style={this.styles().header}>
            LET'S CONNECT
            <hr style={this.styles().hr} />
          </h1>
          <div style={this.styles().listContainer}>
            <ul style={this.styles().contactList}>
              <li style={this.styles().contactListItem}>
                <a
                  style={{ color: "white" }}
                  href="mailto:hello@annavanderjagt.com"
                >
                  EMAIL
                </a>
              </li>
              <li style={this.styles().contactListItem}>
                <a
                  style={{ color: "white" }}
                  href="https://www.linkedin.com/in/annavanderjagt"
                >
                  LINKEDIN
                </a>
              </li>
              <li style={this.styles().contactListItem}>
                <a
                  style={{ color: "white" }}
                  href="https://twitter.com/avanderj"
                >
                  TWITTER
                </a>
              </li>
              <li style={this.styles().contactListItem}>
                <a
                  style={{ color: "white" }}
                  href="https://github.com/avanderj"
                >
                  GITHUB
                </a>
              </li>
              <li style={this.styles().contactListItem}>
                <a
                  style={{ color: "white" }}
                  href="https://www.behance.net/avanderj"
                >
                  BEHANCE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
