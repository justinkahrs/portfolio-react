import React, { Component } from "react";
import Scrollchor from "react-scrollchor";
import NavBrand from "./NavBrand";

const styles = {
  nav: {
    listStyleType: "none"
  },
  navLink: {
    display: "inline",
    paddingRight: "5rem"
  },
  navLinkColor: {
    color: "#3A4C39"
  },
  navbar: {
    display: "flex",
    backgroundColor: "#ffffff",
    height: "151px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
};
class Nav extends Component {
  render() {
    const { match } = this.props;
    return (
      <nav className="navbar-fixed-top" style={styles.navbar}>
        <div>
          <NavBrand match={match} />
        </div>
        <div>
          <ul style={styles.nav}>
            <li style={styles.navLink}>
              {match ? (
                <Scrollchor style={styles.navLinkColor} to="#about">
                  about
                </Scrollchor>
              ) : (
                <a style={styles.navLinkColor} href="/#about">
                  about
                </a>
              )}
            </li>
            <li style={styles.navLink}>
              {match ? (
                <Scrollchor style={styles.navLinkColor} to="#portfolio">
                  work
                </Scrollchor>
              ) : (
                <a style={styles.navLinkColor} href="/#portfolio">
                  work
                </a>
              )}
            </li>
            <li style={styles.navLink}>
              {match ? (
                <Scrollchor style={styles.navLinkColor} to="#resume">
                  resume
                </Scrollchor>
              ) : (
                <a style={styles.navLinkColor} href="/#resume">
                  resume
                </a>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
