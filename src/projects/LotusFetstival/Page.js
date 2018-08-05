import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
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

  styles = () => {
    const { big } = this.props
    return {
      button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '62px',
        width: big ? '250px' : '',
        backgroundColor: '#BB6655',
        color: 'white',
        marginTop: '3rem',
        fontFamily: 'Lato',
        fontSize: '14px',
        fontWeight: 'bold',
        letterSpacing: '1.5px',
        textDecoration: 'none',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      subHeading: {
        display: 'block',
      },
    }
  }

  render() {
    const {
      contentAudit,
      contentReq,
      date,
      gif,
      hero,
      id,
      personaSlideShow,
      siteMapSlideShow,
      subTitle,
      title,
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
            Lotus Education & Arts Foundation is a non-profit 501(c)3
            organization located in Bloomington, Indiana that collaborates with
            artists from around the world to facilitate educational programs and
            community events celebrating diversity and world culture.
          </React.Fragment>
          <React.Fragment>
            Among its many contributions to the community, the foundation’s
            annual Lotus World Music & Arts Festival attracts thousands of
            people to experience a week dedicated to world music and the arts.
            The festival is committed to being as open and accessible as
            possible, inviting everyone to become part of the music and arts of
            the world.
          </React.Fragment>
          <React.Fragment>
            I chose to use this website as a case study because it would benefit
            from a detailed analysis of its information architecture and a new
            structure and design. In its current state, the site suffers from
            significant architectural issues that interfere with the overall
            understanding of the organization and its goals.{' '}
            {big &&
              `See below for a
            high-fidelity wireframe.`}
          </React.Fragment>
          {big && (
            <React.Fragment>
              <iframe
                width="100%"
                height="500px"
                title="LotusFestival"
                src="https://xd.adobe.com/embed/ee97aed1-da0a-4c09-45ec-8b6228ae73cc-98a6/"
                frameborder="0"
                allowfullscreen
              />
              <div style={this.styles().buttonContainer}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={this.styles().button}
                  href="https://xd.adobe.com/embed/ee97aed1-da0a-4c09-45ec-8b6228ae73cc-98a6/"
                >
                  SEE FULL SCREEN DEMO
                </a>
              </div>
            </React.Fragment>
          )}
        </TextContainer>
        <Header title={'The Process'} />
        <TextContainer>
          <React.Fragment>
            To better understand the existing site and prioritize tasks, I put
            together strategy and scope documents that included a project brief,
            user demographics, personas, a content inventory, content
            requirements, and new architecture for the site moving forward.
          </React.Fragment>
          <React.Fragment>
            <span style={this.styles().subHeading}>Project brief</span>
            The current website is congested with content about both the
            foundation and festival. This does not meet the expectations of
            users visiting the site hoping to learn about the festival. It also
            makes it difficult for users to navigate through the site easily.
          </React.Fragment>
          <React.Fragment>
            <span style={this.styles().subHeading}>Demographics</span>
            Users are made up of a wide array of multi-generational, local, and
            regional community members including live music fans, world music
            fans, artists, musicians, makers, volunteers, young parents,
            families, and those interested in community engagement programs.
          </React.Fragment>
          <React.Fragment>
            With close proximity to Indiana University Bloomington campus, the
            Lotus Festival attracts members of the academic community who also
            make up a significant portion of the demographic.
          </React.Fragment>
          <span style={this.styles().subHeading}>Personas</span>
        </TextContainer>
        <SlideShow pics={personaSlideShow} />
        <TextContainer>
          <React.Fragment>
            <span style={this.styles().subHeading}>Content audit</span>
            For the content audit, I separated text/HTML pages, PDFs, images,
            and mP3 files. I then used column headings to further evaluate each
            page.
          </React.Fragment>
        </TextContainer>
        <ImageContainer pics={contentAudit} />
        <TextContainer>
          <React.Fragment>
            <span style={this.styles().subHeading}>Content requirements</span>
            From the content audit, I was able to narrow down the scope of the
            proposed website to include Lotus fest content only as the URL
            suggests. Users of lotusfest.org will need to know how to attend and
            navigate the festival and have information about upcoming shows,
            prices, and locations readily available.
          </React.Fragment>
        </TextContainer>
        <ImageContainer pics={contentReq} />
        <TextContainer>
          <React.Fragment>
            <span style={this.styles().subHeading}>The new IA and IXD</span>
            To​ ​improve​ ​the​ ​information​ ​architecture​,​ ​I ​analyzed​
            ​the​ ​existing​ ​site’s structure,​ ​categories,​ ​labels,​ ​and​
            ​navigation​ ​and​ ​access.​ ​Lotusfest.org​ ​has​ ​a​ ​broad scope​
            ​of​ ​information​ ​about​ ​the​ ​Lotus​ ​Foundation​ ​and​ ​its​
            ​respective​ ​programs.​ ​By separating​ ​out​ ​the​ ​festival​
            ​content​ ​into​ ​its​ ​own​ ​site,​ ​stakeholders​ ​gain​ ​the​
            ​opportunity​ ​to tell​ ​the​ ​story​ ​of​ ​Lotus​ ​World​ ​Music​
            ​Festival​ ​and​ ​show​ ​how​ ​important​ ​this​ ​event​ ​is​ ​to​
            ​the community.​
          </React.Fragment>
          <SlideShow pics={siteMapSlideShow} />
          <React.Fragment>
            Keeping​ ​users​ ​engaged​ ​while​ ​visiting​ ​the​ ​site​ ​is​
            ​pivotal​ ​to the​ ​mission​ ​of​ ​Lotus​ ​Foundation.​ ​Allowing​
            ​users​ ​to​ ​create​ ​their​ ​own​ ​schedules​ ​or​ ​buy tickets​
            ​should​ ​happen​ ​within​ ​the​ ​site​ ​to​ ​emphasize​ ​that​
            ​this​ ​is​ ​not​ ​purely​ ​informational but​ ​also​ ​a​ ​useful​
            ​tool​ ​that​ ​will​ ​enhance​ ​the​ ​Lotus​ ​experience for all
            attendees.​ ​By​ ​spreading​ ​content across​ ​a​ ​global​
            ​navigation,​ ​important​ ​information​ ​like​ ​ticket​ ​prices​
            ​and​ ​schedules​ ​will be​ ​easy​ ​to​ ​locate.​ ​Overall,​ I
            recommended ​applying​ ​a​ ​narrower​ ​scope​ ​to​ ​the​ ​existing​
            ​architecture​ ​will lead​ ​to​ ​a​ ​better​ ​user-experience​ ​for​
            ​end-users​ ​and​ ​a​ ​more​ ​scalable​ ​website​ ​for​ ​future
            festivals.
          </React.Fragment>
          <Image width="100%" responsive src={gif} />
        </TextContainer>
      </PortfolioPage>
    )
  }
}

export default Page
