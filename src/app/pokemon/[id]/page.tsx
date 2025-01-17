import getImageUrl from '@/helpers/getImageUrl';
import { typesLight } from '@/helpers/typesColors';
import { PokemonId, PokemonResponse } from '@/interfaces/pokemons';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface PokemonDetailsClientProps {
  params: Promise<{ id: string }>;
}

async function fetchPokemon(id: string): Promise<PokemonId> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch Pokémon');
  }

  return res.json();
}

async function PokemonDetailsClient({ params }: PokemonDetailsClientProps) {
  const { id } = await params;
  const data = await fetchPokemon(id);

  const light = typesLight[data.types[0]?.type.name];

  if (!data) {
    notFound();
  }

  return (
    <div
      className='flex justify-start my-4 bg-waves bg-contain bg-no-repeat h-full w-[70%] m-auto capitalize'
      style={{
        backgroundPosition: 'bottom',
      }}
    >
      <div className='flex justify-center flex-col'>
        <span className='text-2xl text-secondary-light'>{data.name}</span>
        <div className='relative flex justify-start items-center'>
          <div
            className='absolute w-[300px] h-[300px] rounded-full'
            style={{ backgroundColor: light }}
          ></div>
          <Image
            className='z-20 translate'
            src={getImageUrl(+id)}
            width={400}
            height={400}
            alt={data.name}
            priority
          />
        </div>
      </div>
      <div>Info here</div>
    </div>
  );
}

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  const params: { id: string }[] = [];
  let nextUrl: string | null = baseUrl;

  // Loop through all paginated results
  while (nextUrl) {
    const res = await fetch(nextUrl);
    if (!res.ok) {
      throw new Error('Failed to fetch Pokémon list');
    }

    const data: PokemonResponse = await res.json();
    data.results.forEach((pokemon: { url: string }) => {
      const id = pokemon.url.split('/').filter(Boolean).pop(); // Extract the ID from the URL
      if (id) {
        params.push({ id });
      }
    });

    nextUrl = data.next; // Continue to the next page
  }

  return params;
}

export default PokemonDetailsClient;
