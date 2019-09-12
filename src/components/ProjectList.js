import React from 'react';
import Project from './Project';

const ProjectList = props => {
  return (
    <div>

      {props.projects.map(project => (
        <Project project={project} key={project} />
      ))}

    </div>
  )
}

export default ProjectList;