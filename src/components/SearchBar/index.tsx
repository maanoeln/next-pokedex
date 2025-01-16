'use client';

import Icons from '@/components/icons/icons';
import { useSearch } from '@/context/searchContext';
import { useState } from 'react';

function SearchBar() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <div className='relative flex items-center pl-'>
      <button
        onClick={() => setIsActive((state) => !state)}
        className='flex items-center justify-center transition-all z-10'
      >
        <Icons
          name='searchGlass'
          viewBox='0 0 24 24'
          width='32px'
          height='32px'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          className={`stroke-secondary-main fill-none ${
            isActive ? 'mr-2' : ''
          }`}
        />
      </button>

      <input
        type='text'
        placeholder='Busque por nome'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={`absolute right-0 p-2 pr-7 text-secondary-light border rounded-lg text-sm outline-none bg-primary-dark transition-all duration-300 ${
          isActive
            ? 'w-48 border  b-secondary-dark opacity-100'
            : 'w-0 border-transparent opacity-0'
        }`}
      />
    </div>
  );
}

export default SearchBar;
