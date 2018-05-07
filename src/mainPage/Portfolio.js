import React, { Component } from 'react';

import PortfolioItem from './PortfolioItem';
import projects from '../projects';

class Portfolio extends Component {
  styles = () => {
    const { big } = this.props;
    return {
      header: {
        color: '#C15C2E',
        textAlign: 'center'
      },
      portfolioPage: {
        display: 'grid',
        padding: big ? '0 21rem' : '',
        gridTemplateColumns: big
          ? '1fr 1fr 1fr'
          : '1fr',
        top: !big ? '-5rem' : ''
      },
      text: {
        textAlign: 'center',
        padding: this.props.big ? '0 22rem' : '1rem'
      }
    };
  };
  render() {
    return (
      <div>
        <h2 style={this.styles().header}>Portfolio</h2>
        <p style={this.styles().text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          eros aliquam, tincidunt eros. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nullam velit ligula, maximus in hendrerit vitae,
          fermentum id mauris.
        </p>
        <div style={this.styles().portfolioPage} id="portfolio">
          {projects.map(i => (
            <PortfolioItem big={this.props.big} key={i.id} {...i} />
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
