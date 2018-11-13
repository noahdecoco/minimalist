<style lang="scss" scoped src="./app.scss"></style>
<template src="./app.html"></template>

<script>
import { mapGetters } from "vuex";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskNotes from "./components/TaskNotes";

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
    unsetSelectedTask(){
      this.$store.commit("setSelectedTask", null);
    }
  }
};
</script>