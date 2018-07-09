import React, { Component } from 'react'
import PortfolioItem from './PortfolioItem'
import projects from '../projects'

class Portfolio extends Component {
  styles = () => {
    const { big } = this.props
    return {
      container: {
        backgroundColor: '#F4F4F4',
        display: 'flex',
        flexDirection: 'column',
        minHeigth: '88vh',
        alignItems: 'center',
        justifyContent: 'center',
        padding: big ? '2rem 22%' : '',
      },
      header: {
        fontSize: '18px',
        textAlign: 'center',
      },
      portfolioItems: {},
      text: {},
      hr: {
        background: 'black',
        border: 0,
        height: '2px',
        maxWidth: '100px',
        marginTop: '1rem',
      },
    }
  }
  render() {
    return (
      <div id="work" style={this.styles().container}>
        <h1 style={this.styles().header}>
          TAKE A LOOK AT MY RECENT PROJECTS
          <hr style={this.styles().hr} />
        </h1>
        <div style={this.styles().portfolioItems}>
          {projects.map(i => (
            <PortfolioItem big={this.props.big} key={i.id} {...i} />
          ))}
        </div>
      </div>
    )
  }
}

export default Portfolio
