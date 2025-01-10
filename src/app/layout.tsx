import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
        <div className='h-full flex flex-col gap-4 bg-primary-dark dark:bg-primary-dark'>
          <Header />
          <main className='h-full border'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
