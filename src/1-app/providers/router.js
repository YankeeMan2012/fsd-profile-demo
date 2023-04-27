import Vue from 'vue';
import VueRouter from 'vue-router';
import { Home } from '@/3-pages/home';
import { ProfileLazy } from '@/3-pages/profile'; // TODO: lazy components
import { globalActions } from '@/6-entities/global';
import { store } from './store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      actions: [globalActions.getCities], // TODO: global action
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileLazy,
    meta: {
      actions: [globalActions.getRegions],
    },
  },
];

export const router = new VueRouter({
  routes,
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  to.meta?.actions?.forEach(store.dispatch);
  next();
});
