import React, { Component } from "react";
import { Row } from "reactstrap";

const styles = {
  aboutPage: {
    minHeight: "88vh",
    backgroundColor: "#9EBCB6"
  }
};

class About extends Component {
  render() {
    return (
      <Row
        style={styles.aboutPage}
        className="d-flex justify-content-center align-items-center p-3"
        id="about"
      >
        <h3 className="col-lg-12 text-center pb-0">
          I specialize in information architecture & UX
        </h3>
        <div className="col-lg-8">
          <p>
            As an information architect intern for IU Communications, I work
            with a team to develop seamless user experiences for websites across
            IU. Currently pursuing dual master’s degrees in information science
            and library science, I focus my coursework in information
            architecture, user-experience design, and front-end development. I
            also hold a bachelors degree in art history from Kendall College of
            Art & Design.
          </p>
          <blockquote>
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
      </Row>
    );
  }
}

export default About;
