import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Close from 'react-icons/lib/md/close';
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
    window.addEventListener('scroll', throttle(this.handleScroll, 100), false);

    if (window.location.href.includes('/portfolio/')) {
      this.setState({ sticky: true });
    }
  }

  generateLink = location => {
    if (window.location.href.includes('/portfolio/')) {
      return <Link to={`../../#${location}`}>{location}</Link>;
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

    const scrollAmount = big ? 650 : 300;

    if (window.scrollY >= scrollAmount && !sticky) {
      this.setState({ sticky: true });
    }
    if (window.scrollY < scrollAmount && sticky) {
      this.setState({ sticky: false });
    }
  };

  styles = () => ({
    bootstrapNav: {
      display: 'flex !important',
      flexDirection: 'column !important',
      alignItems: 'center !important',
      justifyContent: 'center !important'
    },
    closeButton: {
      color: '#888',
      display: this.state.open ? 'flex' : 'none',
      justifyContent: 'flex-end',
      height: '3rem',
      width: '3rem',
      float: 'right',
      marginRight: '1rem',
      marginTop: '1rem'
    },
    menuIcon: {
      display: this.state.open ? 'none' : ''
    },
    navBrand: {
      opacity: this.state.sticky ? '1' : '0',
      transition: 'opacity .25s linear, visibility .25s linear',
      textAlign: 'center',
      fontSize: '22px',
      fontFamily: 'Playfair Display, serif',
      color: '#c15c2e',
      cursor: 'pointer',
      textDecoration: 'none',
      visibility: this.state.sticky ? 'visible' : 'hidden'
    }
  });

  toggleOpen = () => this.setState({ open: !this.state.open });

  render() {
    const { big } = this.props;
    if (big) {
      return (
        <div className="navBar">
          <div style={this.styles().navBrand}>
            {this.generateLink('Anna VanderJagt')}
          </div>
          <ul className="navItems">
            <li>{this.generateLink('ABOUT')}</li>
            <li>{this.generateLink('PORTFOLIO')}</li>
            <li>{this.generateLink('CONTACT')}</li>
          </ul>
          <div />
        </div>
      );
    }
    return (
      <div style={{ maxHeight: '55px' }}>
        <Navbar
          style={this.styles().bootstrapNav}
          className="bootstrapNav"
          expanded={this.state.open}
          fixedTop
          collapseOnSelect
          onToggle={this.toggleOpen}
        >
          <Navbar.Header>
            <Navbar.Brand>
              <a style={this.styles().navBrand}>
                {this.generateLink('Anna VanderJagt')}
              </a>
            </Navbar.Brand>
            <Navbar.Toggle style={this.styles().menuIcon} />
            <div style={{ height: '55px' }}>
              <Close
                style={this.styles().closeButton}
                onClick={this.toggleOpen}
              />
            </div>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1}>{this.generateLink('ABOUT')}</NavItem>
              <NavItem eventKey={2}>{this.generateLink('PORTFOLIO')}</NavItem>
              <NavItem eventKey={2}>{this.generateLink('CONTACT')}</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
