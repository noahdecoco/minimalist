<style lang="scss" scoped src="./style.scss"></style>
<template src="./template.html"></template>

<script>
import { mapGetters } from "vuex";
import CustomSelect from "./Select";

export default {
  props: ["task"],
  computed: {
    ...mapGetters(["selectedTask"])
  },
  components: {
    CustomSelect
  },
  methods: {
    deleteTask() {
      if (this.selectedTask === this.task) {
        this.$store.commit("setSelectedTask", null);
      }
      this.$store.dispatch("deleteTask", this.task._id);
    },
    onSelectionChange(payload) {
      this.task[payload.name] = payload.value;
      this.$store.dispatch("updateTask", this.task);
    },
    updateTask(event) {
      event.preventDefault();
      document.activeElement.blur();
      this.$store.dispatch("updateTask", this.task);
    },
    isSelectedTask() {
      return this.selectedTask && this.selectedTask._id === this.task._id;
    },
    isNotSelectedTask() {
      return this.selectedTask && this.selectedTask._id !== this.task._id;
    },
    toggleSelectedTask() {
      let selectedTask;
      if (this.selectedTask && this.selectedTask === this.task) {
        selectedTask = null;
      } else {
        selectedTask = this.task;
      }
      this.$store.commit("setSelectedTask", selectedTask);
    }
  }
};
</script>
