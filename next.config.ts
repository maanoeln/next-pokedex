import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/next-pokedex',
  assetPrefix: '/next-pokedex/',
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['assets.pokemon.com'],
  },
};

export default nextConfig;
