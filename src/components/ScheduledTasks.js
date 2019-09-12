import React from 'react'
import DayList from './DayList'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  scheduledContainer: {
    display: 'block',
    'overflowY': 'auto',
    width: '100%',
    height: '100%',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  }
})

const ScheduledTasks = ({ classes, tasks }) => {
  return (
    <div className={classes.scheduledContainer}>
      <DayList tasks={tasks} day="Today" />
      <DayList tasks={tasks} day="Tomorrow" />
    </div>
  )
}

export default withStyles(styles)(ScheduledTasks)