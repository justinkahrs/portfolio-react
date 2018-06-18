import React from 'react';
import { Link } from 'react-router-dom';
import LeftArrow from 'react-icons/lib/md/chevron-left';
import RightArrow from 'react-icons/lib/md/chevron-right';
import projects from '../projects';
import PortfolioPage from './PortfolioPage';
import './portfolioPage.css';

export class PortfolioContainer extends React.Component {
  styles = hasPreviousProject => {
    // const { big } = this.props;
    return {
      arrow: { fontSize: '30px', color: 'black' },
      portfolioArrows: {
        backgroundColor: '#88888842',
        display: 'flex',
        alignItems: 'center',
        justifyContent: !hasPreviousProject ? 'flex-end' : 'space-between',
        marginTop: '2rem',
        height: '55px'
      }
    };
  };
  render() {
    const {
      match: {
        params: { name }
      }
    } = this.props;
    const squish = name => name.replace(/\s+/g, '');

    const project = projects.find(i => squish(i.title) === name);
    const projectIndex = projects.findIndex(i => squish(i.title) === name);

    const hasNextProject = !(
      projectIndex === projects.length - 1 || projectIndex === -1
    );
    const hasPreviousProject = !(projectIndex <= 0);

    const previousProjectLink = hasPreviousProject
      ? squish(projects[projectIndex - 1].title)
      : null;
    const nextProjectLink = hasNextProject
      ? squish(projects[projectIndex + 1].title)
      : null;
    return (
      <div>
        <br />
        <br />
        <div>
          {project ? <PortfolioPage {...project} /> : 'Project does not exist'}
        </div>
        <div style={this.styles(hasPreviousProject).portfolioArrows}>
          {hasPreviousProject ? (
            <Link to={previousProjectLink} style={{ color: 'black' }}>
              <LeftArrow style={this.styles().arrow} />Previous
            </Link>
          ) : null}
          {hasNextProject ? (
            <Link
              to={nextProjectLink}
              style={{ color: 'black' }}
            >
              Next<RightArrow style={{ fontSize: '30px', color: 'black' }} />
            </Link>
          ) : null}
        </div>
      </div>
    );
  }
}

export default PortfolioContainer;
