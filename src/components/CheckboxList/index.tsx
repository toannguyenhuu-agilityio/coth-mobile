import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { SimpleCheckbox } from '@/components/common/Checkbox';

export interface CheckboxOption {
  /** Option label */
  label: string;
  /** Option value/identifier */
  value: string;
  /** Checked state */
  checked?: boolean;
  /** Disabled state */
  disabled?: boolean;
}

export interface CheckboxListProps {
  /** List of checkbox options */
  options: CheckboxOption[];
  /** Show divider between items */
  showDivider?: boolean;
  /** Divider color */
  dividerColor?: string;
  /** Checkbox size */
  size?: 'small' | 'medium' | 'large';
  /** Checked checkbox color */
  checkedColor?: string;
  /** Unchecked checkbox color */
  uncheckedColor?: string;
  /** Container style */
  containerStyle?: StyleProp<ViewStyle>;
  /** Item container style */
  itemStyle?: StyleProp<ViewStyle>;
  /** Change handler - receives value and checked state */
  onCheckedChange?: (value: string, checked: boolean, label: string) => void;
  /** Test ID */
  testID?: string;
}

/** CheckboxList component - displays a list of checkboxes with labels */
export const CheckboxList = ({
  options,
  showDivider = false,
  dividerColor = 'rgba(255, 255, 255, 0.1)',
  size = 'medium',
  checkedColor = '#2587A0',
  uncheckedColor = 'rgba(0, 0, 0, 0.3)',
  containerStyle,
  itemStyle,
  onCheckedChange,
  testID = 'checkbox-list',
}: CheckboxListProps) => {
  const handleCheckboxChange = (checked: boolean, label?: string, value?: string) => {
    if (onCheckedChange && value && label) {
      onCheckedChange(value, checked, label);
    }
  };

  return (
    <View style={[styles.container, containerStyle]} testID={testID}>
      {options.map((option, index) => (
        <View key={option.value} testID={`${testID}-item-${index}`}>
          <View style={[styles.itemContainer, itemStyle, option.checked && styles.checkedItem]}>
            <SimpleCheckbox
              checked={option.checked}
              label={option.label}
              labelPosition="left"
              size={size}
              checkedColor={checkedColor}
              uncheckedColor={uncheckedColor}
              disabled={option.disabled}
              onCheckedChange={(checked, label) =>
                handleCheckboxChange(checked, label, option.value)
              }
              style={styles.checkboxContainer}
              testID={`${testID}-checkbox-${index}`}
            />
          </View>
          {showDivider && index < options.length - 1 && (
            <View
              style={[styles.divider, { backgroundColor: dividerColor }]}
              testID={`${testID}-divider-${index}`}
            />
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  checkedItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  checkboxContainer: {
    width: '100%',
    justifyContent: 'space-between',
  },
  divider: {
    height: 1,
    width: '100%',
  },
});
