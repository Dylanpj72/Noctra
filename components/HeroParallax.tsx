'use client';

import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'motion/react';
import Link from 'next/link';

// 6 cards for mobile, 15 for desktop
const mobileProducts = [
  { title: 'Meridian Capital', link: '#', index: '01', category: 'Web Design · Brand',    orb: '30% 20%' },
  { title: 'Luma Studio',      link: '#', index: '02', category: 'Motion · Brand',        orb: '70% 30%' },
  { title: 'Arc Protocol',     link: '#', index: '03', category: 'Brand Systems · Growth',orb: '20% 60%' },
  { title: 'Vanta Labs',       link: '#', index: '04', category: 'Web Design · SEO',      orb: '60% 10%' },
  { title: 'Soleil Collective',link: '#', index: '05', category: 'E-commerce · Brand',    orb: '40% 70%' },
  { title: 'Helix Ventures',   link: '#', index: '06', category: 'Web Design · Growth',   orb: '80% 50%' },
];

const desktopProducts = [
  { title: 'Meridian Capital', link: '#', index: '01', category: 'Web Design · Brand',    orb: '30% 20%' },
  { title: 'Luma Studio',      link: '#', index: '02', category: 'Motion · Brand',        orb: '70% 30%' },
  { title: 'Arc Protocol',     link: '#', index: '03', category: 'Brand Systems · Growth',orb: '20% 60%' },
  { title: 'Vanta Labs',       link: '#', index: '04', category: 'Web Design · SEO',      orb: '60% 10%' },
  { title: 'Soleil Collective',link: '#', index: '05', category: 'E-commerce · Brand',    orb: '40% 70%' },
  { title: 'Helix Ventures',   link: '#', index: '06', category: 'Web Design · Growth',   orb: '80% 50%' },
  { title: 'Drift Agency',     link: '#', index: '07', category: 'Brand Systems',         orb: '25% 40%' },
  { title: 'Prism Digital',    link: '#', index: '08', category: 'Web Design · Motion',   orb: '55% 80%' },
  { title: 'Crest Partners',   link: '#', index: '09', category: 'Web Design · Brand',    orb: '75% 20%' },
  { title: 'Forge Studio',     link: '#', index: '10', category: 'E-commerce · SEO',      orb: '15% 55%' },
  { title: 'Axiom Health',     link: '#', index: '11', category: 'Web Design · Brand',    orb: '45% 30%' },
  { title: 'Ember Brand',      link: '#', index: '12', category: 'Brand Systems · Motion',orb: '65% 65%' },
  { title: 'Quartz Capital',   link: '#', index: '13', category: 'Web Design · Growth',   orb: '35% 15%' },
  { title: 'Nova Systems',     link: '#', index: '14', category: 'Web Design · SEO',      orb: '50% 50%' },
  { title: 'Peak Advisory',    link: '#', index: '15', category: 'Brand Systems · Brand', orb: '20% 80%' },
];

const glassStyle = (orb: string): React.CSSProperties => ({
  background: [
    `radial-gradient(ellipse 140% 100% at ${orb}, rgba(255,255,255,0.09), transparent 55%)`,
    `radial-gradient(ellipse 60% 80% at 95% 90%, rgba(255,255,255,0.04), transparent 50%)`,
    `linear-gradient(160deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.008) 50%, rgba(255,255,255,0.03) 100%)`,
  ].join(', '),
  backdropFilter: 'blur(32px)',
  border: '1px solid rgba(255,255,255,0.10)',
  boxShadow: [
    'inset 0 1px 0 rgba(255,255,255,0.16)',
    'inset 0 -1px 0 rgba(255,255,255,0.04)',
    'inset 1px 0 0 rgba(255,255,255,0.06)',
    '0 24px 48px rgba(0,0,0,0.5)',
  ].join(', '),
});

function CardInner({ product }: { product: typeof mobileProducts[0] }) {
  return (
    <>
      <span
        aria-hidden="true"
        className="absolute top-0 left-[10%] right-[10%] h-px pointer-events-none z-10"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.30), transparent)' }}
      />
      <span
        aria-hidden="true"
        className="absolute bottom-[-10px] right-3 font-[family-name:var(--font-inter)] font-[900] leading-none tracking-[-0.06em] select-none pointer-events-none"
        style={{ fontSize: '80px', color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.06)' }}
      >
        {product.index}
      </span>
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.06) 50%, transparent 70%)' }}
      />
      <Link href={product.link} className="absolute inset-0 flex flex-col justify-between p-5 md:p-7 z-10">
        <div className="flex items-start justify-between">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.25em] uppercase text-[#5a5a62]">
            {product.category}
          </p>
          <div className="w-7 h-7 rounded-full border border-white/[0.12] flex items-center justify-center text-[#5a5a62] text-[12px] transition-all duration-300 group-hover/card:border-white/30 group-hover/card:text-white group-hover/card:rotate-[-45deg] group-hover/card:bg-white/[0.06]">
            →
          </div>
        </div>
        <div>
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.25em] uppercase text-[#5a5a62] mb-1.5">
            {product.index}
          </p>
          <h3 className="font-[family-name:var(--font-inter)] font-[700] text-[20px] tracking-[-0.03em] text-white leading-tight">
            {product.title}
          </h3>
        </div>
      </Link>
    </>
  );
}

