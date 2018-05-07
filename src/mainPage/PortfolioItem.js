import React, { Component } from 'react';
import ImagePaletteProvider from 'react-image-palette';
import { Link } from 'react-router-dom';
import './portfolioItem.css';

class PortfolioItem extends Component {
  styles = () => ({
    image: {
      width: '75%',
      height: 'auto'
    },
    test: {
      display: 'flex',
      alignItems: 'center',
      borderRadius: '1px',
      boxShadow: '4px 4px 12px 2px lightgrey',
      margin: this.props.big ? '1rem 3rem' : '1rem',
      padding: this.props.big ? '1rem' : '1rem',
      height: this.props.big ? '400px' : '100%'
    }
  });
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
              <div
                className="test"
                style={{ backgroundColor, ...this.styles().test }}
              >
                <h3>{this.props.title}</h3>
                <div className="imageContainer">
                  <img
                    style={this.styles().image}
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
