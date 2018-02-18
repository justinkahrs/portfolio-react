import React, { Component } from "react";
import { Row } from "reactstrap";
import PortfolioItem from "./PortfolioItem";
import projects from "../projects";

const styles = {
  portfolioPage: {
    minHeight: "88vh",
    backgroundColor: "#fff"
  }
};
class Portfolio extends Component {
  render() {
    return (
      <div className="text-center p-5">
        <div>
          <h2>Portfolio</h2>
        </div>
        <div>
          <p>Here's some of my kickass shit</p>
        </div>
        <Row
          className="d-flex justify-content-center align-items-center"
          id="portfolio"
          style={styles.portfolioPage}
        >
          {projects.map(i => <PortfolioItem {...i} />)}
        </Row>
      </div>
    );
  }
}

export default Portfolio;
