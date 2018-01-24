import React from "react";
import { Link } from "react-router-dom";
import projects from "./projects";

export default ({ match: { params: { name } } }) => {
  const projectExists = name => {
    return projects.find(i => i.title.replace(/\s+/g, "") === name);
  };

  const hasNextProject = name => {
    const index = projects.findIndex(i => i.title.replace(/\s+/g, "") === name);
    if (index === -1) {
      return false;
    }
    if (index === projects.length - 1) {
      return false;
    }
    return true;
  };

  const getNextProjectLink = name => {
    if (hasNextProject(name)) {
      const index = projects.findIndex(
        i => i.title.replace(/\s+/g, "") === name
      );
      return projects[index + 1].title.replace(/\s+/g, "");
    }
  };

  const hasPreviousProject = name => {
    const index = projects.findIndex(i => i.title.replace(/\s+/g, "") === name);
    if (index === -1) {
      return false;
    }
    if (index === 0) {
      return false;
    }
    return true;
  };

  const getPreviousProjectLink = name => {
    if (hasPreviousProject(name)) {
      const index = projects.findIndex(
        i => i.title.replace(/\s+/g, "") === name
      );
      return projects[index - 1].title.replace(/\s+/g, "");
    }
  };

  return (
    <div>
      <div style={{ paddingTop: "15em" }}>
        {projectExists(name) ? `Hey ${name}` : "Project does not exist"}
      </div>
      {hasPreviousProject(name) ? (
        <Link to={getPreviousProjectLink(name)}>Previous Project</Link>
      ) : null}
      <br />
      {hasNextProject(name) ? (
        <Link to={getNextProjectLink(name)}>Next Project</Link>
      ) : null}
    </div>
  );
};
