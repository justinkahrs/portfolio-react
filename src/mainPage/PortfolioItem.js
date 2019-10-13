import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class PortfolioItem extends Component {
  styles = () => {
    const { big } = this.props
    return {
      date: {
        fontFamily: 'Lato',
        fontSize: '21px',
        letterSpacing: '.5px',
      },
      imageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: big ? '50%' : '100%',
      },
      portfolioCard: {
        display: 'flex',
        flexDirection: big
          ? 'row-reverse'
          : 'column-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        minHeight: '37vh',
        margin: '2rem 0',
        textDecoration: 'none !important',
        padding: big ? '' : '2rem',
      },
      portfolioCardText: {
        padding: '2%',
        width: big ? '50%' : '100%',
      },
      portfolioButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '62px',
        width: big ? '192px' : '',
        backgroundColor: '#BB6655',
        color: 'white',
        marginTop: '3rem',
        fontFamily: 'Lato',
        fontWeight: 'bold',
        letterSpacing: '1.5px',
      },
      subTitle: {
        fontSize: '18px',
      },
      title: {
        fontFamily: 'Old Standard TT',
        fontSize: '31px',
        fontWeight: 'bold',
      },
    }
  }

  render() {
    return (
      <div style={this.styles().portfolioCard}>
        <div style={this.styles().portfolioCardText}>
          <h2 style={this.styles().title}>{this.props.title}</h2>
          <h3 style={this.styles().subTitle}>{this.props.subTitle}</h3>
          <p>{this.props.blurb}</p>
          <Link
            to={`portfolio/${this.props.id}`}
            style={{ color: 'white', textDecoration: 'none' }}
          >
            <div style={this.styles().portfolioButton}>VIEW PROJECT</div>
          </Link>
        </div>
        <div style={this.styles().imageContainer}>
          <Image responsive src={this.props.thumbnail} />
        </div>
      </div>
    )
  }
}
PortfolioItem.defaultProps = {
  title: 'Project Name',
  imgURL:
    'https://lastfm-img2.akamaized.net/i/u/300x300/47c2adc94fe74673afdb2722e8d3ee6c.png',
}
export default PortfolioItem
