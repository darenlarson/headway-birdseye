import React from "react";
import "../scss/Task.scss";
import taskIcon from '../assets/taskIcon.png';
import { Box, Checkbox, Grid, Paper, Typography } from '@material-ui/core'

const Task = props => {
  const { project, title, dueDate, dueTime, completed } = props;

  return (
    <Paper>
      <Grid container justify='space-between' alignItems='center' style={{ height: '60px' }} className={completed === true ? 'completed-task' : undefined} >
        <Grid item>
          <Grid container>
            <Grid item>
              <Checkbox />
            </Grid>
            <Grid item>
              <Typography variant="caption" color="secondary">{project}</Typography>
              <Typography variant="subtitle1">{title}</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container>

            <Grid item style={{ marginRight: '5px' }}>
              <Grid container direction="column">
                <Typography align="right" variant="body2" color="secondary">{dueDate}</Typography>
                <Typography align="right" variant="caption" color="secondary">{dueTime}</Typography>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container style={{ height: '100%'}} alignItems="center">
                <Grid item >
                  <Box component="img" src={taskIcon} />
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Grid>

      </Grid>
    </Paper>




    // <div className={`task-ctn ${completed === true ? 'completed-task' : undefined}`} >
    //   <div className="checkbox-title">
    //     <div className="checkbox-ctn">
    //       <div className="fake-checkbox"></div>
    //     </div>

    //     <div className="project-title-ctn">
    //       <p>{project}</p>
    //       <h5 className={completed === true ? 'completed-title' : undefined} >{title}</h5>
    //     </div>
    //   </div>

    //   <div className="right-side-info">
    //     <div className="schedule-info">
    //       <p className="day">{dueDate}</p>
    //       <p className="time">{dueTime}</p>
    //     </div>
    //     <img src={taskIcon} alt="task icon" />
    //   </div>
    // </div>
  );
};

export default Task;