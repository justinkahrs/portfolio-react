import React, { Component } from "react";
import ImagePaletteProvider from "react-image-palette";
import "./portfolioItem.css";
class PortfolioItem extends Component {
  render() {
    return (
      <ImagePaletteProvider
        crossOrigin
        image={this.props.imgURL}
        key={this.props.imgURL}
      >
        {({ backgroundColor, color, alternativeColor }) => (
          <div className="portfolioItem" style={{ backgroundColor, color }}>
            <h3>{this.props.title}</h3>
            <a
              href="#"
              className="btn btn-lg btn-primary"
              data-toggle="modal"
              data-target="#largeModal"
            >
              Click to open Modal
            </a>
            <div
              className="modal fade"
              id="largeModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="largeModal"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      &times;
                    </button>
                    <h4 className="modal-title" id="myModalLabel">
                      Large Modal
                    </h4>
                  </div>
                  <div className="modal-body">
                    <div
                      id="myCarousel"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <ol className="carousel-indicators">
                        <li
                          data-target="#myCarousel"
                          data-slide-to="0"
                          className="active"
                        />
                        <li data-target="#myCarousel" data-slide-to="1" />
                        <li data-target="#myCarousel" data-slide-to="2" />
                      </ol>

                      <div className="carousel-inner">
                        {this.props.carouselURLs &&
                          this.props.carouselURLs.map((url, i) => (
                            <div
                              className={`item ${i === 0 ? "active" : null}`}
                            >
                              <img src={url} alt="" />
                            </div>
                          ))}
                      </div>

                      <a
                        className="left carousel-control"
                        href="#myCarousel"
                        data-slide="prev"
                      >
                        <span className="glyphicon glyphicon-chevron-left" />
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="right carousel-control"
                        href="#myCarousel"
                        data-slide="next"
                      >
                        <span className="glyphicon glyphicon-chevron-right" />
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <img className="img-responsive" src={this.props.imgURL} />
          </div>
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
