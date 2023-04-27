import { getProfile, updateProfile } from '@/6-entities/user/api';

export const NAMESPACE = 'user';

export const user = {
  namespaced: true,
  state: () => ({
    profile: {},
    loading: false,
  }),
  getters: {
    profile: (state) => state.profile,
  },
  mutations: {
    setProfile(state, payload) {
      state.profile = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    async getProfile({ state, commit }) {
      if (state.loading) return;
      commit('setLoading', true);
      const res = await getProfile();
      commit('setProfile', res.data);
    },
    async updateProfile({ commit }, payload) {
      const res = await updateProfile(payload);
      commit('setProfile', res.data);
    },
  },
};
