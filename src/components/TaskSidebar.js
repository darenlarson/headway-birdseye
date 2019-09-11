import React from "react";
import "../scss/TaskSidebar.scss";
import { Button, Grid, Tabs, Tab, Typography } from '@material-ui/core'
import { useTheme, withStyles } from '@material-ui/core/styles'
import TaskList from "./TaskList";
import ProjectList from "./ProjectList";

const TaskSidebar = ({ changeList, list, projects, tasks }) => {
  const theme = useTheme()
  const btnBackground = theme.palette.secondary.light
  const btnColor = theme.palette.primary.main
  
  const filteredTasks = tasks.filter(task => {
    if (list === 'all') return task.complete === false;
    else if (list === 'today') return task.complete === false && task.dueDate === 'Today'
    else if (list === 'upcoming') return task.complete === false && task.dueDate !== 'Today';
  })

  return (
    <div className="sidebar-ctn">
      <h1>Tasks</h1>

      <div className="tabs">
        <div className={list === 'all' ? 'selected' : undefined} onClick={() => changeList("all")}>
           All
        </div>
        <div className={list === 'projects' ? 'selected' : undefined} onClick={() => changeList("projects")}>
          Projects
        </div>
        <div className={`mobile-only ${list === 'today' ? 'selected' : undefined}`} onClick={() => changeList("today")}>
          Today
        </div>
        <div className={`mobile-only ${list === 'upcoming' ? 'selected' : undefined}`} onClick={() => changeList("upcoming")}>
          Upcoming
        </div>
      </div>

      <Button
        style={{ backgroundColor: btnBackground, fontSize: '10px', height: '75px', color: btnColor }}
        fullWidth
      >
        + Create
      </Button>

      {list !== "projects"  ? (
        <TaskList tasks={filteredTasks} />
      ) : (
        <ProjectList projects={projects} />
      )}
    </div>
  );
};

export default TaskSidebar;
