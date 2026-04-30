'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { faqs } from './FAQ';

const teaserFaqs = faqs.slice(0, 5);

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
      initial={{ opacity: 0, y: 16 }}
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

export function FAQTeaser() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="faq-teaser"
      aria-labelledby="faq-teaser-heading"
      className="py-[120px] border-b border-white/[0.06] bg-black isolate"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">

        {/* Header */}
        <div ref={ref} className="mb-16 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 items-end">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.25em] uppercase text-[#5a5a62]"
          >
            08 — <span className="text-white font-[500]">FAQ</span>
          </motion.p>
          <motion.h2
            id="faq-teaser-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-[family-name:var(--font-inter)] font-[200] leading-[0.95] tracking-[-0.04em] uppercase text-white"
            style={{ fontSize: 'clamp(40px,6vw,88px)' }}
          >
            Common{' '}
            <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
              questions.
            </em>
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="max-w-[800px] flex flex-col gap-3 mb-10">
          {teaserFaqs.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              item={faq}
              index={i}
              open={openIndex === i}
              toggle={() => setOpenIndex((c) => (c === i ? null : i))}
            />
          ))}
        </div>

        {/* Link to full FAQ */}
        <Link
          href="/pricing#faq"
          className="inline-flex items-center gap-2 text-[13px] font-[500] text-[#8a8a92] hover:text-white transition-colors duration-300 group"
        >
          See all questions
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>

      </div>
    </section>
  );
}