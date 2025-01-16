import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AppProvider } from '@/provider/appProvider';

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'Created by Manoel Neto',
  icons: [
    { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='min-h-screen h-screen flex flex-col bg-primary-dark dark:bg-primary-dark'>
          <AppProvider>
            <Header />
            <main role='main' className='flex-grow overflow-hidden'>
              {children}
            </main>
            <Footer />
          </AppProvider>
        </div>
      </body>
    </html>
  );
}
