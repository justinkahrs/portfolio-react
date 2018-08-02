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
        alignItems: 'center',
        justifyContent: 'center',
        padding: big ? '0 5rem 25%' : '4rem 3rem',
      },
      content: {
        maxWidth: '960px',
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
        marginTop: '2rem',
        marginBottom: '6rem',
      },
    }
  }
  render() {
    return (
      <div style={this.styles().container}>
        <div style={this.styles().content}>
          <h1 id="work" style={this.styles().header}>
            TAKE A LOOK AT MY RECENT PROJECTS
            <hr style={this.styles().hr} />
          </h1>
          <div style={this.styles().portfolioItems}>
            {projects.map(i => (
              <PortfolioItem big={this.props.big} key={i.id} {...i} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
