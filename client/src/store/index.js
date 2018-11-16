import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    tasks: [],
    selectedTask: null
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
    selectedTask(state) {
      return state.selectedTask;
    }
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks.sort((a, b) => {
        return a.priority - b.priority || a.effort - b.effort;
      });
    },
    setSelectedTask(state, task) {
      state.selectedTask = task;
    }
  },
  actions
});
