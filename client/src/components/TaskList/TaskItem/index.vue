<style lang="scss" scoped src="./style.scss"></style>
<template src="./template.html"></template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["task"],
  computed: {
    ...mapGetters(["selectedTask"])
  },
  methods: {
    deleteTask() {
      this.$store.dispatch("deleteTask", this.task._id);
    },
    updateTask(event) {
      event.preventDefault();
      document.activeElement.blur();
      this.$store.dispatch("updateTask", this.task);
    },
    isSelectedTask() {
      return this.selectedTask && this.selectedTask._id === this.task._id;
    },
    selectTask() {
      this.$store.commit("setSelectedTask", this.task);
    },
    unselectTask() {
      this.$store.commit("setSelectedTask", null);
    }
  }
};
</script>
