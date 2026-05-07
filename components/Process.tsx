'use client';

import { useRef } from 'react';
import type { ReactNode } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'motion/react';

const S = 'rgba(255,255,255,0.26)'; // shared stroke colour — matches service-card icon opacity band
const SW = '1';                      // strokeWidth
const RC = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

const marks: ReactNode[] = [
  /* 01 DISCOVER — three concentric rings, fading inward */
  <svg key="discover" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <circle cx="20" cy="20" r="12" stroke={S}                      strokeWidth={SW} />
    <circle cx="20" cy="20" r="7"  stroke="rgba(255,255,255,0.20)" strokeWidth={SW} />
    <circle cx="20" cy="20" r="2"  stroke="rgba(255,255,255,0.16)" strokeWidth={SW} />
  </svg>,

  /* 02 DESIGN — crop-mark brackets at four corners */
  <svg key="design" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <polyline points="9,19 9,13 15,13"   stroke={S} strokeWidth={SW} {...RC} />
    <polyline points="25,13 31,13 31,19" stroke={S} strokeWidth={SW} {...RC} />
    <polyline points="9,21 9,27 15,27"   stroke={S} strokeWidth={SW} {...RC} />
    <polyline points="25,27 31,27 31,21" stroke={S} strokeWidth={SW} {...RC} />
  </svg>,

  /* 03 BUILD — three stacked wireframe bars (header / content / footer) */
  <svg key="build" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect x="8" y="8"  width="24" height="5"  rx="1" stroke={S} strokeWidth={SW} />
    <rect x="8" y="16" width="24" height="9"  rx="1" stroke={S} strokeWidth={SW} />
    <rect x="8" y="28" width="14" height="4"  rx="1" stroke={S} strokeWidth={SW} />
  </svg>,

  /* 04 DEPLOY — diagonal arrow crossing a horizontal baseline */
  <svg key="deploy" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <line x1="6"  y1="26" x2="34" y2="26" stroke={S} strokeWidth={SW} strokeLinecap="round" />
    <line x1="12" y1="31" x2="27" y2="11" stroke={S} strokeWidth={SW} strokeLinecap="round" />
    <line x1="27" y1="11" x2="19" y2="11" stroke={S} strokeWidth={SW} strokeLinecap="round" />
    <line x1="27" y1="11" x2="27" y2="19" stroke={S} strokeWidth={SW} strokeLinecap="round" />
  </svg>,

  /* 05 MANAGE — ¾ orbit arc with rightward arrowhead (cycle continues) */
  <svg key="manage" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M 32 20 A 12 12 0 1 0 20 32" stroke={S} strokeWidth={SW} strokeLinecap="round" />
    <polyline points="15,28 20,32 15,36"  stroke={S} strokeWidth={SW} {...RC} />
  </svg>,
];

type Step = {
  num: string;
  title: string;
  desc: string;
  mark: ReactNode;
};

const steps: Step[] = [
  {
    num: '01',
    title: 'DISCOVER',
    desc: 'Tell us about your business and what you need. We listen before we suggest anything.',
    mark: marks[0],
  },
  {
    num: '02',
    title: 'DESIGN',
    desc: 'We design your site, you review drafts and approve before we build anything. No surprises.',
    mark: marks[1],
  },
  {
    num: '03',
    title: 'BUILD',
    desc: 'We build your website to production quality: fast, secure, and exactly as designed.',
    mark: marks[2],
  },
  {
    num: '04',
    title: 'DEPLOY',
    desc: 'Site goes live, typically 2–4 weeks from kickoff. We handle everything: domain, hosting, and testing.',
    mark: marks[3],
  },
  {
    num: '05',
    title: 'MANAGE',
    desc: 'We manage everything: updates, hosting, security, and SEO, so you never have to think about it.',
    mark: marks[4],
  },
];

function ProcessStep({
  step,
  index,
  isLast,
}: {
  step: Step;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
      className="flex gap-8 md:gap-12"
    >
      {/* Timeline column */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/[0.16] bg-white/[0.04] flex items-center justify-center flex-shrink-0">
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.1em] text-[#f5d020]">
            {step.num}
          </span>
        </div>
        {!isLast && (
          <div
            className="w-px flex-1 mt-4"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(255,255,255,0.02))',
              minHeight: '48px',
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-12 md:pb-16 flex-1">
        <div
          className="card-shimmer relative rounded-2xl border border-white/[0.08] p-7 md:p-8"
          style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(24px)' }}
        >
          {/* Top edge highlight */}
          <span
            aria-hidden="true"
            className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />

          {/* Step mark — top-right, decorative */}
          <div
            aria-hidden="true"
            className="absolute top-6 right-6 opacity-60 pointer-events-none"
          >
            {step.mark}
          </div>

          <h3 className="font-[family-name:var(--font-inter)] font-[900] text-[22px] md:text-[26px] tracking-[-0.03em] uppercase text-white mb-3">
            {step.title}
          </h3>
          <p className="text-[14px] md:text-[15px] leading-[1.65] text-[#8a8a92]">
            {step.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Process() {
  const headRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative overflow-hidden py-[120px] border-b border-white/[0.06] bg-black isolate"
    >
      {/* Mockup — inset from top/bottom so image doesn't hard-clip at section edges */}
      <div aria-hidden="true" className="absolute inset-x-0 top-[12%] bottom-[12%] pointer-events-none">
        <Image
          src="/brand/mockup.png"
          alt=""
          fill
          className="object-cover opacity-[0.26]"
          style={{ objectPosition: '72% center' }}
        />
      </div>
      {/* Left fade */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black from-30% via-black/75 to-transparent" />
      {/* Top fade — full black → transparent over top quarter */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[30%] pointer-events-none bg-gradient-to-b from-black to-transparent" />
      {/* Bottom fade — transparent → full black over bottom quarter */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[30%] pointer-events-none bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-14">
        <div
          ref={headRef}
          className="mb-20 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 items-end"
        >
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.25em] uppercase text-[#5a5a62]">
            04 · <span className="text-white font-[500]">Process</span>
          </p>
          <h2
            id="process-heading"
            className="font-[family-name:var(--font-inter)] font-[200] leading-[0.95] tracking-[-0.04em] uppercase text-white"
            style={{ fontSize: 'clamp(40px,6vw,88px)' }}
          >
            How we{' '}
            <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
              actually
            </em>
            <br />
            <span className="font-[900]">work.</span>
          </h2>
        </div>

        <div className="max-w-[640px]">
          {steps.map((step, i) => (
            <ProcessStep
              key={step.num}
              step={step}
              index={i}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}