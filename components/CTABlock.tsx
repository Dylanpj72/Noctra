'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { LiquidMetalButton } from './LiquidMetalButton';

export function CTABlock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      id="cta"
      aria-labelledby="cta-heading"
      className="py-[120px] border-b border-white/[0.06] bg-black isolate"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <div
          className="relative rounded-[32px] overflow-hidden border border-white/[0.06] px-8 md:px-20 py-24 md:py-32 text-center"
          style={{ background: '#000000' }}
        >
          {/* Hangar light */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background: [
                'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,255,255,0.06), transparent 70%)',
              ].join(', '),
            }}
          />

          {/* Dot grid */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1.5px)',
              backgroundSize: '8px 8px',
              mask: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 10%, transparent 70%)',
            }}
          />

          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-[family-name:var(--font-instrument-serif)] italic text-[18px] md:text-[22px] text-[#8a8a92] mb-5"
            >
              Ready to stop losing customers to the competition?
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.3em] uppercase text-[#f5d020] mb-8"
            >
              LET&apos;S BUILD
            </motion.p>

            <motion.h2
              id="cta-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
              className="font-[family-name:var(--font-inter)] font-[200] leading-[0.9] tracking-[-0.05em] uppercase text-white mb-12"
              style={{ fontSize: 'clamp(48px,7vw,112px)' }}
            >
              BUILD{' '}
              <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case tracking-[-0.02em]">
                something
              </em>
              <br />
              WORTH{' '}
              <span className="font-[900]">SEEING.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-3 flex-wrap justify-center mb-6"
            >
              <LiquidMetalButton label="Start a project →" href="/contact" width={168} />
              <LiquidMetalButton label="View pricing" href="/pricing" width={130} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="font-[family-name:var(--font-instrument-serif)] italic text-[13px] text-[#5a5a62]"
            >
              No commitment. No high-pressure pitch. If we&apos;re not a fit, we&apos;ll tell you.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}