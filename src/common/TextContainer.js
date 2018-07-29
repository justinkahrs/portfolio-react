import React from 'react'

export default class TextContainer extends React.Component {
  styles = () => {
    return {
      text: {},
    }
  }
  render() {
    const { children } = this.props
    return Array.isArray(children) ? (
      children.map((item, i) => (
        <p className={i !== 0 ? 'portfolioText' : ''} key={i}>
          {item}
        </p>
      ))
    ) : (
      <p>{children}</p>
    )
  }
}
