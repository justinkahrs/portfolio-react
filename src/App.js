import React, { Component } from "react";
import Nav from "./Nav.js";
import LandingPage from "./LandingPage.js";
import AboutPage from "./AboutPage.js";
import PortfolioPage from "./PortfolioPage.js";
import ResumePage from "./ResumePage.js";
import Footer from "./Footer.js";
import ImagePaletteProvider from "react-image-palette";
import img from "./smiley.jpg";
import "./App.css";
import "./imgPalette.css";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <LandingPage />

        <AboutPage />
        <PortfolioPage>
          <ImagePaletteProvider
            crossOrigin
            image="https://lastfm-img2.akamaized.net/i/u/300x300/47c2adc94fe74673afdb2722e8d3ee6c.png"
            key="https://lastfm-img2.akamaized.net/i/u/300x300/47c2adc94fe74673afdb2722e8d3ee6c.png"
          >
            {({ backgroundColor, color, alternativeColor }) => (
              <div className="album" style={{ backgroundColor, color }}>
                <h3>Project 1</h3>
                <a style={{ color: alternativeColor }}>Learn More</a>
                <br />
                <img src="https://lastfm-img2.akamaized.net/i/u/300x300/47c2adc94fe74673afdb2722e8d3ee6c.png" />
              </div>
            )}
          </ImagePaletteProvider>
          <ImagePaletteProvider
            crossOrigin
            image="https://lastfm-img2.akamaized.net/i/u/300x300/a9352d18f49545e6975e27dd9f61d004.png"
            key="https://lastfm-img2.akamaized.net/i/u/300x300/a9352d18f49545e6975e27dd9f61d004.png"
          >
            {({ backgroundColor, color, alternativeColor }) => (
              <div className="album" style={{ backgroundColor, color }}>
                <h3>Project 2</h3>
                <a style={{ color: alternativeColor }}>Learn More</a>
                <br />
                <img src="https://lastfm-img2.akamaized.net/i/u/300x300/a9352d18f49545e6975e27dd9f61d004.png" />
              </div>
            )}
          </ImagePaletteProvider>
          <ImagePaletteProvider
            crossOrigin
            image="https://lastfm-img2.akamaized.net/i/u/300x300/47c2adc94fe74673afdb2722e8d3ee6c.png"
            key="https://lastfm-img2.akamaized.net/i/u/300x300/47c2adc94fe74673afdb2722e8d3ee6c.png"
          >
            {({ backgroundColor, color, alternativeColor }) => (
              <div className="album" style={{ backgroundColor, color }}>
                <h3>Project 3</h3>
                <a style={{ color: alternativeColor }}>Learn More</a>
                <br />
                <img src="https://lastfm-img2.akamaized.net/i/u/300x300/47c2adc94fe74673afdb2722e8d3ee6c.png" />
              </div>
            )}
          </ImagePaletteProvider>
        </PortfolioPage>
        <ResumePage />
        <Footer />
      </div>
    );
  }
}

export default App;
