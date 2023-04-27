<template>
  <div id="app" class="app">
    <Header/>
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import { Nav } from '@/4-widgets/nav';
import { Header } from '@/4-widgets/header';

export default {
  components: {
    Header,
    Nav,
  },
};
</script>

<style lang="scss" src="@/7-shared/assets/scss/style.scss"/>
