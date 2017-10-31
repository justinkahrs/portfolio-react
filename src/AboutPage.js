import React, { Component } from "react";

class AboutPage extends Component {
  render() {
    return (
      <div className="pageTwo" id="p2">
        <div className="content text-center">
          <div className="row">
            <div className="col-md-6">
              <h1>Let me introduce myself</h1>
              <h2>Hi, Im Anna</h2>
              <p>
                As an information architect intern for IU Communications, I
                works with a team to develop seamless user experiences for
                websites across IU. Currently pursuing dual master’s degrees in
                information science and library science, I focus my coursework
                in information architecture, user-experience design, and
                front-end development. I also hold a bachelors degree in art
                history from Kendall College of Art & Design.
              </p>

              <p>
                As a frequent wanderer of the complex{" "}
                <a href="https://youtu.be/f99PcP0aFNE">"series of tubes"</a> we
                call the internet, I enjoy doing my part to make things a little
                more easy to navigate, &lt;div&gt; by &lt;/div&gt;.
              </p>

              <p>
                In my spare time, I enjoy traveling, cooking, pinball, and disc
                golf.
              </p>
            </div>
            <div className="col-md-6">
              <img
                className="profile-pic"
                src="https://avatars2.githubusercontent.com/u/21692318?v=4&s=460"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
