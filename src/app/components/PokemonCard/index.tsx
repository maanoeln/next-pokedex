import Icons from '@/app/components/icons/icons';
import getImageUrl from '@/helpers/getImageUrl';
import { Pokemon } from '@/interfaces/pokemons';
import Image from 'next/image';

interface IPokemonCard {
  pokemon: Pokemon;
  idx: number;
}

function PokemonCard({ pokemon, idx }: IPokemonCard) {
  return (
    <div className='flex flex-col gap-3 p-3 flex-1 bg-secondary-dark rounded-lg'>
      <div className='flex justify-between items-center'>
        <span className='capitalize text-xl font-bold text-secondary-light text-center flex-1'>
          {pokemon.name}
        </span>
        <Icons
          className='stroke-primary-main hover:stroke-primary-light cursor-pointer '
          fill='none'
          width='21px'
          height='21px'
          viewbox='0 0 21 21'
          name='info'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </div>
      <div className='flex justify-center h-full :'>
        <div className='relative flex justify-center items-center h-[120px] w-[120px]'>
          <Image
            className='justify-self-center static z-20'
            src={getImageUrl(idx)}
            alt={pokemon.name}
            width={150}
            height={150}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
