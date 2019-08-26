import React from "react";
import "../css/DayList.css";
import TaskList from "./TaskList";

const DayList = props => {
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

      <button className="create-task-btn">+ CREATE TASK</button>

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
