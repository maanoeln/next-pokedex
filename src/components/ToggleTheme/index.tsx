'use client';

import Icons from '@/components/icons/icons';
import { useTheme } from '@/context/themeContext';
import useMenuToggle from '@/hooks/useMenuToggle';

const THEME: { [key: string]: 'light' | 'dark' | 'user' } = {
  user: 'user',
  light: 'light',
  dark: 'dark',
};

function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();
  const { buttonRef, toggleMenu, isOpen } = useMenuToggle();

  const isLight = theme === 'light';

  const props = {
    viewBox: isLight ? '0 0 35 35' : '0 0 32 33',
    name: isLight ? 'moon' : 'sun',
  };

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
          className='fill-secondary'
          width='24px'
          height='24px'
          {...props}
        />

        {isOpen && (
          <div
            className={`absolute right-0 mt-2 w-48 bg-primary-dark border shadow-lg rounded-lg z-50`}
          >
            <ul className='py-1 text-gray-700 dark:text-gray-200'>
              <li
                className='px-4 text-secondary-main py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600'
                onClick={() => toggleTheme(THEME.light)}
              >
                Light Theme
              </li>
              <li
                className='px-4 text-secondary-main py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600'
                onClick={() => toggleTheme(THEME.dark)}
              >
                Dark Theme
              </li>
              <li
                className='px-4 text-secondary-main py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600'
                onClick={() => toggleTheme(THEME.user)}
              >
                System Default
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ToggleTheme;
