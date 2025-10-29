import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';

export interface TabProps {
  /** Tab label */
  label: string;
  /** Selected state */
  isActive?: boolean;
  /** Press handler */
  onPress?: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Text style */
  textStyle?: StyleProp<TextStyle>;
  /** Active background color */
  activeBackgroundColor?: string;
  /** Inactive background color */
  inactiveBackgroundColor?: string;
  /** Active text color */
  activeTextColor?: string;
  /** Inactive text color */
  inactiveTextColor?: string;
  /** Accessibility label */
  accessibilityLabel?: string;
  /** Test ID */
  testID?: string;
}

/** Tab component for navigation and filtering */
export const Tab = ({
  label,
  isActive = false,
  onPress,
  disabled = false,
  style,
  textStyle,
  activeBackgroundColor,
  inactiveBackgroundColor,
  activeTextColor,
  inactiveTextColor,
  accessibilityLabel,
  testID = 'tab',
}: TabProps) => {
  const containerStyle = [
    styles.container,
    isActive ? styles.containerActive : styles.containerInactive,
    activeBackgroundColor && isActive && { backgroundColor: activeBackgroundColor },
    inactiveBackgroundColor && !isActive && { backgroundColor: inactiveBackgroundColor },
    disabled && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.text,
    isActive ? styles.textActive : styles.textInactive,
    activeTextColor && isActive && { color: activeTextColor },
    inactiveTextColor && !isActive && { color: inactiveTextColor },
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      accessibilityRole="tab"
      accessibilityState={{ selected: isActive }}
      accessibilityLabel={accessibilityLabel || label}
      testID={testID}
    >
      <Text style={textStyles} numberOfLines={1} testID={`${testID}-text`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 36,
  },
  containerActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  containerInactive: {
    backgroundColor: 'rgba(116, 139, 145, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  text: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
  },
  textActive: {
    color: '#FFFFFF',
  },
  textInactive: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  disabled: {
    opacity: 0.5,
  },
});
