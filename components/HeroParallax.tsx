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

type Product = typeof mobileProducts[0];

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

function CardInner({ product }: { product: Product }) {
  return (
    <>
      <span
        aria-hidden="true"
        className="absolute top-0 left-[10%] right-[10%] h-px pointer-events-none z-10"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.30), transparent)' }}
      />
      <span
        aria-hidden="true"
        className="absolute bottom-[-8px] right-3 font-[family-name:var(--font-inter)] font-[900] leading-none tracking-[-0.06em] select-none pointer-events-none"
        style={{ fontSize: '72px', color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.06)' }}
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

// ─── Mobile ──────────────────────────────────────────────────────────────────
// Outer div is 280vh tall — provides the scroll range.
// Inner div is sticky so the viewport stays still while cards sweep horizontally.
//
// Scroll progress mapping:
//   0.00 → 0.20  tilt entry (cards flatten from diagonal behind header)
//   0.15 → 0.90  horizontal sweep (each card steps to centre)
//   0.90 → 1.00  last card holds at centre, then section releases
function MobileSection() {
  const outerRef = React.useRef<HTMLDivElement>(null);
  const cardRef  = React.useRef<HTMLDivElement>(null);

  // Measured card width + gap so last card lands exactly at centre
  const [cardStep, setCardStep] = React.useState(355);
  React.useEffect(() => {
    const measure = () => {
      if (cardRef.current) setCardStep(cardRef.current.offsetWidth + 16); // 16px = space-x-4
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ['start start', 'end end'],
  });

  const spring = { stiffness: 300, damping: 30, bounce: 100 };

  // Tilt entry — smaller translateY so cards are visible behind the header
  const rotateX    = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]),    spring);
  const rotateZ    = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]),    spring);
  const opacity    = useSpring(useTransform(scrollYProgress, [0, 0.15], [0.6, 1]),  spring);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-140, 0]),  spring);

  // Horizontal sweep — ends at 0.90 so last card is centred before release
  const rawX   = useTransform(scrollYProgress, [0.15, 0.90], [0, -(cardStep * 5)]);
  const mobileX = useSpring(rawX, { stiffness: 400, damping: 40, bounce: 0 });

  return (
    // Outer: tall, provides scroll range
    <div ref={outerRef} className="relative h-[280vh] md:hidden">
      {/* Inner: sticky — viewport stays locked while cards move */}
      <div className="sticky top-0 h-svh overflow-hidden flex flex-col bg-black [perspective:1000px] [transform-style:preserve-3d]">

        {/* Header — sits above cards in z-space */}
        <div className="relative z-10 px-6 pt-16 pb-6 flex-shrink-0">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.25em] uppercase text-[#5a5a62] mb-4">
            05 — <span className="text-white font-[500]">Selected Work</span>
          </p>
          <h2
            id="work-heading"
            className="font-[family-name:var(--font-inter)] font-[200] leading-[0.95] tracking-[-0.04em] uppercase text-white"
            style={{ fontSize: 'clamp(36px,10vw,56px)' }}
          >
            The{' '}
            <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
              receipts.
            </em>
          </h2>
        </div>

        {/* Cards — tilt in from behind the header, then sweep horizontally */}
        <motion.div
          style={{ rotateX, rotateZ, y: translateY, opacity }}
          className="flex-1 flex items-center"
        >
          <motion.div className="flex space-x-4 pl-6" style={{ x: mobileX }}>
            {mobileProducts.map((p, i) => (
              <div
                key={p.title}
                ref={i === 0 ? cardRef : undefined}
                className="group/card w-[88vw] h-[68vw] relative flex-shrink-0 rounded-2xl overflow-hidden"
                style={glassStyle(p.orb)}
              >
                <CardInner product={p} />
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}

// ─── Desktop ─────────────────────────────────────────────────────────────────
function DesktopSection() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const spring = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX        = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]),    spring);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]),   spring);
  const rotateX           = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]),    spring);
  const opacity           = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.7, 1]),   spring);
  const rotateZ           = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]),    spring);
  const translateY        = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]),spring);

  const first  = desktopProducts.slice(0, 5);
  const second = desktopProducts.slice(5, 10);
  const third  = desktopProducts.slice(10, 15);

  const row = (products: Product[], translate: MotionValue<number>, reverse: boolean) => (
    <motion.div className={`flex ${reverse ? 'flex-row-reverse space-x-reverse' : 'flex-row'} space-x-20 mb-20`}>
      {products.map((p) => (
        <motion.div
          key={p.title}
          whileHover={{ y: -16 }}
          transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          className="group/card h-96 w-[30rem] relative flex-shrink-0 rounded-2xl overflow-hidden"
          style={{ x: translate, ...glassStyle(p.orb) }}
        >
          <CardInner product={p} />
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <div
      ref={ref}
      className="hidden md:flex md:flex-col h-[300vh] overflow-hidden [perspective:1000px] [transform-style:preserve-3d]"
    >
      {/* Section header */}
      <div className="max-w-[1400px] mx-auto px-14 pt-[120px] pb-20 flex-shrink-0 w-full">
        <div className="grid grid-cols-[200px_1fr] gap-12 items-end">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.25em] uppercase text-[#5a5a62]">
            05 — <span className="text-white font-[500]">Selected Work</span>
          </p>
          <h2
            id="work-heading-desktop"
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

      {/* Parallax rows */}
      <motion.div style={{ rotateX, rotateZ, translateY, opacity }} className="flex-shrink-0">
        {row(first, translateX, true)}
        {row(second, translateXReverse, false)}
        {row(third, translateX, true)}
      </motion.div>
    </div>
  );
}

// ─── Export ──────────────────────────────────────────────────────────────────
export function HeroParallax() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="bg-black border-b border-white/[0.06]"
    >
      <MobileSection />
      <DesktopSection />
    </section>
  );
}