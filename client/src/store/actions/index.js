import Task from "../../models/Task";
import PersistantStore from "./persistant-store";

const persistantStore = new PersistantStore();

export default {
  getTasks(context) {
    const tasks = persistantStore.getItem("tasks");
    if (tasks) context.commit("setTasks", tasks);
  },
  createTask(context, { values }) {
    const task = new Task(values);
    const tasks = [...context.state.tasks, task];
    context.commit("setTasks", tasks);
    persistantStore.setItem("tasks", tasks);
  },
  deleteTask(context, id) {
    const tasks = context.state.tasks.filter(item => item._id != id);
    context.commit("setTasks", tasks);
    persistantStore.setItem("tasks", tasks);
  },
  updateTask(context) {
    const tasks = context.state.tasks;
    context.commit("setTasks", tasks);
    persistantStore.setItem("tasks", tasks);
  }
};
