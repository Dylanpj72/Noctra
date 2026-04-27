'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

type Stat = {
  value: string;
  suffix: string;
  label: string;
  prefix?: string;
};

const stats: Stat[] = [
  { prefix: '+', value: '247', suffix: '%', label: 'Avg conversion lift' },
  { value: '12', suffix: 'wk', label: 'Kickoff to launch' },
  { value: '38', suffix: '', label: 'Brands shipped' },
  { value: '100', suffix: '%', label: 'Same team start to ship' },
];

function CountUp({ target, inView }: { target: number; inView: boolean }) {
  const [current, setCurrent] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1200;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOut
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [inView, target]);

  return <>{current}</>;
}

export function StatsRow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      aria-label="Agency statistics"
      className="py-16 md:py-24 border-b border-white/[0.06]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{
            background: 'rgba(255,255,255,0.06)',
            gap: '1px',
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-black px-6 md:px-8 py-10"
            >
              <div
                className="font-[family-name:var(--font-inter)] font-[200] leading-[1] tracking-[-0.04em] mb-4 text-white"
                style={{ fontSize: 'clamp(40px,4.5vw,68px)' }}
              >
                {stat.prefix && (
                  <span className="font-[900]">{stat.prefix}</span>
                )}
                <span className="font-[900]">
                  <CountUp target={parseInt(stat.value)} inView={inView} />
                </span>
                <span className="font-[200]">{stat.suffix}</span>
              </div>
              <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.25em] uppercase text-[#5a5a62]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}