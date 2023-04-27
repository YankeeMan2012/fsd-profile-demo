import axios from 'axios';
import { getEnvVar } from '../config';

export const api = axios.create({
  baseURL: getEnvVar('API_URL'),
});
