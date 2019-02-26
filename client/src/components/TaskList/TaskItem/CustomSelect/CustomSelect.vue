<template>
  <div class="select-wrapper">
    <div class="mask">
      <div class="selected-value">
        <span>{{selectedValue}}</span>
      </div>
      <ul>
        <li v-for="n in options" v-bind:key="n" @click="clickHandler(n)">
          <span>{{n}}</span>
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
  width: calc(1.4rem + 2px);
  height: calc(1.4rem + 2px);
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
  border-radius: 0.7rem;
  flex: 0 0 1.4rem;
  width: 1.4rem;
  height: 1.4rem;
  overflow: hidden;
  transition: height 0.3s;
  background: $primary;
  &:hover {
    height: 1.4rem * 5;
  }
}

.selected-value {
  width: 1.4rem;
  height: 1.4rem;
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
  width: 1.4rem;
  height: 1.4rem;
  &:hover {
    color: $secondary;
  }
}
</style>
