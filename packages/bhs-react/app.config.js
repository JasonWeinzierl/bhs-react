// @ts-check

/**
 * @param {import('expo/config').ConfigContext} options
 * @returns {import('expo/config').ExpoConfig}
 */
const app = ({ config }) => ({
  ...config,
  name: 'bhs-react',
  slug: 'bhs-react',
  experiments: {
    baseUrl: process.env.BASE_URL || '',
  },
});
module.exports = app;
