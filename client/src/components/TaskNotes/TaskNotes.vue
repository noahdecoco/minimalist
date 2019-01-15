<template>
  <transition name="fade">
    <div class="task-notes">
      <div class="header">
        <button class="button-close" type="button" @click="unselectTask">&#10005;</button>
      </div>
      <form>
        <span class="line-1"></span>
        <span class="line-2"></span>
        <span class="line-3"></span>
        <span class="line-4"></span>
        <textarea
          class="textarea"
          placeholder="Enter your notes here"
          v-model="task.notes"
          @blur="updateTask"
        ></textarea>
      </form>
    </div>
  </transition>
</template>

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
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";

.task-notes {
  display: flex;
  align-self: stretch;
  flex: 1;
  flex-direction: column;
}

.header {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  height: 2.5rem;
  overflow: hidden;
}

.button-close {
  flex-shrink: 0;
  padding: 0;
  width: 1.4rem;
  height: 1.4rem;
  outline: none;
  border: 1px solid $tirtiary;
  border-bottom: 0;
  border-radius: 0.2rem 0.2rem 0 0;
  background: $primary;
  color: $tirtiary;
  text-align: center;
  font-size: 1rem;
  line-height: 0rem;
  cursor: pointer;
  transition: color 0.3s, transform 0.4s ease-in-out;
  transform: translateY(1px);

  &:hover {
    color: $secondary;
  }
}

form {
  position: relative;
  flex: 1;
}

.line-1,
.line-2,
.line-3,
.line-4 {
  position: absolute;
  background: $tirtiary;
  transition: transform 1s;
}

.line-1 {
  top: 0;
  width: calc(100% - 1.4rem);
  height: 1px;
  transform: scaleX(1);
  transform-origin: left;
  transition: transform 1.2s;
}

.line-2 {
  transition: transform 1.2s;
  right: 0;
  width: 1px;
  height: 100%;
  transform: scaleY(0.3);
  transform-origin: bottom;
}

.line-3 {
  transition: transform 1.2s;
  bottom: 0;
  width: 100%;
  height: 1px;
  transform: scaleX(0.3);
  transform-origin: right;
}

.line-4 {
  transition: transform 1s;
  left: 0;
  width: 1px;
  height: 100%;
  transform: scaleY(1);
  transform-origin: top;
}

textarea {
  transition: opacity 0.8s;
  overflow: auto;
  box-sizing: border-box;
  margin: 0;
  padding: 1rem;
  width: 100%;
  height: 100%;
  outline: 0;
  border: none;
  border: 0;
  background: none;
  color: #888;
  font-size: 1rem;
  line-height: 1.6rem;
  resize: none;

  &::placeholder {
    color: $tirtiary;
    transition: opacity 0.2s;
  }

  &:focus::placeholder {
    opacity: 0;
  }
}

.fade-enter-active {
  transition: opacity 0.3s;

  .button-close {
    transition-delay: 1s;
  }
}

.fade-leave-active {
  transition: opacity 0.3s;
  transition-delay: 0.9s;

  .line-1 {
    transition-delay: 0.3s;
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;

  .line-1,
  .line-3 {
    transform: scaleX(0);
  }

  .line-2,
  .line-4 {
    transform: scaleY(0);
  }

  .button-close {
    transform: translateY(1.4rem);
  }

  .textarea {
    opacity: 0;
  }
}
</style>