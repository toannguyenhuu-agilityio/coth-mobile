import { memo, ReactNode, useRef } from 'react';
import { Animated, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, typography } from 'src/theme';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'link' | 'rounded';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  onPress?: () => void;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const ButtonComponent = ({
  variant = 'primary',
  size = 'medium',
  label = '',
  style,
  iconLeft,
  iconRight,
  disabled = false,
  onPress,
}: ButtonProps) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const getVariantStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.variantPrimary;
      case 'secondary':
        return styles.variantSecondary;
      case 'link':
        return styles.variantLink;
      case 'rounded':
        return styles.variantRounded;
      default:
        return styles.variantPrimary;
    }
  };

  const getSizeStyle = () => {
    // Rounded variant should use its own fixed size
    if (variant === 'rounded') {
      switch (size) {
        case 'small':
          return styles.sizeRoundedSmall;
        case 'medium':
          return styles.sizeRoundedMedium;
        case 'large':
          return styles.sizeRoundedLarge;
        default:
          return styles.sizeRoundedMedium;
      }
    }

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

  const handlePressIn = () => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 0.96,
        useNativeDriver: true,
        speed: 50,
        bounciness: 4,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        speed: 50,
        bounciness: 4,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // For rounded variant, only show icon (no label)
  const showLabel = variant !== 'rounded' && label;

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      testID="button-container"
    >
      <Animated.View
        style={[
          styles.button,
          getVariantStyle(),
          getSizeStyle(),
          style,
          disabled && styles.disabled,
          {
            transform: [{ scale: scaleAnim }],
            opacity: opacityAnim,
          },
        ]}
      >
        {iconLeft && <View style={styles.icon}>{iconLeft}</View>}
        {showLabel && <Text style={styles.buttonText}>{label}</Text>}
        {iconRight && <View style={styles.icon}>{iconRight}</View>}
      </Animated.View>
    </Pressable>
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
    fontFamily: typography.fontFamily.primary,
    fontWeight: '700',
    textAlign: 'center',
    fontSize: typography.fontSize['lg'],
    color: colors.white[100],
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowRadius: 2,
  },
  icon: {
    zIndex: 10,
  },
  disabled: {
    opacity: 0.3,
  },
  variantPrimary: {
    backgroundColor: colors.accent[20],
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  variantSecondary: {
    backgroundColor: colors.accent[20],
    borderColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: 1,
  },
  variantLink: {
    backgroundColor: 'transparent',
    shadowOpacity: 0,
  },
  variantRounded: {
    borderRadius: 9999,
    backgroundColor: colors.accent[20],
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
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
  sizeRoundedSmall: {
    width: 40,
    height: 40,
    padding: 0,
  },
  sizeRoundedMedium: {
    width: 56,
    height: 56,
    padding: 0,
  },
  sizeRoundedLarge: {
    width: 72,
    height: 72,
    padding: 0,
  },
});

export const Button = memo(ButtonComponent);
