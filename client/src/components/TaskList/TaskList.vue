<template>
  <div class="task-list">
    <div class="scroll-panel">
      <transition-group name="task-list" tag="ul">
        <li v-for="task in tasks" v-bind:key="task.createdAt">
          <task-item v-bind:task="task"></task-item>
        </li>
      </transition-group>
    </div>
    <div class="fade top"></div>
    <div class="fade bottom"></div>
  </div>
</template>

<script>
import TaskItem from "./TaskItem/TaskItem";
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

<style lang="scss" scoped>
@import "@/styles/colors.scss";

.task-list {
  position: relative;
  overflow: hidden;
  flex: 1;
}

.scroll-panel {
  overflow: auto;
  height: 100%;
}

.fade {
  position: absolute;
  display: block;
  width: 100%;
  height: 2rem;

  &.top {
    top: 0;
    background: linear-gradient(
      180deg,
      rgba($primary, 1) 10%,
      rgba($primary, 0) 100%
    );
  }

  &.bottom {
    bottom: 0;
    background: linear-gradient(
      0deg,
      rgba($primary, 1) 10%,
      rgba($primary, 0) 100%
    );
  }
}

ul {
  margin: 0;
  padding: 2rem 0;
  list-style: none;
}

li {
  display: inline-block;
  margin-bottom: 0.5em;
  width: 100%;
  transition: all 0.3s;
}

.task-list-enter,
.task-list-leave-to {
  opacity: 0;
}

.task-list-leave-active {
  position: absolute;
  left: 0;
}
</style>