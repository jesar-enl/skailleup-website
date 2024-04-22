import { Inter } from 'next/font/google';
import Navbar from '../../components/Navbar';
import '../../globals.css';
import { Providers } from '../../providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'School of Product',
  description:
    'Cultivate creativity and strategic thinking to craft impactful, user-centered products.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
