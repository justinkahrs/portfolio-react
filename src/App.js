import React, { Component } from "react";
import Nav from "./Nav.js";
import LandingPage from "./LandingPage.js";
import AboutPage from "./AboutPage.js";
import PortfolioPage from "./PortfolioPage.js";
import ResumePage from "./ResumePage.js";
import Footer from "./Footer.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <LandingPage />
        <AboutPage />
        <PortfolioPage />
        <ResumePage />
        <Footer />
      </div>
    );
  }
}

export default App;
