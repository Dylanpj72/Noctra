import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { LiquidMetalButton } from '@/components/LiquidMetalButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Growth Audits · Noctra',
  description: 'A complete audit of your website, SEO, and Google presence. We diagnose what\'s leaking and show you the path to measurable growth within 30 days.',
};

const audits = [
  {
    num: '01',
    title: 'Website performance',
    desc: 'Load speed, Core Web Vitals, mobile responsiveness, accessibility, broken links, and technical issues affecting how Google sees your site.',
  },
  {
    num: '02',
    title: 'SEO and search visibility',
    desc: 'Keyword rankings, on-page SEO, meta data, schema markup, internal linking, and content gaps. We benchmark you against your top three competitors and show you exactly where you\'re losing.',
  },
  {
    num: '03',
    title: 'Google Business Profile',
    desc: 'The single most important asset for local businesses. We audit your profile setup, categories, photos, reviews, posts, and Q&A, and flag what\'s hurting your local rankings.',
  },
  {
    num: '04',
    title: 'Conversion architecture',
    desc: 'What happens when someone lands on your site? We track real user paths, identify drop-off points, and assess your CTAs, forms, and lead capture. Most sites lose 60 to 80% of potential leads through fixable conversion issues.',
  },
  {
    num: '05',
    title: 'Content and messaging',
    desc: 'Is your site actually speaking to the customer you want? We review your copy, value proposition, and content strategy against the buyers you\'re trying to reach.',
  },
  {
    num: '06',
    title: 'Online reputation',
    desc: 'Reviews across Google, industry directories, and social proof. We benchmark your visibility and reputation against direct competitors and identify where you\'re being beaten.',
  },
];

const paths = [
  {
    num: 'Path 01',
    title: 'We implement',
    desc: 'You hand the work to us. We rebuild the parts of your site that aren\'t performing, fix the SEO and Google Business issues, and set up tracking so you can measure the lift. Most clients see meaningful conversion gains within 30 days of implementation.',
  },
  {
    num: 'Path 02',
    title: 'You implement',
    desc: 'You take the report and work with your existing team or developer. We\'re available for follow-up questions and a check-in call after 60 days, but the audit is yours to execute as you choose. No lock-in, no pressure.',
  },
];

