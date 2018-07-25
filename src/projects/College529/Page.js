import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import CircleDown from 'react-icons/lib/fa/chevron-circle-down'
import throttle from 'lodash.throttle'

import metaData from './index'
import Navigation from '../../common/Nav'

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
      subTitle,
      taskPic,
      taskPic2,
      title,
      sitemap,
    } = metaData
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
          <p>
            Indiana University's 529 Savings Plans serves as an informational
            site to help IU employees and parents navigate 529 savings plans.
            The site was tested by myself with a group of representative users
            selected by the project manager. From the usability testing,
            qualitative and quantitative data were collected. A new information
            architecture was constructed based on the results.
          </p>
          <div style={this.styles().context}>{context}</div>
          <h1 style={this.styles().header}>
            THE PROCESS
            <hr style={this.styles().hr} />
          </h1>
          <p>
            Nineteen questions were compiled that represented typical tasks a
            user might take while interacting with the site. To streamline
            interviews, I created a testing input form to produce uniform
            results and help me focus more on conversation than taking notes.
            Users were made up of eight current and former IU staff. Each user
            was instructed to signal once they located a specific piece of
            information and I would move on to the next task.
          </p>
          <Image src={taskPic} />
          <p>
            Once testing concluded, a report was written to highlight
            quantitative and qualitative results, positives, areas for
            improvement, additional findings, and follow-up comments.
          </p>
          <Image src={taskPic2} />
          <p>
            The report indicated that users were waffling between three
            different sections in the existing architecture. It was recommended
            to further distinguish content between sections and narrow the scope
            as to prevent information overload on an already intimidating
            subject. A new site architecture was created that simplified the
            subject into distinguishable sections across the site's main nav
            highlighting a purely informative, non-bias approach to learn about
            529 plans.
          </p>
          <Image src={sitemap} />
          <h1 style={this.styles().header}>
            OBSERVATIONS AND INSIGHTS
            <hr style={this.styles().hr} />
          </h1>
          <p>
            I consider this testing method informal but fitting for time and
            number of participants available. The input form I created was
            helpful during each of the interviews. It allowed me to enter notes
            after each task and select a radio button for "success" or "fail".
            This project helped develop my usability reporting skills. In the
            future, I'd like to use more data visualizations within the report
            for visual emphasis. Admittedly, going into user testing I hadn't
            the slightest clue about 529 college savings plans. I had to be a
            quick study. This lack of knowledge ultimately helped create the new
            architecture as I thought about how I would break down a subject
            into simplified sections starting with the most basic question,
            "What is a 529?" View the new architecture on{' '}
            <a
              href="http://529.iu.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              529.iu.edu
            </a>.
          </p>
        </div>
      </div>
    )
  }
}

export default PortfolioPage
