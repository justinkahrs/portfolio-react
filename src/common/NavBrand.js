import React, { Component } from "react";
import { Link } from "react-router-dom";

const styles = {
  navName: {
    color: "#C15C2E",
    fontSize: "42px",
    textDecoration: "none"
  },
  hidden: {
    display: "none"
  }
};

class NavBrand extends Component {
  render() {
    return (
      <div ref="navBrand">
        <Link to="/" style={styles.navName}>
          <div>
            Anna <br />
            VanderJagt
          </div>
        </Link>
      </div>
    );
  }
}
export default NavBrand;
