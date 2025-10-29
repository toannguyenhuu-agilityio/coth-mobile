import { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'link' | 'rounded';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  onPress?: () => void;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'primary',
  size = 'medium',
  backgroundColor,
  label = '',
  style,
  iconLeft,
  iconRight,
  disabled = false,
  onPress,
}: ButtonProps) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.variantPrimary;
      case 'secondary':
        return styles.variantSecondary;
      case 'link':
        return styles.variantLink;
      default:
        return styles.variantPrimary;
    }
  };

  const getTextVariantStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.textPrimary;
      case 'secondary':
        return styles.textSecondary;
      case 'link':
        return styles.textLink;
      case 'rounded':
        return styles.variantRounded;
      default:
        return styles.textPrimary;
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return styles.sizeSmall;
      case 'medium':
        return styles.sizeMedium;
      case 'large':
        return styles.sizeLarge;
      default:
        return styles.sizeMedium;
    }
  };

  const getTextSizeStyle = () => {
    switch (size) {
      case 'small':
        return styles.textSmall;
      case 'medium':
        return styles.textMedium;
      case 'large':
        return styles.textLarge;
      default:
        return styles.textMedium;
    }
  };

  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.6}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        getVariantStyle(),
        getSizeStyle(),
        style,
        !!backgroundColor && { backgroundColor },
        disabled && styles.disabled,
      ]}
      testID="button-container"
    >
      {iconLeft && <>{iconLeft}</>}
      {label && (
        <Text style={[styles.buttonText, getTextVariantStyle(), getTextSizeStyle()]}>{label}</Text>
      )}
      {iconRight && <>{iconRight}</>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    borderRadius: 12,
  },
  buttonText: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontWeight: '800',
    textAlign: 'center',
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2,
  },
  disabled: {
    opacity: 0.5,
  },
  // Variant styles
  variantPrimary: {
    backgroundColor: 'rgba(116, 139, 145, 0.2)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
  },
  variantSecondary: {
    backgroundColor: 'transparent',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
  },
  variantLink: {
    backgroundColor: 'transparent',
  },
  variantRounded: {
    borderRadius: 100,
  },
  // Text variant styles
  textPrimary: {
    color: '#FFFFFF',
  },
  textSecondary: {
    color: '#FFFFFF',
  },
  textLink: {
    color: '#FFFFFF',
  },
  // Size styles
  sizeSmall: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  sizeMedium: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    height: 48,
  },
  sizeLarge: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    height: 56,
  },
  // Text size styles
  textSmall: {
    fontSize: 14,
    lineHeight: 14,
  },
  textMedium: {
    fontSize: 18,
    lineHeight: 18,
  },
  textLarge: {
    fontSize: 20,
    lineHeight: 20,
  },
});
