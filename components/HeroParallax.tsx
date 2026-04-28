'use client';

import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  // Row 1
  { title: 'Meridian Capital', link: '#', thumbnail: 'https://placehold.co/600x400/0a0a14/1a1a2e?text=Meridian+Capital' },
  { title: 'Luma Studio', link: '#', thumbnail: 'https://placehold.co/600x400/0d0a0a/2a1a1a?text=Luma+Studio' },
  { title: 'Arc Protocol', link: '#', thumbnail: 'https://placehold.co/600x400/080d0a/0a2a14?text=Arc+Protocol' },
  { title: 'Vanta Labs', link: '#', thumbnail: 'https://placehold.co/600x400/0a0a0a/1a1a1a?text=Vanta+Labs' },
  { title: 'Soleil Collective', link: '#', thumbnail: 'https://placehold.co/600x400/10090a/2a1010?text=Soleil+Co' },
  // Row 2
  { title: 'Helix Ventures', link: '#', thumbnail: 'https://placehold.co/600x400/090a10/10102a?text=Helix+Ventures' },
  { title: 'Drift Agency', link: '#', thumbnail: 'https://placehold.co/600x400/0a0d09/162a0f?text=Drift+Agency' },
  { title: 'Prism Digital', link: '#', thumbnail: 'https://placehold.co/600x400/0d0a0d/200a20?text=Prism+Digital' },
  { title: 'Crest Partners', link: '#', thumbnail: 'https://placehold.co/600x400/0a0d0d/0a2020?text=Crest+Partners' },
  { title: 'Forge Studio', link: '#', thumbnail: 'https://placehold.co/600x400/0f0a08/2a1a08?text=Forge+Studio' },
  // Row 3
  { title: 'Axiom Health', link: '#', thumbnail: 'https://placehold.co/600x400/080a0f/0a1424?text=Axiom+Health' },
  { title: 'Ember Brand', link: '#', thumbnail: 'https://placehold.co/600x400/100808/280808?text=Ember+Brand' },
  { title: 'Quartz Capital', link: '#', thumbnail: 'https://placehold.co/600x400/090909/181818?text=Quartz+Capital' },
  { title: 'Nova Systems', link: '#', thumbnail: 'https://placehold.co/600x400/08090f/0c0c22?text=Nova+Systems' },
  { title: 'Peak Advisory', link: '#', thumbnail: 'https://placehold.co/600x400/080d0b/0a1e12?text=Peak+Advisory' },
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

  const translateX        = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]),   spring);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]),  spring);
  const rotateX           = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]),   spring);
  const opacity           = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),  spring);
  const rotateZ           = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]),   spring);
  const translateY        = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), spring);

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
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-20 mb-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
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
  product: { title: string; link: string; thumbnail: string };
  translate: MotionValue<number>;
}) {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -16 }}
      transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
      className="group/product h-96 w-[30rem] relative flex-shrink-0 rounded-2xl overflow-hidden border border-white/[0.08]"
    >
      <Link href={product.link} className="block h-full w-full">
        <Image
          src={product.thumbnail}
          height={400}
          width={600}
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
          unoptimized
        />
        {/* Gradient overlay — always present, strengthens on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500" />
        <div className="absolute inset-0 bg-black/0 group-hover/product:bg-black/40 transition-all duration-500" />

        {/* Title reveal on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover/product:translate-y-0 group-hover/product:opacity-100 transition-all duration-400">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.25em] uppercase text-[#8a8a92] mb-1.5">
            View project
          </p>
          <h3 className="font-[family-name:var(--font-inter)] font-[700] text-[20px] tracking-[-0.03em] text-white">
            {product.title}
          </h3>
        </div>

        {/* Arrow */}
        <div className="absolute top-5 right-5 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white text-[13px] opacity-0 group-hover/product:opacity-100 group-hover/product:rotate-[-45deg] transition-all duration-400 bg-white/[0.06] backdrop-blur-md">
          →
        </div>
      </Link>
    </motion.div>
  );
}