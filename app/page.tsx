import { cookies } from 'next/headers';
import { resolveRegion, PRICING, type Region } from '@/data/pricing';
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

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ region?: string }>;
}) {
  const [cookieStore, params] = await Promise.all([cookies(), searchParams]);
  const country = cookieStore.get('noctra-country')?.value ?? 'US';
  const override = params.region?.toUpperCase() as Region | undefined;
  const initialRegion = override && PRICING[override] ? PRICING[override] : resolveRegion(country);

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