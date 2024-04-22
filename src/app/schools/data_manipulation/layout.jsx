import { Inter } from 'next/font/google';
import Navbar from '../../components/Navbar';
import '../../globals.css';
import { Providers } from '../../providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'School of Data & Manipulation',
  description:
    'Dive into the world of analytics and data science, unlocking the potential of information.',
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
