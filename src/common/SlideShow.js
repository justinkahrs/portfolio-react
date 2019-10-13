import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

export default class SlideShow extends React.Component {
  styles = () => {
    return {
      container: {
        maxHeight: '400px !important',
        marginTop: '4rem',
        marginBottom: '4rem',
      },
    }
  }
  render() {
    const { pics } = this.props
    return (
      <div style={this.styles().container}>
        {pics && (<Carousel interval={null}>
          {pics.map((pic, i) => (
            <Carousel.Item key={i}>
              <img
                width={900}
                height={500}
                alt="processPic"
                key={i}
                style={{ margin: 'auto' }}
                src={pic}
              />
            </Carousel.Item>
          ))}
        </Carousel>)}
      </div>
    )
  }
}
