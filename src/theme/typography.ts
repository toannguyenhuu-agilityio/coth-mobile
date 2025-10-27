export const typography = {
  fontFamily: {
    primary: 'Akzidenz-Grotesk Pro',
    frankGothic: 'Franklin Gothic',
    robotoMono: 'Roboto Mono',
  },

  fontWeight: {
    light: 'Akzidenz-Grotesk-Pro-Light',
    regular: 'Akzidenz-Grotesk-Pro-Regular',
    medium: 'Akzidenz-Grotesk-Pro-Medium',
    bold: 'Akzidenz-Grotesk-Pro-Bold',
  },

  fontSize: {
    xs: 10,
    sm: 11,
    base: 12,
    md: 13,
    lg: 14,
    xl: 16,
    '2xl': 18,
    '3xl': 20,
    '4xl': 24,
    '5xl': 32,
    '6xl': 48,
    '7xl': 64,
    '8xl': 100,
  },

  // Line Heights
  lineHeight: {
    tight: 1.1,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },

  // Letter Spacing (from Figma)
  letterSpacing: {
    tighter: -0.02,
    tight: -0.01,
    normal: 0,
    wide: 0.01,
    wider: 0.014,
  },
} as const;

export type Typography = typeof typography;
