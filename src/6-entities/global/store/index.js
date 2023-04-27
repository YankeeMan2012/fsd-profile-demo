import { getCities, getRegions } from '@/6-entities/global/api';

export const NAMESPACE = 'global';

export const global = {
  namespaced: true,
  state: () => ({
    cities: [],
    regions: [],
  }),
  getters: {
    cities: (state) => state.cities,
  },
  mutations: {
    setCities(state, payload) {
      state.cities = payload;
    },
    setRegions(state, payload) {
      state.regions = payload;
    },
  },
  actions: {
    async getCities({ state, commit }, payload) {
      if (state.cities.length) return;
      const res = await getCities(payload);
      commit('setCities', res.data || []);
    },
    async getRegions({ state, commit }, payload) {
      if (state.regions.length) return;
      const res = await getRegions(payload);
      commit('setRegions', res.data || []);
    },
  },
};
