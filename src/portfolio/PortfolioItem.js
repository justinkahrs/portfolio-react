import React, { Component } from "react";
import { Col, Image } from "react-bootstrap";
import ImagePaletteProvider from "react-image-palette";
import { Link } from "react-router-dom";

class PortfolioItem extends Component {
  render() {
    return (
      <ImagePaletteProvider
        crossOrigin
        image={this.props.imgURL}
        key={this.props.imgURL}
      >
        {({ backgroundColor, color, alternativeColor }) => (
          <Col lg={4} style={{ color }}>
            <div style={{ backgroundColor }}>
              <h3>{this.props.title}</h3>
              <Link to={`portfolio/${this.props.title.replace(/\s+/g, "")}`}>
                View project
              </Link>
              <Image
                responsive
                alt="a representation of the project"
                src={this.props.imgURL}
              />
            </div>
          </Col>
        )}
      </ImagePaletteProvider>
    );
  }
}
PortfolioItem.defaultProps = {
  title: "Project Name",
  imgURL:
    "https://lastfm-img2.akamaized.net/i/u/300x300/47c2adc94fe74673afdb2722e8d3ee6c.png"
};
export default PortfolioItem;
