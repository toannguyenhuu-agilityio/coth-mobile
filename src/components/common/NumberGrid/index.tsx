import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';

export interface NumberGridProps {
  /** Total number of items */
  count: number;
  /** Start number (default: 1) */
  startNumber?: number;
  /** Number of columns (default: 5) */
  columns?: number;
  /** Selected numbers */
  selectedNumbers?: number[];
  /** Press handler */
  onNumberPress?: (number: number) => void;
  /** Disabled numbers */
  disabledNumbers?: number[];
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Individual button style */
  buttonStyle?: StyleProp<ViewStyle>;
  /** Button text style */
  textStyle?: StyleProp<TextStyle>;
  /** Selected button background color */
  selectedBackgroundColor?: string;
  /** Unselected button background color */
  unselectedBackgroundColor?: string;
  /** Selected text color */
  selectedTextColor?: string;
  /** Unselected text color */
  unselectedTextColor?: string;
  /** Gap between buttons */
  gap?: number;
  /** Test ID */
  testID?: string;
}

/** NumberGrid component for displaying a grid of numbered buttons */
export const NumberGrid = ({
  count,
  startNumber = 1,
  columns = 5,
  selectedNumbers = [],
  onNumberPress,
  disabledNumbers = [],
  style,
  buttonStyle,
  textStyle,
  selectedBackgroundColor,
  unselectedBackgroundColor,
  selectedTextColor,
  unselectedTextColor,
  gap = 8,
  testID = 'number-grid',
}: NumberGridProps) => {
  const numbers = Array.from({ length: count }, (_, i) => startNumber + i);

  const renderButton = (number: number, index: number) => {
    const isSelected = selectedNumbers.includes(number);
    const isDisabled = disabledNumbers.includes(number);

    const buttonStyles = [
      styles.button,
      isSelected ? styles.buttonSelected : styles.buttonUnselected,
      selectedBackgroundColor && isSelected && { backgroundColor: selectedBackgroundColor },
      unselectedBackgroundColor && !isSelected && { backgroundColor: unselectedBackgroundColor },
      isDisabled && styles.buttonDisabled,
      buttonStyle,
    ];

    const textStyles = [
      styles.text,
      isSelected ? styles.textSelected : styles.textUnselected,
      selectedTextColor && isSelected && { color: selectedTextColor },
      unselectedTextColor && !isSelected && { color: unselectedTextColor },
      isDisabled && styles.textDisabled,
      textStyle,
    ];

    return (
      <TouchableOpacity
        key={number}
        style={buttonStyles}
        onPress={() => !isDisabled && onNumberPress?.(number)}
        disabled={isDisabled}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityState={{ selected: isSelected, disabled: isDisabled }}
        accessibilityLabel={`Number ${number}`}
        testID={`${testID}-button-${number}`}
      >
        <Text style={textStyles} testID={`${testID}-text-${number}`}>
          {number}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { gap }, style]} testID={testID}>
      {numbers.map((number, index) => (
        <View key={number} style={{ width: `${100 / columns}%`, padding: gap / 2 }}>
          {renderButton(number, index)}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -4,
  },
  button: {
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    minHeight: 44,
  },
  buttonSelected: {
    backgroundColor: '#7099A7',
  },
  buttonUnselected: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  buttonDisabled: {
    opacity: 0.3,
  },
  text: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
  },
  textSelected: {
    color: '#FFFFFF',
  },
  textUnselected: {
    color: 'rgba(255, 255, 255, 0.8)',
  },
  textDisabled: {
    opacity: 0.5,
  },
});
