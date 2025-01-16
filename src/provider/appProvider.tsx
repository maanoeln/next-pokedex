'use client';

import { SearchProvider } from '@/provider/searchProvider';
import { ThemeProvider } from '@/provider/themeProvider';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SearchProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SearchProvider>
  );
};
