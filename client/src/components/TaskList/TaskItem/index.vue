<style lang="scss" scoped src="./style.scss"></style>
<template src="./template.html"></template>

<script>
export default {
  props: ["task"],
  methods: {
    deleteTask() {
      this.$store.dispatch("deleteTask", this.task._id);
    },
    updateTask() {
      this.$store.dispatch("updateTask", this.task);
    }
  }
};
</script>
