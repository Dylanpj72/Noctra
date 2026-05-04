import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { LiquidMetalButton } from '@/components/LiquidMetalButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brand Systems · Noctra',
  description: 'Logo, type, color, voice, and motion built as a complete working system. Designed to scale from your business card to a billboard.',
};

const included = [
  {
    num: '01',
    title: 'Logo and marks',
    desc: 'Primary logo, secondary marks, monogram, favicon. Designed in vector and tested across every realistic application, from a 16-pixel browser tab to a printed banner.',
  },
  {
    num: '02',
    title: 'Typography system',
    desc: 'Typeface pairings, hierarchy, weights, sizing scales. Defined for digital and print, with clear rules for headers, body, captions, and accents.',
  },
  {
    num: '03',
    title: 'Color system',
    desc: 'Primary, secondary, and accent palettes with exact values for screen, print, and web. Light and dark variants. Accessibility-tested for contrast.',
  },
  {
    num: '04',
    title: 'Voice and tone',
    desc: 'How your brand sounds. Defined principles for how you write, with examples for emails, social, and customer communication.',
  },
  {
    num: '05',
    title: 'Motion and interaction',
    desc: 'We define how your brand moves: easing curves, transition timing, hover states, and loading patterns. The micro-details that make a brand feel modern.',
  },
  {
    num: '06',
    title: 'Brand guidelines document',
    desc: 'A complete reference covering every component, every usage rule, and every example. Designed so anyone, your team, a freelancer, a printer, can use the brand correctly without asking you.',
  },
];

const steps = [
  {
    num: 'Phase 01',
    title: 'Brand discovery',
    desc: 'We dig into your business, your customers, your competitors, and your ambitions. The output is a written brand strategy document that informs every design decision.',
  },
  {
    num: 'Phase 02',
    title: 'Direction',
    desc: 'Two or three distinct creative directions, each presented with rationale and real-world applications. You pick the direction that fits. We don\'t average them into something safe.',
  },
  {
    num: 'Phase 03',
    title: 'System build',
    desc: 'The chosen direction becomes a full system. Every component, every variation, every guideline, designed and documented.',
  },
  {
    num: 'Phase 04',
    title: 'Rollout',
    desc: 'Final files, organized for use. Brand guidelines document. Templates for the most common applications. A handover call to make sure your team knows how to use everything.',
  },
];

export default function BrandSystemsPage() {
  return (
    <main className="bg-black min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 pt-10">
        <Nav />
      </div>

      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-14 pt-20 pb-24 border-b border-white/[0.06]">
        <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.3em] uppercase text-[#5a5a62] mb-8">
          SVC / 02
        </p>
        <h1
          className="font-[family-name:var(--font-inter)] font-[200] leading-[0.9] tracking-[-0.05em] uppercase text-white mb-8"
          style={{ fontSize: 'clamp(44px,7vw,108px)' }}
        >
          Brand systems built{' '}
          <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
            to scale.
          </em>
        </h1>
        <p className="font-[family-name:var(--font-instrument-serif)] italic text-[18px] md:text-[22px] text-[#8a8a92] max-w-[680px] leading-relaxed mb-10">
          Logo, type, color, voice, and motion, engineered to work as a complete system. Designed to hold up everywhere your brand has to show up, from your inbox to a billboard.
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
                Most brands fall apart the moment they leave{' '}
                <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
                  the moodboard.
                </em>
              </h2>
              <div className="space-y-5 text-[15px] leading-[1.75] text-[#8a8a92]">
                <p>
                  You hire a designer, get a logo, maybe a color palette, maybe a font. It looks great in the deck. Then the real work starts, and the brand can&apos;t keep up.
                </p>
                <p>
                  Suddenly you need an Instagram template. A pitch deck. A vehicle wrap. An email signature. A business card. And nothing matches. Each new touchpoint becomes a small crisis: &quot;what&apos;s our exact blue again?&quot; &quot;Can we use this font here?&quot; &quot;Why does our website feel different from our packaging?&quot;
                </p>
                <p>
                  A brand isn&apos;t a logo. It&apos;s a system. And if it isn&apos;t designed as one from the start, you&apos;ll spend the next five years fighting inconsistency.
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
                Every component your brand{' '}
                <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
                  will ever need.
                </em>
              </h2>
              <p className="text-[15px] leading-[1.75] text-[#8a8a92]">
                A Noctra brand system is a complete, documented framework that scales with you. Built once, used forever.
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
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] uppercase text-[#5a5a62] mb-4">
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
                Brands ready to stop{' '}
                <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
                  improvising.
                </em>
              </h2>
              <div className="space-y-5 text-[15px] leading-[1.75] text-[#8a8a92]">
                <p>
                  Brand systems make sense when your business has outgrown its original identity. You&apos;re getting more attention, more touchpoints, more places where the brand has to show up, and the gaps are starting to show.
                </p>
                <p>
                  We work with founders relaunching their company, established businesses repositioning for growth, and new ventures that want to start with the right foundation. If you&apos;re spending hours in Canva trying to remember which font you used last time, you&apos;ve outgrown your current setup.
                </p>
              </div>
            </div>
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
            <h2
              className="font-[family-name:var(--font-inter)] font-[200] leading-[1.05] tracking-[-0.04em] uppercase text-white"
              style={{ fontSize: 'clamp(28px,4vw,52px)' }}
            >
              Four phases. Built right{' '}
              <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
                the first time.
              </em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex gap-6 rounded-2xl border border-white/[0.08] p-7 md:p-8"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] uppercase text-[#5a5a62] flex-shrink-0 mt-1">
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

      {/* Pricing note */}
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
                Brand projects are quoted{' '}
                <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
                  individually.
                </em>
              </h2>
              <p className="text-[15px] leading-[1.75] text-[#8a8a92] mb-8">
                Every brand system is scoped to your specific needs. We&apos;ll discuss your situation on a discovery call and send a detailed proposal within 48 hours.
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
            Ready to build a brand{' '}
            <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
              that lasts?
            </em>
          </h2>
          <p className="font-[family-name:var(--font-instrument-serif)] italic text-[17px] md:text-[20px] text-[#8a8a92] max-w-[520px] mx-auto leading-relaxed mb-10">
            A 15-minute call is the fastest way to find out if we&apos;re a fit. No prep needed, just bring your situation and your questions.
          </p>
          <LiquidMetalButton label="Book your call →" href="/contact" width={152} />
        </div>
      </section>

      <Footer />
    </main>
  );
}