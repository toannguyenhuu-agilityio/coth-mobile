/**
 * Opacity Design Tokens
 * Define opacity values for consistent transparency
 */

export const opacity = {
  // Opacity scale
  transparent: 0,
  0: 0,
  5: 0.05,
  10: 0.1,
  20: 0.2,
  30: 0.3,
  40: 0.4,
  50: 0.5,
  60: 0.6,
  70: 0.7,
  80: 0.8,
  90: 0.9,
  100: 1,
  opaque: 1,

  disabled: 0.4,
  hover: 0.9,
  pressed: 0.8,
  overlay: 0.5,
  backdropLight: 0.3,
  backdropDark: 0.6,
  ghost: 0.1,
  faint: 0.2,
} as const;

export type Opacity = typeof opacity;
