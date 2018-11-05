import "./style.scss";
import React, { Component } from "react";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <TaskForm />
        <TaskList />
      </div>
    );
  }
}

export default Dashboard;
