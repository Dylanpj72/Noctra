import { Nav } from '@/components/Nav';
import { HeroParallax } from '@/components/HeroParallax';
import { Footer } from '@/components/Footer';
import { LiquidMetalButton } from '@/components/LiquidMetalButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work — Noctra',
  description: 'Selected projects from Noctra — custom websites built for ambitious businesses worldwide.',
};

export default function WorkPage() {
  return (
    <main className="bg-black min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 pt-10">
        <Nav />
      </div>

      {/* Page header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-14 pt-20 pb-16 border-b border-white/[0.06]">
        <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.3em] uppercase text-[#5a5a62] mb-8">
          — SELECTED WORK —
        </p>
        <h1
          className="font-[family-name:var(--font-inter)] font-[200] leading-[0.9] tracking-[-0.05em] uppercase text-white"
          style={{ fontSize: 'clamp(52px,8vw,120px)' }}
        >
          The{' '}
          <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
            receipts.
          </em>
        </h1>
      </section>

      <HeroParallax />

      {/* Bottom CTA */}
      <section className="py-20 border-b border-white/[0.06] bg-black text-center">
        <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.3em] uppercase text-[#5a5a62] mb-6">
          — READY TO START? —
        </p>
        <LiquidMetalButton label="Start a project →" href="/contact" width={168} />
      </section>

      <Footer />
    </main>
  );
}