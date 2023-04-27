import Vue from 'vue';
import App from './App.vue';
import { i18n, router, store } from './providers';

Vue.config.productionTip = false;

export const app = new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
});
