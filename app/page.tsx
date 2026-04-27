import { cookies } from 'next/headers';
import { resolveRegion } from '@/data/pricing';
import { Hero } from '@/components/Hero';
import { StatsRow } from '@/components/StatsRow';
import { ServicesShowcase } from '@/components/ServicesShowcase';
import { Marquee } from '@/components/Marquee';
import { ServicesCards } from '@/components/ServicesCards';
import { Process } from '@/components/Process';
import { SelectedWork } from '@/components/SelectedWork';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { CTABlock } from '@/components/CTABlock';
import { Footer } from '@/components/Footer';

export default async function Home() {
  // Read geo cookie set by proxy.ts — server-rendered, no flash
  const cookieStore = await cookies();
  const country = cookieStore.get('noctra-country')?.value ?? 'US';
  const initialRegion = resolveRegion(country);

  return (
    <main>
      <Hero />

      <StatsRow />

      <ServicesShowcase />

      <Marquee />

      <ServicesCards />

      <Process />

      <SelectedWork />

      <Pricing initialRegion={initialRegion} />

      <FAQ />

      <CTABlock />

      <Footer />
    </main>
  );
}