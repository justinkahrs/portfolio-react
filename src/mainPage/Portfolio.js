import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';
import projects from '../projects';

class Portfolio extends Component {
  styles = () => {
    const { big } = this.props;
    return {
      container: {
        display: 'flex',
        flexDirection: 'column',
        minHeigth: '88vh',
        alignItems: 'center',
        justifyContent: 'center',
        padding: big ? '10rem 0' : ''
      },
      header: {
        color: '#C15C2E',
        textAlign: 'center'
      },
      portfolioItems: {
        display: 'flex',
        flexDirection: big ? 'row' : 'column',
        padding: big ? '' : '0 3rem'
      },
      text: {
        textAlign: 'center',
        padding: big ? '0 22rem' : '0 3rem'
      }
    };
  };
  render() {
    return (
      <div style={this.styles().container}>
        <div id="portfolio" />
        <h2 style={this.styles().header}>Portfolio</h2>
        <p style={this.styles().text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          eros aliquam, tincidunt eros. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nullam velit ligula, maximus in hendrerit vitae,
          fermentum id mauris.
        </p>
        <div style={this.styles().portfolioItems}>
          {projects.map(i => (
            <PortfolioItem big={this.props.big} key={i.id} {...i} />
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
