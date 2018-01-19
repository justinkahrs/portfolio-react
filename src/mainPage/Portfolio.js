import React, { Component } from "react";
import PortfolioItem from "./PortfolioItem";
import projects from "../portfolio/projects";

const styles = {
  portfolioPage: {
    backgroundColor: "#fff",
    padding: "12em"
  }
};
class Portfolio extends Component {
  render() {
    return (
      <div className="row" id="portfolio" style={styles.portfolioPage}>
        <h1>Portfolio</h1>
        <h2>Check out some of my recent projects, ideas, and designs</h2>
        {projects.map(i => (
          <PortfolioItem id={i.id} title={i.title} imgURL={i.imgURL} />
        ))}
      </div>
    );
  }
}

export default Portfolio;
