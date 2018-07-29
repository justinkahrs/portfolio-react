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

  styles = () => {
    return {
      page: {
        display: 'flex',
        flexDirection: 'column',
        padding: ' 0 16%',
        textAlign: 'center',
      },
    }
  }

  render() {
    const { date, hero, subTitle, taskPic, taskPic2, title, sitemap } = metaData
    const { big } = this.props
    const { scrolled } = this.state

    return (
      <div>
        <Navigation big={big} {...this.props} />
        <div style={this.styles().page}>
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
              Indiana University's 529 Savings Plans serves as an informational
              site to help IU employees and parents navigate 529 savings plans.
              The site was tested by myself with a group of representative users
              selected by the project manager. From the usability testing,
              qualitative and quantitative data were collected. A new
              information architecture was constructed based on the results.
            </React.Fragment>
          </TextContainer>
          <Header title={'The Process'} />
          <TextContainer>
            <React.Fragment>
              Nineteen questions were compiled that represented typical tasks a
              user might take while interacting with the site. To streamline
              interviews, I created a testing input form to produce uniform
              results and help me focus more on conversation than taking notes.
              Users were made up of eight current and former IU staff. Each user
              was instructed to signal once they located a specific piece of
              information and I would move on to the next task.
            </React.Fragment>
          </TextContainer>
          <ImageContainer pics={taskPic} />
          <TextContainer>
            <React.Fragment>
              Once testing concluded, a report was written to highlight
              quantitative and qualitative results, positives, areas for
              improvement, additional findings, and follow-up comments.
            </React.Fragment>
          </TextContainer>
          <ImageContainer pics={taskPic2} />
          <TextContainer>
            <React.Fragment>
              The report indicated that users were waffling between three
              different sections in the existing architecture. It was
              recommended to further distinguish content between sections and
              narrow the scope as to prevent information overload on an already
              intimidating subject. A new site architecture was created that
              simplified the subject into distinguishable sections across the
              site's main nav highlighting a purely informative, non-bias
              approach to learn about 529 plans.
            </React.Fragment>
          </TextContainer>
          <ImageContainer pics={sitemap} />
          <Header title={'Observations and Insights'} />
          <TextContainer>
            <React.Fragment>
              I consider this testing method informal but fitting for time and
              number of participants available. The input form I created was
              helpful during each of the interviews. It allowed me to enter
              notes after each task and select a radio button for "success" or
              "fail". This project helped develop my usability reporting skills.
              In the future, I'd like to use more data visualizations within the
              report for visual emphasis. Admittedly, going into user testing I
              hadn't the slightest clue about 529 college savings plans. I had
              to be a quick study. This lack of knowledge ultimately helped
              create the new architecture as I thought about how I would break
              down a subject into simplified sections starting with the most
              basic question, "What is a 529?" View the new architecture on{' '}
              <a
                href="http://529.iu.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                529.iu.edu
              </a>.
            </React.Fragment>
          </TextContainer>
        </div>
      </div>
    )
  }
}

export default PortfolioPage
