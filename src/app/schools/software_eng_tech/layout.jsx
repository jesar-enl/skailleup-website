import { Inter } from 'next/font/google';
import Navbar from '../../components/Navbar';
import '../../globals.css';
import { Providers } from '../../providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'School of Software Engineering & Technology',
  description:
    'Master the latest in coding and technology for a career at the forefront of innovation.',
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
