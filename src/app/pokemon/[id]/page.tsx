'use client';

import getImageUrl from '@/helpers/getImageUrl';
// import getWavesColor from '@/helpers/getWavesColor';
import { typesLight } from '@/helpers/typesColors';
import { useFetchApi } from '@/hooks/useFetchApi';
import { PokemonId } from '@/interfaces/pokemons';
import Image from 'next/image';
import { useParams } from 'next/navigation';

function PokemonDetails() {
  const { id } = useParams<{ id: string }>();
  const { data } = useFetchApi<PokemonId>({
    url: `/pokemon/${id}`,
    initialData: { name: '', url: '', sprites: '', types: [] },
  });

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
            src={getImageUrl(+id)}
            width={400}
            height={400}
            alt={data.name}
          />
        </div>
      </div>
      <div>Info here</div>
    </div>
  );
}

export default PokemonDetails;
