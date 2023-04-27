<template>
  <button class="shared" :type="type" @click="$emit('click')">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'submit',
    },
  },
};
</script>

<style scoped lang="scss" src="./button.scss"/>
