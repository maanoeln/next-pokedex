import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/next-pokedex',
  output: 'export',
  images: {
    domains: ['assets.pokemon.com'],
    unoptimized: true,
  },
};

export default nextConfig;
