<template>
  <div class="header-menu feature">
    <div class="avatar">
      <img :src="profile.avatar" alt="avatar">
    </div>
    <div class="name">{{ profile.name }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HeaderMenu',
  computed: {
    ...mapGetters('user', ['profile']),
  },
};
</script>

<style scoped lang="scss" src="./header-menu.scss"/>
