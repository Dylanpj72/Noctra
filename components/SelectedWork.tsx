'use client';

import { useState, useEffect, useRef } from 'react';
import { useMotionValue, useTransform, motion, type MotionValue } from 'motion/react';

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

const CARD_W = 520;
const CARD_H = 300;
const RADIUS = 700;
const TOTAL_DEG = 360;
const DEG_PER_PX = 0.35; // wheel pixels → degrees

type Phase = 'idle' | 'active' | 'done';

// ─── Per-card: reads rotation MotionValue directly, no React re-renders ────────
function GalleryCard({
  work,
  itemAngle,
  rotMV,
}: {
  work: (typeof works)[0];
  itemAngle: number;
  rotMV: MotionValue<number>;
}) {
  const [hovered, setHovered] = useState(false);

  const opacity = useTransform(rotMV, (r) => {
    const rel = ((itemAngle + r) % 360 + 360) % 360;
    const norm = rel > 180 ? 360 - rel : rel;
    return Math.max(0.18, 1 - norm / 180);
  });

  return (
    <motion.div
      role="group"
      aria-label={work.title}
      className="absolute"
      style={{
        width: CARD_W,
        height: CARD_H,
        left: '50%',
        top: '50%',
        marginLeft: -(CARD_W / 2),
        marginTop: -(CARD_H / 2),
        transform: `rotateY(${itemAngle}deg) translateZ(${RADIUS}px)`,
        opacity,
      }}
    >
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden border border-white/[0.08] cursor-pointer group"
        style={{ background: work.bg }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Accent glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 70% 80% at 50% 20%, ${work.accent}28, transparent 65%)`,
            opacity: hovered ? 1 : 0.5,
            transition: 'opacity 0.6s ease',
          }}
          aria-hidden="true"
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
          aria-hidden="true"
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        {/* Hover: result badge + year */}
        <div
          className="absolute top-5 right-5 flex flex-col items-end gap-2 pointer-events-none"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
          aria-hidden={!hovered}
        >
          <span
            className="px-2.5 py-1 rounded-full text-[11px] font-[700] text-black"
            style={{ background: work.accent }}
          >
            {work.result}
          </span>
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] text-[#8a8a92]">
            {work.year}
          </span>
        </div>
        {/* Title block */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.25em] uppercase text-[#5a5a62] mb-1.5">
            {work.id} · {work.category}
          </p>
          <h3 className="font-[family-name:var(--font-inter)] font-[700] text-[22px] tracking-[-0.03em] text-white">
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
      </div>
    </motion.div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);

  // Framer Motion value — updates without triggering React re-renders
  const rotMV = useMotionValue(0);
  const rotRef = useRef(0);       // mirror for reading inside event handlers
  const phaseRef = useRef<Phase>('idle');
  const touchStartY = useRef(0);

  // Scroll-hint opacity: visible at 0°, fades by 20°
  const hintOpacity = useTransform(rotMV, [0, 20], [1, 0]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // ── Wheel ─────────────────────────────────────────────────────────────────
    const onWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();

      // Activate when section top reaches viewport top and user scrolls down
      if (phaseRef.current === 'idle' && rect.top <= 4 && e.deltaY > 0) {
        // Snap to exact alignment so the section fills the viewport cleanly
        window.scrollTo({ top: section.offsetTop, behavior: 'instant' });
        phaseRef.current = 'active';
      }

      if (phaseRef.current === 'active') {
        e.preventDefault();
        const next = Math.max(0, Math.min(TOTAL_DEG, rotRef.current + e.deltaY * DEG_PER_PX));
        rotRef.current = next;
        rotMV.set(next);

        if (next >= TOTAL_DEG) phaseRef.current = 'done';
        // Allow scrolling back up out of the section
        if (next <= 0 && e.deltaY < 0) phaseRef.current = 'idle';
      }
      // 'done': event propagates normally → page scrolls past section
    };

    // ── Touch ─────────────────────────────────────────────────────────────────
    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      const rect = section.getBoundingClientRect();
      const dy = touchStartY.current - e.touches[0].clientY; // positive = swipe up = scroll down

      if (phaseRef.current === 'idle' && rect.top <= 4 && dy > 0) {
        window.scrollTo({ top: section.offsetTop, behavior: 'instant' });
        phaseRef.current = 'active';
      }

      if (phaseRef.current === 'active') {
        e.preventDefault();
        const next = Math.max(0, Math.min(TOTAL_DEG, rotRef.current + dy * DEG_PER_PX * 0.6));
        rotRef.current = next;
        rotMV.set(next);
        touchStartY.current = e.touches[0].clientY;

        if (next >= TOTAL_DEG) phaseRef.current = 'done';
        if (next <= 0 && dy < 0) phaseRef.current = 'idle';
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [rotMV]);

  const anglePerItem = 360 / works.length;

  return (
    <section
      ref={sectionRef}
      id="work"
      aria-labelledby="work-heading"
      className="relative h-screen bg-black border-b border-white/[0.06] isolate flex flex-col overflow-hidden"
    >
      {/* Section header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 pt-[80px] pb-10 w-full flex-shrink-0">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 items-end">
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
      </div>

      {/* 3D carousel */}
      <div
        className="relative flex-1"
        style={{ perspective: '2000px' }}
        role="region"
        aria-label="Portfolio carousel"
      >
        <motion.div
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            rotateY: rotMV,
          }}
        >
          {works.map((work, i) => (
            <GalleryCard
              key={work.id}
              work={work}
              itemAngle={i * anglePerItem}
              rotMV={rotMV}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll hint — fades as rotation starts */}
      <motion.p
        style={{ opacity: hintOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.25em] uppercase text-[#5a5a62] pointer-events-none select-none whitespace-nowrap"
        aria-hidden="true"
      >
        Scroll to explore ↓
      </motion.p>
    </section>
  );
}