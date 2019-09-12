import React from "react";
import {Paper, Typography, withStyles } from '@material-ui/core'

const styles = theme => ({
  project: {
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
  }
})

const Project = ({ classes, project }) => {
  return (
    <Paper className={classes.project} >
      <Typography variant="h6">{project}</Typography>
    </Paper>
  );
};

export default withStyles(styles)(Project)