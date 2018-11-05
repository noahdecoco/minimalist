import "./style.scss";
import React, { Component } from "react";

import TaskManagerService from "../../../services/task-manager.service";

class Tasklist extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };

    this.taskManagerService = new TaskManagerService();

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    if (this.state.value) {
      this.taskManagerService.addTask(this.state.value).then(task => {
        this.setState({
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
      <form className="task-form" onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          placeholder="[task] [!priority] [#weight]"
          value={this.state.value}
          onChange={this.onChangeHandler}
        />
      </form>
    );
  }
}

export default Tasklist;
