import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export interface SimpleCheckboxProps {
  /** Checked state */
  checked?: boolean;
  /** Label text */
  label?: string;
  /** Label position */
  labelPosition?: 'left' | 'right';
  /** Disabled state */
  disabled?: boolean;
  /** Size variant */
  size?: 'small' | 'medium' | 'large';
  /** Checked background color */
  checkedColor?: string;
  /** Unchecked background color */
  uncheckedColor?: string;
  /** Checkmark color */
  checkmarkColor?: string;
  /** Border color when unchecked */
  borderColor?: string;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Checkbox style */
  checkboxStyle?: StyleProp<ViewStyle>;
  /** Label style */
  labelStyle?: StyleProp<TextStyle>;
  /** Change handler */
  onCheckedChange?: (checked: boolean, label?: string) => void;
  /** Press handler */
  onPress?: () => void;
  /** Accessibility label */
  accessibilityLabel?: string;
  /** Test ID */
  testID?: string;
}

/** Simple checkbox component matching the design */
export const SimpleCheckbox = ({
  checked = false,
  label,
  labelPosition = 'right',
  disabled = false,
  size = 'medium',
  checkedColor = '#2587A0',
  uncheckedColor = 'rgba(0, 0, 0, 0.3)',
  checkmarkColor = '#FFFFFF',
  borderColor = 'rgba(255, 255, 255, 0.3)',
  style,
  checkboxStyle,
  labelStyle,
  onCheckedChange,
  onPress,
  accessibilityLabel,
  testID = 'simple-checkbox',
}: SimpleCheckboxProps) => {
  const handlePress = () => {
    if (disabled) return;

    if (onPress) {
      onPress();
    }

    if (onCheckedChange) {
      onCheckedChange(!checked);
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

  const getCheckmarkSizeStyle = () => {
    switch (size) {
      case 'small':
        return styles.checkmarkSmall;
      case 'medium':
        return styles.checkmarkMedium;
      case 'large':
        return styles.checkmarkLarge;
      default:
        return styles.checkmarkMedium;
    }
  };

  const getLabelSizeStyle = () => {
    switch (size) {
      case 'small':
        return styles.labelSmall;
      case 'medium':
        return styles.labelMedium;
      case 'large':
        return styles.labelLarge;
      default:
        return styles.labelMedium;
    }
  };

  const renderCheckbox = () => (
    <View
      style={[
        styles.checkbox,
        getSizeStyle(),
        {
          backgroundColor: checked ? checkedColor : uncheckedColor,
          borderColor: checked ? checkedColor : borderColor,
        },
        disabled && styles.disabled,
        checkboxStyle,
      ]}
      testID={`${testID}-box`}
    >
      {checked && (
        <Text
          style={[styles.checkmark, getCheckmarkSizeStyle(), { color: checkmarkColor }]}
          testID={`${testID}-checkmark`}
        >
          ✓
        </Text>
      )}
    </View>
  );

  const renderLabel = () => {
    if (!label) return null;

    return (
      <Text
        style={[styles.label, getLabelSizeStyle(), disabled && styles.labelDisabled, labelStyle]}
        testID={`${testID}-label`}
      >
        {label}
      </Text>
    );
  };

  return (
    <TouchableOpacity
      accessibilityRole="checkbox"
      accessibilityState={{ checked, disabled }}
      accessibilityLabel={accessibilityLabel || label}
      activeOpacity={0.7}
      onPress={handlePress}
      disabled={disabled}
      style={[
        styles.container,
        label && styles.containerWithLabel,
        labelPosition === 'left' && styles.containerReverse,
        style,
      ]}
      testID={testID}
    >
      {labelPosition === 'left' && renderLabel()}
      {renderCheckbox()}
      {labelPosition === 'right' && renderLabel()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerWithLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  containerReverse: {
    flexDirection: 'row',
  },
  checkbox: {
    borderWidth: 2,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  checkmark: {
    fontWeight: 'bold',
  },
  label: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    color: '#FFFFFF',
  },
  labelDisabled: {
    opacity: 0.5,
  },
  // Size styles
  sizeSmall: {
    width: 20,
    height: 20,
    borderRadius: 4,
  },
  sizeMedium: {
    width: 28,
    height: 28,
    borderRadius: 6,
  },
  sizeLarge: {
    width: 36,
    height: 36,
    borderRadius: 8,
  },
  // Checkmark sizes
  checkmarkSmall: {
    fontSize: 12,
  },
  checkmarkMedium: {
    fontSize: 16,
  },
  checkmarkLarge: {
    fontSize: 20,
  },
  // Label sizes
  labelSmall: {
    fontSize: 14,
    lineHeight: 18,
  },
  labelMedium: {
    fontSize: 16,
    lineHeight: 20,
  },
  labelLarge: {
    fontSize: 18,
    lineHeight: 23,
  },
});
