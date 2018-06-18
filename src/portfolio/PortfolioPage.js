import React, { Component } from 'react';

class PortfolioPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentWillReceiveProps() {
    window.scrollTo(0, 0);
  }

  styles = () => {
    // const { big } = this.props;
    return {
      image: {
        margin: 'auto',
        maxWidth: '100%'
      },
      page: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 3rem'
      },
      title: {
        textAlign: 'center'
      }
    };
  };

  render() {
    const {
      title,
      context,
      methodsAndSkills,
      role,
      roleSummary,
      lessonsLearned,
      imgURL,
      imgCaption
    } = this.props;
    return (
      <div style={this.styles().page}>
        <h1 style={this.styles().title}>{title.toUpperCase()}</h1>
        <p>{context}</p>
        <img
          alt="representation of project"
          style={this.styles().image}
          src={imgURL}
        />
        <p>{imgCaption}</p>
        <h2>Methods and Skills:</h2>
        <ul>
          {methodsAndSkills.split(',').map((i, key) => <li key={key}>{i}</li>)}
        </ul>
        <h2>{role}</h2>
        <p>{roleSummary}</p>
        <h2>Lessons learned:</h2>
        <p>{lessonsLearned}</p>
      </div>
    );
  }
}

export default PortfolioPage;
