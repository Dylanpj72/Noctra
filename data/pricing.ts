export type Region = 'ZA' | 'UK' | 'US' | 'AU' | 'EU_WEST' | 'EU_EAST';
export type TierKey = 'launch' | 'studio' | 'empire';
export type PaymentMode = 'flatMonthly' | 'upfront';

export type TierPricing = {
  upfront: number;
  retainer: number;
  flatMonthly: number;
};

export type RegionPricing = {
  region: Region;
  label: string;
  currency: string;
  symbol: string;
  locale: string;
  tiers: Record<TierKey, TierPricing>;
};

export const PRICING: Record<Region, RegionPricing> = {
  ZA: {
    region: 'ZA',
    label: 'South Africa',
    currency: 'ZAR',
    symbol: 'R',
    locale: 'en-ZA',
    tiers: {
      launch: { upfront: 8000, retainer: 500, flatMonthly: 1200 },
      studio: { upfront: 15000, retainer: 1500, flatMonthly: 2000 },
      empire: { upfront: 35000, retainer: 3000, flatMonthly: 4500 },
    },
  },
  UK: {
    region: 'UK',
    label: 'United Kingdom',
    currency: 'GBP',
    symbol: '£',
    locale: 'en-GB',
    tiers: {
      launch: { upfront: 1200, retainer: 50, flatMonthly: 150 },
      studio: { upfront: 2500, retainer: 100, flatMonthly: 250 },
      empire: { upfront: 5500, retainer: 200, flatMonthly: 500 },
    },
  },
  US: {
    region: 'US',
    label: 'United States & Canada',
    currency: 'USD',
    symbol: '$',
    locale: 'en-US',
    tiers: {
      launch: { upfront: 1500, retainer: 75, flatMonthly: 150 },
      studio: { upfront: 3500, retainer: 150, flatMonthly: 300 },
      empire: { upfront: 7500, retainer: 300, flatMonthly: 600 },
    },
  },
  AU: {
    region: 'AU',
    label: 'Australia & New Zealand',
    currency: 'AUD',
    symbol: 'A$',
    locale: 'en-AU',
    tiers: {
      launch: { upfront: 2000, retainer: 75, flatMonthly: 200 },
      studio: { upfront: 4000, retainer: 150, flatMonthly: 350 },
      empire: { upfront: 8500, retainer: 300, flatMonthly: 700 },
    },
  },
  EU_WEST: {
    region: 'EU_WEST',
    label: 'Western Europe',
    currency: 'EUR',
    symbol: '€',
    locale: 'de-DE',
    tiers: {
      launch: { upfront: 1400, retainer: 60, flatMonthly: 175 },
      studio: { upfront: 3000, retainer: 120, flatMonthly: 290 },
      empire: { upfront: 6500, retainer: 240, flatMonthly: 580 },
    },
  },
  EU_EAST: {
    region: 'EU_EAST',
    label: 'Eastern Europe',
    currency: 'EUR',
    symbol: '€',
    locale: 'pl-PL',
    tiers: {
      launch: { upfront: 800, retainer: 40, flatMonthly: 120 },
      studio: { upfront: 1800, retainer: 80, flatMonthly: 200 },
      empire: { upfront: 4000, retainer: 160, flatMonthly: 400 },
    },
  },
};

export const COUNTRY_TO_REGION: Record<string, Region> = {
  ZA: 'ZA',
  GB: 'UK', IE: 'UK',
  US: 'US', CA: 'US',
  AU: 'AU', NZ: 'AU',
  DE: 'EU_WEST', FR: 'EU_WEST', ES: 'EU_WEST', IT: 'EU_WEST',
  NL: 'EU_WEST', BE: 'EU_WEST', PT: 'EU_WEST', AT: 'EU_WEST',
  CH: 'EU_WEST', SE: 'EU_WEST', NO: 'EU_WEST', DK: 'EU_WEST',
  FI: 'EU_WEST', LU: 'EU_WEST',
  PL: 'EU_EAST', CZ: 'EU_EAST', SK: 'EU_EAST', HU: 'EU_EAST',
  RO: 'EU_EAST', BG: 'EU_EAST', HR: 'EU_EAST', SI: 'EU_EAST',
  EE: 'EU_EAST', LV: 'EU_EAST', LT: 'EU_EAST',
};

export function resolveRegion(countryCode?: string): RegionPricing {
  if (!countryCode) return PRICING.US;
  const region = COUNTRY_TO_REGION[countryCode.toUpperCase()] ?? 'US';
  return PRICING[region];
}

export function formatPrice(amount: number, region: RegionPricing): string {
  return new Intl.NumberFormat(region.locale, {
    style: 'currency',
    currency: region.currency,
    maximumFractionDigits: 0,
  }).format(amount);
}