import React, { Component } from 'react'
import throttle from 'lodash.throttle'

import metaData from './index'
import Header from '../../common/Header'
import Hero from '../../common/Hero'
import ImageContainer from '../../common/ImageContainer'
import PortfolioPage from '../../common/PortfolioPage'
import TextContainer from '../../common/TextContainer'
import SlideShow from '../../common/SlideShow'

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

  styles = () => ({
    caption: {
      fontStyle: 'italic',
      fontSize: '16px',
      textAlign: 'center',
      paddingLeft: '10rem',
      paddingRight: '10rem',
    }
  })

  render() {
    const {
      architectureHC,
      titlesHC,
      styleHC,
      gif,
      webWidget,
      contextHelp,
      date,
      hero,
      id,
      slideshow,
      subTitle,
      title,
    } = metaData
    const { big } = this.props
    const { scrolled } = this.state

    return (
      <PortfolioPage big={big} id={id}>
        <Hero
          big={big}
          date={date}
          title={title}
          subTitle={subTitle}
          hero={hero}
          scrolled={scrolled}
        />
        <Header title={'Project context'} />
        <TextContainer>
          <React.Fragment>
          Libraries are complex institutions filled with information. One of the ongoing challenges is connecting users to the people and resources they need. <strong>The reality is that many users want to find information on their own.</strong> Zendesk Guide provides a great way to organize and share resources and empowers users to find what they need on their own. 
How a knowledge base is designed affects customers' experience with your brand. A knowledge base is only as helpful as its content and when users find that content is outdated or incorrect, that’s a reflection of the brand and its credibility to provide good service. 
At UCSF, the library’s knowledge base was largely outdated, did not have an assigned owner, and was very underutilized.

          </React.Fragment>
        </TextContainer>
        <Header title={'Goals and outcomes'} />
        <TextContainer>
          <React.Fragment>
          <strong>Identify knowledge gaps</strong> – Audited existing content, reached out to stakeholders for fresh content, and research support ticket history to identify information gaps within the existing knowledge base.

          </React.Fragment>
          <React.Fragment>
          <strong>Information architecture</strong> – Mapped out the existing architecture and benchmarked library knowledge base architecture.
          </React.Fragment>
        <ImageContainer big={big} pics={architectureHC} />
        </TextContainer>
        <TextContainer>
          <React.Fragment>
          <strong>Reduce cognitive load on the user</strong> – Incorporated a clear architecture that’s jargon-free with a narrow, deep architecture approach.

          </React.Fragment>
          <React.Fragment>
          <strong>Consistent look and feel</strong> – Selected new Zendesk theme and created style guide for writing for the web and formatting content.
          </React.Fragment>
          <ImageContainer big={big} pics={titlesHC} />
          <React.Fragment><div style={this.styles().caption}>Consistent article titles. Question? Answer.</div></React.Fragment>
          <ImageContainer big={big} pics={styleHC} />
          <React.Fragment><div style={this.styles().caption}>Style guide incorporated in the Help Center for easy reference.</div></React.Fragment>
        <React.Fragment>
          <strong>Integrate with existing tools/platforms</strong> – Provided multiple portals to the Help Center throughout main website and incorporated existing support tool so stakeholders answering support tickets can easily access documentation.
          </React.Fragment>
          <ImageContainer big={big} pics={gif} />
          <React.Fragment><div style={this.styles().caption}>Knowledge Capture tool allows Zendesk agents to easily see if the answer to a patron’s inquiry  is already in the Help Center. When replying to tickets, this tool will search and link to relevant documentation directly within the text editor instead of a separate browser window.</div></React.Fragment>

          <ImageContainer big={big} pics={webWidget} />
          <React.Fragment><div style={this.styles().caption}>Integrated the Help Center with the main library website by applying the Web Widget globally to every page.</div></React.Fragment>

          <ImageContainer big={big} pics={contextHelp} />
          <React.Fragment><div style={this.styles().caption}>Enabled Contextual Help, which is a tool within the Web Widget feature that uses the web page your user is currently on, along with Help Center content, to suggest Help Center articles.
</div></React.Fragment>

        </TextContainer>
        <Header title={'Before / After'} />
        <SlideShow pics={slideshow} />
        <Header title={'Learn more and see my work'} />
        <React.Fragment>
          <div><a href="https://www.library.ucsf.edu/news/introducing-the-new-online-library-help-center/">Introducing the New Online Library Help Center</a></div>
           <div><a href="https://ucsflibrary.zendesk.com/hc/en-us">UCSF Library Help Center </a></div>
        
        </React.Fragment>

      </PortfolioPage>
    )
  }
}

export default Page
