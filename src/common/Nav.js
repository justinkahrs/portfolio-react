import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from 'react-icons/lib/md/menu';
import throttle from 'lodash.throttle';
import ScrollIntoView from 'react-scroll-into-view';

import './nav.css';

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
    this.props.big &&
      window.addEventListener(
        'scroll',
        throttle(this.handleScroll, 100),
        false
      );
  }

  generateLink = location => {
    if (window.location.href.includes('/portfolio/')) {
      return (
        <Link
          className={location === 'Anna VanderJagt' ? 'navBrand' : 'navItems'}
          to={`../../#${location}`}
        >
          {location}
        </Link>
      );
    } else {
      return (
        <ScrollIntoView
          selector={`#${location.toLowerCase().replace(/\s/g, '')}`}
        >
          {location}
        </ScrollIntoView>
      );
    }
  };

  handleScroll = () => {
    const { big } = this.props;
    const { sticky } = this.state;

    if (big && window.scrollY >= 800 && !sticky) {
      this.setState({ sticky: true });
    }
    if (big && window.scrollY < 800 && sticky) {
      this.setState({ sticky: false });
    }
  };

  styles = () => ({
    menuIcon: {
      display: this.props.big ? 'none' : 'flex',
      height: '100%',
      width: '100%'
    },
    navBrand: {
      opacity: this.state.sticky || this.props.match ? '1' : '0',
      transition: 'opacity .5s linear'
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
        <div style={this.styles().navBrand} className="navBrand">
          {this.generateLink('Anna VanderJagt')}
        </div>
        <ul className="navItems">
          <li>{this.generateLink('ABOUT')}</li>
          <li>{this.generateLink('PORTFOLIO')}</li>
          <li>{this.generateLink('CONTACT')}</li>
        </ul>
        <ul style={this.styles().dropDown} className="navItemsBurger">
          <li>{this.generateLink('ABOUT')}</li>
          <li>{this.generateLink('PORTFOLIO')}</li>
          <li>{this.generateLink('CONTACT')}</li>
        </ul>
        <div />
      </div>
    );
  }
}

export default Navigation;
