import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    domains: ['assets.pokemon.com'],
  },
};

export default nextConfig;
