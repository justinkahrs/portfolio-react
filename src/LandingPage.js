import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    return (

<div class="pageOne" id="p1">
  <div class="content text-center">
    <div class="block">
      <h1>Anna VanderJagt</h1>
      <h3 class="span">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra efficitur purus non porttitor. Ut congue sed erat ac commodo. Vestibulm lorem mauris, dapibus eget pellentesque eu, eleifend vel feli.</h3>
    </div>
    <div class="btnList">
      <a class="btn btn-default" href="https://github.com/avanderj"><i class="fa fa-github fa-sm" id="githubicon" aria-hidden="true"></i></a>
      <a class="btn btn-default" href="https://twitter.com/avanderj?lang=en"><i class="fa fa-twitter fa-sm" id="twittericon" aria-hidden="true"></i></a>
      <a class="btn btn-default" href="https://www.linkedin.com/in/annavanderjagt/"><i class="fa fa-linkedin fa-sm" id="linkedinicon" aria-hidden="true"></i></a>
      <a class="btn btn-default" href="https://www.linkedin.com/in/annavanderjagt/"><i class="fa fa-free-code-camp fa-sm" id="freecodecampicon" aria-hidden="true"></i></a>
    </div>
  </div>
</div>
);
}
}

export default LandingPage;
