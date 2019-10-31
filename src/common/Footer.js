import React from "react";
const styles = () => ({
  footer: {
    color: "white",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "#37474f",
    minHeight: "20vh",
    paddingBottom: "2rem",
    fontFamily: "Lato",
    fontSize: "15.5px",
    letterSpacing: "1.5px"
  }
});
const date = new Date();

export default () => (
  <div style={styles().footer}>
    © {date.getFullYear()} PROJECT CHICKENS STUDIO
  </div>
);
