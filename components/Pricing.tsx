'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  formatPrice,
  type RegionPricing,
  type PaymentMode,
  type TierKey,
} from '@/data/pricing';


const tiers: { key: TierKey; name: string; blurb: string; featured?: boolean; features: string[] }[] = [
  {
    key: 'launch',
    name: 'LAUNCH',
    blurb: 'For your first real site.',
    features: [
      '5-page custom website',
      'Mobile-first responsive build',
      'Webflow or Framer CMS',
      '2 rounds of revisions',
      '14-day delivery',
    ],
  },
  {
    key: 'studio',
    name: 'STUDIO',
    blurb: 'For brands ready to look the part.',
    featured: true,
    features: [
      'Custom design + development',
      'Full brand identity audit',
      'Custom motion & interactions',
      'Unlimited revisions',
      '30 days post-launch support',
    ],
  },
  {
    key: 'empire',
    name: 'EMPIRE',
    blurb: 'Multi-page, multi-language, multi-team.',
    features: [
      'Everything in Studio',
      'Headless CMS architecture',
      'A/B testing infrastructure',
      'Quarterly growth retainer',
      'Dedicated PM + designer',
    ],
  },
];

function PriceDisplay({
  mode,
  tier,
  region,
}: {
  mode: PaymentMode;
  tier: (typeof tiers)[0];
  region: RegionPricing;
}) {
  const pricing = region.tiers[tier.key];

  return (
    <AnimatePresence mode="wait">
      {mode === 'flatMonthly' ? (
        <motion.div
          key="flat"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex items-baseline gap-1 mb-1">
            <span
              className="font-[family-name:var(--font-inter)] font-[200] text-[28px] leading-none text-white"
              aria-hidden="true"
            >
              {region.symbol}
            </span>
            <span
              className="font-[family-name:var(--font-inter)] font-[900] leading-none text-white"
              style={{ fontSize: 'clamp(40px,4vw,56px)' }}
            >
              {pricing.flatMonthly.toLocaleString(region.locale)}
            </span>
            <span className="font-[family-name:var(--font-inter)] font-[300] text-[14px] text-[#8a8a92] self-end pb-1">
              /month
            </span>
          </div>
          <p
            className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] uppercase text-[#5a5a62]"
            aria-label="Everything included, cancel anytime"
          >
            everything included · cancel anytime
          </p>
        </motion.div>
      ) : (
        <motion.div
          key="upfront"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex items-baseline gap-1 mb-1">
            <span
              className="font-[family-name:var(--font-inter)] font-[200] text-[28px] leading-none text-white"
              aria-hidden="true"
            >
              {region.symbol}
            </span>
            <span
              className="font-[family-name:var(--font-inter)] font-[900] leading-none text-white"
              style={{ fontSize: 'clamp(40px,4vw,56px)' }}
            >
              {pricing.upfront.toLocaleString(region.locale)}
            </span>
          </div>
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] uppercase text-[#5a5a62] mb-1">
            upfront
          </p>
          <p className="font-[family-name:var(--font-inter)] text-[13px] text-[#8a8a92]">
            + {formatPrice(pricing.retainer, region)}/month retainer
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PricingCard({
  tier,
  mode,
  region,
}: {
  tier: (typeof tiers)[0];
  mode: PaymentMode;
  region: RegionPricing;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={onPointerMove}
      className={`group relative rounded-[28px] overflow-hidden flex flex-col p-7 md:p-8 transition-all duration-500 hover:-translate-y-1 ${
        tier.featured
          ? 'border border-white/[0.20] hover:border-[#f5d020]/30'
          : 'border border-white/[0.08] hover:border-white/[0.16]'
      }`}
      style={{
        background: tier.featured
          ? 'rgba(255,255,255,0.04)'
          : 'rgba(255,255,255,0.02)',
        backdropFilter: 'blur(24px) saturate(180%)',
        boxShadow: tier.featured
          ? '0 16px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.12)'
          : '0 16px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
      }}
    >
      {/* Top highlight */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-[10%] right-[10%] h-px pointer-events-none"
        style={{
          background: tier.featured
            ? 'linear-gradient(90deg, transparent, rgba(245,208,32,0.5), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
        }}
      />

      {/* Cursor glow */}
      <span
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.05), transparent 45%)',
        }}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="font-[family-name:var(--font-inter)] font-[900] text-[14px] tracking-[0.06em] text-white uppercase">
              {tier.name}
            </span>
            {tier.featured && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-[700] tracking-[0.08em] uppercase text-black bg-[#f5d020]">
                Most Chosen
              </span>
            )}
          </div>
          <p className="font-[family-name:var(--font-instrument-serif)] italic text-[14px] text-[#8a8a92]">
            {tier.blurb}
          </p>
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <PriceDisplay mode={mode} tier={tier} region={region} />
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/[0.06] mb-6" />

      {/* Features */}
      <ul className="flex flex-col gap-3 mb-8 flex-1" role="list">
        {tier.features.map((feat) => (
          <li key={feat} className="flex items-start gap-3">
            <span className="text-[#f5d020] text-[12px] mt-0.5 flex-shrink-0" aria-hidden="true">
              ✓
            </span>
            <span className="text-[13px] text-[#8a8a92] leading-snug">{feat}</span>
          </li>
        ))}
        {tier.key === 'empire' && (
          <li className="pt-2">
            <p className="text-[11px] text-[#5a5a62] italic font-[family-name:var(--font-instrument-serif)]">
              Most Empire clients choose flat monthly to spread cost across the year.
            </p>
          </li>
        )}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className={`w-full py-3.5 rounded-full text-[13px] font-semibold text-center transition-all duration-300 focus-visible:outline-2 focus-visible:outline-white active:scale-[0.98] ${
          tier.featured
            ? 'bg-white text-black hover:bg-white hover:shadow-[0_0_0_3px_rgba(255,255,255,0.15),0_8px_32px_rgba(255,255,255,0.12)] hover:scale-[1.02]'
            : 'border border-white/[0.12] text-white bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/[0.2]'
        }`}
      >
        Choose {tier.name.charAt(0) + tier.name.slice(1).toLowerCase()}
      </a>
    </div>
  );
}

export function Pricing({ initialRegion }: { initialRegion: RegionPricing }) {
  const region = initialRegion;
  const [mode, setMode] = useState<PaymentMode>('flatMonthly');

  // Persist payment mode preference
  useEffect(() => {
    try {
      const savedMode = localStorage.getItem('noctra-mode') as PaymentMode | null;
      if (savedMode === 'flatMonthly' || savedMode === 'upfront') {
        setMode(savedMode);
      }
    } catch {}
  }, []);

  const changeMode = (m: PaymentMode) => {
    setMode(m);
    try {
      localStorage.setItem('noctra-mode', m);
    } catch {}
  };

  // On mobile: reorder to put Studio first
  const tierOrder: typeof tiers = [
    tiers.find((t) => t.featured)!,
    ...tiers.filter((t) => !t.featured),
  ];

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="py-[120px] border-b border-white/[0.06] bg-black isolate"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.4em] uppercase text-[#5a5a62] mb-6">
            — PRICING —
          </p>
          <h2
            id="pricing-heading"
            className="font-[family-name:var(--font-inter)] font-[200] leading-[0.95] tracking-[-0.04em] uppercase text-white mb-6"
            style={{ fontSize: 'clamp(48px,7vw,100px)' }}
          >
            Built to{' '}
            <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
              your
            </em>{' '}
            <span className="font-[900]">scale.</span>
          </h2>
          <p className="font-[family-name:var(--font-instrument-serif)] italic text-[16px] md:text-[18px] text-[#8a8a92] max-w-[540px] mx-auto">
            Flat monthly is everything-included — most clients prefer it. Want a one-time build instead? Switch to upfront.
          </p>
        </div>

        {/* Payment mode toggle */}
        <div className="flex justify-center mb-12">
          <div
            role="radiogroup"
            aria-label="Payment model"
            className="relative flex items-center rounded-full border border-white/[0.12] overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            {(['flatMonthly', 'upfront'] as PaymentMode[]).map((m) => {
              const isActive = mode === m;
              return (
                <button
                  key={m}
                  role="radio"
                  aria-checked={isActive}
                  onClick={() => changeMode(m)}
                  className={`relative flex items-center gap-2 px-5 py-3 text-[13px] font-medium transition-all duration-250 focus-visible:outline-2 focus-visible:outline-white ${
                    isActive ? 'text-black' : 'text-[#8a8a92] hover:text-white'
                  }`}
                  style={{ minHeight: 44 }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="pricing-toggle-bg"
                      className="absolute inset-0 rounded-full bg-white"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">
                    {m === 'flatMonthly' ? 'Flat Monthly' : 'Upfront + Retainer'}
                  </span>
                  {m === 'flatMonthly' && (
                    <span
                      className={`relative z-10 px-2 py-0.5 rounded-full text-[10px] font-[700] tracking-[0.06em] uppercase ${
                        isActive ? 'bg-[#f5d020] text-black' : 'bg-[#f5d020]/20 text-[#f5d020]'
                      }`}
                    >
                      Recommended
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards — desktop: Launch / Studio / Empire */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 mb-10">
          {tiers.map((tier) => (
            <PricingCard key={tier.key} tier={tier} mode={mode} region={region} />
          ))}
        </div>

        {/* Cards — mobile: Studio first */}
        <div className="grid grid-cols-1 gap-4 mb-10 md:hidden">
          {tierOrder.map((tier) => (
            <PricingCard key={tier.key} tier={tier} mode={mode} region={region} />
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-[13px] text-[#5a5a62] max-w-[560px] mx-auto leading-relaxed">
          All prices in{' '}
          <span className="text-[#8a8a92]">{region.currency}</span>. Flat monthly
          is everything-included with no upfront cost — most clients prefer it. Want a
          one-time build fee instead? Switch to upfront above.
        </p>
      </div>
    </section>
  );
}