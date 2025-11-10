/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.datocms.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "graphql.datocms.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mdbcdn.b-cdn.net",
        port: "",
        pathname: "/**",
      },
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
  turbopack: {
    reactRefresh: true,
  },
  experimental: {
    turboPackFileSystemCacheForDev: true,
    turboPackFileSystemCacheForBuild: true,
  },
};

module.exports = nextConfig;
