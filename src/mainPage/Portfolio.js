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
        padding: big ? '20rem 10rem' : ''
      },
      header: {
        color: '#C15C2E',
        textAlign: 'center',
        textTransform: "uppercase",
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
      <div id="work" style={this.styles().container}>
        <h4 style={this.styles().header}>Here you'll find my recent projects</h4>
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
