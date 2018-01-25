import React, { Component } from "react";
import { Col, Row, Nav } from "react-bootstrap";
import NavBrand from "./NavBrand";

const styles = {
  fixedAtTop: {
    position: "fixed",
    paddingBottom: "20rem",
    marginBottom: "20rem"
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "0",
    listStyleType: "none",
    textAlign: "center"
  }
};
class Navigation extends Component {
  render() {
    return (
      <Row>
        <Col lg={12}>
          <Nav>
            <Col lg={4}>
              <NavBrand />
            </Col>
            <Col lg={4}>
              <ul style={styles.nav}>
                <li>
                  <a href="/#about">ABOUT</a>
                </li>
                <li>
                  <a href="/#portfolio">PORTFOLIO</a>
                </li>
                <li>
                  <a href="/#contact">CONTACT</a>
                </li>
              </ul>
            </Col>
          </Nav>
        </Col>
      </Row>
    );
  }
}

export default Navigation;
