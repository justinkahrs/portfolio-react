import React, { Component } from "react";
import { Link } from "react-router-dom";

import throttle from "lodash.throttle";

import metaData from "./index";
import Header from "../../common/Header";
import Hero from "../../common/Hero";
import PortfolioPage from "../../common/PortfolioPage";
import TextContainer from "../../common/TextContainer";
import SlideShow from "../../common/SlideShow";

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
      },
      strongs: {
        textAlign: "center"
      }
    };
  };

  render() {
    const {
      date,
      id,
      subTitle,
      title,
      ecosystem,
      slideshow,
      slideshow2,
      slideshow3
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
          hero={ecosystem}
          scrolled={scrolled}
        />
        <br />
        <br />
        <Header title={"Project context"} />
        <TextContainer>
          <React.Fragment>
            The UCSF Library’s core services are provided by subject matter
            experts and allow users to receive individualized help and make
            progress towards their goals. After an extensive content audit of
            the library’s website utilizing user personas and visual analytics,
            I identified inconsistencies in the discoverability of services,
            page layout, and knowledge gaps. To emphasize the human-centered
            service the library has to offer, I initiated the Ask an Expert
            Redesign.
          </React.Fragment>
        </TextContainer>
        <Header title={"Process"} />
        <TextContainer>
          <React.Fragment>
            <strong>Empathize</strong> – To empathize with the end-user I used
            existing personas to further understand end-user goals, values, and
            challenges.
          </React.Fragment>
          <React.Fragment>
            <strong>Define</strong> – To define specific problems, I examined
            page heatmaps and documented editorial and visual inconsistencies
            between pages to share with stakeholders.
          </React.Fragment>
        </TextContainer>
        <TextContainer>
          <React.Fragment>
            <strong>Ideate and create</strong> – To ideate, I documented
            similarities in content across existing service webpages and met
            with stakeholders to identify the most important tasks, messages,
            and pieces of information users should encounter while on their
            particular service webpage. From there, I synthesized the
            information to develop low-fi wireframes to share with stakeholders.
          </React.Fragment>
          <strong>Iterate. Improve. Iterate some more.</strong>
        </TextContainer>
        <Header title={"Goals and outcomes"} />
        <TextContainer>
          <React.Fragment>
            <strong>Define groups from a frontstage user perspective</strong>{" "}
            – Created a service ecosystem diagram to effectively communicate
            redesign scope to stakeholders.
          </React.Fragment>
          <React.Fragment>
            <strong>
              Apply a consistent look and feel to all expert pages
            </strong>{" "}
            – Collaborated with the UX designer to create a design pattern with
            predefined chunks, elements, and use cases.
          </React.Fragment>
        </TextContainer>
        <SlideShow pics={slideshow} />
        <TextContainer>
          <React.Fragment>
            <div style={this.styles().caption}>
              Design patterns are based on a three-column grid and have various
              options for different types of expert content.
            </div>
          </React.Fragment>
        </TextContainer>
        <TextContainer>
          <React.Fragment>
            <strong>Get users to the information they need right away</strong>{" "}
            – Site architecture was shifted to emphasize the UCSF Library’s
            value statement and brand promise of <i>We’re here to help.</i>
          </React.Fragment>
          <div style={this.styles().strongs}>
            <div>
              <strong>Find</strong> Materials
            </div>
            <div>
              <strong>Use</strong> the Library
            </div>
            <div>
              <strong>Ask</strong> an Expert
            </div>
          </div>
        </TextContainer>
        <SlideShow pics={slideshow2} />
        <TextContainer>
          <React.Fragment>
            <div style={this.styles().caption}>
              New architecture focuses on actions users can take to utilize the
              library’s services. Ask an Expert is now in the main menu to
              emphasize human-centered services.
            </div>
          </React.Fragment>
        </TextContainer>
        <TextContainer>
          <React.Fragment>
            <strong>Empower people to find the information they need</strong>{" "}
            – Placed direct links to the most important help articles in the
            path of the user to integrate the{" "}
            <Link to="/portfolio/2">new and improved Help Center</Link> into
            redesigned expert pages.
          </React.Fragment>
        </TextContainer>
        <Header title={"Before / After"} />
        <SlideShow pics={slideshow3} />
      </PortfolioPage>
    );
  }
}

export default Page;
