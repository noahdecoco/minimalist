<style lang="scss" scoped src="./style.scss"></style>
<template src="./template.html"></template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.state.tasks;
    }
  },
  methods: {
    onSubmitHandler(e) {
      e.preventDefault();
      const input = e.target.elements["task-values"];
      const values = input.value;
      this.$store.dispatch("createTask", { values });
      input.value = "";
    }
  }
};
</script>