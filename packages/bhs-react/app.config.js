//@ts-check

/**
 * @param {import('expo/config').ConfigContext} options
 * @returns {import('expo/config').ExpoConfig}
 */
module.exports = ({ config }) => ({
  ...config,
  name: 'bhs-react',
  slug: 'bhs-react',
  experiments: {
    baseUrl: process.env.BASE_URL || '',
  },
});
