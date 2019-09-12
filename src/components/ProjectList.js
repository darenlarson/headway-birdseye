import React from 'react';
import '../scss/ProjectList.scss';
import Project from './Project';

const ProjectList = props => {
  return (
    <div className="task-list">

      {props.projects.map(project => (
        <Project project={project} key={project} />
      ))}

    </div>
  )
}

export default ProjectList;