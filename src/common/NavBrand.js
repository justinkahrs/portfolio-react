import React from "react";
import { Link } from "react-router-dom";
import Scrollchor from "react-scrollchor";

const styles = {
  navName: {
    display: "inline-block",
    verticalAlign: "middle",
    textAlign: "left",
    color: "#C15C2E",
    font: "42px/39px mono",
    textDecoration: "none",
    lineHeight: "39px"
  }
};
const NavBrand = ({ match }) => {
  return match ? (
    <Scrollchor style={styles.navName} to="#">
      <div>
        Anna <br />
        VanderJagt
      </div>
    </Scrollchor>
  ) : (
    <Link to="/" style={styles.navName}>
      <div>
        Anna <br />
        VanderJagt
      </div>
    </Link>
  );
};
export default NavBrand;
