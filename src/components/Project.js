import React from "react";
import "../scss/Project.scss";

const Project = props => {
  return (
    <div className="project-ctn">
      <h5>{props.project}</h5>
    </div>
  );
};

export default Project;