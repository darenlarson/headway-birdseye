import React from "react";
import "../css/TaskManagementView.css";
import TaskSidebar from "../components/TaskSidebar";
import Header from "../components/Header";
import ScheduledTasks from "../components/ScheduledTasks";

class TaskManagementView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          project: "Birdseye - Application",
          title: "Fix UX issues",
          dueDate: "Today",
          dueTime: "8:00am",
          complete: false
        },
        {
          project: "Birdseye - Application",
          title: "Adjust final filtering",
          dueDate: "Today",
          dueTime: "8:00am",
          complete: false
        },
        {
          project: "Birdseye - Application",
          title: "Title",
          dueDate: "Thursday",
          dueTime: "8:00am",
          complete: true
        },
        {
          project: "Birdseye - Application",
          title: "V1 DOB to web",
          dueDate: "Thursday",
          dueTime: "8:00am",
          complete: false
        },
        {
          project: "Birdseye - Application",
          title: "Order Business Cards",
          dueDate: "Thursday",
          dueTime: "8:00am",
          complete: false
        },
        {
          project: "Birdseye - Application",
          title: "Schedule Dribble Post",
          dueDate: "Thursday",
          dueTime: "8:00am",
          complete: false
        },
        {
          project: "Birdseye - Application",
          title: "Send Invites",
          dueDate: "Thursday",
          dueTime: "8:00am",
          complete: false
        },
        {
          project: "Birdseye - Application",
          title: "UX & Wireframing",
          dueDate: "Thursday",
          dueTime: "8:00am",
          complete: false
        },
        {
          project: "Birdseye - Application",
          title: "Prototype Creation",
          dueDate: "Thursday",
          dueTime: "8:00am",
          complete: false
        }
      ],
      projects: ["Birdseye - Application"],
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
        <TaskSidebar
          tasks={this.state.tasks}
          projects={this.state.projects}
          list={this.state.list}
          changeList={this.changeList}
        />

        <div className="right-side-view">
          <Header daysLeft={this.state.daysLeft}/>
          <ScheduledTasks
            tasks={this.state.tasks}
          />
        </div>
      </div>
    );
  }
}

export default TaskManagementView;
