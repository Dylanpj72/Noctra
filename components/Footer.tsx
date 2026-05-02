const studioLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#' },
  { label: 'Journal', href: '#' },
];

const serviceLinks = [
  { label: 'Web Design', href: '#services' },
  { label: 'Brand Systems', href: '#services' },
  { label: 'Growth Audits', href: '#services' },
  { label: 'Retainer', href: '#pricing' },
];

const contactLinks = [
  { label: 'hello@noctra.studio', href: 'mailto:hello@noctra.studio' },
  { label: '@noctra', href: '#' },
  { label: 'LinkedIn ↗', href: '#' },
  { label: 'Read.cv ↗', href: '#' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black isolate">
      {/* End mark */}
      <div
        className="text-center overflow-hidden pt-16 pb-0 select-none"
        aria-hidden="true"
      >
        <div
          className="font-[family-name:var(--font-inter)] font-[900] leading-[0.8] tracking-[-0.07em] text-transparent uppercase"
          style={{
            fontSize: 'clamp(100px,20vw,380px)',
            WebkitTextStroke: '1px rgba(255,255,255,0.07)',
            marginBottom: '-0.12em',
          }}
        >
          NOCTRA
        </div>
      </div>

      {/* Footer grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-12 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div
              className="font-[family-name:var(--font-inter)] leading-[1] tracking-[-0.04em] mb-4 text-white"
              style={{ fontSize: '28px' }}
            >
              <span className="font-[900]">NOC</span>
              <span className="font-[200]">TRA</span>
            </div>
            <p className="font-[family-name:var(--font-instrument-serif)] italic text-[15px] text-[#8a8a92] max-w-[300px] leading-relaxed">
              Websites that command the room. From the Latin{' '}
              <em>noctis</em>, the work happens after dark.
            </p>
            <p className="mt-4 font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.15em] uppercase text-[#5a5a62]">
              Cape Town, ZA · Working globally
            </p>
          </div>

          {/* Studio */}
          <nav aria-label="Studio pages">
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.25em] uppercase text-[#5a5a62] mb-5">
              Studio
            </p>
            <ul className="space-y-3">
              {studioLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-[#8a8a92] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.25em] uppercase text-[#5a5a62] mb-5">
              Services
            </p>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-[#8a8a92] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <nav aria-label="Contact information">
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.25em] uppercase text-[#5a5a62] mb-5">
              Contact
            </p>
            <ul className="space-y-3">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-[#8a8a92] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between gap-4">
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] uppercase text-[#5a5a62]">
            © 2026 Noctra Studio
          </span>
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] uppercase text-[#5a5a62]">
            Built in the dark
          </span>
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] uppercase text-[#5a5a62]">
            v1.0 · 04.27.26
          </span>
        </div>
      </div>
    </footer>
  );
}