import React, { Component } from "react";
import Scrollchor from "react-scrollchor";
import "./nav.css";

class Nav extends Component {
  render() {
    return (
      <div classNameName="row">
        <nav className="navbar navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#">
                Brand
              </a>
            </div>

            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Scrollchor to="#about">about</Scrollchor>
                </li>
                <li>
                  <Scrollchor to="#portfolio">work</Scrollchor>
                </li>
                <li>
                  <Scrollchor to="#resume">resume</Scrollchor>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