// ─── Desktop: 3-row parallax (unchanged) ─────────────────────────────────────
function DesktopParallax({
  translateX,
  translateXReverse,
  rotateX,
  rotateZ,
  translateY,
  opacity,
}: {
  translateX: MotionValue<number>;
  translateXReverse: MotionValue<number>;
  rotateX: MotionValue<number>;
  rotateZ: MotionValue<number>;
  translateY: MotionValue<number>;
  opacity: MotionValue<number>;
}) {
  const first  = desktopProducts.slice(0, 5);
  const second = desktopProducts.slice(5, 10);
  const third  = desktopProducts.slice(10, 15);

  return (
    <motion.div
      style={{ rotateX, rotateZ, translateY, opacity }}
      className="hidden md:block flex-shrink-0"
    >
      <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
        {first.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ y: -16 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="group/card h-96 w-[30rem] relative flex-shrink-0 rounded-2xl overflow-hidden"
            style={{ x: translateX, ...glassStyle(p.orb) }}
          >
            <CardInner product={p} />
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="flex flex-row space-x-20 mb-20">
        {second.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ y: -16 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="group/card h-96 w-[30rem] relative flex-shrink-0 rounded-2xl overflow-hidden"
            style={{ x: translateXReverse, ...glassStyle(p.orb) }}
          >
            <CardInner product={p} />
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
        {third.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ y: -16 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="group/card h-96 w-[30rem] relative flex-shrink-0 rounded-2xl overflow-hidden"
            style={{ x: translateX, ...glassStyle(p.orb) }}
          >
            <CardInner product={p} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

// ─── Mobile: single row, scroll-driven horizontal ────────────────────────────
function MobileParallax({
  rotateX,
  rotateZ,
  translateY,
  opacity,
  scrollYProgress,
}: {
  rotateX: MotionValue<number>;
  rotateZ: MotionValue<number>;
  translateY: MotionValue<number>;
  opacity: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
}) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  // cardStep = card width + gap (16px from space-x-4)
  // default 359 ≈ 88vw at 390px + 16px; recalculated after mount
  const [cardStep, setCardStep] = React.useState(359);

  React.useEffect(() => {
    const measure = () => {
      if (cardRef.current) setCardStep(cardRef.current.offsetWidth + 16);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const spring = { stiffness: 300, damping: 30, bounce: 100 };

  // Cards slide left: 5 steps to show all 6 cards
  // Horizontal motion starts after tilt settles (0.15) and finishes before section ends (0.85)
  const rawX = useTransform(scrollYProgress, [0.15, 0.85], [0, -(cardStep * 5)]);
  const mobileX = useSpring(rawX, spring);

  return (
    <motion.div
      style={{ rotateX, rotateZ, translateY, opacity }}
      className="md:hidden flex-shrink-0 flex items-center"
    >
      <motion.div
        className="flex space-x-4 px-6"
        style={{ x: mobileX }}
      >
        {mobileProducts.map((p, i) => (
          <div
            key={p.title}
            ref={i === 0 ? cardRef : undefined}
            className="group/card w-[88vw] h-[70vw] relative flex-shrink-0 rounded-2xl overflow-hidden"
            style={glassStyle(p.orb)}
          >
            <CardInner product={p} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────
export function HeroParallax() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const spring = { stiffness: 300, damping: 30, bounce: 100 };

  // Shared tilt-entry values
  const rotateX    = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]),     spring);
  const rotateZ    = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]),     spring);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), spring);
  const opacity    = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.7, 1]),    spring);

  // Desktop row values
  const translateX        = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]),  spring);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), spring);

  return (
    <section
      id="work"
      ref={ref}
      aria-labelledby="work-heading"
      // Mobile needs less height (6 cards, 1 row); desktop keeps 300vh
      className="h-[220vh] md:h-[300vh] overflow-hidden antialiased relative flex flex-col [perspective:1000px] [transform-style:preserve-3d] bg-black border-b border-white/[0.06]"
    >
      {/* Section header */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-14 pt-[120px] pb-16 md:pb-20 flex-shrink-0">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 items-end">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.25em] uppercase text-[#5a5a62]">
            05 — <span className="text-white font-[500]">Selected Work</span>
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

      <MobileParallax
        rotateX={rotateX}
        rotateZ={rotateZ}
        translateY={translateY}
        opacity={opacity}
        scrollYProgress={scrollYProgress}
      />

      <DesktopParallax
        translateX={translateX}
        translateXReverse={translateXReverse}
        rotateX={rotateX}
        rotateZ={rotateZ}
        translateY={translateY}
        opacity={opacity}
      />
    </section>
  );
}