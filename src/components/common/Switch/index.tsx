import { useEffect, useRef } from 'react';
import { Animated, StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

export interface SwitchProps {
  /** Switch enabled state */
  value?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Size variant */
  size?: 'small' | 'medium' | 'large';
  /** Active track color */
  activeTrackColor?: string;
  /** Inactive track color */
  inactiveTrackColor?: string;
  /** Active thumb color */
  activeThumbColor?: string;
  /** Inactive thumb color */
  inactiveThumbColor?: string;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Track style */
  trackStyle?: StyleProp<ViewStyle>;
  /** Thumb style */
  thumbStyle?: StyleProp<ViewStyle>;
  /** Change handler */
  onValueChange?: (value: boolean) => void;
  /** Press handler */
  onPress?: () => void;
  /** Accessibility label */
  accessibilityLabel?: string;
  /** Test ID */
  testID?: string;
}

/** Switch component for toggling between two states */
export const Switch = ({
  value = false,
  disabled = false,
  size = 'medium',
  activeTrackColor = '#5B8A93',
  inactiveTrackColor = '#4A5C61',
  activeThumbColor = '#FFFFFF',
  inactiveThumbColor = '#FFFFFF',
  style,
  trackStyle,
  thumbStyle,
  onValueChange,
  onPress,
  accessibilityLabel,
  testID = 'switch',
}: SwitchProps) => {
  const translateX = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: value ? 1 : 0,
      useNativeDriver: true,
      damping: 15,
      stiffness: 150,
    }).start();
  }, [value, translateX]);

  const handlePress = () => {
    if (disabled) return;

    if (onPress) {
      onPress();
    }

    if (onValueChange) {
      onValueChange(!value);
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          track: styles.trackSmall,
          thumb: styles.thumbSmall,
          offset: 14,
        };
      case 'medium':
        return {
          track: styles.trackMedium,
          thumb: styles.thumbMedium,
          offset: 20,
        };
      case 'large':
        return {
          track: styles.trackLarge,
          thumb: styles.thumbLarge,
          offset: 26,
        };
      default:
        return {
          track: styles.trackMedium,
          thumb: styles.thumbMedium,
          offset: 20,
        };
    }
  };

  const sizeStyles = getSizeStyles();

  const thumbTranslateX = translateX.interpolate({
    inputRange: [0, 1],
    outputRange: [2, sizeStyles.offset],
  });

  const trackColor = value ? activeTrackColor : inactiveTrackColor;
  const thumbColor = value ? activeThumbColor : inactiveThumbColor;

  return (
    <TouchableOpacity
      accessibilityRole="switch"
      accessibilityState={{ checked: value, disabled }}
      accessibilityLabel={accessibilityLabel}
      activeOpacity={0.8}
      onPress={handlePress}
      disabled={disabled}
      style={[
        styles.container,
        sizeStyles.track,
        { backgroundColor: trackColor },
        disabled && styles.disabled,
        trackStyle,
        style,
      ]}
      testID={testID}
    >
      <Animated.View
        style={[
          styles.thumb,
          sizeStyles.thumb,
          { backgroundColor: thumbColor },
          {
            transform: [{ translateX: thumbTranslateX }],
          },
          thumbStyle,
        ]}
        testID={`${testID}-thumb`}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    justifyContent: 'center',
    position: 'relative',
  },
  thumb: {
    borderRadius: 100,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  disabled: {
    opacity: 0.5,
  },
  // Track sizes
  trackSmall: {
    width: 36,
    height: 20,
  },
  trackMedium: {
    width: 48,
    height: 26,
  },
  trackLarge: {
    width: 60,
    height: 32,
  },
  // Thumb sizes
  thumbSmall: {
    width: 16,
    height: 16,
  },
  thumbMedium: {
    width: 22,
    height: 22,
  },
  thumbLarge: {
    width: 28,
    height: 28,
  },
});
