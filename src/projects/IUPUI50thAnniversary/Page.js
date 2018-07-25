import React, { Component } from 'react'
import Slider from 'react-slick'
import throttle from 'lodash.throttle'
import CircleDown from 'react-icons/lib/fa/chevron-circle-down'

import metaData from './index'
import Navigation from '../../common/Nav'
import { PrevArrow, NextArrow } from '../../common/SliderArrows'
import './styles.css'

class PortfolioPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolled: false,
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    window.addEventListener('scroll', throttle(this.handleScroll, 100), false)
  }
  componentWillReceiveProps() {
    window.scrollTo(0, 0)
  }

  handleScroll = () => {
    if (window.scrollY === 0) this.setState({ scrolled: false })
    if (window.scrollY > 0) this.setState({ scrolled: true })
  }

  styles = () => {
    const { scrolled } = this.state
    return {
      aboveFold: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
      },
      circleDown: {
        fill: 'rgba(58, 76, 57, .34)',
        opacity: scrolled ? 0 : 1,
        transition: 'opacity .25s ease-in-out',
      },
      date: {
        fontFamily: 'Lato',
        fontSize: '21px',
        fontWeight: '300',
      },
      image: {
        margin: 'auto',
        marginTop: '-6rem',
        maxWidth: '100%',
      },
      page: {
        display: 'flex',
        flexDirection: 'column',
        padding: ' 0 16%',
        textAlign: 'center',
      },
      header: {
        paddingTop: '2rem',
        fontSize: '18px',
        textAlign: 'center',
      },
      heroSection: {
        marginTop: '12rem',
      },
      hr: {
        background: 'black',
        border: 0,
        height: '2px',
        maxWidth: '100px',
        marginTop: '1rem',
      },
      title: {
        fontFamily: 'Old Standard TT',
        fontSize: '31px',
        fontWeight: '700',
        margin: '.5rem',
      },
      subTitle: {
        fontFamily: 'Lato',
        fontStyle: 'italic',
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
          <div style={this.styles().aboveFold}>
            <div style={this.styles().heroSection}>
              <div style={this.styles().date}>{date}</div>
              <div style={this.styles().title}>{title}</div>
              <div style={this.styles().subTitle}>{subTitle}</div>
              <img
                alt="representation of project"
                style={this.styles().image}
                src={hero}
              />
            </div>
            <CircleDown size={32} style={this.styles().circleDown} />
          </div>
          <h1 style={this.styles().header}>
            SOME CONTEXT
            <hr style={this.styles().hr} />
          </h1>
          <p className="portfolioText" style={this.styles().context}>
            {context.split('\n').map((item, i) => (
              <p className={i !== 0 && 'portfolioText'} key={i}>
                {item}
                {i === 1 && (
                  <a
                    href="https://50.iupui.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here.
                  </a>
                )}
              </p>
            ))}
          </p>
          <h1 style={this.styles().header}>
            THE PROCESS
            <hr style={this.styles().hr} />
          </h1>
          <p className="portfolioText" style={this.styles().process}>
            {process.split('\n').map((item, i) => (
              <p className={i !== 0 && 'portfolioText'} key={i}>
                {item}
              </p>
            ))}
          </p>
          <div style={this.styles().processPicContainer}>
            {processPics.map(pic => (
              <img
                alt="processPic"
                style={this.styles().processPic}
                src={pic}
              />
            ))}
          </div>
          <p className="portfolioText" style={this.styles().process}>
            {process2.split('\n').map((item, i) => (
              <p className={i !== 0 && 'portfolioText'} key={i}>
                {item}
              </p>
            ))}
          </p>
          <div>
            <img alt="processPic" style={this.styles().siteMap} src={siteMap} />
          </div>
          <p className="portfolioText" style={this.styles().siteMapText}>
            {siteMapText}
          </p>
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
          <p className="portfolioText" style={this.styles().slideShowText}>
            {slideShowText}
          </p>
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
          <p className="portfolioText" style={this.styles().observationText}>
            {observationText.split('\n').map((item, i) => (
              <p className={i !== 0 && 'portfolioText'} key={i}>
                {item}
              </p>
            ))}
          </p>
        </div>
      </div>
    )
  }
}

export default PortfolioPage
