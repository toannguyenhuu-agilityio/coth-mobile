// Libs
import { StyleSheet } from 'react-native-unistyles';

// Themes
import { colors } from './colors';
import { typography } from './typography';
import { metrics } from './metrics';
import { opacity } from './opacity';

const appTheme = {
  colors: colors,
  typography: {
    fontFamily: typography.fontFamily,
    fontWeight: typography.fontWeight,
    fontSize: typography.fontSize,
    lineHeight: typography.lineHeight,
    letterSpacing: typography.letterSpacing,
  },

  spacing: metrics.spacing,
  borderRadius: metrics.borderRadius,
  sizes: metrics.sizes,
  opacity,
} as const;

/**
 * TypeScript type declarations
 */
type AppThemes = {
  default: typeof appTheme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
  themes: {
    default: appTheme,
  },
  settings: {
    // Set initial theme
    initialTheme: 'default',
  },
});

export { appTheme };
