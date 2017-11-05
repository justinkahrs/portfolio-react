import React, { Component } from "react";
import "./aboutPage.css";

class AboutPage extends Component {
  render() {
    return (
      <div className="row aboutPage" id="about">
        <h1>Let me introduce myself</h1>
        <h2>Hi, Im Anna</h2>

        <div className="col-sm-6 col-xs-12 aboutImage" />
        <div className="col-sm-6 col-xs-12 aboutText">
          <p>
            As an information architect intern for IU Communications, I work
            with a team to develop seamless user experiences for websites across
            IU. Currently pursuing dual master’s degrees in information science
            and library science, I focus my coursework in information
            architecture, user-experience design, and front-end development. I
            also hold a bachelors degree in art history from Kendall College of
            Art & Design.
          </p>

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

export default AboutPage;
