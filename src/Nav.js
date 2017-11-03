import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#p1">
            Anna VanderJagt
          </a>
          <ul className="nav nav-pills">
            <li className="pull-right">
              <a className="nav-link" href="#p4">
                Resume
              </a>
            </li>
            <li className="pull-right">
              <a className="nav-link" href="#p3">
                Portfolio
              </a>
            </li>
            <li className="pull-right">
              <a className="nav-link active" href="#p2">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
