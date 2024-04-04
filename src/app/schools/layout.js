import { Urbanist } from 'next/font/google';
import '@/app/globals.css';
import NavbarSection from '@/components/NavbarSection';
import FooterSection from '@/components/FooterSection';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata = {
  title: 'SkailleUp Schools',
  description:
    'Find more about what we have to offer you for a successful career.',
};

export default function SchoolsLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <NavbarSection />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
