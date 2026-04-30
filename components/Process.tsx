'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const steps = [
  {
    num: '01',
    title: 'DISCOVER',
    desc: 'Tell us about your business and what you need. We listen before we suggest anything.',
  },
  {
    num: '02',
    title: 'DESIGN',
    desc: 'We design your site, you review drafts and approve before we build anything. No surprises.',
  },
  {
    num: '03',
    title: 'BUILD',
    desc: 'We build your website to production quality — fast, secure, and exactly as designed.',
  },
  {
    num: '04',
    title: 'DEPLOY',
    desc: 'Site goes live, typically 2–4 weeks from kickoff. We handle everything — domain, hosting, testing.',
  },
  {
    num: '05',
    title: 'MANAGEMENT',
    desc: 'We manage everything — updates, hosting, security, SEO — so you never have to think about it.',
  },
];

function ProcessStep({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0];
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
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.1em] text-[#8a8a92]">
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
          className="relative rounded-2xl border border-white/[0.08] p-7 md:p-8"
          style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(24px)' }}
        >
          <span
            aria-hidden="true"
            className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
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
      className="py-[120px] border-b border-white/[0.06] bg-black isolate"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <div
          ref={headRef}
          className="mb-20 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 items-end"
        >
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.25em] uppercase text-[#5a5a62]">
            04 — <span className="text-white font-[500]">Process</span>
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