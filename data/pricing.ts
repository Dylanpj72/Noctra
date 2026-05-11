export type Region = 'ZA' | 'UK' | 'US' | 'AU' | 'EU_WEST' | 'EU_EAST';
export type TierKey = 'starter' | 'professional' | 'premium';
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
      starter:      { upfront: 12000, retainer: 600,  flatMonthly: 1300 },
      professional: { upfront: 22000, retainer: 900,  flatMonthly: 2180 },
      premium:      { upfront: 40000, retainer: 1550, flatMonthly: 3890 },
    },
  },
  UK: {
    region: 'UK',
    label: 'United Kingdom',
    currency: 'GBP',
    symbol: '£',
    locale: 'en-GB',
    tiers: {
      starter:      { upfront: 1200, retainer: 60,  flatMonthly: 132 },
      professional: { upfront: 2200, retainer: 90,  flatMonthly: 219 },
      premium:      { upfront: 4000, retainer: 140, flatMonthly: 385 },
    },
  },
  US: {
    region: 'US',
    label: 'United States & Canada',
    currency: 'USD',
    symbol: '$',
    locale: 'en-US',
    tiers: {
      starter:      { upfront: 1500, retainer: 75,  flatMonthly: 159 },
      professional: { upfront: 2800, retainer: 115, flatMonthly: 279 },
      premium:      { upfront: 5000, retainer: 175, flatMonthly: 479 },
    },
  },
  AU: {
    region: 'AU',
    label: 'Australia & New Zealand',
    currency: 'AUD',
    symbol: 'A$',
    locale: 'en-AU',
    tiers: {
      starter:      { upfront: 2200, retainer: 110, flatMonthly: 235 },
      professional: { upfront: 4000, retainer: 165, flatMonthly: 399 },
      premium:      { upfront: 7000, retainer: 250, flatMonthly: 665 },
    },
  },
  EU_WEST: {
    region: 'EU_WEST',
    label: 'Western Europe',
    currency: 'EUR',
    symbol: '€',
    locale: 'de-DE',
    tiers: {
      starter:      { upfront: 1400, retainer: 70,  flatMonthly: 149 },
      professional: { upfront: 2500, retainer: 105, flatMonthly: 252 },
      premium:      { upfront: 4500, retainer: 160, flatMonthly: 435 },
    },
  },
  EU_EAST: {
    region: 'EU_EAST',
    label: 'Eastern Europe',
    currency: 'EUR',
    symbol: '€',
    locale: 'pl-PL',
    tiers: {
      starter:      { upfront: 800,  retainer: 40,  flatMonthly: 120 },
      professional: { upfront: 1800, retainer: 80,  flatMonthly: 200 },
      premium:      { upfront: 4000, retainer: 160, flatMonthly: 400 },
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