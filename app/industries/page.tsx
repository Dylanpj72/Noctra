import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { LiquidMetalButton } from '@/components/LiquidMetalButton';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Industries We Serve · Noctra Web Design Agency',
  description:
    'Custom websites for law firms, healthcare practices, restaurants, real estate, construction, beauty, e-commerce, finance, professional services, and technology companies. Noctra builds high-converting websites for ambitious businesses across 10 industries.',
};

/* ── Shared SVG style ─────────────────────────── */
const S = 'rgba(255,255,255,0.26)';
const SW = '1';
const RC = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

const icons: Record<string, ReactNode> = {
  legal: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <line x1="20" y1="8" x2="20" y2="32" stroke={S} strokeWidth={SW} strokeLinecap="round" />
      <line x1="11" y1="8" x2="29" y2="8" stroke={S} strokeWidth={SW} strokeLinecap="round" />
      <line x1="11" y1="8" x2="11" y2="16" stroke={S} strokeWidth={SW} strokeLinecap="round" />
      <line x1="29" y1="8" x2="29" y2="16" stroke={S} strokeWidth={SW} strokeLinecap="round" />
      <path d="M 7 16 Q 11 23 15 16" stroke={S} strokeWidth={SW} {...RC} />
      <path d="M 25 16 Q 29 23 33 16" stroke={S} strokeWidth={SW} {...RC} />
      <line x1="15" y1="32" x2="25" y2="32" stroke={S} strokeWidth={SW} strokeLinecap="round" />
    </svg>
  ),
  healthcare: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="16" y="8"  width="8" height="24" rx="1.5" stroke={S} strokeWidth={SW} />
      <rect x="8"  y="16" width="24" height="8"  rx="1.5" stroke={S} strokeWidth={SW} />
    </svg>
  ),
  realestate: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <polyline points="7,21 20,9 33,21" stroke={S} strokeWidth={SW} {...RC} />
      <rect x="12" y="21" width="16" height="12" stroke={S} strokeWidth={SW} {...RC} />
      <rect x="17" y="25" width="6" height="8" stroke={S} strokeWidth={SW} />
    </svg>
  ),
  restaurant: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <line x1="14" y1="8" x2="14" y2="32" stroke={S} strokeWidth={SW} strokeLinecap="round" />
      <path d="M 10 8 L 10 17 Q 14 21 18 17 L 18 8" stroke={S} strokeWidth={SW} {...RC} />
      <line x1="26" y1="8" x2="26" y2="32" stroke={S} strokeWidth={SW} strokeLinecap="round" />
      <path d="M 26 8 Q 31 12 31 18 Q 31 22 26 22" stroke={S} strokeWidth={SW} {...RC} />
    </svg>
  ),
  finance: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <line x1="7" y1="32" x2="33" y2="32" stroke={S} strokeWidth={SW} strokeLinecap="round" />
      <rect x="9"  y="23" width="6" height="9"  stroke={S} strokeWidth={SW} />
      <rect x="17" y="17" width="6" height="15" stroke={S} strokeWidth={SW} />
      <rect x="25" y="11" width="6" height="21" stroke={S} strokeWidth={SW} />
    </svg>
  ),
  construction: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="8" y="22" width="24" height="10" rx="1" stroke={S} strokeWidth={SW} />
      <polyline points="14,22 14,16 26,16 26,22" stroke={S} strokeWidth={SW} {...RC} />
      <polyline points="18,16 18,12 22,12 22,16" stroke={S} strokeWidth={SW} {...RC} />
      <line x1="8" y1="27" x2="32" y2="27" stroke={S} strokeWidth={SW} />
    </svg>
  ),
  beauty: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <polygon points="20,8 31,19 20,34 9,19" stroke={S} strokeWidth={SW} {...RC} />
      <line x1="9" y1="19" x2="31" y2="19" stroke={S} strokeWidth={SW} />
      <line x1="14" y1="10" x2="9"  y2="19" stroke={S} strokeWidth={SW} strokeLinecap="round" />
      <line x1="26" y1="10" x2="31" y2="19" stroke={S} strokeWidth={SW} strokeLinecap="round" />
    </svg>
  ),
  ecommerce: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="9" y="16" width="22" height="16" rx="2" stroke={S} strokeWidth={SW} />
      <path d="M 15 16 L 15 13 Q 15 8 20 8 Q 25 8 25 13 L 25 16" stroke={S} strokeWidth={SW} {...RC} />
      <circle cx="15" cy="28" r="1.5" stroke={S} strokeWidth={SW} />
      <circle cx="25" cy="28" r="1.5" stroke={S} strokeWidth={SW} />
    </svg>
  ),
  professional: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="8" y="17" width="24" height="15" rx="2" stroke={S} strokeWidth={SW} />
      <path d="M 15 17 L 15 14 Q 15 11 20 11 Q 25 11 25 14 L 25 17" stroke={S} strokeWidth={SW} {...RC} />
      <line x1="8" y1="25" x2="32" y2="25" stroke={S} strokeWidth={SW} />
      <line x1="18" y1="22" x2="22" y2="22" stroke={S} strokeWidth={SW} strokeLinecap="round" />
      <line x1="20" y1="20" x2="20" y2="24" stroke={S} strokeWidth={SW} strokeLinecap="round" />
    </svg>
  ),
  technology: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <polyline points="16,12 8,20 16,28"  stroke={S} strokeWidth={SW} {...RC} />
      <polyline points="24,12 32,20 24,28" stroke={S} strokeWidth={SW} {...RC} />
      <line x1="22" y1="10" x2="18" y2="30" stroke={S} strokeWidth={SW} strokeLinecap="round" />
    </svg>
  ),
};

