import React from "react";
import "../scss/TaskSidebar.scss";
import { Button, Container, Paper, Tab, Tabs, Typography, withStyles } from '@material-ui/core'
import TaskList from "./TaskList";
import ProjectList from "./ProjectList";

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
  container: {
    minWidth: 400,
    maxWidth: 500,
    overflowY: 'auto',
    padding: '0 10px',
  },
  headerPaper: {
    padding: '15px 0 0 30px',
  },
  tab: {
    minWidth: 60,
    width: 60,
    fontSize: 10,
    padding: 0,
    minHeight: 25,
    margin: '40px 10px 0 10px',
    '&:focus': {
      outline: 'none'
    }
  },
  tabs: {
    minHeight: 25,
  }
})


const TaskSidebar = ({ changeList, classes, list, projects, tasks }) => {
  
  const filteredTasks = tasks.filter(task => {
    if (list === 'all') return task.complete === false;
    else if (list === 'today') return task.complete === false && task.dueDate === 'Today'
    else if (list === 'upcoming') return task.complete === false && task.dueDate !== 'Today'
    else return task
  })

  const selectTab = (e, index) => {
    let tab

    if (index === 0) tab = 'all'
    else if (index === 1) tab = 'projects'
    else if (index === 2) tab = 'today'
    else if (index === 3) tab = 'upcoming'

    changeList(tab)
  }

  let index
  if (list === 'all') index = 0
  else if (list === 'projects') index = 1
  else if (list === 'today') index = 2
  else if (list === 'upcoming') index = 3

  return (
    <Container className={classes.container}>
      <Paper className={classes.headerPaper}>
        <Typography color="primary" variant="h4">Tasks</Typography>

        <Tabs value={index} indicatorColor="primary" classes={{ root: classes.tabs }} onChange={selectTab} >
          <Tab label="All"       className={classes.tab} disableRipple />
          <Tab label="Projects"  className={classes.tab} disableRipple name="projects" />
          <Tab label="Today"     className={classes.tab} disableRipple />
          <Tab label="Upcoming"  className={classes.tab} disableRipple />
        </Tabs>

        {/* <div className="tabs">
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
        </div> */}
      </Paper>

      <Button className={classes.button} color="primary" fullWidth>+ Create Task</Button>

      {list !== "projects"  ? (
        <TaskList tasks={filteredTasks} />
      ) : (
        <ProjectList projects={projects} />
      )}
    </Container>
  )
}


// const TaskSidebar = ({ changeList, classes, list, projects, tasks }) => {
//   const theme = useTheme()
//   const btnBackground = theme.palette.secondary.light
//   const btnColor = theme.palette.primary.main
  
//   const filteredTasks = tasks.filter(task => {
//     if (list === 'all') return task.complete === false;
//     else if (list === 'today') return task.complete === false && task.dueDate === 'Today'
//     else if (list === 'upcoming') return task.complete === false && task.dueDate !== 'Today'
//     else return task
//   })

//   return (
//     <div className="sidebar-ctn">
//       <h1>Tasks</h1>

//       <div className="tabs">
//         <div className={list === 'all' ? 'selected' : undefined} onClick={() => changeList("all")}>
//            All
//         </div>
//         <div className={list === 'projects' ? 'selected' : undefined} onClick={() => changeList("projects")}>
//           Projects
//         </div>
//         <div className={`mobile-only ${list === 'today' ? 'selected' : undefined}`} onClick={() => changeList("today")}>
//           Today
//         </div>
//         <div className={`mobile-only ${list === 'upcoming' ? 'selected' : undefined}`} onClick={() => changeList("upcoming")}>
//           Upcoming
//         </div>
//       </div>

//       <Button
//         style={{ backgroundColor: btnBackground, fontSize: '10px', height: '75px', color: btnColor }}
//         fullWidth
//       >
//         + Create
//       </Button>

//       {list !== "projects"  ? (
//         <TaskList tasks={filteredTasks} />
//       ) : (
//         <ProjectList projects={projects} />
//       )}
//     </div>
//   )
// }

export default withStyles(styles)(TaskSidebar)
