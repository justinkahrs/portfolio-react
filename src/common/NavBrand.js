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
  hideBeforeScroll = () => {
    console.log("am I getting called?");
    console.log(this.refs.navBrand.scrollTop);
  };
  render() {
    return (
      <div onScroll={this.hideBeforeScroll} ref="navBrand">
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
