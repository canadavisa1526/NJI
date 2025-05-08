/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
      {
        source: "/ingest/decide",
        destination: "https://us.i.posthog.com/decide",
      },
      // Add proxy rewrites here
      {
        source: "/api/:path*", // Match any API request
        destination: "https://newji.vercel.app/api/:path*", // Redirect the request to your backend
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
  webpack(config, { isServer }) {
    if (!isServer) {
      const { createProxyMiddleware } = require("http-proxy-middleware");

      config.devServer = {
        ...config.devServer,
        proxy: {
          "/api": {
            target: "https://newji.vercel.app", // Your backend API
            changeOrigin: true, // Modify the Origin header to match the target
            secure: false, // Set to true if your backend uses HTTPS
          },
        },
      };
    }

    return config;
  },
};

module.exports = nextConfig;
