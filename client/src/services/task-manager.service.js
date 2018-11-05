import axios from "axios";

const priorityRegex = new RegExp("![0123](?=\\s|$)", "g");
const weightRegex = new RegExp("#[1-9](?=\\s|$)", "g");

class TaskManagerService {
  tasks = [];

  formattedTask(value) {
    const task = {
      description: "",
      priority: 0,
      weight: 1,
      completed: false
    };

    const priority = value.match(priorityRegex);
    if (priority) {
      task.priority = priority[0].slice(1);
    }

    const weight = value.match(weightRegex);
    if (weight) {
      task.weight = weight[0].slice(1);
    }

    task.description = value
      .replace(priorityRegex, "")
      .replace(weightRegex, "")
      .trim();

    return task;
  }

  sortTasks(tasks) {
    return tasks.sort((a, b) => {
      if (a.priority === 0) return 1;
      if (b.priority === 0) return -1;
      return a.priority - b.priority || a.weight - b.weight;
    });
  }

  getTasks() {
    return new Promise((resolve, reject) => {
      axios
        .get("/api")
        .then(({ data }) => {
          const sortedTasks = this.sortTasks(data);
          resolve(sortedTasks);
        })
        .catch(error => reject(error));
    });
  }

  addTask(value) {
    const task = this.formattedTask(value);
    return new Promise((resolve, reject) => {
      axios
        .post("/api", task)
        .then(({ data }) => resolve(data))
        .catch(error => reject(error));
    });
  }

  deleteTask(taskId) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/api/${taskId}`)
        .then(({ data }) => resolve(data))
        .catch(error => reject(error));
    });
  }

  updateTask(task) {
    return new Promise((resolve, reject) => {
      axios
        .put(`/api/${task._id}`, task)
        .then(({ data }) => resolve(data))
        .catch(error => reject(error));
    });
  }
}

export default TaskManagerService;
