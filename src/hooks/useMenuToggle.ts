'use client';

import { useEffect, useRef, useState } from 'react';

function useMenuToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = (): void => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return {
    isOpen,
    toggleMenu,
    closeMenu,
    buttonRef,
  };
}

export default useMenuToggle;
