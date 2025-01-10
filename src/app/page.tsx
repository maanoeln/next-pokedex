'use client';

import PokemonCard from '@/app/components/PokemonCard';
import { useFetchApi } from '@/hooks/useFetchApi';
import { PokemonResponse } from '@/interfaces/pokemons';

export default function Home() {
  const title = "Gotta catch 'em all!";

  const { data } = useFetchApi<PokemonResponse>('/pokemon?limit=16');

  return (
    <div className='h-full flex flex-col gap-4 w-[70%] mx-auto py-4'>
      <span className='text-secondary-light text-2xl font-bold text-center'>
        {title}
      </span>
      <div className='flex-grow overflow-y-scroll grid grid-cols-4 gap-2 pr-2'>
        {!!data &&
          data.results?.map((dt, idx) => (
            <PokemonCard pokemon={dt} key={dt.name} idx={idx} />
          ))}
      </div>
      <div className='text-center'>pagination</div>
    </div>
  );
}
