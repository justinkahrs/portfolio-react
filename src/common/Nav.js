import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce'

const styles = (width, height) => {
  const isBig = () => width >= 768;
  const isLittle = () => width <= 768;
  return {
    navBar: {
      backgroundColor: 'white',
      borderTop: 'thin solid lightgrey',
      borderBottom: 'thin solid lightgrey',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 8px 0px',
      position: 'fixed',
      zIndex: '1',
      display: 'grid',
      alignItems: 'center',
      gridTemplateColumns: isBig() ? '1fr 1fr 1fr' : '1fr 1fr',
      height: isBig() ? '5rem' : '2rem',
      width: '99%',
      top: isBig() ? '2rem' : '0',
      transition: 'grid-template-columns 2s'
    },
    navBrand: {
      visibility: 'hidden',
      textAlign: isLittle() ? 'left' : 'center',
      paddingLeft: isLittle() ? '2rem' : null
    },
    navItems: {
      display: isLittle() ? 'none' : 'flex',
      gridColumn: '2',
      alignItems: 'center',
      justifyContent: 'space-between',
      listStyleType: 'none',
      padding: '0',
      margin: '0',
      textTransform: 'uppercase'
    }
  };
};
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      width: null,
      height: null,
      offSet: null,
    };
    this.updateDimensions = debounce(this.updateDimensions.bind(this), 100)
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { width } = this.state;
    return (
      <div style={styles(width).navBar}>
        <Link style={styles(width).navBrand} to="/">
          Anna VanderJagt
        </Link>
        <ul style={styles(width).navItems}>
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
