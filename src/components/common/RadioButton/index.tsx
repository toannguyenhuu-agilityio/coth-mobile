import { ReactNode } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';

export interface RadioButtonProps {
  /** Selected state */
  selected?: boolean;
  /** Label text */
  label?: string;
  /** Helper text below radio button */
  helperText?: string;
  /** Error text */
  errorText?: string;
  /** Error state */
  hasError?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Size variant */
  size?: 'small' | 'medium' | 'large';
  /** Label position */
  labelPosition?: 'left' | 'right';
  /** Radio button value */
  value?: string | number;
  /** Custom selected icon */
  selectedIcon?: ReactNode;
  /** Custom unselected icon */
  unselectedIcon?: ReactNode;
  /** Container style */
  containerStyle?: StyleProp<ViewStyle>;
  /** Radio button style */
  radioStyle?: StyleProp<ViewStyle>;
  /** Label style */
  labelStyle?: StyleProp<TextStyle>;
  /** Helper text style */
  helperTextStyle?: StyleProp<TextStyle>;
  /** Error text style */
  errorTextStyle?: StyleProp<TextStyle>;
  /** Selection change handler */
  onSelect?: (value?: string | number) => void;
  /** Press handler */
  onPress?: () => void;
  /** Accessibility label */
  accessibilityLabel?: string;
  /** Test ID */
  testID?: string;
}

/** RadioButton component for single selection from group */
export const RadioButton = ({
  selected = false,
  label,
  helperText,
  errorText,
  hasError = false,
  disabled = false,
  size = 'medium',
  labelPosition = 'right',
  value,
  selectedIcon,
  unselectedIcon,
  containerStyle,
  radioStyle,
  labelStyle,
  helperTextStyle,
  errorTextStyle,
  onSelect,
  onPress,
  accessibilityLabel,
  testID = 'radio-button',
}: RadioButtonProps) => {
  const handlePress = () => {
    if (disabled) return;

    if (onPress) {
      onPress();
    }

    if (onSelect) {
      onSelect(value);
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

  const getDotSizeStyle = () => {
    switch (size) {
      case 'small':
        return styles.dotSmall;
      case 'medium':
        return styles.dotMedium;
      case 'large':
        return styles.dotLarge;
      default:
        return styles.dotMedium;
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

  const renderRadio = () => (
    <View
      style={[
        styles.radio,
        getSizeStyle(),
        selected && styles.radioSelected,
        hasError && styles.radioError,
        disabled && styles.radioDisabled,
        radioStyle,
      ]}
      testID={`${testID}-circle`}
    >
      {selected && !selectedIcon && <View style={[styles.dot, getDotSizeStyle()]} />}
      {selected && selectedIcon && selectedIcon}
      {!selected && unselectedIcon && unselectedIcon}
    </View>
  );

  const renderLabel = () => {
    if (!label) return null;

    return (
      <Text
        style={[
          styles.label,
          getLabelSizeStyle(),
          hasError && styles.labelError,
          disabled && styles.labelDisabled,
          labelStyle,
        ]}
        testID={`${testID}-label`}
      >
        {label}
      </Text>
    );
  };

  const displayHelperText = hasError ? errorText : helperText;

  return (
    <View style={[styles.container, containerStyle]} testID={testID}>
      <TouchableOpacity
        accessibilityRole="radio"
        accessibilityState={{ selected, disabled }}
        accessibilityLabel={accessibilityLabel || label}
        activeOpacity={0.7}
        onPress={handlePress}
        disabled={disabled}
        style={[styles.touchable, labelPosition === 'left' && styles.touchableReverse]}
        testID={`${testID}-touchable`}
      >
        {labelPosition === 'left' && renderLabel()}
        {renderRadio()}
        {labelPosition === 'right' && renderLabel()}
      </TouchableOpacity>

      {displayHelperText && (
        <Text
          style={[
            styles.helperText,
            hasError && styles.errorText,
            hasError ? errorTextStyle : helperTextStyle,
          ]}
          testID={`${testID}-helper-text`}
        >
          {displayHelperText}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 4,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  touchableReverse: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
  },
  radio: {
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderColor: 'rgba(255, 255, 255, 0.5)',
    backgroundColor: 'rgba(116, 139, 145, 0.2)',
  },
  radioError: {
    borderColor: '#FF6B6B',
  },
  radioDisabled: {
    opacity: 0.5,
  },
  dot: {
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
  },
  label: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    color: '#FFFFFF',
    flex: 1,
  },
  labelError: {
    color: '#FF6B6B',
  },
  labelDisabled: {
    opacity: 0.5,
  },
  helperText: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    color: '#BABABA',
    marginLeft: 32,
  },
  errorText: {
    color: '#FF6B6B',
  },
  // Size styles
  sizeSmall: {
    width: 16,
    height: 16,
  },
  sizeMedium: {
    width: 20,
    height: 20,
  },
  sizeLarge: {
    width: 24,
    height: 24,
  },
  // Dot sizes
  dotSmall: {
    width: 8,
    height: 8,
  },
  dotMedium: {
    width: 10,
    height: 10,
  },
  dotLarge: {
    width: 12,
    height: 12,
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
