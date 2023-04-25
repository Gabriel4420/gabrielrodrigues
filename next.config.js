/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.datocms-assets.com",
      "www.datocms.com",
      "graphql.datocms.com",
      "mdbcdn.b-cdn.net",
    ],
  },
};

module.exports = nextConfig;
