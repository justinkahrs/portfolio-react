import React from "react";
import Landing from "./Landing.js";
import About from "./About.js";
import Portfolio from "./Portfolio.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
import "./App.css";
import "./imgPalette.css";

const styles = {
  app: {
    display: "grid"
  }
};

class MainPage extends React.Component {
  render() {
    const { big } = this.props;
    return (
      <div style={styles.app}>
        <Landing big={big} />
        <About big={big} />
        <Portfolio big={big} />
        <Contact big={big} />
        <Footer big={big} />
      </div>
    );
  }
}

export default MainPage;
