<template>
  <div id="app">
    <task-form/>
    <task-list/>
  </div>
</template>

<script>
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default {
  name: "app",
  components: {
    TaskForm,
    TaskList
  }
};
</script>