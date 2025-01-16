'use client';

import Icons from '@/components/icons/icons';
import getDistanceFromRight from '@/helpers/getDistanceFromRight';
import useMenuToggle from '@/hooks/useMenuToggle';

function LanguageMenu() {
  const { buttonRef, toggleMenu, isOpen } = useMenuToggle();
  const distanceFromRight = getDistanceFromRight(buttonRef.current);

  return (
    <div>
      <div
        className='relative cursor-pointer'
        ref={buttonRef}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-haspopup='true'
      >
        <Icons
          name='language'
          viewBox='0 0 24 24'
          className='stroke-secondary-main fill-none'
          width='28px'
          height='28px'
          strokeWidth={1.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </div>

      {isOpen && (
        <div
          className={`absolute mt-2 w-48 bg-primary-dark border shadow-lg rounded-lg z-50`}
          style={{ right: distanceFromRight }}
        >
          <ul className='py-1 text-gray-700 dark:text-gray-200'>
            <li
              className='px-4 text-secondary-main py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600'
              onClick={() => null}
            >
              Inglês
            </li>
            <li
              className='px-4 text-secondary-main py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600'
              onClick={() => null}
            >
              Português
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguageMenu;
