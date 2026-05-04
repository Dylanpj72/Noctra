import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { LiquidMetalButton } from '@/components/LiquidMetalButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design · Noctra',
  description: 'Custom websites built to convert. Strategy, design, and development under one roof. From first conversation to live site in 2 to 6 weeks.',
};

const included = [
  {
    num: '01',
    title: 'Strategy and scoping',
    desc: 'A working session to define what your site needs to achieve. Who it\'s for, what it should do, and how we\'ll measure whether it worked.',
  },
  {
    num: '02',
    title: 'Custom design',
    desc: 'No templates, no themes. Every site is designed from scratch around your brand, your audience, and your conversion goals.',
  },
  {
    num: '03',
    title: 'Development and motion',
    desc: 'Hand-built, fast-loading, and responsive. Considered animations and interactions that elevate the experience without slowing it down.',
  },
  {
    num: '04',
    title: 'Conversion architecture',
    desc: 'Every page is structured around a clear action. Forms, CTAs, and lead capture engineered to turn visitors into enquiries.',
  },
  {
    num: '05',
    title: 'Hosting, security, and maintenance',
    desc: 'Premium hosting, SSL, daily backups, and security monitoring, all included. We handle the infrastructure so you don\'t have to.',
  },
  {
    num: '06',
    title: 'Launch and beyond',
    desc: 'A managed handover, post-launch support, and ongoing improvements. Your site stays current, secure, and performing.',
  },
];

const steps = [
  {
    num: 'Step 01',
    title: 'Discover',
    desc: 'A 30-minute call to understand your business, your customers, and what you need the site to do. By the end, we both know whether we\'re a fit.',
  },
  {
    num: 'Step 02',
    title: 'Design',
    desc: 'First drafts within the first week. You review, we revise, we iterate until it\'s right. No "presentation reveals", just a working document we shape together.',
  },
  {
    num: 'Step 03',
    title: 'Build',
    desc: 'Designs go from Figma to live development. You see progress as it happens. Real environment, real interactions, real preview links.',
  },
  {
    num: 'Step 04',
    title: 'Launch',
    desc: 'We handle the technical lift: domain, hosting, deployment, testing. Your site goes live, and we\'re already monitoring performance from day one.',
  },
];

