'use client';

import { useState, useEffect, useRef } from 'react';

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
const AUTO_SPEED = 0.04;

export function SelectedWork() {
  const [rotation, setRotation] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Scroll drives rotation: full page scroll = one full revolution
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      setRotation(progress * 360);
      scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  // Auto-rotate when not scrolling
  useEffect(() => {
    const tick = () => {
      if (!isScrolling) setRotation((prev) => prev + AUTO_SPEED);
      animFrameRef.current = requestAnimationFrame(tick);
    };
    animFrameRef.current = requestAnimationFrame(tick);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isScrolling]);

  const anglePerItem = 360 / works.length;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="py-[120px] border-b border-white/[0.06] bg-black isolate"
    >
      {/* Section header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 mb-16">
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

      {/* Circular carousel — full viewport width for depth effect */}
      <div
        className="relative w-full"
        style={{ height: `${CARD_H + 100}px` }}
        role="region"
        aria-label="Portfolio carousel"
      >
        {/* Perspective wrapper */}
        <div
          className="absolute inset-0"
          style={{ perspective: '2000px' }}
        >
          {/* Rotating stage */}
          <div
            className="relative w-full h-full"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${rotation}deg)`,
            }}
          >
            {works.map((work, i) => {
              const itemAngle = i * anglePerItem;
              const rel = ((itemAngle + rotation) % 360 + 360) % 360;
              const norm = rel > 180 ? 360 - rel : rel;
              const opacity = Math.max(0.18, 1 - norm / 180);
              const isHov = hovered === work.id;

              return (
                <div
                  key={work.id}
                  role="group"
                  aria-label={work.title}
                  className="absolute"
                  style={{
                    width: `${CARD_W}px`,
                    height: `${CARD_H}px`,
                    left: '50%',
                    top: '50%',
                    marginLeft: `${-(CARD_W / 2)}px`,
                    marginTop: `${-(CARD_H / 2)}px`,
                    transform: `rotateY(${itemAngle}deg) translateZ(${RADIUS}px)`,
                    opacity,
                    transition: 'opacity 0.3s linear',
                  }}
                >
                  <div
                    className="relative w-full h-full rounded-2xl overflow-hidden border border-white/[0.08] cursor-pointer group"
                    style={{ background: work.bg }}
                    onMouseEnter={() => setHovered(work.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* Accent glow */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse 70% 80% at 50% 20%, ${work.accent}28, transparent 65%)`,
                        opacity: isHov ? 1 : 0.5,
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

                    {/* Hover: result + year */}
                    <div
                      className="absolute top-5 right-5 flex flex-col items-end gap-2 pointer-events-none"
                      style={{
                        opacity: isHov ? 1 : 0,
                        transform: isHov ? 'translateY(0)' : 'translateY(10px)',
                        transition: 'opacity 0.3s ease, transform 0.3s ease',
                      }}
                      aria-hidden={!isHov}
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}