/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.datocms-assets.com",
      "www.datocms.com",
      "graphql.datocms.com",
      "mdbcdn.b-cdn.net",
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        dns: false,
        child_process: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
