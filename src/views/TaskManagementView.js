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
          title: "V1Interview Scripts",
          dueDate: "Today",
          dueTime: "8:00am",
          complete: false
        },
        {
          project: "Birdseye - Application",
          title: "Review Scripts",
          dueDate: "Today",
          dueTime: "8:00am",
          complete: false
        },
        {
          project: "Birdseye - Application",
          title: "Customer Map",
          dueDate: "Today",
          dueTime: "8:00am",
          complete: false
        },
        {
          project: "Birdseye - Application",
          title: "V1 DOB to web",
          dueDate: "Today",
          dueTime: "8:00am",
          complete: false
        },
        {
          project: "Birdseye - Application",
          title: "Order Business Cards",
          dueDate: "Today",
          dueTime: "8:00am",
          complete: false
        },
        {
          project: "Birdseye - Application",
          title: "Schedule Dribble Post",
          dueDate: "Today",
          dueTime: "8:00am",
          complete: false
        },
        {
          project: "Birdseye - Application",
          title: "Send Invites",
          dueDate: "Today",
          dueTime: "8:00am",
          complete: false
        },
        {
          project: "Birdseye - Application",
          title: "UX & Wireframing",
          dueDate: "Today",
          dueTime: "8:00am",
          complete: false
        },
        {
          project: "Birdseye - Application",
          title: "Prototype Creation",
          dueDate: "Today",
          dueTime: "8:00am",
          complete: false
        }
      ],
      projects: ["Birdseye - Application"],
      list: "all"
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

        <div>
          <Header />
          {/* <ScheduledTasks /> */}
        </div>
      </div>
    );
  }
}

export default TaskManagementView;
