import React, { Component } from "react";
import { Row } from "react-bootstrap";
import PortfolioItem from "./PortfolioItem";
import projects from "../portfolio/projects";

const styles = {
  portfolioHeader: {
    color: "#C15C2E",
    fontSize: "22px",
    textAlign: "center",
    textTransform: "uppercase"
  },
  portfolioPage: {
    backgroundColor: "#fff",
    padding: "12em"
  },
  portfolioText: {
    fontSize: "16px"
  }
};
class Portfolio extends Component {
  render() {
    return (
      <Row id="portfolio" style={styles.portfolioPage}>
        <h1 style={styles.portfolioHeader}>Portfolio</h1>
        <p style={styles.portfolioText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          eros aliquam, tincidunt eros. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nullam velit ligula, maximus in hendrerit vitae,
          fermentum id mauris.
        </p>
        {projects.map(i => (
          <PortfolioItem id={i.id} title={i.title} imgURL={i.imgURL} />
        ))}
      </Row>
    );
  }
}

export default Portfolio;
