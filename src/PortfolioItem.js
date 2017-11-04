import React, { Component } from "react";
import ImagePaletteProvider from "react-image-palette";

class PortfolioItem extends Component {
  render() {
    return (
      <ImagePaletteProvider
        crossOrigin
        image="https://lastfm-img2.akamaized.net/i/u/300x300/47c2adc94fe74673afdb2722e8d3ee6c.png"
        key="https://lastfm-img2.akamaized.net/i/u/300x300/47c2adc94fe74673afdb2722e8d3ee6c.png"
      >
        {({ backgroundColor, color, alternativeColor }) => (
          <div className="album" style={{ backgroundColor, color }}>
            <h3>Project 1</h3>
            <a
              href="#"
              class="btn btn-lg btn-primary"
              data-toggle="modal"
              data-target="#largeModal"
            >
              Click to open Modal
            </a>
            <div
              class="modal fade"
              id="largeModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="largeModal"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      &times;
                    </button>
                    <h4 class="modal-title" id="myModalLabel">
                      Large Modal
                    </h4>
                  </div>
                  <div class="modal-body">
                    <h3>Modal Body</h3>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <img src="https://lastfm-img2.akamaized.net/i/u/300x300/47c2adc94fe74673afdb2722e8d3ee6c.png" />
          </div>
        )}
      </ImagePaletteProvider>
    );
  }
}

export default PortfolioItem;
