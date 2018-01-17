import React, { Component } from "react";
import Scrollchor from "react-scrollchor";
import { Link } from "react-router-dom";
import "./nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="row">
        <nav className="navbar navbar-fixed-top">
          <div className="navbar-header">
            {this.props.match ? (
              <Scrollchor to="#">Anna VanderJagt</Scrollchor>
            ) : (
              <Link className="navbar-brand" to="/">
                Anna VanderJagt
              </Link>
            )}
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                {this.props.match ? (
                  <Scrollchor to="#about">about</Scrollchor>
                ) : (
                  <a href="/#about">about</a>
                )}
              </li>
              <li>
                {this.props.match ? (
                  <Scrollchor to="#portfolio">work</Scrollchor>
                ) : (
                  <a href="/#portfolio">work</a>
                )}
              </li>
              <li>
                {this.props.match ? (
                  <Scrollchor to="#resume">resume</Scrollchor>
                ) : (
                  <a href="/#resume">resume</a>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
