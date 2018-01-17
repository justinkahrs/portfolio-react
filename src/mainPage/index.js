import React from "react";
import LandingPage from "./LandingPage.js";
import AboutPage from "./AboutPage.js";
import PortfolioPage from "../portfolio/PortfolioPage.js";
import ResumePage from "./ResumePage.js";
import Footer from "./Footer.js";
import Nav from "../common/Nav.js";
import "./App.css";
import "./imgPalette.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

export default class extends React.Component {
  render() {
    return (
      <div>
        <Nav match={this.props.match} />
        <LandingPage />
        <AboutPage />
        <PortfolioPage />
        <ResumePage />
        <Footer />
      </div>
    );
  }
}
