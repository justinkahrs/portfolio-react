import React, { Component } from "react";

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
                  <a href="#about">about</a>
                </li>
                <li>
                  <a href="#portfolio">portfolio</a>
                </li>
                <li>
                  <a href="#resume">resume</a>
                </li>
                <li>
                  <a href="#contact">contact</a>
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
