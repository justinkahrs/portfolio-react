import React, { Component } from "react";
import { Grid } from "react-bootstrap";

const styles = {
  landingPage: {
    minHeight: "88vh",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};
class Landing extends Component {
  render() {
    return (
      <div className="row" style={styles.landingPage}>
        <Grid>
          <div className="content text-center">
            <h1>Anna VanderJagt</h1>
            <div className="btnList">
              <a className="btn btn-default" href="https://github.com/avanderj">
                <i
                  className="fa fa-github fa-sm"
                  id="githubicon"
                  aria-hidden="true"
                />
              </a>
              <a
                className="btn btn-default"
                href="https://twitter.com/avanderj?lang=en"
              >
                <i
                  className="fa fa-twitter fa-sm"
                  id="twittericon"
                  aria-hidden="true"
                />
              </a>
              <a
                className="btn btn-default"
                href="https://www.linkedin.com/in/annavanderjagt/"
              >
                <i
                  className="fa fa-linkedin fa-sm"
                  id="linkedinicon"
                  aria-hidden="true"
                />
              </a>
              <a
                className="btn btn-default"
                href="https://www.linkedin.com/in/annavanderjagt/"
              >
                <i
                  className="fa fa-free-code-camp fa-sm"
                  id="freecodecampicon"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Landing;
