import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import WebFont from "webfontloader";
import "./index.css";
import ReactGA from "react-ga";
ReactGA.initialize("UA-127271210-1");
ReactGA.pageview(window.location.pathname + window.location.search);

WebFont.load({
  google: {
    families: [
      "Lato:300,400,400i,700,900",
      "Old Standard TT:400,400i,700",
      "Source Serif Pro:400,700"
    ]
  }
});

ReactDOM.render(<App />, document.getElementById("root"));
