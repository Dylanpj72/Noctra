'use client';

import { useState, useEffect, useRef } from 'react';
import { useMotionValue, useTransform, motion, type MotionValue } from 'motion/react';

export const galleryWorks = [
  { id: '01', title: 'Meridian Capital', category: 'Web Design · Brand',       year: '2026', result: '+312% conversion', bg: '#0a0a10', accent: '#4a7fff' },
  { id: '02', title: 'Luma Studio',      category: 'Web Design · Motion',      year: '2026', result: '8wk to launch',    bg: '#0d0a0a', accent: '#ff6b4a' },
  { id: '03', title: 'Arc Protocol',     category: 'Brand Systems · Growth',   year: '2025', result: '+189% organic',    bg: '#080d0a', accent: '#4affa0' },
  { id: '04', title: 'Orbit Health',     category: 'Web Design · SEO',         year: '2025', result: '+240% organic',    bg: '#090a0d', accent: '#a87fff' },
  { id: '05', title: 'Forge Studios',    category: 'Brand Systems · Motion',   year: '2026', result: '4.8/5 NPS',        bg: '#0d0a07', accent: '#ffb84a' },
];

export const CARD_W  = 520;
export const CARD_H  = 300;
export const RADIUS  = 900;
const TOTAL_DEG      = 360;
const DEG_PER_PX     = 0.15;
const ROT_DELTA_CAP  = 80; // px — prevents a single mouse-wheel notch from over-rotating

type Phase = 'idle' | 'active' | 'done';
type Work  = (typeof galleryWorks)[0];

