<template>
  <div
    class="task-item"
    v-bind:class="{ 'is-selected': isSelectedTask(), 'is-not-selected': isNotSelectedTask(), 'is-completed': task.isCompleted }"
  >
    <form @submit="updateTask" class="form">
      <label v-bind:for="task._id" class="input-is-completed">
        <input
          v-bind:id="task._id"
          type="checkbox"
          v-model="task.isCompleted"
          @change="updateTask"
          title="Complete"
        >
      </label>
      
      <input class="input-description" type="text" v-model="task.description" @blur="updateTask">

      <CustomSelect
        class="select"
        v-bind:options="task.priorityOptions"
        v-bind:value="task.priority"
        v-bind:labelPrefix="'!'"
        v-bind:name="'priority'"
        @change="onSelectionChange"
      ></CustomSelect>

      <CustomSelect
        class="select"
        v-bind:options="task.effortOptions"
        v-bind:value="task.effort"
        v-bind:labelPrefix="'#'"
        v-bind:name="'effort'"
        @change="onSelectionChange"
      ></CustomSelect>

      <button
        class="button-notes"
        type="button"
        @click="toggleSelectedTask"
        title="Add notes"
      >&#9998;</button>
      <button class="button-delete" type="button" @click="deleteTask" title="Delete">&#10005;</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CustomSelect from "./CustomSelect/CustomSelect";

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

<style lang="scss" scoped>
@import "@/styles/colors.scss";

.task-item {
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  transition: opacity 0.3s;
  border-bottom: 1px solid transparent;

  .form {
    display: flex;
    align-items: center;
    flex: 1;
  }

  .input-is-completed {
    flex-shrink: 0;
    box-sizing: border-box;
    width: 0.8rem;
    height: 0.8rem;
    border: 1px solid $tirtiary;
    border-radius: 0.2rem;
    background: $primary;
    cursor: pointer;
    transition: background-color 0.2s;

    input {
      display: none;
    }
  }

  .input-description {
    flex: 100%;
    margin-left: 0.4rem;
    padding-bottom: 0.1rem;
    outline: none;
    border: none;

    background: $primary;
    color: $secondary;
    font-size: 1rem;
    transition: color 0.3s;
  }

  .button-notes,
  .button-delete {
    flex-shrink: 0;
    padding: 0;
    width: 1.4rem;
    height: 1.4rem;
    outline: none;
    border: 1px solid $tirtiary;
    border-radius: 0.2rem;
    background: $primary;
    color: $tirtiary;
    text-align: center;
    font-size: 1rem;
    line-height: 0rem;
    opacity: 0;
    cursor: pointer;
    transition: color 0.3s, background 0.3s, opacity 0.3s;
  }

  .select {
    opacity: 0;
    transition: opacity 0.3s;
  }

  .button-delete {
    margin-left: 0.2rem;
    &:hover {
      color: $warning;
    }
  }

  .button-notes {
    margin-left: 0.2rem;
    &:hover {
      color: $secondary;
    }
  }

  &.is-completed {
    opacity: 0.2;

    .input-is-completed {
      background: $success;
    }

    .input-description {
      text-decoration: line-through;
    }

    .select {
      opacity: 0;
    }
  }

  &.is-selected {
    .button-notes {
      opacity: 1;
    }

    .button-notes {
      background: $secondary;
      color: $primary;
    }
  }

  &.is-not-selected {
    .input-description {
      color: $tirtiary;
    }
  }

  &:hover {
    opacity: 1;
    border-bottom: 1px solid $tirtiary;

    .button-delete,
    .button-notes,
    .select {
      opacity: 1;
    }
  }
}
</style>