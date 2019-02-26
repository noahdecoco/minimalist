<template >
  <div class="app">
    <div class="left-column">
      <task-form/>
      <task-list/>
    </div>
    <div class="right-column">
      <task-notes v-if="selectedTask" v-bind:task="selectedTask"></task-notes>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import TaskNotes from "./components/TaskNotes/TaskNotes";

export default {
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

<style lang="scss" scoped>
@import "./styles/colors.scss";

.app {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10vh 10vw;
  width: 100%;
  height: 100%;
  background: $primary;
}

.left-column {
  display: flex;
  flex: 0 calc(60% - 5vw);
  flex-direction: column;
}

.right-column {
  display: flex;
  align-items: center;
  flex: 0 calc(40% - 5vw);
  justify-content: center;
}
</style>