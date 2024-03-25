import CardSection from '@/components/CardSection';
import FooterSection from '@/components/FooterSection';
import HeroSection from '@/components/HeroSection';
import NavbarSection from '@/components/NavbarSection';
import PartnersSection from '@/components/PartnersSection';
import SchoolDescription from '@/components/SchoolDescription';
import Skailleup from '@/components/Skailleup';
import WorldSection from '@/components/WorldSection';

export default function Home() {
  return (
    <main>
      <NavbarSection />
      <HeroSection />
      <CardSection />
      <SchoolDescription />
      <PartnersSection />
      <WorldSection />
      <Skailleup />
      <FooterSection />
    </main>
  );
}
