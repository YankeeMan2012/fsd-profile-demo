<template>
  <header class="header widget">
    <img alt="logo" src="@/7-shared/assets/logo.png">
    <LocaleChanger/>
    <HeaderMenu/>
  </header>
</template>

<script>
import { mapActions } from 'vuex';
import { LocaleChanger } from '@/5-features/locale-changer';
import { HeaderMenu } from '@/5-features/header-menu';

export default {
  name: 'Header',
  components: {
    HeaderMenu,
    LocaleChanger,
  },
  methods: {
    ...mapActions('user', ['getProfile']),
  },
  created() {
    this.getProfile();
  },
};
</script>

<style scoped lang="scss" src="./header.scss"/>
