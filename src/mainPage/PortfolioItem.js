import React, { Component } from 'react';
import ImagePaletteProvider from 'react-image-palette';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Item = styled.div`
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;

  &:hover {
    transform: scale(1.1);
  }
`;
class PortfolioItem extends Component {
  styles = () => ({
    image: {
      width: '75%',
      height: 'auto'
    },
    test: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '1px',
      flexDirection: 'column',
      textAlign: 'center',
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
            <Item style={{ color }}>
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
            </Item>
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
