import React, { Component } from 'react';
import ImagePaletteProvider from 'react-image-palette';
import { Link } from 'react-router-dom';

const styles = {
  image: {
    maxWidth: '400px',
    height: 'auto'
  }
};

class PortfolioItem extends Component {
  render() {
    return (
      <ImagePaletteProvider
        crossOrigin
        image={this.props.imgURL}
        key={this.props.imgURL}
      >
        {({ backgroundColor, color, alternativeColor }) => (
          <Link to={`portfolio/${this.props.title.replace(/\s+/g, '')}`}>
            <div className="portfolioCard" style={{ color }}>
              <div style={{ backgroundColor }}>
                <h3 className="text-center pt-3">{this.props.title}</h3>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img
                    style={styles.image}
                    alt="a representation of the project"
                    src={this.props.imgURL}
                  />
                </div>
              </div>
            </div>
          </Link>
        )}
      </ImagePaletteProvider>
    );
  }
}
PortfolioItem.defaultProps = {
  title: 'Project Name',
  imgURL:
    'https://lastfm-img2.akamaized.net/i/u/300x300/47c2adc94fe74673afdb2722e8d3ee6c.png'
};
export default PortfolioItem;
