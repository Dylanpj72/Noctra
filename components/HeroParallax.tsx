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

// orb position varies per card so each glass surface looks unique
const products = [
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

export function HeroParallax() {
  const firstRow  = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow  = products.slice(10, 15);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const spring = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX        = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]),    spring);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]),   spring);
  const rotateX           = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]),    spring);
  const opacity           = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.7, 1]),   spring);
  const rotateZ           = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]),    spring);
  const translateY        = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]),spring);

  return (
    <section
      id="work"
      ref={ref}
      aria-labelledby="work-heading"
      className="h-[300vh] overflow-hidden antialiased relative flex flex-col [perspective:1000px] [transform-style:preserve-3d] bg-black border-b border-white/[0.06]"
    >
      {/* Section header */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-14 pt-[120px] pb-20 flex-shrink-0">
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

      {/* Parallax rows */}
      <motion.div
        style={{ rotateX, rotateZ, translateY, opacity }}
        className="flex-shrink-0"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((p) => (
            <ProductCard product={p} translate={translateX} key={p.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-20 mb-20">
          {secondRow.map((p) => (
            <ProductCard product={p} translate={translateXReverse} key={p.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((p) => (
            <ProductCard product={p} translate={translateX} key={p.title} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function ProductCard({
  product,
  translate,
}: {
  product: typeof products[0];
  translate: MotionValue<number>;
}) {
  return (
    <motion.div
      whileHover={{ y: -16 }}
      transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
      className="group/product h-96 w-[30rem] relative flex-shrink-0 rounded-2xl overflow-hidden"
      style={{
        x: translate,
        background: [
          `radial-gradient(ellipse 140% 100% at ${product.orb}, rgba(255,255,255,0.09), transparent 55%)`,
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
      }}
    >
      {/* Top-edge glass highlight */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-[10%] right-[10%] h-px pointer-events-none z-10"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.30), transparent)' }}
      />

      {/* Ghost index number */}
      <span
        aria-hidden="true"
        className="absolute bottom-[-16px] right-4 font-[family-name:var(--font-inter)] font-[900] leading-none tracking-[-0.06em] select-none pointer-events-none"
        style={{
          fontSize: '120px',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.06)',
        }}
      >
        {product.index}
      </span>

      {/* Hover shimmer sweep */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 group-hover/product:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.06) 50%, transparent 70%)',
        }}
      />

      <Link href={product.link} className="absolute inset-0 flex flex-col justify-between p-7 z-10">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.25em] uppercase text-[#5a5a62]">
            {product.category}
          </p>
          {/* Arrow — spins on hover */}
          <div className="w-8 h-8 rounded-full border border-white/[0.12] flex items-center justify-center text-[#5a5a62] text-[13px] transition-all duration-300 group-hover/product:border-white/30 group-hover/product:text-white group-hover/product:rotate-[-45deg] group-hover/product:bg-white/[0.06]">
            →
          </div>
        </div>

        {/* Bottom — title */}
        <div>
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.25em] uppercase text-[#5a5a62] mb-2">
            {product.index}
          </p>
          <h3 className="font-[family-name:var(--font-inter)] font-[700] text-[22px] tracking-[-0.03em] text-white leading-tight">
            {product.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}