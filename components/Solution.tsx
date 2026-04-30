'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const cards = [
  {
    title: 'Custom built for your business',
    desc: 'Not a template. Every page is designed for what you actually do, who you serve, and what you want them to do next.',
  },
  {
    title: 'Live in 2–4 weeks',
    desc: 'Quick turnaround so you start getting calls fast. No months-long timelines, no waiting around.',
  },
  {
    title: 'Fully managed forever',
    desc: 'Hosting, security, SEO, content changes, and updates — all included. Set it up once, then forget about it.',
  },
  {
    title: 'One monthly payment',
    desc: 'No upfront cost, no big cheque, no surprises. A single flat monthly covers everything for 24 months.',
  },
];

export function Solution() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      aria-labelledby="solution-heading"
      className="py-[120px] border-b border-white/[0.06] bg-black isolate"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">

        {/* Header */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 items-end">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.25em] uppercase text-[#5a5a62]"
          >
            02 — <span className="text-white font-[500]">What we do</span>
          </motion.p>
          <motion.h2
            id="solution-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-[family-name:var(--font-inter)] font-[200] leading-[0.95] tracking-[-0.04em] uppercase text-white"
            style={{ fontSize: 'clamp(36px,5.5vw,80px)' }}
          >
            We build, host, and manage your website.{' '}
            <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
              You
            </em>{' '}
            focus on <span className="font-[900]">the work.</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div
                className="card-shimmer relative rounded-2xl border border-white/[0.08] p-7 md:p-8 h-full"
                style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(24px)' }}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"
                />
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] uppercase text-[#5a5a62] mb-4">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-[family-name:var(--font-inter)] font-[700] text-[18px] md:text-[20px] tracking-[-0.02em] text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-[14px] md:text-[15px] leading-[1.65] text-[#8a8a92]">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}