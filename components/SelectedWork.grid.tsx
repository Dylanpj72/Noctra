'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TiltCard } from './TiltCard';

const works = [
  {
    id: '01',
    title: 'Meridian Capital',
    category: 'Web Design · Brand',
    year: '2026',
    result: '+312% conversion',
    bg: '#0a0a10',
    accent: '#4a7fff',
  },
  {
    id: '02',
    title: 'Luma Studio',
    category: 'Web Design · Motion',
    year: '2026',
    result: '8wk to launch',
    bg: '#0d0a0a',
    accent: '#ff6b4a',
  },
  {
    id: '03',
    title: 'Arc Protocol',
    category: 'Brand Systems · Growth',
    year: '2025',
    result: '+189% organic',
    bg: '#080d0a',
    accent: '#4affa0',
  },
];

function WorkTile({ work, index }: { work: (typeof works)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <TiltCard
        spotlight={false}
        tiltLimit={10}
        scale={1.03}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative rounded-2xl border border-white/[0.08] aspect-[4/3] flex flex-col justify-end cursor-pointer"
        style={{ background: work.bg }}
        role="article"
        aria-label={`Case study: ${work.title}`}
      >
        {/* Accent gradient */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background: `radial-gradient(ellipse 60% 60% at 50% 30%, ${work.accent}18, transparent 70%)`,
            opacity: hovered ? 1 : 0.4,
          }}
          aria-hidden="true"
        />

        {/* Grid lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1.5px)`,
            backgroundSize: '24px 24px',
          }}
          aria-hidden="true"
        />

        {/* Gradient overlay at bottom */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          aria-hidden="true"
        />

        {/* Hover reveal metadata */}
        <motion.div
          initial={false}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 12 }}
          transition={{ duration: 0.3 }}
          className="absolute top-6 right-6 flex flex-col items-end gap-2"
          aria-hidden={!hovered}
        >
          <span
            className="px-2.5 py-1 rounded-full text-[11px] font-semibold text-black"
            style={{ background: work.accent }}
          >
            {work.result}
          </span>
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] text-[#8a8a92]">
            {work.year}
          </span>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 p-6 md:p-8">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.25em] uppercase text-[#5a5a62] mb-2">
            {work.id} · {work.category}
          </p>
          <h3 className="font-[family-name:var(--font-inter)] font-[700] text-[22px] md:text-[26px] tracking-[-0.03em] text-white">
            {work.title}
          </h3>
        </div>

        {/* Arrow */}
        <div
          className="absolute bottom-6 right-6 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:rotate-[-45deg]"
          aria-hidden="true"
        >
          →
        </div>
      </TiltCard>
    </motion.div>
  );
}

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="py-[120px] border-b border-white/[0.06] bg-black isolate"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <div className="mb-20 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 items-end">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.25em] uppercase text-[#5a5a62]">
            05 · <span className="text-white font-[500]">Selected Work</span>
          </p>
          <h2
            id="work-heading"
            className="font-[family-name:var(--font-inter)] font-[200] leading-[0.95] tracking-[-0.04em] uppercase text-white"
            style={{ fontSize: 'clamp(40px,6vw,88px)' }}
          >
            The{' '}
            <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
              receipts.
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {works.map((work, i) => (
            <WorkTile key={work.id} work={work} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}