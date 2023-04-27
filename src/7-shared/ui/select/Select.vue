<template>
  <select class="shared" :value="value" @change="$emit('input', $event.target.value)">
    <option v-for="option in options" :value="option.value">{{ option.label }}</option>
  </select>
</template>

<script>
export default {
  name: 'Select',
  props: {
    value: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="scss" src="./input.scss"/>
