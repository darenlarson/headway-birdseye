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
          id: 1,
          project: "Birdseye - Application",
          title: "Fix UX issues",
          dueDate: "Today",
          dueTime: "8:00am",
          complete: false
        },
        {
          id: 2,
          project: "Birdseye - Application",
          title: "Adjust final filtering",
          dueDate: "Today",
          dueTime: "8:00am",
          complete: false
        },
        {
          id: 3,
          project: "Birdseye - Application",
          title: "Title",
          dueDate: "Today",
          dueTime: "8:00am",
          complete: true
        },
        {
          id: 4,
          project: "Birdseye - Application",
          title: "V1 DOB to web",
          dueDate: "Thurs",
          dueTime: "8:00am",
          complete: false
        },
        {
          id: 5,
          project: "Birdseye - Application",
          title: "Order Business Cards",
          dueDate: "Thurs",
          dueTime: "8:00am",
          complete: false
        },
        {
          id: 6,
          project: "Birdseye - Application",
          title: "Schedule Dribble Post",
          dueDate: "Thurs",
          dueTime: "8:00am",
          complete: false
        },
        {
          id: 7,
          project: "Birdseye - Application",
          title: "Send Invites",
          dueDate: "Thurs",
          dueTime: "8:00am",
          complete: false
        },
        {
          id: 8,
          project: "Birdseye - Application",
          title: "UX & Wireframing",
          dueDate: "Thurs",
          dueTime: "8:00am",
          complete: false
        },
        {
          id: 9,
          project: "Birdseye - Application",
          title: "Prototype Creation",
          dueDate: "Thurs",
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
