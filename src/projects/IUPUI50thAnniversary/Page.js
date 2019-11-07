import React, { Component } from "react";
import throttle from "lodash.throttle";

import metaData from "./index";
import Header from "../../common/Header";
import Hero from "../../common/Hero";
import ImageContainer from "../../common/ImageContainer";
import PortfolioPage from "../../common/PortfolioPage";
import SlideShow from "../../common/SlideShow";
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

  render() {
    const {
      date,
      gif,
      hero,
      id,
      mobile,
      processPics,
      siteMap,
      slideshowPics,
      subTitle,
      title,
      whiteBoardPics
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
            Indiana University–Purdue University Indianapolis (IUPUI) requested
            a website to celebrate its 50th anniversary that incorporated
            celebratory events, stories, and projects. The client wanted a “wow”
            factor with high-impact imagery and content that aligns with the
            school’s commitment to success and innovation in Indiana and beyond.
            The site’s audience consists of alumni, faculty, staff, students,
            donors, and the surrounding community.
          </React.Fragment>
        </TextContainer>
        <Header title={"The Process"} />
        <TextContainer>
          <React.Fragment>
            <strong>Phase 1 – Kick-off</strong>
            <ul>
              <li>Determined proposal and customization scope.</li>
            </ul>
          </React.Fragment>
        </TextContainer>
        <TextContainer>
          <React.Fragment>
            <strong>Phase 2 – Understand</strong>
            <ul>
              <li>
                Held a stakeholder workshop to further specify goals and needs
              </li>
              <ul>
                <li>
                  Displayed high-level ideas and encouraged attendees to add
                  more granular pieces of information below
                </li>
                <li>
                  Asked stakeholders what are the most important tasks,
                  messages, and imagery they’d like to see
                </li>
              </ul>
            </ul>
          </React.Fragment>
        </TextContainer>
        <ImageContainer pics={processPics} big={big} />
        <TextContainer>
          <React.Fragment>
            <strong>Phase 3 – Strategize</strong>
            <ul>
              <li>Synthesized ideas and insights gained from the workshop</li>
              <li>Created sitemap</li>
              <li>
                Shared sitemap with the internal team, iterated, then shared
                sitemap with the client
              </li>
            </ul>
          </React.Fragment>
        </TextContainer>
        <ImageContainer pics={siteMap} big={big} />
        <TextContainer>
          <React.Fragment>
            <strong>Phase 4 - Create</strong>
            <ul>
              <li>A prototype was built out based on approved sitemap</li>
              <li>
                Content notes were added to represent where the content would
                live
              </li>
              <li>
                Shared prototype with the team to identify any information gaps
              </li>
              <li>Presented wireframe to client</li>
            </ul>
          </React.Fragment>
        </TextContainer>
        <SlideShow pics={slideshowPics} />
        <TextContainer>
          <React.Fragment>
            <strong>Phase 5 – Customize</strong>
            <ul>
              <li>
                Whiteboarded with front-end developer and designer to ideate
                custom features requested by the client
              </li>
              <ul>
                <li>a custom event feed </li>
                <li>an interactive timeline</li>
                <li>a story submission page</li>
              </ul>
              <li>Shared prototypes with client</li>
            </ul>
          </React.Fragment>
        </TextContainer>
        <ImageContainer pics={whiteBoardPics} big={big} />
        {big && <ImageContainer pics={gif} big={big} />}
        <Header title={"Observations and Insights"} />
        <TextContainer>
          <React.Fragment>
            The challenge with this project was designing visually appealing
            custom functionality that met accessibility standards. Ultimately,
            this project helped me understand how to design within the
            constraints of the CMS framework and university policy.
          </React.Fragment>
          <React.Fragment>
            Through my involvement in the stakeholder workshop, I was able to
            strengthen my facilitation skills. Hearing from multiple
            perspectives during the Post-it activity provided a great starting
            point for understanding the goals and needs and played a major role
            in developing the information architecture.
          </React.Fragment>
        </TextContainer>
        <Header title={"See my work"} />
        <ImageContainer pics={mobile} big={big} noShadow />
        <TextContainer>
          <React.Fragment>
            <div style={{ textAlign: "center" }}>
              <a href="https://50.iupui.edu/">50.iupui.edu</a>
            </div>
          </React.Fragment>
        </TextContainer>
      </PortfolioPage>
    );
  }
}

export default Page;
