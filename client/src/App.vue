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
  },
  methods: {
    unsetSelectedTask() {
      this.$store.commit("setSelectedTask", null);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./styles/colors.scss";

$padding: 10vw;

.app {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  padding: $padding;
  width: 100%;
  height: 100%;
  background: $primary;
}

.left-column {
  display: flex;
  flex: 0 calc(40% - 5vw);
  flex-direction: column;
}

.right-column {
  display: flex;
  align-items: center;
  flex: 0 calc(60% - 5vw);
  justify-content: center;
}

.button-unset-selected-task {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  border-radius: 0;
  opacity: 0;
}
</style>