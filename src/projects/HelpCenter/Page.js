import React, { Component } from "react";
import throttle from "lodash.throttle";

import metaData from "./index";
import Header from "../../common/Header";
import Hero from "../../common/Hero";
import ImageContainer from "../../common/ImageContainer";
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
      }
    };
  };

  render() {
    const {
      architectureHC,
      styleHC,
      gif,
      webWidget,
      contextHelp,
      date,
      hero,
      id,
      slideshow,
      subTitle,
      title
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
        <Header title={"Project context"} />
        <TextContainer>
          <React.Fragment>
            Libraries are complex institutions filled with information. One of
            the ongoing challenges is connecting users to the people and
            resources they need.{" "}
            <strong>
              The reality is that many users want to find information on their
              own.
            </strong>{" "}
            Zendesk Guide provides a great way to organize and share resources
            and empowers users to find what they need on their own. How a
            knowledge base is designed affects customers' experience with your
            brand. A knowledge base is only as helpful as its content and when
            users find that content is outdated or incorrect, that’s a
            reflection of the brand and its credibility to provide good service.
          </React.Fragment>
        </TextContainer>
        <TextContainer>
          <React.Fragment>
            At UCSF, the library’s knowledge base was largely outdated, did not
            have an assigned owner, and was very underutilized.
          </React.Fragment>
        </TextContainer>
        <Header title={"The process"} />
        <TextContainer>
          <React.Fragment>
            <strong>Problem</strong>
            <ul>
              <li>
                The content was massively outdated and lumped into catch-all
                categories
              </li>
              <li>Help Center wasn’t integrated into the main website</li>
              <li>Lacked buy-in from knowledge holders</li>
              <li>Inconsistent editorial and visual styles</li>
            </ul>
          </React.Fragment>
          <React.Fragment>
            <strong>Brainstorm</strong>
            <ul>
              <li>Identified knowledge gaps by auditing existing content</li>
              <li>
                Combed through support tickets to identify common inquiries
              </li>
              <li>
                Asked stakeholders what questions they’re constantly answering
              </li>
              <li>Benchmarked similar institutions' knowledge bases</li>
            </ul>
          </React.Fragment>
          <ImageContainer big={big} pics={architectureHC} />
        </TextContainer>
        <TextContainer>
          <React.Fragment>
            <strong>Solutions</strong>
            <ul>
              <li>
                Incorporated a new architecture that removed catch-all
                categories and library jargon
              </li>
              <li>
                Selected a new theme and created a visual and editorial style
                guide
              </li>
              <li>
                Integrated Zendesk Knowledge Capture to
                streamline support workflows
              </li>
              <li>Applied the Help Center Web Widget globally</li>
              <li>Enabled Contextual Help</li>
            </ul>
          </React.Fragment>
          <ImageContainer big={big} pics={styleHC} />
          <React.Fragment>
            <div style={this.styles().caption}>
              Style guide incorporated in the Help Center for easy reference.
            </div>
          </React.Fragment>
          <ImageContainer big={big} pics={gif} />
          <React.Fragment>
            <div style={this.styles().caption}>
              Knowledge Capture tool allows Zendesk agents to easily see if the
              answer to a patron’s inquiry is already in the Help Center. When
              replying to tickets, this tool will search and link to relevant
              documentation directly within the text editor instead of a
              separate browser window.
            </div>
          </React.Fragment>

          <ImageContainer big={big} pics={webWidget} />
          <React.Fragment>
            <div style={this.styles().caption}>
              Integrated the Help Center with the main library website by
              applying the Web Widget globally to every page.
            </div>
          </React.Fragment>

          <ImageContainer big={big} pics={contextHelp} />
          <React.Fragment>
            <div style={this.styles().caption}>
              Enabled Contextual Help, which is a tool within the Web Widget
              feature that uses the web page your user is currently on, along
              with Help Center content, to suggest Help Center articles.
            </div>
          </React.Fragment>
        </TextContainer>
        <Header title={"Before / After"} />
        <SlideShow pics={slideshow} />
        <Header title={"see my work"} />
        <React.Fragment>
          <div>
            <a href="https://www.library.ucsf.edu/news/introducing-the-new-online-library-help-center/">
              Introducing the New Online Library Help Center
            </a>
          </div>
          <div>
            <a href="https://ucsflibrary.zendesk.com/hc/en-us">
              UCSF Library Help Center{" "}
            </a>
          </div>
        </React.Fragment>
      </PortfolioPage>
    );
  }
}

export default Page;
