<template>
  <div id="app">
    <task-form/>
    <task-list/>
    <task-notes v-if="selectedTask" v-bind:task="selectedTask"></task-notes>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskNotes from "./components/TaskNotes";

export default {
  name: "app",
  computed: {
    ...mapGetters(["selectedTask"])
  },
  components: {
    TaskForm,
    TaskList,
    TaskNotes
  }
};
</script>