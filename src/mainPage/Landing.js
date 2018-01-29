import React, { Component } from "react";
import { Row, Col } from "reactstrap";

const styles = {
  landingHeader: {
    color: "#C15C2E"
  }
};
class Landing extends Component {
  render() {
    return (
      <Row
        style={{ minHeight: "88vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Col
          className="d-none d-lg-flex"
          style={styles.landingHeader}
          xs={12}
          lg={2}
        >
          Anna VanderJagt
        </Col>
        <Col className="text-center" lg={5}>
          <h4>I specialize in information architecture & UX</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
            eros aliquam, tincidunt eros.
          </p>
        </Col>
      </Row>
    );
  }
}

export default Landing;
