import React from "react";
import "../scss/Project.scss";
import {Paper, Typography } from '@material-ui/core'

const Project = ({ project }) => {
  return (
    <Paper style={{ height: '50px', display: 'flex', alignItems: 'center', padding: '0 10px'}} >
      <Typography variant="h6">{project}</Typography>
    </Paper>
  );
};

export default Project;