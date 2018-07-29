import React from 'react'
import { Image } from 'react-bootstrap'

export default class ImageContainer extends React.Component {
  styles = () => {
    return {
      pic: {},
      picContainer: {},
    }
  }
  render() {
    const { pics } = this.props
    return (
      <div style={this.styles().picContainer}>
        {pics.map((pic, i) => (
          <Image
            alt="processPic"
            key={i}
            style={this.styles().pic}
            src={pic}
          />
        ))}
      </div>
    )
  }
}
