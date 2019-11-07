import React, { Component } from "react";
import throttle from "lodash.throttle";

import metaData from "./index";
import Header from "../../common/Header";
import Hero from "../../common/Hero";
import ImageContainer from "../../common/ImageContainer";
import PortfolioPage from "../../common/PortfolioPage";
import TextContainer from "../../common/TextContainer";

class Page extends Component {
  state = { scrolled: false };

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", throttle(this.handleScroll, 100), false);
  }
  componentWillReceiveProps() {
    window.scrollTo(0, 0);
  }

  handleScroll = () => {
    if (window.scrollY === 0) this.setState({ scrolled: false });
    if (window.scrollY > 0) this.setState({ scrolled: true });
  };
  
  styles = () => {
    const { big } = this.props;
    return {
      caption: {
        fontStyle: "italic",
        fontSize: "16px",
        textAlign: "center",
        paddingLeft: big ? "10rem" : "",
        paddingRight: big ? "10rem" : ""
      }
    };
  };

  render() {
    const {
      date,
      hero,
      id,
      subTitle,
      taskPic,
      taskPic2,
      title,
      sitemap
    } = metaData;
    const { big } = this.props;
    const { scrolled } = this.state;

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
        <br />
        <br />
        <Header title={"Project Context"} />
        <TextContainer>
          <React.Fragment>
            Indiana University's 529 Savings Plans website serves as an
            informational site to help IU employees and parents navigate 529
            savings plans.
          </React.Fragment>
        </TextContainer>
        <Header title={"The Process"} />
        <TextContainer>
          <React.Fragment>
            <ul>
              <li>
                Nineteen questions were compiled that represented typical tasks
                a user might take while interacting with the site
              </li>
              <li>
                Explained the workflow to participants, which required them to
                think out-loud and signal to me if they located a specific piece
                of information and that I’d be recording them
              </li>
              <li>
                Created a form that allowed me to easily move through tasks and
                stay involved in the interview
              </li>
              <li>
                Reported quantitative and qualitative results, areas for
                improvement, additional findings, and follow-up comments
              </li>
            </ul>
          </React.Fragment>
        </TextContainer>
        <ImageContainer big={big} pics={taskPic} />
        <React.Fragment>
            <div style={this.styles().caption}>
              Created an interview form that streamlined interview notes.
            </div>
        </React.Fragment>
        <Header title={"Observations and Insights"} />
        <ImageContainer big={big} pics={taskPic2} />
        <React.Fragment>
            <div style={this.styles().caption}>
              Success rates from staff participants.
            </div>
        </React.Fragment>
        <br/>
        <br/>
        <TextContainer>
          <React.Fragment>
            The report indicated that users were waffling between three
            different sections in the existing architecture. It was recommended
            to further distinguish content between sections and narrow the scope
            as to prevent information overload on an already intimidating
            subject. A new site architecture was created that simplified the
            subject into distinguishable sections across the site's main navigation.
          </React.Fragment>
        </TextContainer>
        <ImageContainer big={big} pics={sitemap} />
        <React.Fragment>
            <div style={this.styles().caption}>
              Site map diagram of tested and redesigned architecture.
            </div>
        </React.Fragment>
        <br/>
        <br/>
        <TextContainer>
          <React.Fragment>
            Admittedly, going into user testing I hadn't the slightest clue
            about 529 college savings plans. It had to be a quick study. This
            lack of knowledge ultimately helped create the new architecture as I
            thought about how I would break down a subject into simplified
            sections starting with the most basic question, "What is a 529?"
          </React.Fragment>
        </TextContainer>
        <TextContainer>
          <React.Fragment>
          View the new architecture on {" "}
            <a
              href="http://529.iu.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              529.iu.edu
            </a>
            .
          </React.Fragment>
        </TextContainer>
      </PortfolioPage>
    );
  }
}

export default Page;
