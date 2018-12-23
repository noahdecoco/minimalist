<template>
  <select @change="onChangeHandler" v-model="selectedValue">
    <option v-for="n in options" v-bind:key="n" v-bind:value="n">{{labelPrefix}}{{n}}</option>
  </select>
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
    }
  }
};
</script>