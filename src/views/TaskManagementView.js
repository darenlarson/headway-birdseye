import React from "react";
import TaskSidebar from "../components/TaskSidebar";
import Header from "../components/Header";
import ScheduledTasks from "../components/ScheduledTasks";
import { tasks, projects } from '../data/tasks';
import { withWidth, withStyles } from '@material-ui/core'

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#f2f4f5',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      height: '100vh',
      minHeight: '100vh',
    }
  },
  rightView: {
    width: '100%',
    overflow: 'hidden',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  }
})

class TaskManagementView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks,
      projects: projects,
      list: "all",
      daysLeft: 10,
      selectedIndex: 0,
    };
  }

  changeList = (list, index) => {
    this.setState({ list: list, selectedIndex: index });
  };

  render() {
    const { daysLeft, list, projects, selectedIndex, tasks } = this.state,
          { classes, width } = this.props

    return (
      <>
        {width === 'xs' || width === 'sm'
          ? <Header daysLeft={daysLeft} />
          : undefined
        }
        
        <div className={classes.container}>
          <TaskSidebar
            tasks={tasks}
            projects={projects}
            list={list}
            changeList={this.changeList}
            selectedIndex={selectedIndex}
          />

          <div className={classes.rightView}>
            {width === 'md' || width === 'lg' || width === 'xl'
              ? <Header daysLeft={daysLeft} />
              : undefined
            }
            
            <ScheduledTasks tasks={tasks}/>
          </div>
        </div>
      </>
    );
  }
}

export default withWidth()(withStyles(styles)(TaskManagementView))
