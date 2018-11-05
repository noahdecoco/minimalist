import "./style.scss";
import React, { Component } from "react";

import TaskManagerService from "../../../../services/task-manager.service";

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: props.task
    };

    this.taskManagerService = new TaskManagerService();

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onCheckboxChangeHandler(event, task) {
    const updatedTask = Object.assign(this.state.task, {
      completed: event.target.checked
    });
    this.taskManagerService.updateTask(task);
    this.setState({
      task: updatedTask
    });
  }

  onChangeHandler(event) {
    const updatedTask = Object.assign(this.state.task, {
      description: event.target.value
    });
    this.setState({
      task: updatedTask
    });
  }

  onKeyDownHandler(event) {
    if (event.keyCode === 13) {
      event.target.blur();
    }
  }

  onBlurHandler(task) {
    this.taskManagerService.updateTask(task);
  }

  onDeleteClickHandler(taskId) {
    this.taskManagerService.deleteTask(taskId).then(task => {
      this.props.onDeleted(task.data._id);
    });
  }

  onSubmitHandler(event, task) {
    event.preventDefault();
    this.taskManagerService.updateTask(task);
  }

  render() {
    const task = this.state.task;

    return (
      <li>
        <form
          className={`task-item priority-${task.priority}`}
          onSubmit={event => this.onSubmitHandler(event, task)}
        >
          <input
            type="checkbox"
            checked={task.completed}
            id={task._id}
            onChange={event => this.onCheckboxChangeHandler(event, task)}
          />
          <input
            type="text"
            defaultValue={task.description}
            onChange={event => this.onChangeHandler(event, task)}
            onKeyDown={this.onKeyDownHandler}
            onBlur={() => this.onBlurHandler(task)}
          />
          <span className="badge">{task.weight}</span>
          <button
            type="button"
            onClick={() => this.onDeleteClickHandler(task._id)}
          >
            x
          </button>
        </form>
      </li>
    );
  }
}

export default TaskItem;
