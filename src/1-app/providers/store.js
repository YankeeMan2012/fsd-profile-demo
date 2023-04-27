import Vue from 'vue';
import Vuex from 'vuex';
import { global } from '@/6-entities/global';
import { user } from '@/6-entities/user';

// TODO:
//  list[ENTITY]; - list of data
//  get[ENTITY]; - single entity by id/name/atc.
//  create[ENTITY];
//  update[ENTITY];
//  delete[ENTITY]; - delete by id

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    global,
    user,
  },
});
