<style lang="scss" scoped src="./style.scss"></style>
<template src="./template.html"></template>

<script>
import TaskItem from "./TaskItem";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["tasks"])
  },
  components: {
    TaskItem
  },
  mounted() {
    this.$store.dispatch("getTasks");
  }
};
</script>