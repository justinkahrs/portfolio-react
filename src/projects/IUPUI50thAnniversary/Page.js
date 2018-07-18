import React, { Component } from 'react'
import Slider from 'react-slick'

import metaData from './index'
import Navigation from '../../common/Nav'
import { PrevArrow, NextArrow } from '../../common/SliderArrows'


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
    const {
      big,
      context,
      date,
      hero,
      observationText,
      process,
      process2,
      processPics,
      slideshow,
      slideShowText,
      siteMap,
      siteMapText,
      subTitle,
      title,
      whiteBoardPics,
    } = metaData
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
          <div style={this.styles().processPicContainer}>
            {processPics.map(pic => (
              <img
                alt="processPic"
                style={this.styles().processPic}
                src={pic}
              />
            ))}
          </div>
          <div style={this.styles().process}>{process2}</div>
          <div>
            <img alt="processPic" style={this.styles().siteMap} src={siteMap} />
          </div>
          <div style={this.styles().siteMapText}>{siteMapText}</div>
          <div style={{ width: '50%', textAlign: 'center' }}>
            <Slider {...carouselSettings}>
              {slideshow.map(pic => (
                <img
                  alt="processPic"
                  style={this.styles().processPic}
                  src={pic}
                />
              ))}
            </Slider>
          </div>
          <div style={this.styles().slideShowText}>{slideShowText}</div>
          <div style={this.styles().whiteBoardPics}>
            {whiteBoardPics.map(pic => (
              <img
                alt="processPic"
                style={this.styles().processPic}
                src={pic}
              />
            ))}
          </div>
          <h1 style={this.styles().header}>
            OBSERVATIONS AND INSIGHTS
            <hr style={this.styles().hr} />
          </h1>
          <div style={this.styles().observationText}>{observationText}</div>
        </div>
      </div>
    )
  }
}

export default PortfolioPage
