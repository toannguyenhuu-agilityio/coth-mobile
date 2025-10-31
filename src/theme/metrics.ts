const BASE_UNIT = 4;

export const spacing = {
  // Base spacing scale (multiples of 4px)
  0: 0,
  1: BASE_UNIT * 0.25, // 1px
  2: BASE_UNIT * 0.5, // 2px
  4: BASE_UNIT, // 4px
  6: BASE_UNIT * 1.5, // 6px
  8: BASE_UNIT * 2, // 8px
  10: BASE_UNIT * 2.5, // 10px
  12: BASE_UNIT * 3, // 12px
  16: BASE_UNIT * 4, // 16px
  20: BASE_UNIT * 5, // 20px
  24: BASE_UNIT * 6, // 24px
  28: BASE_UNIT * 7, // 28px
  32: BASE_UNIT * 8, // 32px
  36: BASE_UNIT * 9, // 36px
  40: BASE_UNIT * 10, // 40px
  44: BASE_UNIT * 11, // 44px
  48: BASE_UNIT * 12, // 48px
  52: BASE_UNIT * 13, // 52px
  56: BASE_UNIT * 14, // 56px
  60: BASE_UNIT * 15, // 60px
  64: BASE_UNIT * 16, // 64px
  66: BASE_UNIT * 16.5, // 66px

  // Semantic spacing names
  '2xs': 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
} as const;

export const borderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 20,
  xl: 38,
  '3xl': 100,
  full: 9999, // Circle
} as const;

export const sizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28,
  '2xl': 32,
  '3xl': 44,
  '4xl': 52,
  '5xl': 64,
} as const;

export type Sizes = typeof sizes;

export const metrics = {
  spacing,
  borderRadius,
  sizes,
} as const;

export type Metrics = typeof metrics;

export default metrics;
