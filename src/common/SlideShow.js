import React from 'react'
import Slider from 'react-slick'
import { PrevArrow, NextArrow } from './SliderArrows'

export default class SlideShow extends React.Component {
  styles = () => {
    return {
      pic: {},
    }
  }
  render() {
    const carouselSettings = {
      arrows: true,
      className: 'slides',
      dots: true,
      infinite: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const { pics } = this.props
    return (
      <div style={{ width: '50%', textAlign: 'center' }}>
        <Slider {...carouselSettings}>
          {pics.map((pic, i) => (
            <img alt="processPic" key={i} style={this.styles().pic} src={pic} />
          ))}
        </Slider>
      </div>
    )
  }
}
