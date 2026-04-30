import { cookies } from 'next/headers';
import { resolveRegion, PRICING, type Region } from '@/data/pricing';
import { Nav } from '@/components/Nav';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — Noctra',
  description: 'Simple, transparent pricing for custom websites. Flat monthly or upfront — all plans include design, build, hosting, and ongoing management.',
};

export default async function PricingPage({
  searchParams,
}: {
  searchParams: Promise<{ region?: string }>;
}) {
  const [cookieStore, params] = await Promise.all([cookies(), searchParams]);
  const country = cookieStore.get('noctra-country')?.value ?? 'US';
  const override = params.region?.toUpperCase() as Region | undefined;
  const initialRegion = override && PRICING[override] ? PRICING[override] : resolveRegion(country);

  return (
    <main className="bg-black min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 pt-10">
        <Nav />
      </div>

      <Pricing initialRegion={initialRegion} />

      <div id="faq">
        <FAQ />
      </div>

      <Footer />
    </main>
  );
}