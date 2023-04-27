<template>
  <input class="shared" type="text" :value="value" @input="$emit('input', $event.target.value)"/>
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss" src="./input.scss"/>
