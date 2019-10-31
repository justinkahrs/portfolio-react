import React from "react";

export default class TextContainer extends React.Component {
  styles = () => {
    return {
      text: {
        marginTop: "2.5rem"
      }
    };
  };
  render() {
    const { children } = this.props;
    return Array.isArray(children) ? (
      children.map((item, i) => (
        <p style={i !== 0 ? this.styles().text : {}} key={i}>
          {item}
        </p>
      ))
    ) : (
      <p>{children}</p>
    );
  }
}
