import React from 'react'
import { Image } from 'react-bootstrap'

export default class ImageContainer extends React.Component {
  styles = () => {
    const { big, noShadow } = this.props
    return {
      pic: {
        ...noShadow ? {} : { boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.2)' },
      },
      picContainer: {
        display: 'flex',
        flexDirection: big ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: '5rem',
      },
    }
  }
  render() {
    const { pics } = this.props
    return (
      <div style={this.styles().picContainer}>
        {Array.isArray(pics) ? (
          pics.map((pic, i) => (
            <Image alt="processPic" key={i} responsive src={pic} />
          ))
        ) : (
          <Image
            alt="processPic"
            style={this.styles().pic}
            responsive
            src={pics}
          />
        )}
      </div>
    )
  }
}
