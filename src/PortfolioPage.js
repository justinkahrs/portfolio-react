import React, { Component } from "react";

class PortfolioPage extends Component {
  render() {
    return (
      <div className="pageThree" id="p3">
        <div className="content text-center">
          <h1>Portfolio</h1>
          <h2>Check out some of my recent projects, ideas, and designs</h2>
          <div className="row">
            {this.props.children.map(i => <div className="col-md-4">{i}</div>)}
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioPage;
