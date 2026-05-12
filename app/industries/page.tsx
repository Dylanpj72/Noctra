import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { LiquidMetalButton } from '@/components/LiquidMetalButton';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Industries We Serve · Ardaic Web Design Agency',
  description:
    'Custom websites for tradespeople, home services, legal and financial professionals, healthcare practitioners, beauty businesses, events and wedding suppliers, restaurants, real estate, e-commerce, and technology companies. Ardaic builds high-converting websites for ambitious local and online businesses.',
};

/* ── Shared SVG style ─────────────────────────── */
const S  = 'rgba(255,255,255,0.26)';
const SW = '1';
const RC = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

const icons: Record<string, ReactNode> = {
  /* Wrench + spanner - Home Trades */
  trades: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M 28 9 Q 34 9 34 15 Q 34 21 28 21 L 13 34 Q 10 34 10 31 L 23 18 Q 23 9 28 9 Z" stroke={S} strokeWidth={SW} {...RC} />
      <line x1="23" y1="17" x2="29" y2="13" stroke={S} strokeWidth={SW} strokeLinecap="round" />
    </svg>
  ),
  /* Mobile van - Home & Mobile Services */
  mobile: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="5" y="19" width="26" height="11" rx="1.5" stroke={S} strokeWidth={SW} />
      <path d="M 5 19 L 5 14 Q 5 11 8 11 L 18 11 L 18 19" stroke={S} strokeWidth={SW} {...RC} />
      <rect x="7" y="13" width="7" height="6" rx="1" stroke={S} strokeWidth={SW} />
      <circle cx="10" cy="30" r="2.5" stroke={S} strokeWidth={SW} />
      <circle cx="24" cy="30" r="2.5" stroke={S} strokeWidth={SW} />
      <line x1="22" y1="24" x2="28" y2="24" stroke={S} strokeWidth={SW} strokeLinecap="round" />
    </svg>
  ),
  /* Scales - Legal & Financial */
  legal: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <line x1="20" y1="8"  x2="20" y2="32" stroke={S} strokeWidth={SW} strokeLinecap="round" />
      <line x1="11" y1="8"  x2="29" y2="8"  stroke={S} strokeWidth={SW} strokeLinecap="round" />
      <line x1="11" y1="8"  x2="11" y2="16" stroke={S} strokeWidth={SW} strokeLinecap="round" />
      <line x1="29" y1="8"  x2="29" y2="16" stroke={S} strokeWidth={SW} strokeLinecap="round" />
      <path d="M 7 16 Q 11 23 15 16"  stroke={S} strokeWidth={SW} {...RC} />
      <path d="M 25 16 Q 29 23 33 16" stroke={S} strokeWidth={SW} {...RC} />
      <line x1="15" y1="32" x2="25" y2="32" stroke={S} strokeWidth={SW} strokeLinecap="round" />
    </svg>
  ),
  /* Cross - Health & Wellness */
  health: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="16" y="8"  width="8" height="24" rx="1.5" stroke={S} strokeWidth={SW} />
      <rect x="8"  y="16" width="24" height="8"  rx="1.5" stroke={S} strokeWidth={SW} />
    </svg>
  ),
  /* Diamond - Beauty & Personal Care */
  beauty: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <polygon points="20,8 31,19 20,34 9,19" stroke={S} strokeWidth={SW} {...RC} />
      <line x1="9"  y1="19" x2="31" y2="19" stroke={S} strokeWidth={SW} />
      <line x1="14" y1="10" x2="9"  y2="19" stroke={S} strokeWidth={SW} strokeLinecap="round" />
      <line x1="26" y1="10" x2="31" y2="19" stroke={S} strokeWidth={SW} strokeLinecap="round" />
    </svg>
  ),
  /* Camera - Events & Celebrations */
  events: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6"  y="14" width="28" height="18" rx="2" stroke={S} strokeWidth={SW} />
      <circle cx="20" cy="23" r="6" stroke={S} strokeWidth={SW} />
      <circle cx="20" cy="23" r="2.5" stroke={S} strokeWidth={SW} />
      <path d="M 14 14 L 16 9 H 24 L 26 14" stroke={S} strokeWidth={SW} {...RC} />
      <circle cx="29" cy="18" r="1.5" fill={S} />
    </svg>
  ),
  /* Fork + knife - Restaurants */
  restaurant: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <line x1="14" y1="8"  x2="14" y2="32" stroke={S} strokeWidth={SW} strokeLinecap="round" />
      <path d="M 10 8 L 10 17 Q 14 21 18 17 L 18 8" stroke={S} strokeWidth={SW} {...RC} />
      <line x1="26" y1="8"  x2="26" y2="32" stroke={S} strokeWidth={SW} strokeLinecap="round" />
      <path d="M 26 8 Q 31 12 31 18 Q 31 22 26 22" stroke={S} strokeWidth={SW} {...RC} />
    </svg>
  ),
  /* House - Real Estate */
  realestate: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <polyline points="7,21 20,9 33,21" stroke={S} strokeWidth={SW} {...RC} />
      <rect x="12" y="21" width="16" height="12" stroke={S} strokeWidth={SW} {...RC} />
      <rect x="17" y="25" width="6"  height="8"  stroke={S} strokeWidth={SW} />
    </svg>
  ),
  /* Shopping bag - E-commerce */
  ecommerce: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="9" y="16" width="22" height="16" rx="2" stroke={S} strokeWidth={SW} />
      <path d="M 15 16 L 15 13 Q 15 8 20 8 Q 25 8 25 13 L 25 16" stroke={S} strokeWidth={SW} {...RC} />
      <circle cx="15" cy="28" r="1.5" stroke={S} strokeWidth={SW} />
      <circle cx="25" cy="28" r="1.5" stroke={S} strokeWidth={SW} />
    </svg>
  ),
  /* Code brackets - Technology */
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
    slug: 'home-trades',
    num: 'IND / 01',
    title: 'Home Trades & Property Services',
    tagline: 'Your skills are your reputation. Your website should prove it.',
    icon: icons.trades,
    problem:
      "Most tradespeople survive on referrals, until they don't. A referral gets someone to Google your name. What they find in that moment either confirms the recommendation or kills it. An absent or amateur website loses work quietly, constantly, and invisibly.",
    body: [
      "We build websites for plumbers, electricians, HVAC and aircon technicians, roofers, builders and general contractors, painters and decorators, locksmiths, pest control specialists, landscapers and garden services, tree surgeons and arborists, pool service and maintenance companies, fencing contractors, paving and driveway specialists, tilers, carpenters and joiners, gutter cleaning and repair services, handymen, and damp and waterproofing specialists.",
      "Every site is built around your trade: clear service areas, real project photos, a contact path that makes it easy to request a quote, and local SEO that puts you in front of homeowners searching for your specific trade in your specific area.",
      "We understand how trades businesses actually get work. We don't build brochures. We build lead engines that work while you're on site.",
    ],
  },
  {
    slug: 'home-services',
    num: 'IND / 02',
    title: 'Home & Mobile Services',
    tagline: 'Professional websites for businesses that come to the customer.',
    icon: icons.mobile,
    problem:
      "Mobile and domestic service businesses are often the best in their area at what they do, but nearly invisible online. If a customer can't find you when they need you, it doesn't matter how good the work is.",
    body: [
      "We build websites for cleaning services of all types: residential cleaning, commercial cleaning, end-of-tenancy cleaning, and carpet cleaning, as well as removal companies and man-with-a-van operators, mobile mechanics, auto detailers, window cleaners, appliance repair specialists, mobile car washes, junk removal companies, scaffolding hire businesses, skip hire operators, solar panel installers, security system installers, chimney sweeps, kitchen and bathroom fitters, flooring installers, conservatory and extension specialists, and driveway pressure washing companies.",
      "These businesses share a common challenge: customers search online, often in a hurry, and choose whoever looks most trustworthy first. We build fast, clear, enquiry-focused websites that win that moment, with honest pricing presentation, service area maps, customer reviews, and frictionless contact options.",
      "We also set up and optimise Google Business Profiles for every client in this category, because local search visibility is often more valuable than the website itself.",
    ],
  },
  {
    slug: 'legal-financial',
    num: 'IND / 03',
    title: 'Legal & Financial Professionals',
    tagline: 'Trust-building websites for professions where trust is everything.',
    icon: icons.legal,
    problem:
      "In legal and financial services, your website is a trust signal before it's anything else. Clients aren't comparing your rates. They're deciding whether they believe you'll handle something important with competence and discretion. An outdated or generic site answers that question the wrong way.",
    body: [
      "We build websites for solo lawyers and small law firms, particularly those practising family law, immigration law, conveyancing, and personal injury, where prospective clients actively search for a niche specialist. We also work with accountants and bookkeepers, financial advisers and planners, mortgage brokers, insurance brokers, chartered surveyors, architects in small and solo practices, independent estate agents, notaries, tax preparers, and translators and language service providers.",
      "Each project starts with your positioning. Who you're specifically for, what you do that generalist practices don't, and what makes you the right choice over every other professional in your area. The website is built to answer those questions before a prospect even picks up the phone.",
      "For law and financial services in particular, conversion is a slow burn. Most clients are comparing two or three options before they decide. We build sites that hold up to that scrutiny: clear credentials, specific practice area pages, client testimonials, and a clear next step that doesn't feel pressured.",
    ],
  },
  {
    slug: 'health-wellness',
    num: 'IND / 04',
    title: 'Health & Wellness Practitioners',
    tagline: 'Websites that make patients feel confident before they arrive.',
    icon: icons.health,
    problem:
      "Patients and clients research before they book. They're looking at your website the way they'd evaluate a referral, and an outdated, confusing, or hard-to-navigate site loses them before they've ever spoken to you.",
    body: [
      "We build websites for independent dentists, chiropractors, physiotherapists, osteopaths, podiatrists, acupuncturists, massage therapists, personal trainers, pilates and yoga instructors, nutritionists and dietitians, counsellors and psychotherapists in private practice, independent opticians, small veterinary practices, and mobile dog groomers.",
      "Healthcare and wellness is a category where design and trust are directly connected. A site that feels clean, considered, and professional puts a patient at ease before the appointment. A cluttered or generic site does the opposite, and in a category where word-of-mouth is critical, that first impression affects every review that follows.",
      "We build around how clients actually choose a healthcare or wellness provider: clear qualifications and credentials, specific treatment pages that help patients self-select, easy online booking, and a tone that matches the warmth and professionalism of the actual practice.",
    ],
  },
  {
    slug: 'beauty-personal-care',
    num: 'IND / 05',
    title: 'Beauty & Personal Care',
    tagline: 'Booking-optimised websites that match the experience you deliver.',
    icon: icons.beauty,
    problem:
      "Too many beauty businesses rely on Instagram and third-party booking apps as their entire online presence, and lose potential clients because there's no permanent, searchable, professional home base that belongs to them.",
    body: [
      "Social platforms and booking apps are rented land. You don't own them, you can't be discovered through Google the same way, and they don't tell your brand story. A dedicated website changes all of that.",
      "We work with independent hair salons and barbers, nail technicians, lash and brow specialists, tattoo artists, mobile beauty therapists, makeup artists (particularly those focused on bridal and special occasion work), and aesthetic and cosmetic clinics.",
      "We build around your specific aesthetic and the clients you're trying to attract: photography-led design that showcases your work, a service menu that's actually readable, seamless booking integration, and local SEO that gets you found when someone searches for your specific treatment in your area. Your website should feel as considered as the service itself.",
    ],
  },
  {
    slug: 'events-celebrations',
    num: 'IND / 06',
    title: 'Events & Celebrations',
    tagline: 'Websites that book the date before the first conversation.',
    icon: icons.events,
    problem:
      "Events and wedding businesses live and die on their portfolio, but most never present it properly. Couples and event planners shortlist suppliers based almost entirely on what they can see, and they're doing that research on a phone, usually late at night, on five different websites at once.",
    body: [
      "We build websites for wedding photographers, event photographers, videographers, wedding planners and coordinators, event caterers, private chefs, mobile bartenders, DJs, party entertainers, bouncy castle and event hire companies, florists (particularly those focused on weddings and seasonal events), and wedding and civil ceremony celebrants.",
      "Your website is your primary sales tool, not your social feed, not your directory listing. It needs to load fast, look stunning on mobile, present your work in a way that makes couples feel something, and make it effortless to send an enquiry. Most events websites fail at least two of those four things.",
      "We build sites that are designed for the specific moment couples and event planners discover you: emotionally engaging, easy to navigate, and structured around the questions every potential client has before they reach out: availability, pricing approach, what working with you is actually like.",
    ],
  },
  {
    slug: 'restaurants-hospitality',
    num: 'IND / 07',
    title: 'Restaurants & Hospitality',
    tagline: 'Turn browsers into bookings before they find somewhere else.',
    icon: icons.restaurant,
    problem:
      "Restaurant websites lose reservations every day to slow load times, broken booking flows, PDF menus that don't work on a phone, and sites that were built once and never updated. When someone is deciding where to eat, they're moving fast, and a bad experience sends them somewhere else.",
    body: [
      "We build websites for restaurants, cafes, bars, pubs, wine bars, hotel restaurants, private dining rooms, pop-ups, food trucks, and hospitality venues of all kinds. Each one is designed for that specific decision moment: fast on mobile, with menus that are actually readable, reservation systems that work, and photography and atmosphere that make people want to come in.",
      "We also integrate Google Business Profile management and local SEO setup as part of every hospitality project. For restaurants, being found when someone searches 'restaurants near me' or 'best [cuisine] in [city]' is often more immediately valuable than the website design itself. We handle both.",
      "Ongoing management is built into every project: menus change, seasonal offers change, events need promoting. We make sure your site stays current without you having to manage it.",
    ],
  },
  {
    slug: 'real-estate',
    num: 'IND / 08',
    title: 'Real Estate & Property',
    tagline: 'Stand out in a market where everyone looks the same.',
    icon: icons.realestate,
    problem:
      "Real estate is a saturated market where most agents and firms rely on the same portals, the same templates, and the same headshots. Buyers and sellers often can't tell one agent from another until they meet them, by which point the decision is frequently already made.",
    body: [
      "Your own website is one of the few places you have complete control over the impression you make. It's where you differentiate, through how you present your track record, your specific market expertise, and the experience of working with you. We build websites for independent estate agents, small property agencies, buying agents, letting specialists, property developers, and property management companies.",
      "We don't connect to Rightmove or Zoopla portals and call it a website. We build brand-led sites that establish your profile as the expert in your area, drive direct enquiries, and position you for the client who is choosing between you and a corporate chain.",
      "Whether you're a single agent building a personal profile, a boutique agency repositioning for growth, or a developer marketing an off-plan project, we build around your specific competitive advantage, the thing that makes the right client choose you specifically.",
    ],
  },
  {
    slug: 'ecommerce',
    num: 'IND / 09',
    title: 'E-commerce & Retail',
    tagline: 'Stores that sell, not just display.',
    icon: icons.ecommerce,
    problem:
      "Generic e-commerce themes do the bare minimum. They display products, process payments, and look like every other online store. In a market where differentiation drives repeat purchase, the brand experience of your store is a competitive advantage most product businesses leave on the table.",
    body: [
      "Customers don't just buy products. They buy from brands they trust, brands that feel right, and brands that make the purchasing experience feel good enough to come back. A generic Shopify theme sends none of those signals, and in an increasingly crowded market, that gap matters.",
      "We build custom e-commerce experiences for independent product brands, fashion and apparel labels, artisan food and drink producers, homewares and lifestyle brands, specialty retailers, and subscription businesses. Whether you're on Shopify, a headless architecture, or a fully custom build, we design around your specific product and customer.",
      "Our focus is conversion: product presentation that builds desire, a checkout experience that removes every point of friction, and post-purchase flows that turn first-time buyers into loyal customers. We also work on the SEO and content architecture that drives organic traffic to the right category and product pages.",
    ],
  },
  {
    slug: 'technology',
    num: 'IND / 10',
    title: 'Technology & SaaS',
    tagline: 'Marketing sites that explain what you do and convert the people who need it.',
    icon: icons.technology,
    problem:
      "Even technically excellent products can fail to explain themselves to buyers. Most SaaS marketing sites either talk to engineers when they should be talking to decision-makers, or oversimplify to the point of saying nothing meaningful at all.",
    body: [
      "The best product in the market loses to a competitor with a clearer website. Buyers need to understand what the product does, who it's for, and what happens when they sign up, in that order, in about thirty seconds. Most SaaS marketing sites fail that test, and the result is a leaky funnel that no amount of ad spend can fix.",
      "We build marketing sites for technology companies, SaaS products, developer tools, AI products, fintech startups, and B2B software businesses. Sites that communicate clearly to buyers, drive trial signups or demo requests, and reflect the actual quality of the product behind the URL.",
      "We work with early-stage startups building their first proper marketing site, growth-stage companies redesigning for a new ICP, and technical founders who understand their product better than anyone but need help making it legible to the people who will pay for it.",
    ],
  },
];

/* ── Page ─────────────────────────────────────── */
export default function IndustriesPage() {
  return (
    <main className="bg-black min-h-screen">

      {/* ── Hero ────────────────────────────────── */}
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
            We don&apos;t build generic websites. We build commercial engines tuned to how your specific industry earns trust and converts clients. Every sector is different. Every site reflects that.
          </p>
        </div>
      </section>

      {/* ── Industry grid ───────────────────────── */}
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

      {/* ── Individual industry sections ────────── */}
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
                <LiquidMetalButton label="Get a free quote →" href="/contact" width={180} />
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* ── Final CTA ───────────────────────────── */}
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
            We work with businesses of all kinds. If your industry isn&apos;t listed here, chances are we&apos;ve built something similar. Get in touch and let&apos;s talk.
          </p>
          <LiquidMetalButton label="Get a free quote →" href="/contact" width={180} />
        </div>
      </section>

      <Footer />
    </main>
  );
}