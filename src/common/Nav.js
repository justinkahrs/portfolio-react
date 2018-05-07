import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from 'react-icons/lib/md/menu';

import './nav.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  styles = () => ({
    menuIcon: {
      display: this.props.big ? 'none' : 'flex',
      height: '100%',
      width: '100%'
    },
    dropDown: {
      display: this.state.open ? 'block' : 'none'
    }
  });

  toggleOpen = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div className="navBar">
        <MenuIcon onClick={this.toggleOpen} style={this.styles().menuIcon} />
        <Link className="navBrand" to="/">
          Anna VanderJagt
        </Link>
        <ul className="navItems">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ul style={this.styles().dropDown} className="navItemsBurger">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div />
      </div>
    );
  }
}

export default Navigation;
