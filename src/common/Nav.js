import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from 'reactstrap';

const styles = {
  navBar: {
    backgroundColor: 'white',
    zIndex: '1',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'
  },
  navItems: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'
  }
};
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <Navbar
        className="fixed-top"
        style={styles.navBar}
        color="faded"
        light
        expand="md"
      >
        <NavbarBrand>
          <Link to="/">Anna VanderJagt</Link>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
