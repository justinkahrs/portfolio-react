import React, { Component } from "react";
import ImagePaletteProvider from "react-image-palette";
import { Link } from "react-router-dom";

class PortfolioItem extends Component {
  render() {
    return (
      <div className="col-lg-4 my-3">
        <ImagePaletteProvider
          crossOrigin
          image={this.props.imgURL}
          key={this.props.imgURL}
        >
          {({ backgroundColor, color, alternativeColor }) => (
            <div style={{ color }}>
              <div style={{ backgroundColor }}>
                <h3 className="text-center pt-3">{this.props.title}</h3>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img
                    style={{minWidth: '400px'}}
                    className="img-fluid"
                    alt="a representation of the project"
                    src={this.props.imgURL}
                  />
                  <Link
                    className="pb-3"
                    to={`portfolio/${this.props.title.replace(/\s+/g, "")}`}
                  >
                    View project
                  </Link>
                </div>
              </div>
            </div>
          )}
        </ImagePaletteProvider>
      </div>
    );
  }
}
PortfolioItem.defaultProps = {
  title: "Project Name",
  imgURL:
    "https://lastfm-img2.akamaized.net/i/u/300x300/47c2adc94fe74673afdb2722e8d3ee6c.png"
};
export default PortfolioItem;
