'use client';

import Icons from '@/components/icons/icons';
import LanguageMenu from '@/components/LanguageMenu';
import SearchBar from '@/components/SearchBar';
import ToggleTheme from '@/components/ToggleTheme';

function Header() {
  return (
    <header className='border-b p-3 h-[65px] relative '>
      <div className='mx-auto lg:w-[70%] flex justify-between items-center'>
        <div>
          <Icons
            className='fill-secondary dark:fill-primary'
            width='125px'
            height='45px'
            viewBox='0 0 125 45'
            name='pokemon'
          />
        </div>

        <div className='flex gap-4 items-center'>
          <SearchBar />

          <ToggleTheme />

          <LanguageMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
