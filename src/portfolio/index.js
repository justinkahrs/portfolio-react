import React from "react";
import { Link } from "react-router-dom";
import projects from '../projects';
import PortfolioPage from './PortfolioPage';

export default ({ match: { params: { name } } }) => {

  const squish = name => name.replace(/\s+/g, "")

  const project = projects.find(i => squish(i.title) === name)
  const projectIndex = projects.findIndex(i => squish(i.title) === name)

  const hasNextProject = !(projectIndex === projects.length - 1 || projectIndex === -1)
  const hasPreviousProject = !(projectIndex <= 0);

  const previousProjectLink = hasPreviousProject ? squish(projects[projectIndex - 1].title) : null
  const nextProjectLink = hasNextProject ? squish(projects[projectIndex + 1].title) : null

  return (
    <div>
      <div style={{ paddingTop: "5em" }}>
        {project
          ? <PortfolioPage
              {...project}
          />
          : "Project does not exist"}
      </div>
      {hasPreviousProject ? (
        <Link to={previousProjectLink}>Previous Project</Link>
      ) : null}
      <br />
      {hasNextProject ? (
        <Link to={nextProjectLink}>Next Project</Link>
      ) : null}
    </div>
  );
};
