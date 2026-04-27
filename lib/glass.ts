export const glass = {
  surface: [
    'bg-[rgba(255,255,255,0.025)]',
    'backdrop-blur-2xl',
    'border border-[rgba(255,255,255,0.08)]',
    'shadow-[0_12px_48px_rgba(0,0,0,0.6)]',
  ].join(' '),

  surfaceHover: [
    'hover:bg-[rgba(255,255,255,0.045)]',
    'hover:border-[rgba(255,255,255,0.16)]',
    'hover:-translate-y-1',
  ].join(' '),

  highlight: 'before:absolute before:top-0 before:left-[10%] before:right-[10%] before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent',

  pill: [
    'bg-[rgba(255,255,255,0.04)]',
    'backdrop-blur-2xl',
    'border border-[rgba(255,255,255,0.10)]',
    'shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_32px_rgba(0,0,0,0.5)]',
  ].join(' '),
} as const;

export type GlassVariant = keyof typeof glass;