import PokemonDetailsClient from '@/app/pokemon/[id]/pokemonDetailsClient';

type Params = {
  id: string;
};

// Fix: Ensure the return type of `generateStaticParams` matches Next.js expectations
export async function generateStaticParams(): Promise<Params[]> {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
  const data = await response.json();

  return data.results.map((pokemon: { url: string }) => {
    const id = pokemon.url.split('/').filter(Boolean).pop(); // Extract ID from URL
    return { id }; // Return just the `id` field
  });
}

// Fix: Adjust `params` structure to match `generateStaticParams` output
export default async function PokemonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <PokemonDetailsClient id={id} />;
}
