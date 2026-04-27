import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '900'],
  variable: '--font-inter',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Noctra — Premium Web Design Agency for Global Businesses',
  description:
    'A web design agency building high-converting custom websites for ambitious global businesses. Strategy, design, development, and growth — from kickoff to launch in 12 weeks.',
  keywords: [
    'web design agency',
    'website agency',
    'premium web design',
    'custom website development',
    'global web agency',
    'conversion-focused web design',
  ],
  authors: [{ name: 'Noctra' }],
  creator: 'Noctra',
  metadataBase: new URL('https://noctra.studio'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Noctra — Premium Web Design Agency',
    description:
      'We build websites that win. Custom design, development, and growth for ambitious global businesses.',
    url: 'https://noctra.studio',
    siteName: 'Noctra',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Noctra — We build websites that win',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noctra — Premium Web Design Agency',
    description: 'We build websites that win.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://noctra.studio/#org',
                  name: 'Noctra',
                  url: 'https://noctra.studio',
                  logo: 'https://noctra.studio/logo.png',
                  contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'Customer Support',
                    email: 'hello@noctra.studio',
                  },
                  sameAs: ['https://twitter.com/noctra', 'https://linkedin.com/company/noctra'],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://noctra.studio/#website',
                  url: 'https://noctra.studio',
                  name: 'Noctra',
                  publisher: { '@id': 'https://noctra.studio/#org' },
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://noctra.studio/?s={search_term_string}',
                    'query-input': 'required name=search_term_string',
                  },
                },
                {
                  '@type': 'Service',
                  name: 'Web Design',
                  provider: { '@id': 'https://noctra.studio/#org' },
                  description:
                    'Custom website design and development for global businesses, from strategy to launch.',
                },
                {
                  '@type': 'Service',
                  name: 'Brand Systems',
                  provider: { '@id': 'https://noctra.studio/#org' },
                  description:
                    'Complete brand identity systems including logo, typography, color, and motion.',
                },
                {
                  '@type': 'Service',
                  name: 'Growth Audits',
                  provider: { '@id': 'https://noctra.studio/#org' },
                  description:
                    'Conversion rate optimization and growth audits for existing websites.',
                },
                {
                  '@type': 'FAQPage',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'How long does it take to build a website?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Our average project timeline is 12 weeks from kickoff to launch — covering strategy, design, build, and QA.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What does it cost to work with Noctra?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Pricing depends on project scope and your region. We offer three tiers starting at flat monthly rates, with no upfront cost required. See our pricing section for details.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do you only work with businesses in South Africa?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'No — we work with ambitious businesses globally. Clients span the UK, US, Europe, Australia, and beyond. Our pricing is region-calibrated for fairness.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do you offer ongoing maintenance after launch?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. All plans include a retainer component — either as part of the flat monthly or as a separate add-on with the upfront option. Every client gets 30 days post-launch support included.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What CMS do you build on?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'We match the CMS to your team and complexity. We build in Webflow, Framer, and Next.js with a headless CMS (Sanity, Contentful) depending on your requirements.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Can you redesign an existing website?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Absolutely. Redesigns are one of our strongest services. We often begin with a Growth Audit to understand what is leaking before designing the replacement.',
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}