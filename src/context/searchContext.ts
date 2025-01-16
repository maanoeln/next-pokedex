'use client';

import { useContext, createContext } from 'react';

export const SearchContext = createContext<{
  searchQuery: string;
  setSearchQuery: (query: string) => void;
} | null>(null);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within SearchProvider');
  }
  return context;
};
