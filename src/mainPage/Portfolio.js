import React, { Component } from 'react';
import debounce from 'lodash.debounce';

import PortfolioItem from './PortfolioItem';
import projects from '../projects';

const portfolioPage = width => {
  const isBig = () => width >= 768;

  return {
    portfolioPage: {
      display: 'grid',
      gridTemplateColumns: '1fr 4fr 1fr',
      gridTemplateRows: '1fr 1fr',
      top: isBig() ? '-5rem' : '-2rem',
    },
  }
}
const styles = {
  header: {
    gridColumn: '2',
    gridRow: '1'
  },
  title: {
    gridColumn: '2',
    gridRow: '1'
  },
  projects: {
    maxHeight: '30%',
    gridColumn: '2',
    gridRow: '2'
  },
  projectGrid: {
    display: 'subgrid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr'
  }
};
class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null
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
    this.setState({ width: window.innerWidth });
  }
  render() {
    return (
      <div style={portfolioPage(this.state.width).portfolioPage} id="portfolio">
        <div style={styles.header}>
          <h2>Portfolio</h2>
          <p>Here's some of my kickass shit</p>
        </div>
        <div style={styles.projects}>
          <div style={styles.projectGrid}>
            {projects.map(i => <PortfolioItem key={i} {...i} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
