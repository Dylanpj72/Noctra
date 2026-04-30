import { cookies } from 'next/headers';
import { resolveRegion, PRICING, type Region } from '@/data/pricing';
import { Hero } from '@/components/Hero';
import { StatsRow } from '@/components/StatsRow';
import { Solution } from '@/components/Solution';
import { Marquee } from '@/components/Marquee';
import { ServicesCards } from '@/components/ServicesCards';
import { Process } from '@/components/Process';
import { HeroParallax } from '@/components/HeroParallax';
import { PricingPreview } from '@/components/PricingPreview';
import { TrustSignal } from '@/components/TrustSignal';
import { FAQTeaser } from '@/components/FAQTeaser';
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
      {/* 01 — Hero */}
      <Hero />
      <StatsRow />

      {/* 02 — What we do */}
      <Solution />

      {/* Services (kept above Process) */}
      <Marquee />
      <ServicesCards />

      {/* 04 — Process */}
      <Process />

      {/* 05 — Portfolio preview */}
      <HeroParallax showCTA />

      {/* 06 — Pricing preview */}
      <PricingPreview initialRegion={initialRegion} />

      {/* 07 — Trust signal */}
      <TrustSignal />

      {/* 08 — FAQ teaser */}
      <FAQTeaser />

      {/* 09 — Final CTA */}
      <CTABlock />

      {/* 10 — Footer */}
      <Footer />
    </main>
  );
}