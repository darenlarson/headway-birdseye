import React from "react";
import { Link } from "react-router-dom";
import "../css/TaskSidebar.css";
import TaskList from "./TaskList";
import ProjectList from "./ProjectList";

const TaskSidebar = props => {
  return (
    <div className="sidebar-ctn">
      <h1>Tasks</h1>

      <div className="tabs">
        <div className={props.list === 'all' && 'selected'} onClick={() => props.changeList("all")}>All</div>
        <div className={props.list === 'projects' && 'selected'} onClick={() => props.changeList("projects")}>Projects</div>
      </div>

      <button className="create-task-btn">+ CREATE TASK</button>

      {props.list === "all" ? (
        <TaskList tasks={props.tasks} />
      ) : (
        <ProjectList projects={props.projects} />
      )}
    </div>
  );
};

export default TaskSidebar;
