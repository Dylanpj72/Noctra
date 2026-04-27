'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const services = [
  {
    key: 'strategy',
    category: 'NOCTRA STRATEGY',
    headline: 'NOCTRA',
    sub: 'STRATEGY',
    description: 'We start where most agencies end — with your numbers, your market, and a clear brief before a single pixel is drawn.',
  },
  {
    key: 'design',
    category: 'NOCTRA DESIGN',
    headline: 'NOCTRA',
    sub: 'DESIGN',
    description: 'Custom websites, designed to convert. Motion, interactions, and craft at every level.',
  },
  {
    key: 'growth',
    category: 'NOCTRA GROWTH',
    headline: 'NOCTRA',
    sub: 'GROWTH',
    description: 'Already launched? We audit, diagnose, and ship fixes. Most clients see meaningful lifts within 30 days.',
  },
];

export function ServicesShowcase() {
  const [active, setActive] = useState(1);

  const prev = () => setActive((a) => (a - 1 + services.length) % services.length);
  const next = () => setActive((a) => (a + 1) % services.length);

  const current = services[active];

  return (
    <section
      aria-labelledby="services-showcase-heading"
      className="py-[120px] border-b border-white/[0.06]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        {/* Section header */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 items-end">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.25em] uppercase text-[#5a5a62]">
            01 — <span className="text-white font-[500]">What We Build</span>
          </p>
          <h2
            id="services-showcase-heading"
            className="font-[family-name:var(--font-inter)] font-[200] leading-[0.95] tracking-[-0.04em] uppercase text-white"
            style={{ fontSize: 'clamp(40px,6vw,88px)' }}
          >
            Three{' '}
            <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case tracking-[-0.025em]">
              disciplines.
            </em>
            <br />
            One <span className="font-[900]">team.</span>
          </h2>
        </div>

        {/* Showcase container */}
        <div className="relative">
          <div
            className="relative rounded-[32px] overflow-hidden border border-white/[0.06] min-h-[600px] md:min-h-[700px] flex flex-col"
            style={{ background: '#050507' }}
          >
            {/* Dot pattern bg */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1.5px)',
                backgroundSize: '8px 8px',
                mask: 'radial-gradient(ellipse 60% 50% at 50% 50%, black 20%, transparent 70%)',
              }}
            />
            {/* Radial glow */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 50% 60% at 50% 0%, rgba(180,200,255,0.06), transparent 60%)',
              }}
            />

            {/* Inner nav bar */}
            <div className="relative z-10 flex justify-between items-center px-6 md:px-8 py-5 border-b border-white/[0.06]">
              <span className="font-[family-name:var(--font-inter)] font-[900] text-[15px] tracking-[-0.03em] text-white">
                NOCTRA
              </span>
              <div className="hidden md:flex gap-8 font-[family-name:var(--font-inter)] text-[13px] text-[#8a8a92]">
                <span className="hover:text-white transition-colors cursor-pointer">Catalog</span>
                <span className="hover:text-white transition-colors cursor-pointer">About</span>
                <span className="hover:text-white transition-colors cursor-pointer">Contact</span>
              </div>
              <button
                className="px-3.5 py-1.5 bg-[#f5d020] text-black rounded-full text-[12px] font-[600] hover:brightness-110 transition-all focus-visible:outline-2 focus-visible:outline-white"
                aria-label="Inquire about services"
              >
                Inquire
              </button>
            </div>

            {/* Arrow controls - desktop */}
            <div
              className="absolute top-1/2 left-6 right-6 -translate-y-1/2 z-20 hidden md:flex justify-between pointer-events-none"
              aria-hidden="true"
            >
              <button
                onClick={prev}
                className="pointer-events-auto w-14 h-14 rounded-full flex items-center justify-center border border-white/[0.20] bg-white/[0.04] backdrop-blur-xl text-white hover:bg-white/[0.08] hover:border-white/[0.4] transition-all focus-visible:outline-2 focus-visible:outline-white"
                aria-label="Previous service"
              >
                ←
              </button>
              <button
                onClick={next}
                className="pointer-events-auto w-14 h-14 rounded-full flex items-center justify-center border border-white/[0.20] bg-white/[0.04] backdrop-blur-xl text-white hover:bg-white/[0.08] hover:border-white/[0.4] transition-all focus-visible:outline-2 focus-visible:outline-white"
                aria-label="Next service"
              >
                →
              </button>
            </div>

            {/* Main content */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.key}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                  className="flex flex-col items-center"
                >
                  <h3
                    className="font-[family-name:var(--font-inter)] font-[300] uppercase tracking-[-0.03em] text-white mb-4"
                    style={{ fontSize: 'clamp(32px,4.5vw,60px)' }}
                  >
                    {current.headline}{' '}
                    <span className="text-[#5a5a62] font-[200]">{current.sub}</span>
                  </h3>
                  <p className="text-[#8a8a92] text-[15px] max-w-[480px] mb-12 leading-relaxed">
                    {current.description}
                  </p>

                  {/* Stage placeholder */}
                  <div
                    className="relative w-full max-w-[560px] rounded-2xl border border-white/[0.08]"
                    style={{
                      aspectRatio: '2.5',
                      background: 'radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.04), transparent 60%)',
                    }}
                    role="img"
                    aria-label={`${current.sub} service visual`}
                  >
                    {/* Floor reflection */}
                    <div
                      className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[70%] h-6 pointer-events-none"
                      style={{
                        borderRadius: '50%',
                        background: 'radial-gradient(ellipse, rgba(255,255,255,0.07), transparent 70%)',
                      }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer with categories + counter */}
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 px-6 md:px-8 py-6 border-t border-white/[0.06]">
              {/* Category tabs */}
              <div className="flex flex-col gap-1">
                {services.map((svc, i) => (
                  <button
                    key={svc.key}
                    onClick={() => setActive(i)}
                    className={`text-left font-[family-name:var(--font-inter)] uppercase pl-4 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-white ${
                      i === active
                        ? 'text-white text-[16px] font-[500] border-l-2 border-white tracking-[0.05em]'
                        : 'text-[#5a5a62] text-[11px] border-l-2 border-white/[0.06] tracking-[0.15em]'
                    }`}
                    aria-pressed={i === active}
                  >
                    {svc.category}
                  </button>
                ))}
              </div>

              {/* Arrow controls - mobile */}
              <div className="flex md:hidden gap-3">
                <button
                  onClick={prev}
                  className="w-11 h-11 rounded-full flex items-center justify-center border border-white/20 text-white bg-white/[0.04] active:scale-95"
                  aria-label="Previous service"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  className="w-11 h-11 rounded-full flex items-center justify-center border border-white/20 text-white bg-white/[0.04] active:scale-95"
                  aria-label="Next service"
                >
                  →
                </button>
              </div>

              {/* Counter */}
              <div
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.05] backdrop-blur-xl"
                aria-label={`Showing service ${active + 1} of ${services.length}`}
              >
                <span
                  className="w-2 h-2 rounded-full bg-white/20"
                  aria-hidden="true"
                />
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[#8a8a92]">
                  0{active + 1} / 0{services.length}
                </span>
              </div>
            </div>
          </div>

          {/* Ghost wordmark behind showcase */}
          <div
            aria-hidden="true"
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-[family-name:var(--font-inter)] font-[900] leading-[0.8] tracking-[-0.07em] text-transparent pointer-events-none whitespace-nowrap select-none -z-10"
            style={{
              fontSize: 'clamp(80px,14vw,220px)',
              WebkitTextStroke: '1px rgba(255,255,255,0.03)',
            }}
          >
            NOCTRA
          </div>
        </div>
      </div>
    </section>
  );
}