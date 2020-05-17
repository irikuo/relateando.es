/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const bundleAnalyzer = require('@next/bundle-analyzer');

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Generate Sitemap + RSS on build time
    if (isServer) {
      require('./utils/generateSitemap')();
      require('./utils/generateRSS')();
    }

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
