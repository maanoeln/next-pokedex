'use client';

import Icons from '@/components/icons/icons';

// import Icons from '@/components/Icons';
// import ToggleTheme from '@/components/ThemeToggle';

function Header() {
  const invert = () => {
    console.log('chamei');
    document.body.style.filter = 'invert(1)';
  };

  return (
    <header className='border-b p-3 h-[65px]'>
      <div className='mx-auto lg:w-[70%] flex justify-between items-center'>
        <div>
          <Icons
            className='fill-secondary dark:fill-primary'
            width='125px'
            height='45px'
            viewbox='0 0 125 45'
            name='pokemon'
          />
        </div>
        <div onClick={invert}>
          <Icons
            className='fill-secondary dark:fill-primary'
            width='32px'
            height='33px'
            viewbox='0 0 32 33'
            name='sun'
          />
        </div>
        {/* <ToggleTheme /> */}
      </div>
    </header>
  );
}

export default Header;
