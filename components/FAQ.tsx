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
    a: "Your monthly payment drops significantly to just the ongoing rate shown on each plan. That covers hosting, security, SEO, and ongoing management. You keep the site, we keep it running smoothly. No renegotiation, no surprises.",
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
  {
    q: "What's the difference between the two payment options?",
    a: "The service is identical: same design, same build quality, same ongoing support. The only difference is how you pay. The monthly subscription has no upfront cost. You pay a flat monthly fee for 24 months, after which it drops to the ongoing rate. Most clients choose this option because it spreads the cost and avoids a large upfront payment. The upfront option has a one-time build cost paid at project start, then a smaller monthly fee for ongoing service. The total cost over time is slightly lower, and there's no minimum term. You can cancel anytime with 30 days notice. This works well for clients who would rather pay the build cost upfront and have maximum flexibility afterwards.",
  },
  {
    q: 'Which option saves me more money?',
    a: "The upfront option works out slightly cheaper if you stay with us for the full 24 months and beyond. But the monthly subscription has no upfront cost, so you're not paying anything until the build starts. It comes down to whether you would rather optimise for total cost (upfront) or cash flow (subscription).",
  },
  {
    q: 'Can I switch between options later?',
    a: "The payment model is set at the start of your contract and stays for the term. After your initial term ends, you can renegotiate to a different structure if it makes sense for your business. Most clients are happy with their original choice.",
  },
  {
    q: 'Why does the ongoing fee differ between tiers?',
    a: "The fee scales with how much ongoing work we do for you each month, not with what it costs us to host your site. Starter customers get hosting, security, and an hour of content updates monthly. Professional adds three hours of work plus monthly performance reports and quarterly strategy calls. Premium adds six hours of work plus active SEO, competitor monitoring, and conversion testing every month. You're paying for our ongoing involvement, not for server space.",
  },
  {
    q: "Isn't hosting cheaper if I do it myself?",
    a: "If you only need hosting, yes. Basic hosting can cost $10-20 per month elsewhere. But hosting is a small part of what the ongoing fee covers. The bulk of what you're paying for is ongoing work: security monitoring, software updates, content changes, SEO maintenance, performance tracking, and expert availability when something needs attention. Most clients find the convenience and peace of mind worth more than the hosting cost alone.",
  },
  {
    q: 'Can I cancel and just keep the website?',
    a: "Yes, you own your website outright from launch. If you ever decide to cancel, we'll provide everything needed to migrate the site to a host of your choice. You'd lose the ongoing support, updates, and security monitoring we provide, but the site itself is yours.",
  },
  {
    q: "What happens if I don't use my included hours?",
    a: "Included hours don't roll over month-to-month, but they're there when you need them. Most clients comfortably stay within their hours, and those who use them tend to use them in bursts: a few quiet months followed by a busy month when they're updating content or services. If you're consistently not using your hours, we'd suggest moving to a lower tier rather than paying for capacity you don't need.",
  },
  {
    q: 'Can I add or remove things from my ongoing plan?',
    a: "The plans are designed as fixed packages so pricing stays simple. But if you have specific needs that don't fit any tier, we'll discuss a custom arrangement on a call. We'd rather build the right plan for your business than force you into a pre-set tier that doesn't fit.",
  },
  {
    q: 'What if my needs change over time?',
    a: "You can upgrade or downgrade between tiers as your business changes. Most clients who upgrade do so 6 to 12 months in, when they're ready for more active SEO work or content production. Downgrades are available at the end of your initial 24-month term if you're on the subscription plan, or anytime if you're on the upfront plan.",
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
          className="flex-shrink-0 w-8 h-8 rounded-full border border-white/[0.14] flex items-center justify-center text-[#f5d020] text-[18px] leading-none"
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