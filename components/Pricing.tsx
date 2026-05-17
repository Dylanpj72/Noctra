'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TiltCard } from './TiltCard';
import { LiquidMetalButton } from './LiquidMetalButton';
import {
  PRICING,
  formatPrice,
  type Region,
  type RegionPricing,
  type PaymentMode,
  type TierKey,
} from '@/data/pricing';


const tiers: {
  key: TierKey;
  name: string;
  blurb: string;
  featured?: boolean;
  includes?: string;
  features: string[];
}[] = [
  {
    key: 'starter',
    name: 'Starter',
    blurb: 'For new or small businesses needing a professional online presence.',
    features: [
      'Up to 5 custom-designed pages',
      'Mobile responsive build',
      'Contact form, click-to-call & WhatsApp buttons',
      'Google Business Profile setup & local SEO',
      'Social media links',
      'Google Maps integration',
      'Fast loading design',
      'SSL security',
      'Basic copy guidance',
      'Hosting, security & daily backups included',
      'Ongoing management & updates included',
    ],
  },
  {
    key: 'professional',
    name: 'Professional',
    blurb: 'For businesses ready to generate leads and convert more customers.',
    featured: true,
    includes: 'Starter',
    features: [
      'Up to 10 custom-designed pages',
      'Conversion-focused layout',
      'Lead capture forms',
      'Advanced on-page SEO',
      'Google Analytics setup',
      'Speed optimisation',
      'Blog setup',
      'Testimonials & FAQ sections',
      'Service landing pages',
      'Online booking & quote request forms',
      'Ongoing management & updates included',
    ],
  },
  {
    key: 'premium',
    name: 'Premium',
    blurb: 'For businesses that want a high-performance digital sales machine.',
    includes: 'Professional',
    features: [
      'Up to 25 pages with custom design & animations',
      'Product catalogue',
      'Conversion strategy planning',
      'Advanced UX structure',
      'CRM integration & advanced lead capture',
      'Advanced automation',
      'Booking or quote system',
      'Advanced SEO structure',
      'Performance optimisation',
      'Custom functionality',
      'A/B testing & conversion optimisation',
      'Ongoing management & updates included',
      'Priority support',
    ],
  },
  {
    key: 'commerce',
    name: 'Commerce',
    blurb: 'For businesses selling online — products, bookings, or subscriptions.',
    includes: 'Premium',
    features: [
      'Full e-commerce store setup (Shopify, WooCommerce, or custom)',
      'Up to 500 products assisted setup',
      'Payment gateway integration (Stripe, PayFast, PayPal & more)',
      'Shopping cart & checkout optimisation',
      'Inventory & order management system',
      'Customer accounts & login portal',
      'Abandoned cart recovery',
      'Discount codes & promotional engine',
      'Product reviews & ratings',
      'Shipping rates & tax configuration',
      'Advanced product filtering & search',
      'Email marketing integration (Klaviyo / Mailchimp)',
      'GA4 enhanced e-commerce tracking',
      'Ongoing management & updates included',
      'Priority support',
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
            aria-label={`Months 1 to 24, then ${formatPrice(pricing.retainer, region)} per month from month 25`}
          >
            months 1–24 · then {formatPrice(pricing.retainer, region)}/mo
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
            + {formatPrice(pricing.retainer, region)}/month ongoing
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
  return (
    <TiltCard
      tiltLimit={8}
      scale={1.02}
      className={`group relative rounded-[28px] flex flex-col p-6 md:p-7 xl:p-8 ${
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

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="font-[family-name:var(--font-inter)] font-[900] text-[14px] tracking-[0.06em] text-white uppercase">
              {tier.name}
            </span>
            {tier.featured && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-[700] tracking-[0.08em] uppercase text-black bg-[#f5d020]">
                Most popular
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
        {tier.includes && (
          <li className="pb-0.5">
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] uppercase text-[#5a5a62]">
              Everything in {tier.includes}, plus:
            </p>
          </li>
        )}
        {tier.features.map((feat) => (
          <li key={feat} className="flex items-start gap-3">
            <span className="text-[#f5d020] text-[12px] mt-0.5 flex-shrink-0" aria-hidden="true">
              ✓
            </span>
            <span className="text-[13px] text-[#8a8a92] leading-snug">{feat}</span>
          </li>
        ))}
      </ul>

      {/* Inclusions */}
      <div className="mb-6">
        <div className="w-full h-px bg-white/[0.06] mb-4" />
        <AnimatePresence mode="wait">
          {mode === 'flatMonthly' ? (
            <motion.div
              key="flat-inc"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] uppercase text-[#5a5a62] mb-2">
                All included
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Design & build', 'Hosting', 'Management', 'SEO', 'Security'].map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 rounded-full border border-white/[0.07] text-[11px] text-[#5a5a62]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="upfront-inc"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-2.5"
            >
              <div>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] uppercase text-[#5a5a62] mb-1.5">
                  Upfront covers
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['Design & build'].map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded-full border border-white/[0.07] text-[11px] text-[#5a5a62]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] uppercase text-[#5a5a62] mb-1.5">
                  Ongoing covers
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['Management', 'Hosting', 'Security', 'SEO'].map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded-full border border-white/[0.07] text-[11px] text-[#5a5a62]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CTA */}
      <a
        href="/contact"
        className={`w-full py-3.5 rounded-full text-[13px] font-semibold text-center transition-all duration-300 focus-visible:outline-2 focus-visible:outline-white active:scale-[0.98] ${
          tier.featured
            ? 'bg-white text-black hover:bg-white/90 hover:shadow-[0_0_0_3px_rgba(255,255,255,0.15),0_8px_32px_rgba(255,255,255,0.12)] hover:scale-[1.02]'
            : 'bg-white/[0.04] border border-white/[0.12] text-white hover:bg-white/[0.08] hover:border-white/[0.2]'
        }`}
      >
        Choose {tier.name}
      </a>
    </TiltCard>
  );
}

export function Pricing({ initialRegion }: { initialRegion: RegionPricing }) {
  const [region, setRegion] = useState<RegionPricing>(initialRegion);
  const [mode, setMode] = useState<PaymentMode>('flatMonthly');

  // Persist payment mode preference
  useEffect(() => {
    try {
      const savedMode = localStorage.getItem('ardaic-mode') as PaymentMode | null;
      if (savedMode === 'flatMonthly' || savedMode === 'upfront') {
        setMode(savedMode);
      }
    } catch {}
  }, []);

  const changeMode = (m: PaymentMode) => {
    setMode(m);
    try {
      localStorage.setItem('ardaic-mode', m);
    } catch {}
  };

  // On mobile: put Professional first
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
            PRICING
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
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.2em] uppercase text-[#5a5a62] max-w-[560px] mx-auto leading-relaxed mb-6">
            Every project is scoped to your specific needs. These figures give you a general range to plan around. Final pricing depends on scope, complexity, and what you want to achieve.
          </p>
          <p className="font-[family-name:var(--font-instrument-serif)] italic text-[16px] md:text-[18px] text-[#8a8a92] max-w-[580px] mx-auto">
            Flat monthly covers everything for 24 months, then drops to a low ongoing fee. Prefer to own it outright? Pay upfront and keep the ongoing service for continued support.
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
                  className={`relative flex items-center gap-2 px-5 py-3 text-[13px] font-medium transition-colors duration-250 focus-visible:outline-2 focus-visible:outline-white ${
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
                    {m === 'flatMonthly' ? 'Flat Monthly' : 'Upfront + Ongoing'}
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

        {/* Region selector */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            <label
              htmlFor="region-select"
              className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.25em] uppercase text-[#5a5a62]"
            >
              Region
            </label>
            <select
              id="region-select"
              value={region.region}
              onChange={(e) => setRegion(PRICING[e.target.value as Region])}
              className="bg-white/[0.04] border border-white/[0.10] rounded-full px-4 py-1.5 text-[12px] text-[#8a8a92] font-[family-name:var(--font-inter)] focus:outline-none focus:border-white/[0.25] hover:border-white/[0.18] transition-colors duration-200 cursor-pointer"
            >
              {(Object.values(PRICING) as RegionPricing[]).map((r) => (
                <option key={r.region} value={r.region} style={{ background: '#0a0a0a' }}>
                  {r.label} ({r.currency})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* What's included breakdown */}
        <div className="mb-10 flex justify-center">
          <AnimatePresence mode="wait">
            {mode === 'flatMonthly' ? (
              <motion.div
                key="flat-includes"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center gap-3"
              >
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.25em] uppercase text-[#5a5a62]">
                  Everything included for 24 months · from month 25 you only pay the ongoing fee
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    'Website design & build',
                    'Hosting',
                    'Website management',
                    'SEO',
                    'Security',
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] font-[family-name:var(--font-inter)] text-[12px] text-[#8a8a92]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="upfront-includes"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-center"
              >
                <div className="flex flex-col gap-2">
                  <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.25em] uppercase text-[#5a5a62]">
                    Upfront covers
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Website design & build'].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] font-[family-name:var(--font-inter)] text-[12px] text-[#8a8a92]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className="hidden sm:block w-px h-10 bg-white/[0.08]"
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-2">
                  <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.25em] uppercase text-[#5a5a62]">
                    Monthly ongoing covers
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Website management', 'Hosting', 'Security', 'SEO'].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] font-[family-name:var(--font-inter)] text-[12px] text-[#8a8a92]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Cards - desktop: Starter / Professional / Premium / Commerce */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-10 items-start">
          {tiers.map((tier) => (
            <PricingCard key={tier.key} tier={tier} mode={mode} region={region} />
          ))}
        </div>

        {/* Cards - mobile: Professional first */}
        <div className="grid grid-cols-1 gap-4 mb-10 md:hidden">
          {tierOrder.map((tier) => (
            <PricingCard key={tier.key} tier={tier} mode={mode} region={region} />
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-[13px] text-[#5a5a62] max-w-[560px] mx-auto leading-relaxed mb-16">
          All prices in <span className="text-[#8a8a92]">{region.currency}</span>.
          {' '}Website management means we handle any updates or changes for you, no tech headaches.
        </p>

        {/* Quote CTA */}
        <div className="border-t border-white/[0.06] pt-16 flex flex-col items-center gap-4 text-center">
          <p
            className="font-[family-name:var(--font-inter)] font-[200] leading-[1.0] tracking-[-0.03em] uppercase text-white"
            style={{ fontSize: 'clamp(22px,3vw,38px)' }}
          >
            Not sure which plan fits{' '}
            <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
              your situation?
            </em>
          </p>
          <p className="text-[14px] text-[#5a5a62]">No obligations, no pressure.</p>
          <div className="mt-2">
            <LiquidMetalButton label="Request a free quote →" href="/contact" width={220} />
          </div>
        </div>
      </div>
    </section>
  );
}