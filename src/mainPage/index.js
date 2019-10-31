import React from "react";
import About from "./About.js";
import Contact from "./Contact.js";
import Footer from "../common/Footer";
import Landing from "./Landing.js";
import Navigation from "../common/Nav";
import Portfolio from "./Portfolio.js";

const styles = {
  app: {
    display: "grid"
  }
};

class MainPage extends React.Component {
  render() {
    const { big } = this.props;
    return (
      <div>
        <Navigation big={big} {...this.props} />
        <div style={styles.app}>
          <Landing big={big} />
          <About big={big} />
          <Portfolio big={big} />
          <Contact big={big} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default MainPage;
