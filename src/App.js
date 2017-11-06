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
      <div className="container-fluid">
        <Nav />
        <LandingPage />
        <PortfolioPage>
          <PortfolioItem
            title="Project 1"
            imgURL="https://lastfm-img2.akamaized.net/i/u/300x300/47c2adc94fe74673afdb2722e8d3ee6c.png"
            carouselURLs={[
              "https://lastfm-img2.akamaized.net/i/u/300x300/47c2adc94fe74673afdb2722e8d3ee6c.png",
              "https://i.imgur.com/MuhSOSd.jpg",
              "https://lastfm-img2.akamaized.net/i/u/300x300/47c2adc94fe74673afdb2722e8d3ee6c.png"
            ]}
          />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
        </PortfolioPage>
        <AboutPage />
        <ResumePage />
        <Footer />
      </div>
    );
  }
}

export default App;
