import React from 'react'

export default class Header extends React.Component {
  styles = () => {
    return {
      header: {
        paddingTop: '2rem',
        fontSize: '18px',
        textAlign: 'center',
      },
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
    const { title } = this.props
    return (
      <h1 style={this.styles().header}>
        {title.toUpperCase()}
        <hr style={this.styles().hr} />
      </h1>
    )
  }
}
