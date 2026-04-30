import { Nav } from '@/components/Nav';
import { HeroParallax } from '@/components/HeroParallax';
import { Footer } from '@/components/Footer';
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
        <a
          href="/contact"
          className="btn-shimmer-white inline-flex items-center gap-2 px-7 py-4 text-black text-[14px] font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.1),0_12px_40px_rgba(255,255,255,0.15)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Start a project →
        </a>
      </section>

      <Footer />
    </main>
  );
}