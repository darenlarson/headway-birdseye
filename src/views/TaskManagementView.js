import React from "react";
import "../scss/TaskManagementView.scss";
import TaskSidebar from "../components/TaskSidebar";
import Header from "../components/Header";
import ScheduledTasks from "../components/ScheduledTasks";
import { tasks, projects } from '../data/tasks';

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
    return (
      <div className="tmv-ctn">

        <Header daysLeft={this.state.daysLeft} size="mobile" />

        <TaskSidebar
          tasks={this.state.tasks}
          projects={this.state.projects}
          list={this.state.list}
          changeList={this.changeList}
        />

        <div className="right-side-view">
          <Header daysLeft={this.state.daysLeft} size="desktop" />
          <ScheduledTasks
            tasks={this.state.tasks}
          />
        </div>
      </div>
    );
  }
}

export default TaskManagementView;
