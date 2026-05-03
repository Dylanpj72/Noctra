import { Nav } from '@/components/Nav';
import { CTABlock } from '@/components/CTABlock';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About · Noctra',
  description: 'Noctra is a web design agency building high-converting custom websites for ambitious businesses worldwide.',
};

const values = [
  {
    title: 'Craft over templates',
    desc: 'Every site we build is designed from scratch for the specific business, audience, and goal. We don\'t do cookie-cutter.',
  },
  {
    title: 'Honest pricing',
    desc: 'One flat monthly covers everything. No hidden fees, no scope creep surprises, no upsells you didn\'t ask for.',
  },
  {
    title: 'Long-term partnerships',
    desc: 'We manage every site we build, indefinitely. Our incentive is your long-term success, not just the launch.',
  },
  {
    title: 'Globally minded',
    desc: 'We work with businesses across South Africa, the UK, the US, Europe, and Australia. Region-calibrated pricing, always.',
  },
];

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 pt-10">
        <Nav />
      </div>

      {/* Page header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-14 pt-20 pb-20 border-b border-white/[0.06]">
        <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.3em] uppercase text-[#5a5a62] mb-8">
          ABOUT
        </p>
        <h1
          className="font-[family-name:var(--font-inter)] font-[200] leading-[0.9] tracking-[-0.05em] uppercase text-white mb-8"
          style={{ fontSize: 'clamp(52px,8vw,120px)' }}
        >
          Built for{' '}
          <em className="font-[family-name:var(--font-instrument-serif)] not-italic italic font-[400] normal-case">
            the
          </em>
          <br />
          <span className="font-[900]">ambitious.</span>
        </h1>
        <p className="font-[family-name:var(--font-instrument-serif)] italic text-[18px] md:text-[22px] text-[#8a8a92] max-w-[600px] leading-relaxed">
          Noctra is a web design agency built to give ambitious businesses a serious online presence, without the enterprise price tag.
        </p>
      </section>

      {/* Philosophy */}
      <section className="py-[100px] border-b border-white/[0.06] bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12">
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.25em] uppercase text-[#5a5a62]">
              Our approach
            </p>
            <div className="max-w-[720px]">
              <p className="font-[family-name:var(--font-inter)] font-[200] text-[22px] md:text-[26px] leading-[1.4] tracking-[-0.02em] text-white mb-8">
                We do not just build websites. We create digital experiences designed to grow businesses.
              </p>
              <div className="space-y-5 text-[15px] leading-[1.75] text-[#8a8a92]">
                <p>
                  At our core, we are a results-driven web design agency focused on one thing: turning your online presence into a powerful business asset. A website should do far more than simply look good. It should attract attention, build trust, engage visitors, and convert interest into real customers.
                </p>
                <p>
                  We combine premium design, strategic thinking, and conversion-focused development to create websites that do more than exist online. They perform. Every element is built with purpose, from the first impression your brand makes to the final action your customer takes.
                </p>
                <p>
                  Our approach goes beyond aesthetics. We design with intention, ensuring your website is positioned to:
                </p>
              </div>

              <ul className="mt-6 mb-8 space-y-3">
                {[
                  'Generate qualified leads',
                  'Attract and convert new customers',
                  'Build trust and credibility',
                  'Engage visitors with a seamless user experience',
                  'Strengthen your brand presence',
                  'Support long-term business growth',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] text-[#5a5a62] mt-[5px] flex-shrink-0">→</span>
                    <span className="text-[15px] leading-[1.7] text-[#8a8a92]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-5 text-[15px] leading-[1.75] text-[#8a8a92]">
                <p>
                  A high-performing website is one of the most valuable investments a business can make. It should work as your digital storefront, your sales tool, and your brand representative, all at once.
                </p>
                <p>
                  We create websites that are refined, strategic, and built to deliver measurable results. From user experience and messaging to performance and conversion, every detail is carefully considered to ensure your website not only reflects the quality of your brand, but actively contributes to its growth.
                </p>
                <p className="text-white font-[300]">
                  For businesses that value quality, performance, and long-term impact, we build more than websites. We build digital platforms that drive growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-[100px] border-b border-white/[0.06] bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.25em] uppercase text-[#5a5a62] mb-12">
            How we work
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="card-shimmer relative rounded-2xl border border-white/[0.08] p-7 md:p-8"
                style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(24px)' }}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
                />
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.2em] uppercase text-[#5a5a62] mb-4">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-[family-name:var(--font-inter)] font-[700] text-[18px] tracking-[-0.02em] text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-[14px] leading-[1.65] text-[#8a8a92]">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
      <Footer />
    </main>
  );
}