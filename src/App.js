import React, { Component } from "react";
import Nav from "./Nav.js";
import LandingPage from "./LandingPage.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <LandingPage />

        <div class="pageTwo" id="p2">
          <div class="content text-center">
            <div class="row">
              <div class="col-md-6">
                <h1>Let me introduce myself</h1>
                <h2>Hi, Im Anna</h2>
                <p>
                  As an information architect intern for IU Communications, I
                  works with a team to develop seamless user experiences for
                  websites across IU. Currently pursuing dual master’s degrees
                  in information science and library science, I focus my
                  coursework in information architecture, user-experience
                  design, and front-end development. I also hold a bachelors
                  degree in art history from Kendall College of Art & Design.
                </p>

                <p>
                  As a frequent wanderer of the complex{" "}
                  <a href="https://youtu.be/f99PcP0aFNE">
                    "series of tubes"
                  </a>{" "}
                  we call the internet, I enjoy doing my part to make things a
                  little more easy to navigate, &lt;div&gt; by &lt;/div&gt;.
                </p>

                <p>
                  In my spare time, I enjoy traveling, cooking, pinball, and
                  disc golf.
                </p>
              </div>
              <div class="col-md-6">
                <img
                  class="profile-pic"
                  src="https://avatars2.githubusercontent.com/u/21692318?v=4&s=460"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="pageThree" id="p3">
          <div class="content text-center">
            <h1>Portfolio</h1>
            <h2>Check out some of my recent projects, ideas, and designs</h2>
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <p
                    data-height="450"
                    data-theme-id="0"
                    data-slug-hash="JJxeRy"
                    data-default-tab="html,result"
                    data-user="avanderj"
                    data-embed-version="2"
                    data-pen-title="nav-bar"
                    class="codepen"
                  >
                    See the Pen{" "}
                    <a href="https://codepen.io/avanderj/pen/JJxeRy/">
                      nav-bar
                    </a>{" "}
                    by Anna (<a href="https://codepen.io/avanderj">
                      @avanderj
                    </a>) on <a href="https://codepen.io">CodePen</a>.
                  </p>
                  <script
                    async
                    src="https://production-assets.codepen.io/assets/embed/ei.js"
                  />
                  <h2>My Portfolio</h2>
                </div>

                <div class="col-md-6">
                  <p
                    data-height="450"
                    data-theme-id="0"
                    data-slug-hash="JJxeRy"
                    data-default-tab="html,result"
                    data-user="avanderj"
                    data-embed-version="2"
                    data-pen-title="nav-bar"
                    class="codepen"
                  >
                    See the Pen{" "}
                    <a href="https://codepen.io/avanderj/pen/JJxeRy/">
                      nav-bar
                    </a>{" "}
                    by Anna (<a href="https://codepen.io/avanderj">
                      @avanderj
                    </a>) on <a href="https://codepen.io">CodePen</a>.
                  </p>
                  <script
                    async
                    src="https://production-assets.codepen.io/assets/embed/ei.js"
                  />
                  <h2>My Portfolio</h2>
                </div>

                <div class="col-md-6">
                  <p
                    data-height="450"
                    data-theme-id="0"
                    data-slug-hash="JJxeRy"
                    data-default-tab="html,result"
                    data-user="avanderj"
                    data-embed-version="2"
                    data-pen-title="nav-bar"
                    class="codepen"
                  >
                    See the Pen{" "}
                    <a href="https://codepen.io/avanderj/pen/JJxeRy/">
                      nav-bar
                    </a>{" "}
                    by Anna (<a href="https://codepen.io/avanderj">
                      @avanderj
                    </a>) on <a href="https://codepen.io">CodePen</a>.
                  </p>
                  <script
                    async
                    src="https://production-assets.codepen.io/assets/embed/ei.js"
                  />
                  <h2>My Portfolio</h2>
                </div>

                <div class="col-md-6">
                  <p
                    data-height="450"
                    data-theme-id="0"
                    data-slug-hash="JJxeRy"
                    data-default-tab="html,result"
                    data-user="avanderj"
                    data-embed-version="2"
                    data-pen-title="nav-bar"
                    class="codepen"
                  >
                    See the Pen{" "}
                    <a href="https://codepen.io/avanderj/pen/JJxeRy/">
                      nav-bar
                    </a>{" "}
                    by Anna (<a href="https://codepen.io/avanderj">
                      @avanderj
                    </a>) on <a href="https://codepen.io">CodePen</a>.
                  </p>
                  <script
                    async
                    src="https://production-assets.codepen.io/assets/embed/ei.js"
                  />
                  <h2>My Portfolio</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pageFour" id="p4">
          <div class="content text-center">
            <h1>Resume</h1>
          </div>
        </div>

        <div class="footer">
          <div class="content text-center" />
        </div>
      </div>
    );
  }
}

export default App;
