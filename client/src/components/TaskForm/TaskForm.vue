<template>
  <form v-on:submit="onSubmitHandler">
    <input
      type="text"
      placeholder="Add a task [!priority] [#effort]"
      name="task-values"
      autocomplete="off"
    >
    <div class="underline"></div>
  </form>
</template>

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

<style lang="scss" scoped>
@import "@/styles/colors.scss";

form {
  width: 100%;
  height: 2.5rem;
  color: $secondary;
}

input {
  padding: 0 0.6rem 0.3rem 0;
  width: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1.2em;
  transition: opacity 0.3s;

  &::placeholder {
    color: $tirtiary;
    transition: opacity 0.2s;
  }

  &:focus + .underline,
  &:hover + .underline {
    transform: scaleY(2);
  }

  &:focus::placeholder {
    opacity: 0;
  }
}

.underline {
  height: 1px;
  background: $tirtiary;
  transition: transform 0.3s ease-out;
  transform: scaleY(1);
  transform-origin: left top;
}
</style>