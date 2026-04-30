'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { type RegionPricing } from '@/data/pricing';

const tiers = [
  {
    key: 'starter' as const,
    name: 'Starter',
    blurb: 'Get found, get called.',
    features: ['Up to 5 custom-designed pages', 'Google Business Profile & local SEO', 'Hosting, security & management included'],
  },
  {
    key: 'professional' as const,
    name: 'Professional',
    blurb: 'Turn visitors into customers.',
    featured: true,
    features: ['Up to 10 custom-designed pages', 'Lead capture & conversion-focused design', 'Analytics, blog & booking forms'],
  },
  {
    key: 'premium' as const,
    name: 'Premium',
    blurb: 'Compete and win at scale.',
    features: ['Up to 25 pages with animations', 'CRM, automation & advanced SEO', 'A/B testing & priority support'],
  },
];

export function PricingPreview({ initialRegion }: { initialRegion: RegionPricing }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      aria-labelledby="pricing-preview-heading"
      className="py-[120px] border-b border-white/[0.06] bg-black isolate"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">

        {/* Header */}
        <div className="mb-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.4em] uppercase text-[#5a5a62] mb-6"
          >
            06 — <span className="text-white font-[500]">Pricing</span>
          </motion.p>
          <motion.h2
            id="pricing-preview-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-[family-name:var(--font-inter)] font-[200] leading-[0.95] tracking-[-0.04em] uppercase text-white mb-4"
            style={{ fontSize: 'clamp(40px,6vw,88px)' }}
          >
            Simple pricing.{' '}
            <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
              No
            </em>{' '}
            <span className="font-[900]">surprises.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-[family-name:var(--font-instrument-serif)] italic text-[16px] md:text-[18px] text-[#8a8a92] max-w-[560px] mx-auto mb-12"
          >
            All plans include design, build, hosting, and ongoing management. Pay monthly with no upfront cost, or pay upfront and save.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 items-start">
          {tiers.map((tier, i) => {
            const pricing = initialRegion.tiers[tier.key];
            return (
              <motion.div
                key={tier.key}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                className={`card-shimmer relative rounded-[24px] flex flex-col p-6 md:p-7 ${
                  tier.featured
                    ? 'border border-white/[0.20]'
                    : 'border border-white/[0.08]'
                }`}
                style={{
                  background: tier.featured ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(24px)',
                  boxShadow: tier.featured
                    ? '0 16px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.12)'
                    : '0 16px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
                }}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-[10%] right-[10%] h-px pointer-events-none"
                  style={{
                    background: tier.featured
                      ? 'linear-gradient(90deg, transparent, rgba(245,208,32,0.5), transparent)'
                      : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  }}
                />

                {/* Header */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-[family-name:var(--font-inter)] font-[900] text-[13px] tracking-[0.06em] text-white uppercase">
                    {tier.name}
                  </span>
                  {tier.featured && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-[700] tracking-[0.08em] uppercase text-black bg-[#f5d020]">
                      Most popular
                    </span>
                  )}
                </div>
                <p className="font-[family-name:var(--font-instrument-serif)] italic text-[13px] text-[#5a5a62] mb-5">
                  {tier.blurb}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-[family-name:var(--font-inter)] font-[200] text-[20px] leading-none text-white">
                    {initialRegion.symbol}
                  </span>
                  <span className="font-[family-name:var(--font-inter)] font-[900] text-[36px] leading-none text-white">
                    {pricing.flatMonthly.toLocaleString(initialRegion.locale)}
                  </span>
                  <span className="font-[family-name:var(--font-inter)] font-[300] text-[13px] text-[#5a5a62] self-end pb-0.5">
                    /mo
                  </span>
                </div>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] tracking-[0.2em] uppercase text-[#5a5a62] mb-5">
                  months 1–24
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-white/[0.06] mb-5" />

                {/* Features */}
                <ul className="flex flex-col gap-2.5 mb-6">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <span className="text-[#f5d020] text-[11px] mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-[12px] text-[#8a8a92] leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Link to full pricing */}
        <div className="text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-[13px] font-[500] text-[#8a8a92] hover:text-white transition-colors duration-300 group"
          >
            See full pricing details
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}