import React from "react";
// import "../scss/DayList.scss";
import TaskList from "./TaskList";
import { Button, Paper, Typography, withStyles } from '@material-ui/core'

const styles = theme => ({
  button: {
    backgroundColor: '#F6F8FF',
    fontSize: '10px',
    height: '75px',
    margin: '2px 0',
    '&:focus': {
      outline: 'none'
    }
  },
  date: {
    color: theme.palette.secondary.main
  },
  day: {
    color: theme.palette.primary.main
  },
  dayTab: {
    padding: '10px 0px 30px 10px',
  },
  listContainer: {
    backgroundColor: '#f2f4f5',
    height: '100%',
    margin: '10px 10px 50px 0',
    [theme.breakpoints.up('md')]: {
      minWidth: 500,
    }
  },
  completedTextBorder: {
    alignSelf: 'center',
    fontStyle: 'italic',
    color: theme.palette.secondary.main,
    padding: '0 10px',
  },
  hideCompleted: {
    display: 'none',
  },
  completedBarrier: {
    display: 'flex',
    justifyContent: 'center',
    height: 50,
  },
  lineContainer: {
    width: '35%',
    height: '100%',
  },
  topLine: {
    borderBottom: `1px dashed ${theme.palette.secondary.main}`,
    width: '100%',
    height: '50%',
  },
  bottomLine: {
    height: '50%',
  }
})


const DayList = ({ classes, day, tasks }) => {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const today = new Date();
  const todayTasks = tasks.filter(task => task.dueDate === day && task.complete === false);
  const todayCompletedTasks = tasks.filter(task => task.dueDate === day && task.complete === true);

  return (
    <div className={classes.listContainer}>
      <Paper className={classes.dayTab} square>
        <Typography variant="h4" className={classes.day}>{day}</Typography>
        <Typography variant="body2" className={classes.date}>{monthNames[today.getMonth()]} {day === "Today" ? today.getDate() : today.getDate() + 1}, {today.getFullYear()}</Typography>
      </Paper>

      <Button className={classes.button} color="primary" fullWidth>+ Create Task</Button>

      <TaskList tasks={todayTasks} />

      <div className={`${classes.completedBarrier} ${todayCompletedTasks.length === 0 && classes.hideCompleted}`} >

        <div className={classes.lineContainer}>
          <div className={classes.topLine}>&nbsp;</div>
          <div className={classes.bottomLine}>&nbsp;</div>
        </div>

        <Typography variant="body2" className={classes.completedTextBorder}>Completed</Typography>

        <div className={classes.lineContainer}>
          <div className={classes.topLine}>&nbsp;</div>
          <div className={classes.bottomLine}>&nbsp;</div>
        </div>

      </div>

      <TaskList tasks={todayCompletedTasks} />
    </div>
  );
};

export default withStyles(styles)(DayList)
