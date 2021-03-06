import React from "react";
import CircleDown from "react-icons/lib/fa/chevron-circle-down";
import { Image } from "react-bootstrap";

export default class Hero extends React.Component {
  styles = () => {
    const { big, scrolled } = this.props;
    return {
      aboveFold: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "100vh"
      },
      circleDown: {
        fill: "rgba(58, 76, 57, .34)",
        opacity: scrolled ? 0 : 1,
        transition: "opacity .1s ease-in-out",
        position: "fixed",
        bottom: "20px"
      },
      heroSection: {
        marginTop: big ? "12rem" : ""
      },
      image: {
        margin: "auto",
        maxWidth: "100%"
      },
      date: {
        fontFamily: "Lato",
        fontSize: "21px",
        fontWeight: "300"
      },
      title: {
        fontFamily: "Old Standard TT",
        fontSize: "31px",
        fontWeight: "700",
        margin: ".5rem"
      },
      subTitle: {
        fontFamily: "Lato",
        fontStyle: "italic",
        fontSize: "18px"
      }
    };
  };
  render() {
    const { title, subTitle, hero } = this.props;
    return (
      <div style={this.styles().aboveFold}>
        <div style={this.styles().heroSection}>
          <div style={this.styles().title}>{title}</div>
          <div style={this.styles().subTitle}>{subTitle}</div>
          <Image
            alt="representation of project"
            style={this.styles().image}
            src={hero}
          />
        </div>
        <CircleDown size={32} style={this.styles().circleDown} />
      </div>
    );
  }
}
