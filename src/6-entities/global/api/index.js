import { api } from '@/7-shared/api';

export const getCities = () => api.get('/cities');

export const getRegions = () => api.get('/regions');
