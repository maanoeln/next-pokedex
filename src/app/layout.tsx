import type { Metadata } from 'next';
import './globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'Created by Manoel Neto',
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
          <Header />
          <main className='flex-grow overflow-hidden'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
