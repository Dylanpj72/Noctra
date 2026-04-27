const items = [
  { text: 'DESIGN', heavy: true },
  { text: '●', dim: true },
  { text: 'DEVELOPMENT', heavy: true },
  { text: '●', dim: true },
  { text: 'STRATEGY', heavy: true },
  { text: '●', dim: true },
  { text: 'GROWTH', heavy: true },
  { text: '●', dim: true },
  { text: 'BRAND', heavy: true },
  { text: '●', dim: true },
  { text: '● NOW BOOKING Q3 2026', accent: true },
  { text: '●', dim: true },
];

const doubledItems = [...items, ...items];

export function Marquee() {
  return (
    <div
      className="overflow-hidden border-y border-white/[0.06] py-8 md:py-10"
      aria-label="Services marquee"
    >
      <div
        className="flex gap-16 whitespace-nowrap will-change-transform"
        style={{
          animation: 'marquee-scroll 30s linear infinite',
          fontSize: 'clamp(36px,4.5vw,68px)',
          fontFamily: 'var(--font-inter)',
          fontWeight: 200,
          letterSpacing: '-0.04em',
          textTransform: 'uppercase',
          color: '#8a8a92',
        }}
        role="marquee"
      >
        {doubledItems.map((item, i) => (
          <span
            key={i}
            style={{
              fontWeight: item.heavy ? 900 : item.dim ? 200 : 200,
              color: item.accent ? '#f5d020' : item.dim ? '#5a5a62' : item.heavy ? '#ffffff' : '#8a8a92',
            }}
          >
            {item.text}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .will-change-transform { animation: none !important; }
        }
      `}</style>
    </div>
  );
}