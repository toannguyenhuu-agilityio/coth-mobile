import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  Text,
  TextStyle,
} from 'react-native';

export interface RadioButtonOption {
  /** Option label */
  label: string;
  /** Option value/identifier */
  value: string;
  /** Disabled state */
  disabled?: boolean;
}

export interface RadioButtonListProps {
  /** List of radio button options */
  options: RadioButtonOption[];
  /** Selected value */
  selectedValue?: string;
  /** Show divider between items */
  showDivider?: boolean;
  /** Divider color */
  dividerColor?: string;
  /** Radio button size */
  size?: 'small' | 'medium' | 'large';
  /** Selected radio button color */
  selectedColor?: string;
  /** Unselected radio button color */
  unselectedColor?: string;
  /** Radio button border color */
  borderColor?: string;
  /** Container style */
  containerStyle?: StyleProp<ViewStyle>;
  /** Item container style */
  itemStyle?: StyleProp<ViewStyle>;
  /** Label text style */
  labelStyle?: StyleProp<TextStyle>;
  /** Change handler - receives selected value and label */
  onValueChange?: (value: string, label: string) => void;
  /** Test ID */
  testID?: string;
}

/** RadioButtonList component - displays a list of radio buttons with labels (single selection) */
export const RadioButtonList = ({
  options,
  selectedValue,
  showDivider = true,
  dividerColor = 'rgba(255, 255, 255, 0.1)',
  size = 'medium',
  selectedColor = '#2587A0',
  borderColor = 'rgba(255, 255, 255, 0.3)',
  containerStyle,
  itemStyle,
  labelStyle,
  onValueChange,
  testID = 'radio-button-list',
}: RadioButtonListProps) => {
  const handleSelect = (value: string, label: string) => {
    if (onValueChange) {
      onValueChange(value, label);
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return { width: 20, height: 20, innerSize: 10 };
      case 'medium':
        return { width: 28, height: 28, innerSize: 14 };
      case 'large':
        return { width: 36, height: 36, innerSize: 18 };
      default:
        return { width: 28, height: 28, innerSize: 14 };
    }
  };

  const sizeStyle = getSizeStyle();

  return (
    <View style={[styles.container, containerStyle]} testID={testID}>
      {options.map((option, index) => {
        const isSelected = selectedValue === option.value;

        return (
          <View key={option.value} testID={`${testID}-item-${index}`}>
            <TouchableOpacity
              style={[styles.itemContainer, itemStyle, isSelected && styles.checkedItem]}
              onPress={() => !option.disabled && handleSelect(option.value, option.label)}
              disabled={option.disabled}
              activeOpacity={0.7}
              testID={`${testID}-button-${index}`}
            >
              <Text
                style={[styles.label, option.disabled && styles.labelDisabled, labelStyle]}
                testID={`${testID}-label-${index}`}
              >
                {option.label}
              </Text>

              <View
                style={[
                  styles.radioOuter,
                  {
                    width: sizeStyle.width,
                    height: sizeStyle.height,
                    borderColor: isSelected ? selectedColor : borderColor,
                    backgroundColor: isSelected ? `${selectedColor}33` : 'rgba(0, 0, 0, 0.3)',
                  },
                  option.disabled && styles.radioDisabled,
                ]}
                testID={`${testID}-radio-${index}`}
              >
                {isSelected && (
                  <View
                    style={[
                      styles.radioInner,
                      {
                        width: sizeStyle.innerSize,
                        height: sizeStyle.innerSize,
                        backgroundColor: selectedColor,
                      },
                    ]}
                    testID={`${testID}-radio-inner-${index}`}
                  />
                )}
              </View>
            </TouchableOpacity>

            {showDivider && index < options.length - 1 && (
              <View
                style={[styles.divider, { backgroundColor: dividerColor }]}
                testID={`${testID}-divider-${index}`}
              />
            )}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  label: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 16,
    lineHeight: 20,
    color: '#FFFFFF',
    fontWeight: '400',
    flex: 1,
    marginRight: 16,
  },
  checkedItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  labelDisabled: {
    opacity: 0.5,
  },
  radioOuter: {
    borderWidth: 2,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    borderRadius: 100,
  },
  radioDisabled: {
    opacity: 0.5,
  },
  divider: {
    height: 1,
    width: '100%',
  },
});
