'use client';

import { lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import { Nav } from './Nav';

const HeroParticles = lazy(() =>
  import('./HeroParticles').then((m) => ({ default: m.HeroParticles }))
);

const word = (text: string, className?: string) => ({ text, className });

const headline = [
  word('WE '),
  word('BUILD ', 'font-[200]'),
  word('WEBSITES', 'text-transparent [-webkit-text-stroke:1px_white] font-[200]'),
  word(' THAT ', 'font-[200]'),
  word('WIN.', 'font-[900]'),
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-svh overflow-hidden bg-black border-b border-white/[0.06]"
    >
      {/* Hangar light */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-full pointer-events-none z-[1]"
        style={{
          background: [
            'radial-gradient(ellipse 40% 70% at 50% 0%, rgba(255,255,255,0.12), transparent 60%)',
            'radial-gradient(ellipse 80% 30% at 50% 0%, rgba(255,255,255,0.05), transparent 70%)',
          ].join(', '),
        }}
      >
        {/* Beam edges */}
        <span
          className="absolute top-0 w-px h-[60%]"
          style={{
            left: '38%',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)',
            transform: 'rotate(8deg)',
            transformOrigin: 'top',
          }}
        />
        <span
          className="absolute top-0 w-px h-[60%]"
          style={{
            right: '38%',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)',
            transform: 'rotate(-8deg)',
            transformOrigin: 'top',
          }}
        />
      </div>

      {/* Particle field — desktop only, lazily loaded */}
      <div className="hidden md:block absolute inset-0 z-[1] pointer-events-none">
        <Suspense fallback={null}>
          <HeroParticles />
        </Suspense>
      </div>

      {/* Static SVG dot grid — mobile fallback */}
      <div
        aria-hidden="true"
        className="block md:hidden absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          mask: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 70%)',
        }}
      />

      {/* Corner ticks */}
      {['tl', 'tr', 'bl', 'br'].map((pos) => (
        <span
          key={pos}
          aria-hidden="true"
          className="absolute w-6 h-6 z-[3] pointer-events-none"
          style={{
            top: pos.startsWith('t') ? 48 : undefined,
            bottom: pos.startsWith('b') ? 48 : undefined,
            left: pos.endsWith('l') ? 48 : undefined,
            right: pos.endsWith('r') ? 48 : undefined,
            borderTop: pos.startsWith('t') ? '1px solid rgba(255,255,255,0.15)' : undefined,
            borderBottom: pos.startsWith('b') ? '1px solid rgba(255,255,255,0.15)' : undefined,
            borderLeft: pos.endsWith('l') ? '1px solid rgba(255,255,255,0.15)' : undefined,
            borderRight: pos.endsWith('r') ? '1px solid rgba(255,255,255,0.15)' : undefined,
          }}
        />
      ))}

      {/* Inner layout */}
      <div className="relative z-[2] h-svh min-h-[600px] flex flex-col px-6 md:px-14 pt-10 pb-8">
        {/* Nav */}
        <Nav />

        {/* Hero content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.4em] uppercase text-[#8a8a92] mb-14"
          >
            — NEW ERA OF DIGITAL EXPERIENCE —
          </motion.p>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="font-[family-name:var(--font-inter)] font-[200] text-[clamp(52px,10vw,168px)] leading-[0.88] tracking-[-0.05em] uppercase mb-8 text-white"
          >
            <span className="sr-only">We build websites that win.</span>
            <span aria-hidden="true">
              {headline.map(({ text, className }, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.5 + i * 0.08,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  className={`inline-block ${className ?? ''}`}
                >
                  {text}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-[family-name:var(--font-instrument-serif)] italic text-[clamp(17px,2vw,22px)] text-[#8a8a92] max-w-[520px] mb-12 leading-snug tracking-[-0.01em]"
          >
            For founders and operators who want their website to be the strongest hire on the team.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex gap-3 flex-wrap justify-center"
          >
            <a
              href="#work"
              className="btn-shimmer-white group relative overflow-hidden flex items-center gap-2 px-6 py-3.5 text-black text-[13px] font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.1),0_12px_40px_rgba(255,255,255,0.15)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98]"
            >
              See our work
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="btn-shimmer-glass group relative overflow-hidden flex items-center gap-2 px-6 py-3.5 text-white text-[13px] font-medium rounded-full border border-white/[0.10] backdrop-blur-xl transition-all duration-300 hover:border-white/[0.20] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98]"
            >
              Book a call
            </a>
          </motion.div>
        </div>

        {/* Floor stage */}
        <div
          aria-hidden="true"
          className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[80%] max-w-[800px] h-24 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.04), transparent 60%)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '50%',
          }}
        />

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-6 md:left-14 z-[3] font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.25em] uppercase text-[#5a5a62] hidden md:block"
          aria-hidden="true"
        >
          SCROLL
          <motion.div
            animate={{ y: [0, 4, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-2"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>

      {/* Ghost wordmark bleeding off the bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        aria-hidden="true"
        className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 font-[family-name:var(--font-inter)] font-[900] leading-[0.8] tracking-[-0.07em] text-transparent pointer-events-none whitespace-nowrap select-none z-[1]"
        style={{
          fontSize: 'clamp(120px, 22vw, 360px)',
          WebkitTextStroke: '1px rgba(255,255,255,0.06)',
        }}
      >
        NOCTRA
      </motion.div>
    </section>
  );
}