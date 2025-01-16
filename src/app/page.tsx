'use client';

import Pagination from '@/components/Pagination';
import PokemonCard from '@/components/PokemonCard';
import { useSearch } from '@/context/searchContext';
import getIdFromUrl from '@/helpers/getIdFromUrl';
import { useFetchApi } from '@/hooks/useFetchApi';
import { PokemonId, PokemonResponse } from '@/interfaces/pokemons';
import { useEffect, useState } from 'react';

const initialData = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

export default function Home() {
  const title = "Gotta catch 'em all!";
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [offset, setOffset] = useState<string>('0');
  const { searchQuery } = useSearch();

  const { data, refetch } = useFetchApi<PokemonResponse | PokemonId>({
    initialData,
    url: `pokemon/${searchQuery}`,
    params: {
      offset,
      limit: '16',
    },
  });

  useEffect(() => {
    if (!searchQuery) {
      setCurrentPage(1);
    }
  }, []);

  const onPageChange = (value: number) => {
    setCurrentPage(value);
    setOffset(((value - 1) * 16 + 1).toString());
    refetch();
  };

  return (
    <div className='h-full flex flex-col gap-4 w-[70%] mx-auto py-4'>
      <span className='text-secondary-light text-2xl font-bold text-center'>
        {title}
      </span>
      <div className='flex-grow overflow-y-scroll grid grid-cols-4 gap-2 pr-2'>
        {'results' in data ? (
          data.results.map((pokemon) => (
            <PokemonCard
              pokemon={pokemon}
              key={pokemon.name}
              id={getIdFromUrl(pokemon.url)}
            />
          ))
        ) : (
          <PokemonCard pokemon={data} key={data.name} id={data.id} />
        )}
      </div>
      {'count' in data && (
        <Pagination
          totalCount={data?.count || 0}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
}
