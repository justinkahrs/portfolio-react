import React from 'react'
import Navigation from './Nav'

export default class PortfolioPage extends React.Component {
  styles = () => {
    return {
      container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 25%',
        textAlign: 'center',
      },
    }
  }
  render() {
    const { big, children } = this.props
    return (
      <div>
        <Navigation big={big} {...this.props} />
        <div style={this.styles().container}>{children}</div>
      </div>
    )
  }
}
