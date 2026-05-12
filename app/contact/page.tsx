import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact · Ardaic',
  description: 'Start a project with Ardaic. Tell us what you\'re building and we\'ll be in touch within 24 hours.',
};

const details = [
  {
    label: 'Email',
    value: 'hello@ardaic.studio',
    href: 'mailto:hello@ardaic.studio',
  },
  {
    label: 'Location',
    value: 'Cape Town, ZA · working globally',
    href: null,
  },
  {
    label: 'Response time',
    value: 'Within 24 hours',
    href: null,
  },
];

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 pt-10">
        <Nav />
      </div>

      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-14 pt-20 pb-16 border-b border-white/[0.06]">
        <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.3em] uppercase text-[#5a5a62] mb-8">
          START A PROJECT
        </p>
        <h1
          className="font-[family-name:var(--font-inter)] font-[200] leading-[0.9] tracking-[-0.05em] uppercase text-white"
          style={{ fontSize: 'clamp(52px,8vw,120px)' }}
        >
          Let&apos;s{' '}
          <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
            build
          </em>
          <br />
          <span className="font-[900]">together.</span>
        </h1>
      </section>

      {/* Content */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-14 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">

          {/* Left - info */}
          <div className="flex flex-col gap-12">
            <div>
              <p className="font-[family-name:var(--font-instrument-serif)] italic text-[18px] md:text-[20px] text-[#8a8a92] leading-relaxed max-w-[380px]">
                Tell us what you&apos;re building. We&apos;ll respond within 24 hours with a plan of attack.
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-6">
              {details.map(({ label, value, href }) => (
                <div key={label}>
                  <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.25em] uppercase text-[#5a5a62] mb-1">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-[15px] text-white hover:text-[#f5d020] transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-[15px] text-[#8a8a92]">{value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* What to expect */}
            <div
              className="rounded-2xl border border-white/[0.08] p-6"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.25em] uppercase text-[#5a5a62] mb-4">
                What happens next
              </p>
              <ol className="flex flex-col gap-3">
                {[
                  'We review your brief within 24 hours',
                  'Discovery call to align on scope and goals',
                  'Proposal and timeline delivered within 3 days',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#5a5a62] mt-0.5 flex-shrink-0">
                      0{i + 1}
                    </span>
                    <span className="text-[13px] text-[#8a8a92] leading-snug">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right - form */}
          <div
            className="rounded-[28px] border border-white/[0.08] p-8 md:p-10"
            style={{
              background: 'rgba(255,255,255,0.02)',
              backdropFilter: 'blur(24px)',
            }}
          >
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.25em] uppercase text-[#5a5a62] mb-8">
              Send a message
            </p>
            <ContactForm />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}