import React, { Component } from "react";
import "./portfolioPage.css";

class PortfolioPage extends Component {
  render() {
    return (
      <div className="row portfolioPage" id="portfolio">
        <h1>Portfolio</h1>
        <h2>Check out some of my recent projects, ideas, and designs</h2>
        {this.props.children.map(i => (
          <div className="col-md-6 col-lg-4 portfolioItem">{i}</div>
        ))}
      </div>
    );
  }
}

export default PortfolioPage;