export default function GrowthAuditsPage() {
  return (
    <main className="bg-black min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 pt-10">
        <Nav />
      </div>

      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-14 pt-20 pb-24 border-b border-white/[0.06]">
        <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.3em] uppercase text-[#5a5a62] mb-8">
          SVC / 03
        </p>
        <h1
          className="font-[family-name:var(--font-inter)] font-[200] leading-[0.9] tracking-[-0.05em] uppercase text-white mb-8"
          style={{ fontSize: 'clamp(44px,7vw,108px)' }}
        >
          Find out exactly why your site{' '}
          <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
            isn&apos;t converting.
          </em>
        </h1>
        <p className="font-[family-name:var(--font-instrument-serif)] italic text-[18px] md:text-[22px] text-[#8a8a92] max-w-[680px] leading-relaxed mb-10">
          A complete audit of your website, SEO, and Google presence. We diagnose what&apos;s leaking, prioritise the fixes, and show you the path to measurable growth, typically within 30 days.
        </p>
        <LiquidMetalButton label="Book your audit →" href="/contact" width={160} />
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
                You have traffic. You have a site.{' '}
                <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
                  You&apos;re not getting calls.
                </em>
              </h2>
              <div className="space-y-5 text-[15px] leading-[1.75] text-[#8a8a92]">
                <p>
                  Most businesses don&apos;t have a &quot;website problem.&quot; They have a system problem. The website is fine, but it&apos;s competing against an outdated SEO setup, a neglected Google Business Profile, slow load times, weak conversion paths, or all of the above.
                </p>
                <p>
                  Without a complete diagnostic, you&apos;re guessing. You change a headline, you tweak a button, you wait three weeks, and nothing moves. Meanwhile your competitors, often with worse work and worse reviews, are taking the customers that should be yours.
                </p>
                <p>
                  A Growth Audit ends the guessing. We go through every part of your digital presence, find what&apos;s actually broken, and tell you exactly what to do next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we audit */}
      <section className="py-[100px] border-b border-white/[0.06] bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="mb-16 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 items-end">
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.25em] uppercase text-[#5a5a62]">
              What We Audit
            </p>
            <div className="max-w-[720px]">
              <h2
                className="font-[family-name:var(--font-inter)] font-[200] leading-[1.05] tracking-[-0.04em] uppercase text-white mb-4"
                style={{ fontSize: 'clamp(28px,4vw,52px)' }}
              >
                Every channel that{' '}
                <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
                  touches your customers.
                </em>
              </h2>
              <p className="text-[15px] leading-[1.75] text-[#8a8a92]">
                A complete audit covers six areas. Each one is scored, prioritised, and translated into clear next actions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {audits.map((item) => (
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

      {/* The deliverable */}
      <section className="py-[100px] border-b border-white/[0.06] bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12">
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.25em] uppercase text-[#5a5a62]">
              The Deliverable
            </p>
            <div className="max-w-[720px]">
              <h2
                className="font-[family-name:var(--font-inter)] font-[200] leading-[1.05] tracking-[-0.04em] uppercase text-white mb-8"
                style={{ fontSize: 'clamp(28px,4vw,52px)' }}
              >
                A clear, prioritised plan, not a{' '}
                <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
                  60-page report no one reads.
                </em>
              </h2>
              <div className="space-y-5 text-[15px] leading-[1.75] text-[#8a8a92]">
                <p>
                  Most audits are designed to look thorough. Ours are designed to be acted on.
                </p>
                <p>
                  You receive a focused written report covering each area we audited, scored on impact and effort. Every issue comes with a specific recommendation: not &quot;improve your SEO&quot; but &quot;rewrite the meta description on these five pages, add schema markup to your services pages, and fix the H1 on your homepage.&quot;
                </p>
                <p>
                  We follow it up with a 45-minute call to walk you through the findings, answer questions, and agree on which fixes to prioritise. By the end of the call, you have a clear roadmap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-[100px] border-b border-white/[0.06] bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="mb-16 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 items-end">
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.25em] uppercase text-[#5a5a62]">
              After the Audit
            </p>
            <div className="max-w-[720px]">
              <h2
                className="font-[family-name:var(--font-inter)] font-[200] leading-[1.05] tracking-[-0.04em] uppercase text-white mb-4"
                style={{ fontSize: 'clamp(28px,4vw,52px)' }}
              >
                Two paths{' '}
                <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
                  forward.
                </em>
              </h2>
              <p className="text-[15px] leading-[1.75] text-[#8a8a92]">
                Once you&apos;ve seen the audit, you choose how to proceed.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {paths.map((path) => (
              <div
                key={path.num}
                className="flex gap-6 rounded-2xl border border-white/[0.08] p-7 md:p-8"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] uppercase text-[#f5d020] flex-shrink-0 mt-1">
                  {path.num}
                </p>
                <div>
                  <h3 className="font-[family-name:var(--font-inter)] font-[700] text-[17px] tracking-[-0.02em] text-white mb-2">
                    {path.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7] text-[#8a8a92]">{path.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-[100px] border-b border-white/[0.06] bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12">
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.25em] uppercase text-[#5a5a62]">
              Who It&apos;s For
            </p>
            <div className="max-w-[720px]">
              <h2
                className="font-[family-name:var(--font-inter)] font-[200] leading-[1.05] tracking-[-0.04em] uppercase text-white mb-8"
                style={{ fontSize: 'clamp(28px,4vw,52px)' }}
              >
                Businesses that already have a site, but suspect it could be{' '}
                <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
                  doing more.
                </em>
              </h2>
              <div className="space-y-5 text-[15px] leading-[1.75] text-[#8a8a92]">
                <p>
                  Growth Audits are for established businesses with existing websites and existing customer flow. If you&apos;re getting some traffic but not enough calls, ranking for some keywords but not the ones that matter, or watching competitors outrank you despite worse work, this is for you.
                </p>
                <p>
                  If you don&apos;t have a website yet, you don&apos;t need an audit. You need our{' '}
                  <a href="/services/web-design" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors duration-200">
                    Web Design service
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
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
                A flat fee.{' '}
                <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
                  No surprises.
                </em>
              </h2>
              <p className="text-[15px] leading-[1.75] text-[#8a8a92] mb-8">
                Growth Audits are priced as a one-time engagement, with the option to apply the fee toward future work if you decide to engage us for implementation. Scope a quote on our discovery call.
              </p>
              <LiquidMetalButton label="Book a discovery call →" href="/contact" width={206} />
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
            Stop guessing. Find out what&apos;s{' '}
            <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
              actually wrong.
            </em>
          </h2>
          <p className="font-[family-name:var(--font-instrument-serif)] italic text-[17px] md:text-[20px] text-[#8a8a92] max-w-[520px] mx-auto leading-relaxed mb-10">
            Book a 15-minute discovery call. We&apos;ll learn about your business, scope the audit, and send a quote within 24 hours.
          </p>
          <LiquidMetalButton label="Book your call →" href="/contact" width={152} />
        </div>
      </section>

      <Footer />
    </main>
  );
}