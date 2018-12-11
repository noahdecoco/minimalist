<style lang="scss" scoped src="./style.scss"></style>
<template src="./template.html"></template>

<script>
export default {
  props: ["task"],
  methods: {
    updateTask() {
      this.$store.dispatch("updateTask", this.task);
    },
    unselectTask() {
      this.$store.commit("setSelectedTask", null);
    }
  },
  watch: {
    task: function(value) {
      console.log('changed', value);
    }
  }
};
</script>
