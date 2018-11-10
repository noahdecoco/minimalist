import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    tasks: []
  },
  getters: {
    tasks(state) {
      return state.tasks;
    }
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks.sort((a, b) => {
        if (a.priority === 0) return 1;
        if (b.priority === 0) return -1;
        return a.priority - b.priority || a.effort - b.effort;
      });
    }
  },
  actions
});
