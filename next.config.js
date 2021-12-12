const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "node_modules")],
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};
