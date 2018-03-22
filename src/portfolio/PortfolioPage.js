import React from "react";
import { Col, Row } from "reactstrap";

const PortfolioPage = ({
  title,
  context,
  methodsAndSkills,
  role,
  roleSummary,
  lessonsLearned,
  imgURL,
  imgCaption
}) => (
  <Row>
    <div style={{ textAlign: "center" }}>
      <Col xs={12}>
        <h1>{title.toUpperCase()}</h1>
      </Col>
      <Col xs={12}>
        <p>{context}</p>
      </Col>
      <Col xs={12}>
        <img
          alt="representation of project"
          style={{ maxWidth: "400px" }}
          src={imgURL}
        />
        <p>{imgCaption}</p>
      </Col>
      <Col xs={3} style={{ textAlign: "center" }}>
        <h2>Methods and Skills:</h2>
        <ul>{methodsAndSkills.split(",").map(i => <li>{i}</li>)}</ul>
      </Col>
      <Col xs={12}>
        <h2>{role}</h2>
      </Col>
      <Col xs={12}>
        <p>{roleSummary}</p>
      </Col>
      <Col xs={12}>
        <h2>Lessons learned:</h2>
        <p>{lessonsLearned}</p>
      </Col>
    </div>
  </Row>
);

export default PortfolioPage;
