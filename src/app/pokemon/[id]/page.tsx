import PokemonDetailsClient from '@/app/pokemon/[id]/pokemonDetailsClient';

export async function generateStaticParams() {
  // Fetch Pokémon IDs from an API or static list
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
  const data = await response.json();

  return data.results.map((pokemon: { url: string }) => {
    const id = pokemon.url.split('/').filter(Boolean).pop(); //
    return { params: { id } };
  });
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function PokemonPage({ params }: PageProps) {
  return <PokemonDetailsClient id={params.id} />;
}
