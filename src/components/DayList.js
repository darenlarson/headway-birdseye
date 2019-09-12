import React from "react";
import "../scss/DayList.scss";
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
  }
})


const DayList = ({ classes, day, tasks }) => {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const today = new Date();
  const todayTasks = tasks.filter(task => task.dueDate === day && task.complete === false);
  const todayCompletedTasks = tasks.filter(task => task.dueDate === day && task.complete === true);

  return (
    <div className="day-list">
      <Paper className={classes.dayTab} square>
        <Typography variant="h4" className={classes.day}>{day}</Typography>
        <Typography variant="body2" className={classes.date}>{monthNames[today.getMonth()]} {day === "Today" ? today.getDate() : today.getDate() + 1}, {today.getFullYear()}</Typography>
      </Paper>

      <Button className={classes.button} color="primary" fullWidth>+ Create Task</Button>

      <TaskList tasks={todayTasks} />

      <div id="completed-barrier" className={`completed-barrier ${todayCompletedTasks.length === 0 && 'show-completed'}`} >
        <div className="border-ctn left-dashed-border">
          <div className="dashed-border-top"></div>
          <div className="dashed-border-bottom"></div>
        </div>
        <p className="completed-text-border">Completed</p>
        <div className="border-ctn right-dashed-border">
          <div className="dashed-border-top"></div>
          <div className="dashed-border-bottom"></div>
        </div>
      </div>

      <TaskList tasks={todayCompletedTasks} />
    </div>
  );
};

export default withStyles(styles)(DayList)
