import { Hero } from '@/components/Hero';
import { StatsRow } from '@/components/StatsRow';
import { Solution } from '@/components/Solution';
import { Marquee } from '@/components/Marquee';
import { ServicesCards } from '@/components/ServicesCards';
import { Process } from '@/components/Process';
import { SelectedWork } from '@/components/SelectedWork';
import { FAQTeaser } from '@/components/FAQTeaser';
import { CTABlock } from '@/components/CTABlock';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      {/* 01 · Hero */}
      <Hero />
      <StatsRow />

      {/* 02 · What we do */}
      <Solution />

      {/* Services */}
      <Marquee />
      <ServicesCards />

      {/* 04 · Process */}
      <Process />

      {/* 05 · Portfolio preview */}
      <SelectedWork />

      {/* 06 · FAQ teaser */}
      <FAQTeaser />

      {/* 07 · Final CTA */}
      <CTABlock />

      {/* 08 · Footer */}
      <Footer />
    </main>
  );
}