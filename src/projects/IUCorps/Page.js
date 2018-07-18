import React, { Component } from 'react'
import metaData from './index'
import Navigation from '../../common/Nav'

class PortfolioPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  componentWillReceiveProps() {
    window.scrollTo(0, 0)
  }

  styles = () => {
    return {
      image: {
        margin: 'auto',
        maxWidth: '100%',
      },
      page: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20rem 3rem',
        textAlign: 'center',
      },
      header: {
        fontSize: '18px',
        textAlign: 'center',
      },
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
    const { big, context, date, hero, process, subTitle, title } = metaData
    return (
      <div>
      <Navigation big={big} {...this.props} />
      <div style={this.styles().page}>
        <div style={this.styles().date}>{date}</div>
        <div style={this.styles().title}>{title}</div>
        <div style={this.styles().subTitle}>{subTitle}</div>
        <img
          alt="representation of project"
          style={this.styles().image}
          src={hero}
        />
        <h1 style={this.styles().header}>
          SOME CONTEXT
          <hr style={this.styles().hr} />
        </h1>
        <div style={this.styles().context}>{context}</div>
        <h1 style={this.styles().header}>
          THE PROCESS
          <hr style={this.styles().hr} />
        </h1>
        <div style={this.styles().process}>{process}</div>
      </div>
      </div>
    )
  }
}

export default PortfolioPage