// ─── Shared card component ────────────────────────────────────────────────────
export function GalleryCard({
  work,
  itemAngle,
  rotMV,
}: {
  work: Work;
  itemAngle: number;
  rotMV: MotionValue<number>;
}) {
  const [hovered, setHovered] = useState(false);

  const opacity = useTransform(rotMV, (r) => {
    const rel  = ((itemAngle + r) % 360 + 360) % 360;
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
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 70% 80% at 50% 20%, ${work.accent}28, transparent 65%)`,
            opacity: hovered ? 1 : 0.5,
            transition: 'opacity 0.6s ease',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" aria-hidden="true" />
        <div
          className="absolute top-5 right-5 flex flex-col items-end gap-2 pointer-events-none"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
          aria-hidden={!hovered}
        >
          <span className="px-2.5 py-1 rounded-full text-[11px] font-[700] text-black" style={{ background: work.accent }}>
            {work.result}
          </span>
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] text-[#8a8a92]">
            {work.year}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.25em] uppercase text-[#5a5a62] mb-1.5">
            {work.id} · {work.category}
          </p>
          <h3 className="font-[family-name:var(--font-inter)] font-[700] text-[22px] tracking-[-0.03em] text-white">
            {work.title}
          </h3>
        </div>
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

// ─── Shared scroll-lock hook ──────────────────────────────────────────────────
export function useCarouselLock(sectionRef: React.RefObject<HTMLElement | null>) {
  const rotMV    = useMotionValue(0);
  const rotRef   = useRef(0);
  const phaseRef = useRef<Phase>('idle');
  const touchY   = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const liveTop = () => Math.round(window.scrollY + section.getBoundingClientRect().top);

    // Scroll DOWN: section top flush with viewport top
    const snapDown = () => window.scrollTo({ top: liveTop(), behavior: 'instant' });

    // Scroll UP: offset by headingH/2 so the carousel is vertically centred.
    // Measures the first child — if it's shorter than 40% of the section it's
    // a heading, otherwise (WorkCarousel has no heading) use 0.
    // Never scrolls forward (that would fight the user's scroll direction).
    const snapUp = () => {
      const firstEl  = section.firstElementChild as HTMLElement | null;
      const headingH = firstEl && firstEl.offsetHeight < section.offsetHeight * 0.4
        ? firstEl.offsetHeight : 0;
      const ideal = liveTop() + Math.round(headingH / 2);
      window.scrollTo({ top: Math.min(ideal, window.scrollY), behavior: 'instant' });
    };

    const onWheel = (e: WheelEvent) => {
      const rect  = section.getBoundingClientRect();
      const mult  = e.deltaMode === 1 ? 30 : e.deltaMode === 2 ? window.innerHeight : 1;
      const delta = e.deltaY * mult;

      // ── Activate going DOWN (section top reaches viewport top) ───────────
      if (phaseRef.current === 'idle' && rect.top <= 4 && delta > 0) {
        e.preventDefault();
        snapDown();
        phaseRef.current = 'active';
        // fall through to 'active' block below to consume this delta immediately
      }

      // ── Re-activate going UP ─────────────────────────────────────────────
      // Mirror the downward case: engage only when THIS event would carry
      // rect.top from negative to >= 0 (section top crosses viewport top).
      // delta is negative when scrolling up, so rect.top - delta = rect.top + |delta|.
      // The snap distance is at most |delta| pixels — imperceptible.
      if (phaseRef.current === 'done' && delta < 0) {
        if (rect.top < 0 && rect.top - delta >= 0) {
          e.preventDefault();
          snapUp();
          rotRef.current = TOTAL_DEG;
          rotMV.set(TOTAL_DEG);
          phaseRef.current = 'active';
          // fall through to 'active' block below
        }
      }

      // ── Locked: consume scroll delta as rotation ─────────────────────────
      if (phaseRef.current === 'active') {
        e.preventDefault();
        const capped = Math.sign(delta) * Math.min(Math.abs(delta), ROT_DELTA_CAP);
        const next   = Math.max(0, Math.min(TOTAL_DEG, rotRef.current + capped * DEG_PER_PX));
        rotRef.current = next;
        rotMV.set(next);
        if (next >= TOTAL_DEG) phaseRef.current = 'done';
        if (next <= 0 && delta < 0) {
          phaseRef.current = 'idle';
          snapDown(); // pin section top at viewport top so inertia exits cleanly upward
        }
      }
    };

    const onTouchStart = (e: TouchEvent) => { touchY.current = e.touches[0].clientY; };

    const onTouchMove = (e: TouchEvent) => {
      const rect = section.getBoundingClientRect();
      const dy   = touchY.current - e.touches[0].clientY; // positive = finger moving up = scroll down

      if (phaseRef.current === 'idle' && rect.top <= 4 && dy > 0) {
        snapDown();
        phaseRef.current = 'active';
      }

      if (phaseRef.current === 'done' && dy < 0) {
        if (rect.top < 0 && rect.top + Math.abs(dy) >= 0) {
          snapUp();
          rotRef.current = TOTAL_DEG;
          rotMV.set(TOTAL_DEG);
          phaseRef.current = 'active';
        }
      }

      if (phaseRef.current === 'active') {
        e.preventDefault();
        const next = Math.max(0, Math.min(TOTAL_DEG, rotRef.current + dy * DEG_PER_PX * 0.6));
        rotRef.current = next;
        rotMV.set(next);
        touchY.current = e.touches[0].clientY;
        if (next >= TOTAL_DEG) phaseRef.current = 'done';
        if (next <= 0 && dy < 0) {
          phaseRef.current = 'idle';
          snapDown(); // pin section top at viewport top so inertia exits cleanly upward
        }
      }
    };

    window.addEventListener('wheel',      onWheel,      { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true  });
    window.addEventListener('touchmove',  onTouchMove,  { passive: false });
    return () => {
      window.removeEventListener('wheel',      onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove',  onTouchMove);
    };
  }, [rotMV, sectionRef]);

  return rotMV;
}

// ─── Home-page section (heading inside the locked viewport) ──────────────────
export function SelectedWork() {
  const sectionRef  = useRef<HTMLElement>(null);
  const rotMV       = useCarouselLock(sectionRef);
  const hintOpacity = useTransform(rotMV, [0, 20], [1, 0]);
  const anglePerItem = 360 / galleryWorks.length;

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
      <div className="relative flex-1" style={{ perspective: '2000px' }} role="region" aria-label="Portfolio carousel">
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d', rotateY: rotMV }}
        >
          {galleryWorks.map((work, i) => (
            <GalleryCard key={work.id} work={work} itemAngle={i * anglePerItem} rotMV={rotMV} />
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
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