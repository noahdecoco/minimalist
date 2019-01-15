<template>
  <div @click="clickHandler()" class="select-wrapper">
    <div class="selected-value">
      <span>{{selectedValue}}</span>
    </div>
    <ul>
      <li v-for="n in options" v-bind:key="n">{{n}}</li>
    </ul>
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
    clickHandler() {}
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";

.select-wrapper {
  width: 1.4rem;
  height: 1.4rem;
  flex: 0 0 1.4rem;
  border-radius: 1rem;
  margin-left: 0.2rem;
  border: 1px solid $tirtiary;
  // box-sizing: border-box;
  overflow: hidden;
  color: $tirtiary;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: $secondary;
  }
}

.selected-value {
  width: 1.4rem;
  height: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  // text-align: center;
  // line-height: 1.4rem;
  font-family: sans-serif;

  font-size: 0.8rem;
}
</style>
