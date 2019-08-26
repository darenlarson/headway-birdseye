import React from "react";
import "../css/TaskSidebar.css";
import TaskList from "./TaskList";
import ProjectList from "./ProjectList";

const TaskSidebar = props => {
  const notCompleteTasks = props.tasks.filter(task => task.complete === false);

  return (
    <div className="sidebar-ctn">
      <h1>Tasks</h1>

      <div className="tabs">
        <div className={props.list === 'all' ? 'selected' : undefined} onClick={() => props.changeList("all")}>All</div>
        <div className={props.list === 'projects' ? 'selected' : undefined} onClick={() => props.changeList("projects")}>Projects</div>
      </div>

      <button className="create-task-btn">+ CREATE TASK</button>

      {props.list === "all" ? (
        <TaskList tasks={notCompleteTasks} />
      ) : (
        <ProjectList projects={props.projects} />
      )}
    </div>
  );
};

export default TaskSidebar;
