import React, { Component } from "react";
import Nav from "./Nav.js";
import LandingPage from "./LandingPage.js";
import AboutPage from "./AboutPage.js";
import PortfolioPage from "./PortfolioPage.js";
import ResumePage from "./ResumePage.js";
import Footer from "./Footer.js";
import PortfolioItem from "./PortfolioItem.js";
import "./App.css";
import "./imgPalette.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <LandingPage />

        <AboutPage />
        <PortfolioPage>
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
        </PortfolioPage>
        <ResumePage />
        <Footer />
      </div>
    );
  }
}

export default App;
