import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import NavBrand from "../common/NavBrand";

const styles = {
  landingPage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "88vh",
    backgroundColor: "#fff"
  },
  brand: {
    marginRight: "10rem"
  },
  title: {
    color: "#C15C2E",
    fontSize: "15px",
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  paragraph: {},
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};
class Landing extends Component {
  render() {
    return (
      <Row style={styles.landingPage}>
        <Col lg={2} style={styles.brand}>
          <NavBrand />
        </Col>
        <Col lg={5}>
          <h1 style={styles.title}>
            I specialize in information architecture & UX
          </h1>
          <p style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
            eros aliquam, tincidunt eros.
          </p>
        </Col>
      </Row>
    );
  }
}

export default Landing;
