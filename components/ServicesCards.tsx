'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import { TiltCard } from './TiltCard';

type Service = {
  num: string;
  icon: string;
  title: [string, string];
  desc: string;
  href: string;
  image: string;
};

const services: Service[] = [
  {
    num: 'SVC / 01',
    icon: '↗',
    title: ['WEB ', 'DESIGN'],
    desc: 'Custom websites built to convert. Strategy, design, and development - all under one roof. From first conversation to live site in 2 to 6 weeks.',
    href: '/services/web-design',
    image: '/brand/web-design.png',
  },
  {
    num: 'SVC / 02',
    icon: '◎',
    title: ['BRAND ', 'SYSTEMS'],
    desc: 'Logo, type, color, voice, and motion - built as a working system, not a moodboard. Designed to scale from your business card to a billboard.',
    href: '/services/brand-systems',
    image: '/brand/brand-systems.png',
  },
  {
    num: 'SVC / 03',
    icon: '▲',
    title: ['GROWTH ', 'AUDITS'],
    desc: "Already shipped? We diagnose what's leaking: Site, SEO, Google Business, and tell you exactly how to fix it. Most clients see meaningful gains within 30 days.",
    href: '/services/growth-audits',
    image: '/brand/growth-audits.png',
  },
];

function GlassCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <Link href={service.href} className="block">
      <TiltCard
        className="group relative rounded-[28px] overflow-hidden border border-white/[0.08] min-h-[360px] flex flex-col p-8 md:p-10 cursor-pointer hover:border-white/[0.16]"
        style={{
          backdropFilter: 'blur(24px) saturate(180%)',
          boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
        }}
      >
        {/* Background image with atmospheric overlay */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image
            src={service.image}
            alt=""
            fill
            className="object-cover object-center transition-transform duration-[600ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/[0.88] transition-colors duration-[600ms] ease-out group-hover:bg-black/[0.76]" />
        </div>

        {/* Top highlight */}
        <span
          aria-hidden="true"
          className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
        />

        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.25em] text-[#5a5a62] uppercase">
            {service.num}
          </span>
          <span className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-[14px] text-[#8a8a92]">
            {service.icon}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-[family-name:var(--font-inter)] font-[200] text-[30px] leading-[1.05] tracking-[-0.03em] uppercase text-white mb-4"
        >
          {service.title[0]}
          <span className="font-[900]">{service.title[1]}</span>
        </h3>

        {/* Description */}
        <p className="text-[14px] leading-[1.65] text-[#8a8a92] mb-8 flex-1">
          {service.desc}
        </p>

        {/* CTA */}
        <div className="flex justify-between items-center">
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.2em] uppercase text-white">
            Explore
          </span>
          <span
            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-[#f5d020] transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:rotate-[-45deg]"
          >
            →
          </span>
        </div>
      </TiltCard>
      </Link>
    </motion.div>
  );
}

export function ServicesCards() {
  return (
    <section
      id="services"
      aria-labelledby="services-cards-heading"
      className="py-[120px] border-b border-white/[0.06] bg-black isolate"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <div className="mb-20 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 items-end">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.25em] uppercase text-[#5a5a62]">
            03 · <span className="text-white font-[500]">Services</span>
          </p>
          <h2
            id="services-cards-heading"
            className="font-[family-name:var(--font-inter)] font-[200] leading-[0.95] tracking-[-0.04em] uppercase text-white"
            style={{ fontSize: 'clamp(40px,6vw,88px)' }}
          >
            What we{' '}
            <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
              actually
            </em>
            <br />
            <span className="font-[900]">do.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((svc, i) => (
            <GlassCard key={svc.num} service={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}