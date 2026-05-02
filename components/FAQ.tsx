'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';

export const faqs = [
  {
    q: "What's included?",
    a: "Everything. Every plan includes custom website design, development, hosting, SSL security, daily backups, and ongoing management. Content updates, SEO, and technical maintenance are all handled by us, so you focus on your business and we keep the site running perfectly.",
  },
  {
    q: 'Why a 24-month minimum?',
    a: "Building your website properly takes real investment up front: strategy, design, build, SEO, and launch. The 24-month commitment lets us spread that investment into an affordable monthly payment while including all ongoing support. It's the same logic as a phone contract: you get more for less over time.",
  },
  {
    q: 'What happens after 24 months?',
    a: "Your monthly payment drops significantly, to just the retainer rate shown on each plan. That covers hosting, security, SEO, and ongoing management. You keep the site, we keep it running smoothly. No renegotiation, no surprises.",
  },
  {
    q: 'Do you work internationally?',
    a: "Yes. We work with businesses across South Africa, the UK, the US, Europe, Australia, and beyond. Our pricing is region-calibrated so it's fair wherever you're based. You pay in your local currency at rates that reflect your market.",
  },
  {
    q: 'Can you redesign an existing website?',
    a: "Absolutely. Redesigns are a core service. We start by reviewing your current site: what's working, what isn't, and what's costing you customers. Then we design a replacement that fixes the right problems from the ground up.",
  },
  {
    q: 'Do you offer ongoing maintenance after launch?',
    a: "It's included in every plan, always. Hosting, security updates, content changes, and SEO are all managed by us on an ongoing basis. You won't need to touch the technical side of your site, ever.",
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

export function FAQ({ limit }: { limit?: number } = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = limit ? faqs.slice(0, limit) : faqs;

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
            <span className="text-white font-[500]">FAQ</span>
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
          {items.map((faq, i) => (
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