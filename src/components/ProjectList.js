import React from 'react'
import Project from './Project'

const ProjectList = ({ projects }) => {
  return (
    <div>

      {projects.map(project => (
        <Project project={project} key={project} />
      ))}

    </div>
  )
}

export default ProjectList