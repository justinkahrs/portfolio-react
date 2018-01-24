import React, { Component } from "react";
import { Col, Grid } from "react-bootstrap";
import Scrollchor from "react-scrollchor";
import NavBrand from "./NavBrand";

const styles = {
  centerNav: {
    padding: "0",
    margin: "0",
    textAlign: "center"
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "0",
    listStyleType: "none",
    textAlign: "center"
  },
  navLink: {
    /* Add hover later */
    fontSize: "15.5px"
  },
  navLinkColor: {
    color: "#3A4C39"
  },
  navbar: {
    marginTop: "52px",
    zIndex: "1",
    verticalAlign: "middle",
    textAlign: "center",
    position: "fixed",
    height: "151px",
    lineHeight: "151px",
    width: "100%",
    backgroundColor: "white"
  },
  pullLeft: {
    textAlign: "left",
    paddingLeft: "0px"
  }
};
class Nav extends Component {
  render() {
    const { match } = this.props;
    return (
      <nav style={styles.navbar}>
        <Grid style={{ paddingLeft: "0px" }}>
          <Col style={styles.pullLeft} lg={4}>
            <NavBrand match={match} />
          </Col>
          <Col style={styles.centerNav} lg={4}>
            <ul style={styles.nav}>
              <li style={styles.navLink}>
                {match ? (
                  <Scrollchor style={styles.navLinkColor} to="#about">
                    ABOUT
                  </Scrollchor>
                ) : (
                  <a style={styles.navLinkColor} href="/#about">
                    ABOUT
                  </a>
                )}
              </li>
              <li style={styles.navLink}>
                {match ? (
                  <Scrollchor style={styles.navLinkColor} to="#portfolio">
                    PORTFOLIO
                  </Scrollchor>
                ) : (
                  <a style={styles.navLinkColor} href="/#portfolio">
                    PORTFOLIO
                  </a>
                )}
              </li>
              <li style={styles.navLink}>
                {match ? (
                  <Scrollchor style={styles.navLinkColor} to="#contact">
                    CONTACT
                  </Scrollchor>
                ) : (
                  <a style={styles.navLinkColor} href="/#contact">
                    CONTACT
                  </a>
                )}
              </li>
            </ul>
          </Col>
        </Grid>
      </nav>
    );
  }
}

export default Nav;
