import React from "react";
import "../scss/TaskManagementView.scss";
import TaskSidebar from "../components/TaskSidebar";
import Header from "../components/Header";
import ScheduledTasks from "../components/ScheduledTasks";
import { tasks, projects } from '../data/tasks';
import { withWidth } from '@material-ui/core'

class TaskManagementView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks,
      projects: projects,
      list: "all",
      daysLeft: 10,
    };
  }

  changeList = list => {
    this.setState({ list: list });
  };

  render() {
    const { daysLeft, list, projects, tasks } = this.state,
          { width } = this.props

    return (
      <div className="tmv-ctn">

        {width === 'sm' || width === 'xs'
        ? <Header daysLeft={daysLeft} size="mobile" />
        : undefined
      }

        <TaskSidebar
          tasks={tasks}
          projects={projects}
          list={list}
          changeList={this.changeList}
        />

        <div className="right-side-view">
          <Header daysLeft={daysLeft} size="desktop" />
          <ScheduledTasks
            tasks={tasks}
          />
        </div>
      </div>
    );
  }
}

export default withWidth()(TaskManagementView)
