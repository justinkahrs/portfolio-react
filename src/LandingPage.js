import React, { Component } from "react";

class LandingPage extends Component {
  render() {
    return (
      <div class="pageOne" id="p1">
        <div class="content text-center">
          <h1>Anna VanderJagt</h1>
          <div class="btnList">
            <a class="btn btn-default" href="https://github.com/avanderj">
              <i
                class="fa fa-github fa-sm"
                id="githubicon"
                aria-hidden="true"
              />
            </a>
            <a
              class="btn btn-default"
              href="https://twitter.com/avanderj?lang=en"
            >
              <i
                class="fa fa-twitter fa-sm"
                id="twittericon"
                aria-hidden="true"
              />
            </a>
            <a
              class="btn btn-default"
              href="https://www.linkedin.com/in/annavanderjagt/"
            >
              <i
                class="fa fa-linkedin fa-sm"
                id="linkedinicon"
                aria-hidden="true"
              />
            </a>
            <a
              class="btn btn-default"
              href="https://www.linkedin.com/in/annavanderjagt/"
            >
              <i
                class="fa fa-free-code-camp fa-sm"
                id="freecodecampicon"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
