import React, { Component } from "react";
import { Col, Image, Row } from "react-bootstrap";

const styles = {
  aboutHeader: {
    color: "#FFF",
    fontSize: "15px",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    paddingBottom: "3rem"
  },
  aboutImage: {
    height: "286px",
    width: "286px"
  },
  aboutImageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "3rem"
  },
  aboutPage: {
    backgroundColor: "#9EBCB6",
    padding: "12em"
  },
  aboutQuote: {
    borderLeft: "none",
    fontSize: "22px"
  },
  aboutText: {
    fontFamily: "serif",
    fontSize: "16px"
  }
};

class About extends Component {
  render() {
    return (
      <div className="row" id="about" style={styles.aboutPage}>
        <Row>
          <Col style={styles.aboutImageContainer} lg={12}>
            <Image
              style={styles.aboutImage}
              src="https://avatars1.githubusercontent.com/u/21692318?s=460&v=4"
              circle
              responsive
            />
          </Col>
        </Row>

        <h1 style={styles.aboutHeader}>
          I specialize in information architecture & UX
        </h1>
        <div style={styles.aboutText}>
          <p>
            As an information architect intern for IU Communications, I work
            with a team to develop seamless user experiences for websites across
            IU. Currently pursuing dual master’s degrees in information science
            and library science, I focus my coursework in information
            architecture, user-experience design, and front-end development. I
            also hold a bachelors degree in art history from Kendall College of
            Art & Design.
          </p>
          <blockquote style={styles.aboutQuote}>
            The best word to describe how we work: partnership.
          </blockquote>
          <p>
            As a frequent wanderer of the complex
            <a href="https://youtu.be/f99PcP0aFNE">"series of tubes"</a> we call
            the internet, I enjoy doing my part to make things a little more
            easy to navigate, &lt;div&gt; by &lt;/div&gt;.
          </p>
          <p>
            In my spare time, I enjoy traveling, cooking, pinball, and disc
            golf.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
