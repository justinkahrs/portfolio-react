import React, { Component } from "react";
import { Row } from "reactstrap";
import PortfolioItem from "./PortfolioItem";
import projects from "../projects";

const styles = {
  portfolioPage: {
    minHeight: "60vh",
    backgroundColor: "#fff"
  },
  header: {
    marginTop: '15rem'
  }
};
class Portfolio extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center p-5">
        <div style={styles.header}>
          <h2>Portfolio</h2>
        </div>
        <div>
          <p>Here's some of my kickass shit</p>
        </div>
        <Row
          className="d-flex justify-content-center align-items-center"
          style={styles.portfolioPage}
        >
          {projects.map(i => <PortfolioItem {...i} />)}
        </Row>
      </div>
    );
  }
}

export default Portfolio;
