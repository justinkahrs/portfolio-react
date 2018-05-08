import React from 'react';
import { Link } from 'react-router-dom';
import LeftArrow from 'react-icons/lib/md/chevron-left';
import RightArrow from 'react-icons/lib/md/chevron-right';
import projects from '../projects';
import PortfolioPage from './PortfolioPage';
import './portfolioPage.css';

export default ({
  match: {
    params: { name }
  }
}) => {
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
      {hasPreviousProject ? (
        <Link className="previousLink" to={previousProjectLink}>
          <LeftArrow style={{ fontSize: '30px' }} />Previous
        </Link>
      ) : null}
      <br />
      {hasNextProject ? (
        <Link className="nextLink" to={nextProjectLink}>
          Next<RightArrow style={{ fontSize: '30px' }} />
        </Link>
      ) : null}
    </div>
  );
};
