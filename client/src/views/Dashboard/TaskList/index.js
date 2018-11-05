import "./style.scss";
import React, { Component } from "react";

import TaskManagerService from "../../../services/task-manager.service";

import TaskItem from "./TaskItem";

class Tasklist extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      value: ""
    };

    this.taskManagerService = new TaskManagerService();

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onTaskDeletedHandler = this.onTaskDeletedHandler.bind(this);
  }

  componentDidMount() {
    this.taskManagerService.getTasks().then(tasks => {
      this.setState({ tasks });
    });
  }

  renderTasks() {
    return this.state.tasks.map((task, index) => {
      return (
        <TaskItem
          key={task._id}
          task={task}
          onDeleted={this.onTaskDeletedHandler}
        />
      );
    });
  }

  onTaskDeletedHandler(taskId) {
    const filteredTasks = this.state.tasks.filter(task => task._id !== taskId);
    const tasks = this.taskManagerService.sortTasks(filteredTasks);
    this.setState({ tasks });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    if (this.state.value) {
      this.taskManagerService.addTask(this.state.value).then(task => {
        this.setState({
          tasks: this.taskManagerService.sortTasks([...this.state.tasks, task]),
          value: ""
        });
      });
    }
  }

  onChangeHandler(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div className="task-list">
        <div className="top-fade" />
        <ul>{this.renderTasks()}</ul>
        <div className="bottom-fade" />
      </div>
    );
  }
}

export default Tasklist;
