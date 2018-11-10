import axios from "axios";

import Task from "../../models/Task";

const baseUrl = "http://localhost:6200";

export default {
  getTasks(context) {
    axios
      .get(`${baseUrl}/api`)
      .then(({ data }) => context.commit("setTasks", data))
      .catch(error => console.log(error));
  },
  createTask(context, { values }) {
    const task = new Task(values);
    context.commit("setTasks", [...context.state.tasks, task]);
    axios
      .post(`${baseUrl}/api`, task)
      .then(({ data }) => {
        const tasks = context.state.tasks.map(item =>
          item.createdAt === task.createdAt ? data : item
        );
        context.commit("setTasks", tasks);
      })
      .catch(error => console.log(error));
  },
  deleteTask(context, id) {
    const tasks = context.state.tasks.filter(item => item._id != id);
    context.commit("setTasks", tasks);
    axios
      .delete(`${baseUrl}/api/${id}`)
      .then(({ data }) => console.log(data))
      .catch(error => console.log(error));
  },
  updateTask(context, task) {
    context.commit("setTasks", context.state.tasks);
    axios
      .put(`${baseUrl}/api/${task._id}`, task)
      .then(({ data }) => console.log(data))
      .catch(error => console.log(error));
  }
};
