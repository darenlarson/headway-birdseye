import React from 'react';
import '../css/ProjectList.css';
import Project from './Project';

const ProjectList = props => {
  return (
    <div className="task-list">

      {props.projects.map(project => (
        <Project project={project} />
      ))}

    </div>
  )
}

export default ProjectList;