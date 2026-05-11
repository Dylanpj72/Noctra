'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const bullets = [
  'Customers who can\'t find you online won\'t call you.',
  'Google ranks businesses with websites above those without, even when your reviews are better.',
  'Every day without a professional site is a day your competitors are winning business that should be yours.',
];

export function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      aria-labelledby="problem-heading"
      className="py-[120px] border-b border-white/[0.06] bg-black isolate"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left ·headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.25em] uppercase text-[#5a5a62] mb-6">
              02 ·<span className="text-white font-[500]">The problem</span>
            </p>
            <h2
              id="problem-heading"
              className="font-[family-name:var(--font-inter)] font-[200] leading-[0.95] tracking-[-0.04em] uppercase text-white"
              style={{ fontSize: 'clamp(32px,4.5vw,68px)' }}
            >
              You&apos;re losing customers to competitors with{' '}
              <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
                worse reviews
              </em>{' '}
              <span className="font-[900]">than yours.</span>
            </h2>
          </motion.div>

          {/* Right ·bullets */}
          <div className="flex flex-col gap-3">
            {bullets.map((bullet, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                className="relative flex items-start gap-4 rounded-2xl border border-white/[0.08] p-6"
                style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(24px)' }}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#5a5a62] flex-shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[14px] md:text-[15px] leading-[1.65] text-[#8a8a92]">
                  {bullet}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}