/* ── Data ─────────────────────────────────────── */
type Industry = {
  slug: string;
  num: string;
  title: string;
  tagline: string;
  icon: ReactNode;
  problem: string;
  body: string[];
};

const industries: Industry[] = [
  {
    slug: 'law-firms',
    num: 'IND / 01',
    title: 'Law Firms & Legal',
    tagline: 'Websites that earn trust before the first consultation.',
    icon: icons.legal,
    problem:
      "Most law firm websites are credential lists wrapped in a template. They look authoritative on the surface but feel cold, hard to navigate, and offer no clear path to contact.",
    body: [
      "People arrive at a law firm's website in a state of stress. They're looking for someone they can trust with a situation that matters. A generic template with stock photos of gavels doesn't make that first impression.",
      "We build law firm websites that communicate the right things: expertise without arrogance, accessibility without undermining authority, and a clear path to getting in touch. Mobile-first, fast-loading, and optimised for the specific searches your prospective clients are actually making.",
      "Whether you're a solo practice, a boutique firm, or a multi-specialty group, we design around how clients actually choose a lawyer — not around how agencies like to design lawyer websites.",
    ],
  },
  {
    slug: 'healthcare',
    num: 'IND / 02',
    title: 'Healthcare & Medical',
    tagline: 'Websites that make patients feel confident before they arrive.',
    icon: icons.healthcare,
    problem:
      "Healthcare websites often fail on the basics: confusing navigation, no clear answer to 'do you take my insurance?', and a booking process that sends patients to a PDF or a phone number that rings out.",
    body: [
      "Patients do their research before they book. They're looking at your website the way they'd look at a waiting room — and first impressions matter. A slow, cluttered, or outdated website loses patients before they've spoken to anyone.",
      "We build healthcare websites that answer the right questions upfront, make booking as frictionless as possible, and build the kind of trust that converts a Google search into an appointment. Clear service pages, accessible design, and mobile performance that works on every device.",
      "We work with GPs, specialists, allied health practices, and clinics across multiple disciplines. Each site is built to reflect the specific care you provide and the patients you're trying to reach.",
    ],
  },
  {
    slug: 'real-estate',
    num: 'IND / 03',
    title: 'Real Estate & Property',
    tagline: 'Stand out in a market where everyone looks the same.',
    icon: icons.realestate,
    problem:
      "Real estate is a saturated market where most agents rely on the same portals, the same templates, and the same headshots. Buyers and sellers can't tell one agent from another until they meet them — by which point the decision is often already made.",
    body: [
      "Your personal brand website is one of the few places you have full control over the impression you make. It's where you differentiate — through how you present your track record, your market expertise, and the experience of working with you.",
      "We build personal brand websites for real estate agents, boutique agencies, and property developers that go beyond the generic portal look. Real listings, real testimonials, real market data — presented in a way that makes the right clients want to work with you specifically.",
      "Whether you're a single agent building a profile or a developer marketing an off-plan project, we build the site around your specific competitive advantage.",
    ],
  },
  {
    slug: 'restaurants',
    num: 'IND / 04',
    title: 'Restaurants & Hospitality',
    tagline: 'Turn browsers into bookings before they find somewhere else.',
    icon: icons.restaurant,
    problem:
      "Restaurant websites lose reservations every day to slow loads, broken booking systems, PDFs of menus, and sites that weren't designed to work on a phone. Most were built once and never touched again.",
    body: [
      "When someone is deciding where to eat, they're browsing quickly and deciding fast. Your website has a few seconds to make them want to come in — and a broken booking button or a menu they can't read on mobile will send them somewhere else.",
      "We build restaurant and hospitality websites designed for that specific decision moment: fast, beautiful on mobile, with menus that are actually browsable, booking systems that work, and photography that makes the food and atmosphere look the way they actually are.",
      "We also integrate your Google Business Profile and local SEO setup as part of the build — because the best restaurant website in the world doesn't help if people can't find it when they're searching nearby.",
    ],
  },
  {
    slug: 'finance',
    num: 'IND / 05',
    title: 'Finance & Accounting',
    tagline: 'Modern financial websites that build confidence, not just credibility.',
    icon: icons.finance,
    problem:
      "Financial services websites are often stuck between two failure modes: overly conservative and dated, or trying to look modern in ways that feel disconnected from the trust signals clients are actually looking for.",
    body: [
      "Clients choose financial advisers, accountants, and mortgage brokers based on trust above almost everything else. Your website is where that trust starts. An outdated design doesn't just look bad — it actively undermines the confidence you're trying to build.",
      "We build financial services websites that communicate stability, expertise, and approachability — without looking like every other firm in your sector. Clear service breakdowns, strong calls to action, and a design that works as hard as you do.",
      "Whether you're an independent financial adviser, a boutique accounting firm, or a specialist mortgage broker, we build around what your clients actually need to know before they get in touch.",
    ],
  },
  {
    slug: 'construction',
    num: 'IND / 06',
    title: 'Construction & Trades',
    tagline: 'A professional online presence that wins jobs before the quote.',
    icon: icons.construction,
    problem:
      "Most trades businesses have no website, or one they built years ago that sits there doing nothing. In a market driven by referrals, the website is often the last thing considered — but it's the first thing a new customer checks.",
    body: [
      "When someone gets a referral for a builder, a plumber, or an electrician, the first thing they do is Google them. What they find in that moment can confirm the recommendation or kill it. A non-existent or outdated website loses work — quietly, constantly, invisibly.",
      "We build websites for builders, general contractors, specialty trades, and construction companies that showcase completed projects, generate enquiries, and rank in local search. Real project photos, clear service areas, and a simple path to getting a quote.",
      "We also handle local SEO and Google Business setup as part of every project — because for trades businesses, ranking locally is often more valuable than anything else.",
    ],
  },
  {
    slug: 'beauty-wellness',
    num: 'IND / 07',
    title: 'Beauty & Wellness',
    tagline: 'Booking-optimised websites that reflect the quality of your work.',
    icon: icons.beauty,
    problem:
      "Salons, spas, and wellness businesses often rely entirely on Instagram and word of mouth — and lose potential clients because there's no easy way to book, no clear service menu, and no professional online home base.",
    body: [
      "Your work is visual and personal. Your website should feel the same way. Not a generic template with stock photos of candles and stones, but a site that looks and feels like your specific studio, your specific aesthetic, and the experience your clients actually have.",
      "We build beauty and wellness websites designed for conversion: clear service menus, booking integration, before-and-after galleries where appropriate, and a brand aesthetic that attracts the clients you want.",
      "We work with salons, barbershops, spas, tattoo studios, aesthetic clinics, personal trainers, and wellness practitioners. Every site is tailored to the specific kind of client you're trying to attract.",
    ],
  },
  {
    slug: 'ecommerce',
    num: 'IND / 08',
    title: 'E-commerce & Retail',
    tagline: 'Stores that sell — not just display.',
    icon: icons.ecommerce,
    problem:
      "Generic e-commerce themes do the bare minimum. They display products, they process payments, and they look like every other online store. In a market where differentiation drives repeat purchase, the brand experience of your store is a competitive advantage most businesses ignore.",
    body: [
      "Customers don't just buy products. They buy from brands they trust, brands that feel right, and brands that make the purchasing experience feel premium enough to come back. A generic theme template sends none of those signals.",
      "We build custom e-commerce experiences for product businesses that want to stand out: custom visual design, product presentation that drives conversion, a checkout experience that removes friction, and post-purchase flows that drive repeat business.",
      "We work with independent product brands, fashion labels, artisan producers, and specialty retailers. Whether you're on Shopify, a headless stack, or a fully custom build, we design around your specific product and customer.",
    ],
  },
  {
    slug: 'professional-services',
    num: 'IND / 09',
    title: 'Professional Services',
    tagline: 'Positioning-first websites that attract the clients you actually want.',
    icon: icons.professional,
    problem:
      "Consultants, coaches, advisers, and agencies often have websites that are technically fine but fail to communicate what makes them different — or who they're actually for.",
    body: [
      "In professional services, the website's main job is positioning. Before a prospect gets on a call with you, they need to understand what you do, who you do it for, and why you're the right choice. Most professional services websites fail to answer any of those questions clearly.",
      "We build positioning-led websites for management consultants, executive coaches, creative agencies, PR firms, HR consultancies, and specialist advisers — sites that attract the right clients, repel the wrong ones, and make it easy to take the next step.",
      "Every project starts with your positioning. We get specific about your target client, your competitive differentiation, and the exact perception you're trying to create. The design and copy flow from that — not the other way around.",
    ],
  },
  {
    slug: 'technology',
    num: 'IND / 10',
    title: 'Technology & SaaS',
    tagline: 'Marketing sites that explain what you do and convert the people who need it.',
    icon: icons.technology,
    problem:
      "Even technically excellent products can fail to explain themselves clearly to buyers. Most SaaS marketing sites either talk to engineers when they should be talking to buyers, or oversimplify to the point of saying nothing at all.",
    body: [
      "The best product in the market loses to a competitor with a clearer website. Buyers need to understand what the product does, who it's for, and what happens if they sign up — in that order, in about thirty seconds. Most SaaS marketing sites fail that test.",
      "We build marketing sites for technology companies, SaaS products, and developer tools that communicate clearly to the buyers, drive trial signups or demo bookings, and reflect the quality of the product they're selling.",
      "We work with early-stage startups trying to nail their first marketing site, growth-stage companies redesigning for a new ICP, and technical founders who know their product better than anyone but need help making it legible to the people who will buy it.",
    ],
  },
];

