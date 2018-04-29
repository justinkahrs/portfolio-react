import React, { Component } from "react";

const styles = {
  contactPage: {
    backgroundColor: "#37474F",
    minHeight: "88vh"
  },
  header: {
    color: "#C15C2E",
    textTransform: "uppercase",
    textAlign: "center"
  }
};
class Contact extends Component {
  render() {
    return (
      <div
        id="contact"
        style={styles.contactPage}
      >
        <div style={styles.header}>
          I specialize in information architecture & UX
        </div>
      </div>
    );
  }
}

export default Contact;
