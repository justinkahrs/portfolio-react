import React from "react";
import { Link } from "react-router-dom";
import Scrollchor from "react-scrollchor";

const styles = {
  navName: {
    color: "#C15C2E",
    font: "italic bold 42px/39px fantasy",
    width: "169px",
    height: "87px",
    textDecoration: "none",
    paddingRight: "60rem"
  }
};
const NavBrand = ({ match }) => {
  return match ? (
    <Scrollchor style={styles.navName} to="#">
      <div>Anna VanderJagt</div>
    </Scrollchor>
  ) : (
    <Link to="/" style={styles.navName}>
      Anna VanderJagt
    </Link>
  );
};
export default NavBrand;
