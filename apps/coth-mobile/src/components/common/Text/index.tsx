import React from 'react';
import { Text as RNText, StyleSheet, TextProps as RNTextProps } from 'react-native';
import { colors, typography } from 'src/theme';

export interface TextProps extends RNTextProps {
  /**
   * Text variant: affects font size and weight
   */
  variant?: 'heading' | 'subtitle' | 'body' | 'caption';
  /**
   * Optional text color key (from theme)
   */
  color?: keyof typeof colors.white | keyof typeof colors.gray | string;
  /**
   * Bold or regular
   */
  weight?: 'regular' | 'medium' | 'bold';
}

/**
 * Generic Text component that respects app typography
 */
export const Text: React.FC<TextProps> = ({
  variant = 'body',
  color = colors.white[100],
  weight = 'regular',
  style,
  children,
  ...rest
}) => {
  const variantStyle = variantStyles[variant];
  const weightStyle = fontWeights[weight];

  return (
    <RNText
      style={[styles.base, variantStyle, weightStyle, style, { color: color.toString() }]}
      {...rest}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  base: {
    fontFamily: typography.fontFamily.primary,
  },
});

const variantStyles = StyleSheet.create({
  heading: {
    fontSize: 24,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 24,
  },
  body: {
    fontSize: 16,
    lineHeight: 22,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
  },
});

const fontWeights = StyleSheet.create({
  regular: { fontWeight: '400' },
  medium: { fontWeight: '500' },
  bold: { fontWeight: '700' },
});
