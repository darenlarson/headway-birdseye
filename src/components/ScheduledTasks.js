import React from 'react';
import '../css/ScheduledTasks.css';
import TaskList from './TaskList';

const ScheduledTasks = props => {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const today = new Date();

  const todayTasks = props.tasks.filter(task => {
    return task.dueDate === "Today";
  })
  
  return (
    <div className="scheduled-tasks-ctn">

      <div className="today-list">
        <div className="today-header">
          <h1>Today</h1>
          <p>{monthNames[today.getMonth()]} {today.getDate()}, {today.getFullYear()}</p>
        </div>
        <button>+ CREATE TASK</button>
        <TaskList tasks={todayTasks}/>
      </div>

    </div>
  )
}

export default ScheduledTasks;