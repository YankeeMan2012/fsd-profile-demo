import { global, NAMESPACE } from '@/6-entities/global/store';

const ns = (action) => [NAMESPACE, action.name].join('/');

const { getCities, getRegions } = global.actions;

export const globalActions = {
  getCities: ns(getCities),
  getRegions: ns(getRegions),
};
