import React, { Component } from 'react'
import throttle from 'lodash.throttle'

import metaData from './index'
import Header from '../../common/Header'
import Hero from '../../common/Hero'
import ImageContainer from '../../common/ImageContainer'
import Navigation from '../../common/Nav'
import SlideShow from '../../common/SlideShow'
import TextContainer from '../../common/TextContainer'

class PortfolioPage extends Component {
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
      processPics,
      slideshowPics,
      siteMap,
      subTitle,
      title,
      whiteBoardPics,
    } = metaData
    const { big } = this.props
    const { scrolled } = this.state

    return (
      <div>
        <Navigation big={big} {...this.props} />
        <div className={big ? 'pageContainer' : ''}>
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
              Indiana University Purdue University (IUPUI) is celebrating their
              50th anniversary through 2018-2019 and requested a website be
              created for all celebratory events, stories, and projects. The
              client wanted a “wow” factor with high-impact imagery and content
              that aligns with the school’s commitment to success and innovation
              in Indiana and beyond. The site’s audience consists of alumni,
              faculty, staff, students, donors, and the surrounding community.
            </React.Fragment>
            <React.Fragment>
              As I was not able to see this project to completion, due to a move
              across the country, I have shared my contributions as a proof of
              concept. You can find the live site{' '}
              <a
                href="https://50.iupui.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here.
              </a>
            </React.Fragment>
          </TextContainer>
          <Header title={'The Process'} />
          <TextContainer>
            <React.Fragment>
              The IU Communications development process is designed to be
              flexible to each client's needs. For phase one of this project, a
              client proposal was developed noting the scope of the new site,
              its adherance to web accessbility standards, and the number of
              custom features being implemented.
            </React.Fragment>
            <React.Fragment>
              Once the proposal was approved, phase two began. The goal of this
              phase was to develop a detailed understanding of the future site.
              To start, an internal kick-off meeting was held with the project
              team. We then met with the client to go over their requests for
              the site and to gather context to develop a timeline moving
              forward.
            </React.Fragment>
            <React.Fragment>
              For the proposed website, a stakeholder workshop was held.
              Post-its with high-level ideas based on what we learned from the
              client at this point were adhered to the meeting room walls and
              attendees were encouraged to review ideas and add more granular
              pieces of information that they’d like to see under each subject
              heading. The idea was to show the client this is what we know so
              far and we’d like for them to expand upon it. Stakeholders were
              then asked to identify what are the most important tasks,
              messages, and types of imagery they would like to see on the
              proposed site.
            </React.Fragment>
          </TextContainer>
          <ImageContainer pics={processPics} big={big} />
          <TextContainer>
            <React.Fragment>
              The next phase of the development process focused on strategy.
              During this phase, the team created a strategy based on research
              from the previous phase. From the ideas gathered at the
              stakeholder workshop, the information architect (myself) and
              content lead sorted through piles of Post-its to tailor the topic
              and focus of the project.
            </React.Fragment>
            <React.Fragment>
              I then created a sitemap that was presented to the internal team
              for review and presented to the client for approval.
            </React.Fragment>
          </TextContainer>
          <ImageContainer pics={siteMap} big={big} />
          <TextContainer>
            <React.Fragment>
              Once the sitemap was approved, the creative phase began. This
              phase is where the real magic happens—wireframes are built, UI is
              styled, and content is written. For the build-out, I used Cascade
              WCMS Hannon Hill, (IU’s chosen content management system) and
              developed a high-fidelity wireframe with built-out pages and
              content notes. Once the wireframe was complete, an internal review
              was performed to identify any information gaps. The wireframe was
              then presented to the client for approval.
            </React.Fragment>
            <React.Fragment />
          </TextContainer>
          <SlideShow pics={slideshowPics} />
          <TextContainer>
            <React.Fragment>
              After sharing the wireframe with the client, I met with the
              front-end developer and designer on the project to discuss
              interaction design for custom functionalities. Websites at IU are
              built using atomic design principles where a page is made up of
              “sections” and each section can have multiple “chunks” (check out
              the IU Web Style Guide). When a client wants specific
              functionality outside of the system, things become a bit more
              complicated. In this project specifically, the client wanted a
              custom event feed to highlight anniversary events, an interactive
              timeline that allowed for multiple content types (e.g. text only,
              single image, carousel), and a story submission page.
            </React.Fragment>
            <React.Fragment />
          </TextContainer>
          <ImageContainer pics={whiteBoardPics} big={big} />
          <Header title={'Observations and Insights'} />
          <TextContainer>
            <React.Fragment>
              All websites created by IU Communications must meet AA WCAG
              accessibility standards. The challenge with this project was
              designing custom functionality that's visually appealing, meets
              accessibility standards, and is usable from the client's
              perspective moving forward. Ultimately, this project helped me
              understand how to design within the constraints of the WCMS
              framework and university policy.
            </React.Fragment>
            <React.Fragment>
              Through my involvement in the stakeholder workshop, I was able to
              strengthen my facilitation skills. Hearing from multiple
              perspectives during card-sorting activity provided a great
              starting point for understanding the goals and context-of-use as
              well as constructing the information architecture.
            </React.Fragment>
          </TextContainer>
        </div>
      </div>
    )
  }
}

export default PortfolioPage
