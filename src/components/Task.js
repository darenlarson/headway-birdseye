import React from "react"
import taskIcon from '../assets/taskIcon.png'
import { Checkbox, Paper, Typography, withStyles } from '@material-ui/core'

const styles = theme => ({
  completedTask: {
    opacity: 0.5,
  },
  completedTitle: {
    textDecoration: 'line-through',
  },
  dueTime: {
    display: 'flex',
    textAlign: 'end'
  },
  paper: {
    marginBottom: 2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '60px',
    padding: '0px 10px 0px 3px',
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 5,
  }
})

const Task = ({ classes, project, title, dueDate, dueTime, completed }) => {
  return (
    <Paper square className={`${classes.paper} ${completed === true ? classes.completedTask : undefined}`}>

      <div style={{ display: 'flex' }}>
        <Checkbox />
        <div>
          <Typography variant="caption" color="secondary">{project}</Typography>
          <Typography variant="subtitle1" className={`${completed === true ? classes.completedTitle : undefined}`}>{title}</Typography>
        </div>
      </div>

      <div className={classes.dueTime}>
        <div>
          <Typography align="right" variant="body2" color="secondary">{dueDate}</Typography>
          <Typography align="right" variant="caption" color="secondary">{dueTime}</Typography>
        </div>
        <div className={classes.imageContainer}>
          <img src={taskIcon} alt="task icon" />
        </div>
      </div>

    </Paper>
  )
}


export default withStyles(styles)(Task)