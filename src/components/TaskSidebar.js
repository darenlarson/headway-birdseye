import React from "react";
import "../scss/TaskSidebar.scss";
import TaskList from "./TaskList";
import ProjectList from "./ProjectList";

const TaskSidebar = props => {
  const tasks = props.tasks.filter(task => {
    if (props.list === 'all') {
      return task.complete === false;

    } else if (props.list === 'today') {
      return task.complete === false && task.dueDate === 'Today'
    } else if (props.list === 'upcoming') {
      return task.complete === false && task.dueDate !== 'Today';
    }
  })

  return (
    <div className="sidebar-ctn">
      <h1>Tasks</h1>

      <div className="tabs">
        <div className={props.list === 'all' ? 'selected' : undefined} onClick={() => props.changeList("all")}>
           All
        </div>
        <div className={props.list === 'projects' ? 'selected' : undefined} onClick={() => props.changeList("projects")}>
          Projects
        </div>
        <div className={`mobile-only ${props.list === 'today' ? 'selected' : undefined}`} onClick={() => props.changeList("today")}>
          Today
        </div>
        <div className={`mobile-only ${props.list === 'upcoming' ? 'selected' : undefined}`} onClick={() => props.changeList("upcoming")}>
          Upcoming
        </div>
      </div>

      <button className="create-task-btn">+ CREATE TASK</button>

      {props.list !== "projects"  ? (
        <TaskList tasks={tasks} />
      ) : (
        <ProjectList projects={props.projects} />
      )}
    </div>
  );
};

export default TaskSidebar;
