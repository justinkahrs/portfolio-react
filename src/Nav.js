import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">

    <a class="navbar-brand" href="#p1">Anna VanderJagt</a>
    <ul class="nav nav-pills">
      <li class="pull-right">
        <a class="nav-link" href="#p4">Resume</a>
      </li>
      <li class="pull-right">
        <a class="nav-link" href="#p3">Portfolio</a>
      </li>
      <li class="pull-right">
        <a class="nav-link active" href="#p2">About</a>
      </li>
    </ul>
  </div>
</nav>
);
}
}

export default Nav;
