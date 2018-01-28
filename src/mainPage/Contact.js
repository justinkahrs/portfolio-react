import React, { Component } from "react";
import { Row } from "reactstrap";

const styles = {
  contactPage: {
    backgroundColor: "#37474F",
    minHeight: "88vh"
  },
  header: {
    color: "#C15C2E",
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center"
  }
};
class Contact extends Component {
  render() {
    return (
      <Row
        className="d-flex justify-content-center p-lg-5"
        id="contact"
        style={styles.contactPage}
      >
        <h1 style={styles.header}>
          I specialize in information architecture & UX
        </h1>
      </Row>
    );
  }
}

export default Contact;
