<template>
  <div class="select-wrapper">
    <div class="mask">
      <div class="selected-value">
        <!-- <span>{{selectedValue}}</span> -->
        <img :src="getImage(selectedValue)" class="dice-face">
      </div>
      <ul>
        <li v-for="n in 6" v-bind:key="n" @click="clickHandler(n)">
          <!-- <span>{{n}}</span> -->
          <img :src="getImage(n)" class="dice-face">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["options", "value", "name", "labelPrefix"],
  data: () => ({
    selectedValue: null
  }),
  mounted: function() {
    this.selectedValue = this.value;
  },
  watch: {
    value: function(value) {
      this.selectedValue = value;
    }
  },
  methods: {
    getImage(value) {
      if (value) {
        return require(`./dice-${value}.svg`);
      }
    },
    onChangeHandler() {
      this.$emit("change", {
        name: this.name,
        value: this.selectedValue
      });
    },
    clickHandler(value) {
      this.$emit("change", {
        name: this.name,
        value
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";

.select-wrapper {
  width: 1.4rem;
  height: 1.4rem;
  margin-left: 0.2rem;
  cursor: pointer;
  &:hover {
    .selected-value {
      color: $secondary;
    }
  }
}

.mask {
  border: 1px solid $tirtiary;
  border-radius: 0.2rem;
  flex: 0 0 1.4rem;
  width: 1.4rem;
  height: 1.4rem;
  overflow: hidden;
  box-sizing: border-box;
  transition: height 0.3s;
  background: $primary;
  &:hover {
    height: 1.4rem * 7;
  }
}

.selected-value {
  width: calc(1.4rem - 2px);
  height: calc(1.4rem - 2px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  transition: color 0.2s;
  color: $tirtiary;
  font-size: 0.8rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-size: 0.8rem;
  color: $tirtiary;
  transition: color 0.2s;
  width: calc(1.4rem - 2px);
  height: 1.4rem;
  &:hover {
    color: $secondary;
  }
}

.dice-face {
  width: 1rem;
  height: 1rem;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
}
</style>
