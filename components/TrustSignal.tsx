'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const tools = [
  'Next.js', 'Vercel', 'Framer', 'Webflow', 'Sanity', 'Stripe',
];

export function TrustSignal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      aria-labelledby="trust-heading"
      className="py-[100px] border-b border-white/[0.06] bg-black isolate overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 text-center">

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.3em] uppercase text-[#5a5a62] mb-6"
        >
          07 · <span className="text-white font-[500]">Built to last</span>
        </motion.p>

        <motion.h2
          id="trust-heading"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-[family-name:var(--font-inter)] font-[200] leading-[0.95] tracking-[-0.04em] uppercase text-white mb-4"
          style={{ fontSize: 'clamp(28px,4vw,56px)' }}
        >
          The same stack trusted by{' '}
          <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
            the world&apos;s best
          </em>{' '}
          <span className="font-[900]">digital brands.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-[family-name:var(--font-instrument-serif)] italic text-[15px] md:text-[17px] text-[#5a5a62] mb-12 max-w-[460px] mx-auto"
        >
          Testimonials from our clients are on the way. In the meantime, here&apos;s what we build with.
        </motion.p>

        {/* Tool pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 rounded-full border border-white/[0.10] bg-white/[0.03] font-[family-name:var(--font-inter)] text-[13px] font-[500] text-[#8a8a92]"
            >
              {tool}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}