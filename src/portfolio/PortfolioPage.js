import React, { Component } from 'react';

const styles = {
  image: {
    margin: 'auto',
    maxWidth: '400px'
  },
  page: {
    display: 'grid',
    gridTemplateRows: 'auto',
    padding: '10rem 20rem 10rem 20rem',
    textAlign: 'justify',
    textJustify: 'auto'
  },
  title: {
    textAlign: 'center'
  }
};
class PortfolioPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentWillReceiveProps() {
    window.scrollTo(0, 0);
  }
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
      <div style={styles.page}>
        <h1 style={styles.title}>{title.toUpperCase()}</h1>
        <p>{context}</p>
        <img
          alt="representation of project"
          style={styles.image}
          src={imgURL}
        />
        <p>{imgCaption}</p>
        <h2>Methods and Skills:</h2>
        <ul>{methodsAndSkills.split(',').map(i => <li>{i}</li>)}</ul>
        <h2>{role}</h2>
        <p>{roleSummary}</p>
        <h2>Lessons learned:</h2>
        <p>{lessonsLearned}</p>
      </div>
    );
  }
}

export default PortfolioPage;
