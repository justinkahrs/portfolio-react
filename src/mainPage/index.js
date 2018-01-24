import React from "react";
import Landing from "./Landing.js";
import About from "./About.js";
import Portfolio from "./Portfolio.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
import "./App.css";
import "./imgPalette.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

export default class extends React.Component {
  render() {
    return [<Landing />, <About />, <Portfolio />, <Contact />, <Footer />];
  }
}