export default function WebDesignPage() {
  return (
    <main className="bg-black min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 pt-10">
        <Nav />
      </div>

      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-14 pt-20 pb-24 border-b border-white/[0.06]">
        <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.3em] uppercase text-[#5a5a62] mb-8">
          SVC / 01
        </p>
        <h1
          className="font-[family-name:var(--font-inter)] font-[200] leading-[0.9] tracking-[-0.05em] uppercase text-white mb-8"
          style={{ fontSize: 'clamp(44px,7vw,108px)' }}
        >
          Websites built to{' '}
          <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
            convert,
          </em>
          <br />
          <span className="font-[900]">not just impress.</span>
        </h1>
        <p className="font-[family-name:var(--font-instrument-serif)] italic text-[18px] md:text-[22px] text-[#8a8a92] max-w-[680px] leading-relaxed mb-10">
          We design and develop custom websites for service businesses, professionals, and brands that need to look as serious as the work they do. From first conversation to live site in 2 to 6 weeks.
        </p>
        <LiquidMetalButton label="Start a project →" href="/contact" width={168} />
      </section>

      {/* The Problem */}
      <section className="py-[100px] border-b border-white/[0.06] bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12">
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.25em] uppercase text-[#5a5a62]">
              The Problem
            </p>
            <div className="max-w-[720px]">
              <h2
                className="font-[family-name:var(--font-inter)] font-[200] leading-[1.05] tracking-[-0.04em] uppercase text-white mb-10"
                style={{ fontSize: 'clamp(28px,4vw,52px)' }}
              >
                Most websites are built for the agency&apos;s portfolio,{' '}
                <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
                  not the client&apos;s pipeline.
                </em>
              </h2>
              <div className="space-y-5 text-[15px] leading-[1.75] text-[#8a8a92]">
                <p>
                  You&apos;ve seen it before. A pretty site, a few weeks of back-and-forth, a launch, and then nothing. No calls. No bookings. No measurable lift. The site was beautiful but it didn&apos;t work.
                </p>
                <p>
                  The problem isn&apos;t usually design. It&apos;s that most agencies treat websites as visual exercises rather than commercial ones. Strategy gets skipped, conversion gets ignored, and the live site becomes a digital business card instead of a sales engine.
                </p>
                <p>
                  We do it differently. Every site we build starts with one question: what would this site need to do for your business to consider it a success? Everything after that flows from the answer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-[100px] border-b border-white/[0.06] bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="mb-16 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 items-end">
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.25em] uppercase text-[#5a5a62]">
              What&apos;s Included
            </p>
            <div className="max-w-[720px]">
              <h2
                className="font-[family-name:var(--font-inter)] font-[200] leading-[1.05] tracking-[-0.04em] uppercase text-white mb-4"
                style={{ fontSize: 'clamp(28px,4vw,52px)' }}
              >
                A full{' '}
                <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
                  system,
                </em>{' '}
                not a set of pages.
              </h2>
              <p className="text-[15px] leading-[1.75] text-[#8a8a92]">
                Every Noctra website includes the strategy, design, development, and infrastructure to launch fast and perform from day one.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {included.map((item) => (
              <div
                key={item.num}
                className="relative rounded-2xl border border-white/[0.08] p-7 md:p-8"
                style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(24px)' }}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] uppercase text-[#f5d020] mb-4">
                  {item.num}
                </p>
                <h3 className="font-[family-name:var(--font-inter)] font-[700] text-[17px] tracking-[-0.02em] text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[1.65] text-[#8a8a92]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-[100px] border-b border-white/[0.06] bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="mb-16 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 items-end">
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.25em] uppercase text-[#5a5a62]">
              How It Works
            </p>
            <div className="max-w-[720px]">
              <h2
                className="font-[family-name:var(--font-inter)] font-[200] leading-[1.05] tracking-[-0.04em] uppercase text-white mb-4"
                style={{ fontSize: 'clamp(28px,4vw,52px)' }}
              >
                Four steps.{' '}
                <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
                  Two to six weeks.
                </em>{' '}
                One launched site.
              </h2>
              <p className="text-[15px] leading-[1.75] text-[#8a8a92]">
                We&apos;ve stripped agency process down to what actually matters. No bloated timelines, no surprise revisions, no design-by-committee.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex gap-6 rounded-2xl border border-white/[0.08] p-7 md:p-8"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] uppercase text-[#f5d020] flex-shrink-0 mt-1">
                  {step.num}
                </p>
                <div>
                  <h3 className="font-[family-name:var(--font-inter)] font-[700] text-[17px] tracking-[-0.02em] text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7] text-[#8a8a92]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-[100px] border-b border-white/[0.06] bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12">
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.25em] uppercase text-[#5a5a62]">
              Pricing
            </p>
            <div className="max-w-[600px]">
              <h2
                className="font-[family-name:var(--font-inter)] font-[200] leading-[1.05] tracking-[-0.04em] uppercase text-white mb-5"
                style={{ fontSize: 'clamp(28px,4vw,52px)' }}
              >
                Three plans.{' '}
                <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
                  No upfront cost.
                </em>
              </h2>
              <p className="text-[15px] leading-[1.75] text-[#8a8a92] mb-8">
                All Noctra websites are built, hosted, and managed for one monthly fee. After your initial 24-month plan, your fee drops to maintenance-only. Simple, transparent, no surprises.
              </p>
              <LiquidMetalButton label="See full pricing →" href="/pricing" width={168} />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-[120px] bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 text-center">
          <h2
            className="font-[family-name:var(--font-inter)] font-[200] leading-[0.9] tracking-[-0.05em] uppercase text-white mb-6"
            style={{ fontSize: 'clamp(36px,5vw,80px)' }}
          >
            Ready to build a site that{' '}
            <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
              actually works?
            </em>
          </h2>
          <p className="font-[family-name:var(--font-instrument-serif)] italic text-[17px] md:text-[20px] text-[#8a8a92] max-w-[560px] mx-auto leading-relaxed mb-10">
            Book a free 15-minute call. We&apos;ll tell you honestly whether we&apos;re a fit, and if we&apos;re not, we&apos;ll point you to someone who is.
          </p>
          <LiquidMetalButton label="Start a project →" href="/contact" width={168} />
        </div>
      </section>

      <Footer />
    </main>
  );
}