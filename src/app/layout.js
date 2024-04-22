import { Urbanist } from 'next/font/google';
import './globals.css';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata = {
  title: 'SkailleUp',
  description: 'Your learning Path to Endless Growth!',
icons: '/images/skailleup-logo.png',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
