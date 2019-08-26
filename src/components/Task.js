import React from "react";
import "../css/Task.css";
import taskIcon from '../assets/taskIcon.png';

const Task = props => {
  const { project, title, dueDate, dueTime, completed } = props;

  return (
    // <div className="task-ctn">
    <div className={`task-ctn ${completed === true ? 'completed-task' : undefined}`} >
      <div className="checkbox-title">
        <div className="checkbox-ctn">
          <div className="fake-checkbox"></div>
        </div>

        <div className="project-title-ctn">
          <p>{project}</p>
          <h5 className={completed === true ? 'completed-title' : undefined} >{title}</h5>
        </div>
      </div>

      <div className="right-side-info">
        <div className="schedule-info">
          <p className="day">{dueDate}</p>
          <p className="time">{dueTime}</p>
        </div>
        <img src={taskIcon} alt="task icon" />
      </div>
    </div>
  );
};

export default Task;