export const getEnvVar = (key) => {
  const vueKey = `VUE_APP_${key}`;
  if (process.env[vueKey] === undefined) {
    throw new Error(`Env variable ${vueKey} is required`);
  }
  return process.env[vueKey] || '';
};

export const isDevEnv = process.env.NODE_ENV === 'development';
export const isProdEnv = process.env.NODE_ENV === 'production';
