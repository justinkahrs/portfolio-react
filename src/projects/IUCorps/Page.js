import React, { Component } from 'react'
import throttle from 'lodash.throttle'

import metaData from './index'
import Header from '../../common/Header'
import Hero from '../../common/Hero'
import ImageContainer from '../../common/ImageContainer'
import PortfolioPage from '../../common/PortfolioPage'
import SlideShow from '../../common/SlideShow'
import TextContainer from '../../common/TextContainer'

class Page extends Component {
  state = { scrolled: false }

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

  render() {
    const {
      date,
      hero,
      id,
      slideshow,
      siteMap,
      subTitle,
      title,
      whiteBoardPics,
    } = metaData
    const { big } = this.props
    const { scrolled } = this.state

    return (
      <PortfolioPage big={big} id={id}>
        <Hero
          date={date}
          title={title}
          subTitle={subTitle}
          hero={hero}
          scrolled={scrolled}
        />
        <Header title={'Some Context'} />
        <TextContainer>
          <React.Fragment>
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
          </React.Fragment>
        </TextContainer>
        <Header title={'The Process'} />
        <TextContainer>
          <React.Fragment>
            To get to know the new organization, a stakeholder workshop was
            held. Since the IU Communications team had not worked with this
            particular client before, we wanted to start by introducing our
            user-centered and responsive website strategy, accessibility
            policies, and the IU brand. We then identified primary audiences for
            the site and began a group exercise.
          </React.Fragment>
          <React.Fragment>
            The group exercise required stakeholders to break into groups of
            three and spend 10 minutes answering three questions by writing
            answers on individual Post-its. The questions read:
          </React.Fragment>
          <React.Fragment>
            1. What is the most important information users need to see on the
            site?
          </React.Fragment>
          <React.Fragment>
            2. What are the most important tasks users need to perform when they
            visit the site?
          </React.Fragment>
          <React.Fragment>
            3. What are the benefits of engagement for primary audiences?
          </React.Fragment>
          <React.Fragment>
            At the end of the ten minutes, groups were instructed to choose
            their top five answers to each question and adhere them to the
            corresponding question. Next, every stakeholder was given dot
            stickers and instructed to place one sticker next to their top three
            answers on that particular question. We then discussed answers with
            the most Post-its at the end of the group activity.
          </React.Fragment>
        </TextContainer>
        <ImageContainer big={big} pics={whiteBoardPics} />
        <TextContainer>
          <React.Fragment>
            After the workshop, both the information architect (myself) and the
            content specialist got together to create a sitemap based on the
            research phase.
          </React.Fragment>
        </TextContainer>
        <ImageContainer big={big} pics={siteMap} />
        <TextContainer>
          <React.Fragment>
            Once the sitemap was presented and approved by the client, I built
            out the wireframe in IU’s WCMS and sample content was added. The
            site was then passed off to the client.
          </React.Fragment>
        </TextContainer>
        <SlideShow pics={slideshow} />
        <Header title={'Observations and Insights'} />
        <TextContainer>
          <React.Fragment>
            Since the client's organization was still forming in the midst of
            our stakeholder workshop and throughout this project, there were a
            lot of ideas brought to the table that were sometimes out of scope.
            This client hadn’t worked with our team before and was unfamiliar
            with how our development process worked. Being more transparent
            about our process and defining responsibilities continuously while
            interacting with stakeholders would help instill trust in the work.
          </React.Fragment>
        </TextContainer>
      </PortfolioPage>
    )
  }
}

export default Page
