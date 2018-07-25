import React, { Component } from 'react'
import throttle from 'lodash.throttle'
import Slider from 'react-slick'
import CircleDown from 'react-icons/lib/fa/chevron-circle-down'

import metaData from './index'
import Navigation from '../../common/Nav'
import { PrevArrow, NextArrow } from '../../common/SliderArrows'

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
      image: {
        margin: 'auto',
        marginTop: '-6rem',
        maxWidth: '100%',
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
      date,
      hero,
      slideshow,
      siteMap,
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
            <div style={this.styles().date}>{date}</div>
            <div style={this.styles().title}>{title}</div>
            <div style={this.styles().subTitle}>{subTitle}</div>
            <img
              alt="representation of project"
              style={this.styles().image}
              src={hero}
            />
            <CircleDown size={32} style={this.styles().circleDown} />
          </div>
          <h1 style={this.styles().header}>
            SOME CONTEXT
            <hr style={this.styles().hr} />
          </h1>
          <p style={this.styles().context}>
            IU Corps is a newly formed organization on the Indiana University
            Bloomington campus. The organization works to connect students who
            want to participate in engagement with the people and offices on and
            off campus who provide such opportunities. While the organization is
            still in its infancy, the client wanted a website that would
            introduce IU Corps to campus and community to enhance the social,
            cultural, and environmental impact of community engagement
            experiences. While the first phase of the site was scoped to contain
            high-level information, the client wanted the site to be scalable
            for future phases, namely a sorting-house functionality that would
            connect students with opportunities and be used as a tool to measure
            and communicate engagement outcomes.
          </p>
          <h1 style={this.styles().header}>
            THE PROCESS
            <hr style={this.styles().hr} />
          </h1>
          <p style={this.styles().process}>
            To get to know the new organization, a stakeholder workshop was
            held. Since the IU Communications team had not worked with this
            particular client before, we wanted to start by introducing our
            user-centered and responsive website strategy, accessibility
            policies, and the IU brand. We then identified primary audiences for
            the site and began a group exercise. The group exercise required
            stakeholders to break into groups of three and spend 10 minutes
            answering three questions by writing answers on individual Post-its.
            The questions read: 1. What is the most important information users
            need to see on the site? 2. What are the most important tasks users
            need to perform when they visit the site? 3. What are the benefits
            of engagement for primary audiences? At the end of the ten minutes,
            groups were instructed to choose their top five answers to each
            question and adhere them to the corresponding question. Next, every
            stakeholder was given dot stickers and instructed to place one
            sticker next to their top three answers on that particular question.
            We then discussed answers with the most Post-its at the end of the
            group activity.
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
          <p>
            After the workshop, both the information architect (myself) and the
            content specialist got together to create a sitemap based on the
            research phase.
          </p>
          <p>
            <img alt="processPic" style={this.styles().siteMap} src={siteMap} />
          </p>
          <p>
            Once the sitemap was presented and approved by the client, I built
            out the wireframe in IU’s WCMS and sample content was added. The
            site was then passed off to the client.
          </p>
        </div>
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
        <h1 style={this.styles().header}>
          OBSERVATIONS AND INSIGHTS
          <hr style={this.styles().hr} />
        </h1>
        <p>
          Since the client's organization was still forming in the midst of our
          stakeholder workshop and throughout this project, there were a lot of
          ideas brought to the table that were sometimes out of scope. This
          client hadn’t worked with our team before and was unfamiliar with how
          our development process worked. Being more transparent about our
          process and defining responsibilities continuously while interacting
          with stakeholders would help instill trust in the work.
        </p>
      </div>
    )
  }
}

export default PortfolioPage
