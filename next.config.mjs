import path from "path";

export default {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["example.com"],
  },
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(
      new URL(".", import.meta.url).pathname,
      "src"
    );
    return config;
  },
};
