const path = require("path");
const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "node_modules")],
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  env: {
    api: "http://localhost:3001",
  },
});
