'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';

const faqs = [
  {
    q: 'How long does it take to build a website?',
    a: 'Our average project timeline is 12 weeks from kickoff to launch — covering strategy, design, build, and QA. Complex projects (Empire tier) may run to 16 weeks.',
  },
  {
    q: 'What does it cost to work with Noctra?',
    a: 'Pricing depends on scope and your region. We offer three tiers starting from accessible monthly rates with no upfront cost required on the flat monthly option. See the pricing section above for your region\'s exact numbers.',
  },
  {
    q: 'Do you only work with businesses in South Africa?',
    a: 'No — we work with ambitious businesses globally. Clients span the UK, US, Europe, Australia, and beyond. Our pricing is region-calibrated so it\'s fair wherever you are.',
  },
  {
    q: 'Do you offer ongoing maintenance after launch?',
    a: 'Yes. Every engagement includes a retainer component, either built into the flat monthly or as a separate add-on with upfront. All clients receive 30 days of post-launch support as standard.',
  },
  {
    q: 'What CMS do you build on?',
    a: 'We match the CMS to your team and complexity. We build on Webflow and Framer for marketing sites, and Next.js with a headless CMS (Sanity, Contentful) for more complex projects.',
  },
  {
    q: 'Can you redesign an existing website?',
    a: 'Absolutely — redesigns are one of our strongest services. We typically begin with a Growth Audit to understand what\'s leaking before designing the replacement, so the new site is built to fix the right problems.',
  },
];

function AccordionItem({
  item,
  index,
  open,
  toggle,
}: {
  item: (typeof faqs)[0];
  index: number;
  open: boolean;
  toggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
      className="rounded-2xl border border-white/[0.08] overflow-hidden transition-colors duration-300 hover:border-white/[0.14]"
      style={{ background: 'rgba(255,255,255,0.02)' }}
    >
      <button
        onClick={toggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-white focus-visible:rounded-t-2xl"
        style={{ minHeight: 44 }}
      >
        <span className="font-[family-name:var(--font-inter)] font-[400] text-[15px] md:text-[16px] text-white leading-snug">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex-shrink-0 w-8 h-8 rounded-full border border-white/[0.14] flex items-center justify-center text-[#8a8a92] text-[18px] leading-none"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-white/[0.06] pt-4">
              <p className="text-[14px] md:text-[15px] leading-[1.7] text-[#8a8a92]">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((curr) => (curr === i ? null : i));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-[120px] border-b border-white/[0.06] bg-black isolate"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <div className="mb-16 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 items-end">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.25em] uppercase text-[#5a5a62]">
            07 — <span className="text-white font-[500]">FAQ</span>
          </p>
          <h2
            id="faq-heading"
            className="font-[family-name:var(--font-inter)] font-[200] leading-[0.95] tracking-[-0.04em] uppercase text-white"
            style={{ fontSize: 'clamp(40px,6vw,88px)' }}
          >
            Common{' '}
            <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
              questions.
            </em>
          </h2>
        </div>

        <div className="max-w-[800px] flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              item={faq}
              index={i}
              open={openIndex === i}
              toggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}