<template>
  <nav class="widget">
    <router-link to="/">{{ $t('nav.home') }}</router-link> |
    <router-link to="/profile">{{ $t('nav.profile') }}</router-link>
  </nav>
</template>

<script>
import { i18n } from './locales';

export default {
  name: 'Nav',
  i18n,
};
</script>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