/* ── Page ─────────────────────────────────────── */
export default function IndustriesPage() {
  return (
    <main className="bg-black min-h-screen">

      {/* Hero */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 pt-10">
          <Nav />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 pt-20 pb-24">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.3em] uppercase text-[#5a5a62] mb-8">
            INDUSTRIES
          </p>
          <h1
            className="font-[family-name:var(--font-inter)] font-[200] leading-[0.9] tracking-[-0.05em] uppercase text-white mb-8"
            style={{ fontSize: 'clamp(44px,7vw,108px)' }}
          >
            Built for the industries{' '}
            <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
              that drive
            </em>
            <br />
            <span className="font-[900]">the economy.</span>
          </h1>
          <p className="font-[family-name:var(--font-instrument-serif)] italic text-[18px] md:text-[22px] text-[#8a8a92] max-w-[680px] leading-relaxed">
            We don&apos;t build generic websites. We build commercial engines tuned to how your specific industry earns trust and converts clients. Ten industries. One standard of work.
          </p>
        </div>
      </section>

      {/* Industry grid */}
      <section
        aria-labelledby="industries-grid-heading"
        className="py-[100px] border-b border-white/[0.06] bg-black"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <h2 id="industries-grid-heading" className="sr-only">Industries we serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry) => (
              <a
                key={industry.slug}
                href={`#${industry.slug}`}
                className="group relative rounded-2xl border border-white/[0.08] p-6 flex flex-col gap-5 hover:border-white/[0.16] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-white"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                />
                <div className="flex justify-between items-start">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] tracking-[0.25em] text-[#f5d020] uppercase">
                    {industry.num}
                  </span>
                  <span className="opacity-50 group-hover:opacity-90 transition-opacity duration-300">
                    {industry.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-inter)] font-[700] text-[13px] tracking-[-0.01em] text-white mb-2 group-hover:text-[#f5d020] transition-colors duration-300 uppercase">
                    {industry.title}
                  </h3>
                  <p className="text-[12px] leading-[1.6] text-[#5a5a62]">
                    {industry.tagline}
                  </p>
                </div>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] uppercase text-[#5a5a62] group-hover:text-white transition-colors duration-300">
                  Read more →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Individual industry sections */}
      {industries.map((industry) => (
        <section
          key={industry.slug}
          id={industry.slug}
          aria-labelledby={`${industry.slug}-heading`}
          className="py-[100px] border-b border-white/[0.06] bg-black"
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-14">
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12">

              {/* Label column */}
              <div className="flex flex-col gap-5 pt-1">
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.25em] uppercase text-[#5a5a62]">
                  {industry.num}
                </p>
                <div aria-hidden="true" className="opacity-50">
                  {industry.icon}
                </div>
              </div>

              {/* Content column */}
              <div className="max-w-[720px]">
                <h2
                  id={`${industry.slug}-heading`}
                  className="font-[family-name:var(--font-inter)] font-[200] leading-[1.05] tracking-[-0.04em] uppercase text-white mb-4"
                  style={{ fontSize: 'clamp(28px,4vw,52px)' }}
                >
                  {industry.title}
                </h2>
                <p className="font-[family-name:var(--font-instrument-serif)] italic text-[17px] md:text-[19px] text-[#8a8a92] mb-8 leading-relaxed">
                  {industry.tagline}
                </p>
                <div className="space-y-5 text-[15px] leading-[1.75] text-[#8a8a92] mb-10">
                  <p className="text-white/80">{industry.problem}</p>
                  {industry.body.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
                <LiquidMetalButton label="Start a project →" href="/contact" width={168} />
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="py-[120px] bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 text-center">
          <h2
            className="font-[family-name:var(--font-inter)] font-[200] leading-[0.9] tracking-[-0.05em] uppercase text-white mb-6"
            style={{ fontSize: 'clamp(36px,5vw,80px)' }}
          >
            Don&apos;t see your{' '}
            <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
              industry?
            </em>
          </h2>
          <p className="font-[family-name:var(--font-instrument-serif)] italic text-[17px] md:text-[20px] text-[#8a8a92] max-w-[520px] mx-auto leading-relaxed mb-10">
            We work with businesses of all kinds. If your industry isn&apos;t listed here, chances are we&apos;ve built something similar before. Get in touch and let&apos;s talk.
          </p>
          <LiquidMetalButton label="Book your call →" href="/contact" width={152} />
        </div>
      </section>

      <Footer />
    </main>
  );
}