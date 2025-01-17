// 'use client';

import { typesLight } from '@/helpers/typesColors';
import { PokemonId } from '@/interfaces/pokemons';
import Image from 'next/image';

interface PokemonDetailsClientProps {
  params: Promise<{ id: string }>;
}

async function fetchPokemon(id: string): Promise<PokemonId> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'no-store', // Ensures the data is fetched dynamically on every request
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
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`}
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

export default PokemonDetailsClient;
