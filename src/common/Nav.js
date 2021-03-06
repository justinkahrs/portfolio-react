import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import Close from "react-icons/lib/md/close";
import throttle from "lodash.throttle";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";

import "./nav.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      portfolio: false,
      sticky: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", throttle(this.handleScroll, 100), false);

    if (window.location.href.includes("/portfolio/")) {
      this.setState({ sticky: true });
    }
  }

  generateLink = location => {
    if (window.location.href.includes("/portfolio/")) {
      return (
        <a
          style={
            location === "Anna VanderJagt"
              ? this.styles().navBrand
              : this.styles().navItem
          }
          href={`../../#${location.toLowerCase().replace(/\s/g, "")}`}
        >
          {location}
        </a>
      );
    } else {
      return (
        <a
          style={
            location === "Anna VanderJagt"
              ? this.styles().navBrand
              : this.styles().navItem
          }
          href={`#${location.toLowerCase().replace(/\s/g, "")}`}
        >
          {location}
        </a>
      );
    }
  };

  handleScroll = () => {
    const { big } = this.props;
    const { sticky } = this.state;

    const scrollAmount = big ? 650 : 300;

    if (window.scrollY >= scrollAmount && !sticky) {
      this.setState({ sticky: true });
    }
    if (window.scrollY < scrollAmount && sticky) {
      this.setState({ sticky: false });
    }
  };

  styles = active => {
    const { open } = this.state;
    return {
      bootstrapNav: {
        display: "flex !important",
        flexDirection: "column !important",
        alignItems: "center !important",
        justifyContent: "center !important"
      },
      closeButton: {
        color: "#888",
        display: open ? "flex" : "none",
        justifyContent: "flex-end",
        height: "3rem",
        width: "3rem",
        float: "right",
        marginRight: "1rem",
        marginTop: "1rem"
      },
      menuIcon: {
        display: open ? "none" : ""
      },
      navBar: {
        alignItems: "center",
        backgroundColor: "white",
        display: "flex",
        height: "7.438em",
        justifyContent: "space-around",
        position: "fixed",
        width: "100%",
        zIndex: 10
      },
      navBarContents: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "0 7.3%",
        width: "100%"
      },
      navBrand: {
        color: "#A85B4B",
        cursor: "pointer",
        fontFamily: "Old Standard TT, serif",
        fontSize: "32px",
        fontWeight: "bold",
        textAlign: "center",
        textDecoration: "none"
      },
      navItem: {
        fontFamily: "Lato, sans",
        fontSize: "15.5px",
        fontWeight: "700",
        letterSpacing: "1.5px",
        textDecoration: "none",
        color: "#24170A",
        alignItems: "center",
        border: active ? "2px solid black" : "none",
        cursor: "pointer",
        display: "flex",
        height: "62.5px",
        justifyContent: "center",
        width: "195.85px"
      },
      navItemContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      },
      navItems: {
        display: "flex",
        flexDirection: "row",
        listStyleType: "none",
        textDecoration: "none",
        marginBottom: "0 !important"
      }
    };
  };

  toggleOpen = () => this.setState({ open: !this.state.open });

  render() {
    const { big } = this.props;
    if (big) {
      return (
        <div style={this.styles().navBar}>
          <div style={this.styles().navBarContents}>
            <div style={this.styles().navBrand}>
              {this.generateLink("Anna VanderJagt")}
            </div>
            <ul style={this.styles().navItems}>
              <li style={this.styles().navItem}>
                {this.generateLink("ABOUT")}
              </li>
              <li style={this.styles().navItem}>{this.generateLink("WORK")}</li>
              <li style={this.styles(true).navItem}>
                {this.generateLink("CONTACT")}
              </li>
            </ul>
          </div>
        </div>
      );
    }
    return (
      <Navbar
        expanded={this.state.open}
        fixedTop
        collapseOnSelect
        onToggle={this.toggleOpen}
      >
        <Navbar.Header>
          <Navbar.Brand>
            {/* eslint-disable-next-line*/}
            <a style={this.styles().navBrand}>Anna VanderJagt</a>
          </Navbar.Brand>
          <Navbar.Toggle style={this.styles().menuIcon} />
          <div style={{ height: "55px" }}>
            <Close
              style={this.styles().closeButton}
              onClick={this.toggleOpen}
            />
          </div>
        </Navbar.Header>
        <Navbar.Collapse style={{ color: "#24170A !important" }}>
          <Nav style={this.styles().navItemContainer}>
            <NavItem eventKey={1} href="#about" style={this.styles().navItem}>
              ABOUT
            </NavItem>
            <NavItem eventKey={2} href="#work" style={this.styles().navItem}>
              WORK
            </NavItem>
            <NavItem eventKey={2} href="#contact" style={this.styles().navItem}>
              CONTACT
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
