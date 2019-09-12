import React from "react";
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
    overflowY: 'auto',
    padding: '0 10px',
    width: '90%',
    [theme.breakpoints.up('md')]: {
      maxWidth: 400,
    },
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

  // To update the indicator line in the tabs
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
          <Tab label="Projects"  className={classes.tab} disableRipple />
          <Tab label="Today"     className={classes.tab} disableRipple />
          <Tab label="Upcoming"  className={classes.tab} disableRipple />
        </Tabs>

      </Paper>

      <Button className={classes.button} color="primary" fullWidth>+ Create Task</Button>

      {list !== "projects"
        ? <TaskList tasks={filteredTasks} />
        : <ProjectList projects={projects} />
      }

    </Container>
  )
}

export default withStyles(styles)(TaskSidebar)
