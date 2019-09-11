import React from "react";
import "../scss/DayList.scss";
import TaskList from "./TaskList";
import { Button, Grid, Paper, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

const DayList = props => {
  const theme = useTheme()
  const btnBackground = theme.palette.secondary.light
  const btnColor = theme.palette.primary.main

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const today = new Date();
  const todayTasks = props.tasks.filter(task => task.dueDate === props.day && task.complete === false);
  const todayCompletedTasks = props.tasks.filter(task => task.dueDate === props.day && task.complete === true);

  return (
    <div className="day-list">
      <div className="day-header">
        <h1>{props.day}</h1>
        <p>{monthNames[today.getMonth()]} {props.day === "Today" ? today.getDate() : today.getDate() + 1}, {today.getFullYear()}
        </p>
      </div>

      <Button
        style={{ backgroundColor: btnBackground, fontSize: '10px', height: '75px', color: btnColor }}
        fullWidth
      >
        + Create
      </Button>

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

export default DayList;
