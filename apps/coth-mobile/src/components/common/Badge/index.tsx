import { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle, TextStyle } from 'react-native';

export interface BadgeProps {
  /** Badge label text */
  label?: string;
  /** Badge variant - 'live' shows "• LIVE" with red text, 'countdown' shows timer with teal text, 'highlight' shows a highlighted badge with glow effect */
  variant?: 'live' | 'countdown' | 'highlight';
  /** Custom background color */
  backgroundColor?: string;
  /** Custom text color */
  textColor?: string;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Text style */
  textStyle?: StyleProp<TextStyle>;
  /** Custom content (overrides label) */
  children?: ReactNode;
  /** Accessibility label */
  accessibilityLabel?: string;
  /** Test ID */
  testID?: string;
}

/** Badge component for displaying status indicators and labels */
export const Badge = ({
  label,
  variant = 'live',
  backgroundColor,
  textColor,
  style,
  textStyle,
  children,
  accessibilityLabel,
  testID = 'badge',
}: BadgeProps) => {
  const getTextVariantStyle = () => {
    switch (variant) {
      case 'live':
        return styles.textLive;
      case 'countdown':
        return styles.textCountdown;
      case 'highlight':
        return styles.textHighlight;
      default:
        return styles.textLive;
    }
  };

  const getContainerVariantStyle = () => {
    if (variant === 'highlight') {
      return styles.containerHighlight;
    }
    return {};
  };

  return (
    <View
      style={[
        styles.container,
        getContainerVariantStyle(),
        backgroundColor && { backgroundColor },
        style,
      ]}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="text"
      testID={testID}
    >
      {children || (
        <Text
          style={[styles.text, getTextVariantStyle(), textColor && { color: textColor }, textStyle]}
          testID={`${testID}-text`}
        >
          {label}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 7,
    paddingVertical: 2,
    paddingHorizontal: 6,
    alignSelf: 'flex-start',
  },
  containerHighlight: {
    backgroundColor: 'rgba(63, 201, 237, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 10,
    shadowColor: 'rgba(255, 255, 255, 0.8)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
  text: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17.68, // 1.263em of 14px
  },
  // Text variant styles
  textLive: {
    color: 'rgba(255, 0, 4, 0.8)', // Red/80% from Figma
  },
  textCountdown: {
    color: '#7099A7', // Teal from Figma
  },
  textHighlight: {
    color: '#FFFFFF', // White/100% from Figma
  },
});
