/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [],
    // Enable static image imports
    unoptimized: true,
  },
  // Ensure proper asset handling
  assetPrefix: '',
  // Output standalone build for better static file handling
  output: 'standalone',
};

export default nextConfig;
