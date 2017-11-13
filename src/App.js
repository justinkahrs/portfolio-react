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
import image from "./iu_trident_web_reverse.png";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Nav />
        <LandingPage />
        <AboutPage />
        <PortfolioPage>
          <PortfolioItem
            title="Project 1"
            imgURL={image}
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
        <ResumePage />
        <Footer />
      </div>
    );
  }
}

export default App;
