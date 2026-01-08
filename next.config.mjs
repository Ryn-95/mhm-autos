/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable caching for development
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  // Ensure images aren't aggressively cached
  images: {
    minimumCacheTTL: 0,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Detailed logging to debug caching
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // Prevent browser caching in development
};

export default nextConfig;
