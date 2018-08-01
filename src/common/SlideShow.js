import React from 'react'
import Slider from 'react-slick'
import { Image } from 'react-bootstrap'
import { PrevArrow, NextArrow } from './SliderArrows'

export default class SlideShow extends React.Component {
  styles = () => {
    return {
      container: {
        maxHeight: '400px !important',
      },
    }
  }
  render() {
    const carouselSettings = {
      arrows: true,
      className: 'slides',
      lazyLoad: true,
      infinite: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const { pics } = this.props
    return (
      <div style={this.styles().container}>
        <Slider {...carouselSettings}>
          {pics.map((pic, i) => (
            <Image responsive alt="processPic" key={i} src={pic} />
          ))}
        </Slider>
      </div>
    )
  }
}
