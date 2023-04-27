import { api } from '@/7-shared/api';

export const getProfile = () => api.get('/profile');

export const updateProfile = (payload) => api.patch('/profile', payload);
