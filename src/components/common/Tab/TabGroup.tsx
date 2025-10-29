import { StyleProp, StyleSheet, ScrollView, View, ViewStyle } from 'react-native';
import { Tab } from './index';

export interface TabOption {
  /** Unique value for the tab */
  value: string;
  /** Display label */
  label: string;
  /** Disabled state */
  disabled?: boolean;
}

export interface TabGroupProps {
  /** Tab options */
  options: TabOption[];
  /** Selected tab value */
  value?: string;
  /** Change handler */
  onValueChange?: (value: string) => void;
  /** Container style */
  containerStyle?: StyleProp<ViewStyle>;
  /** ScrollView content style */
  contentContainerStyle?: StyleProp<ViewStyle>;
  /** Individual tab style */
  tabStyle?: StyleProp<ViewStyle>;
  /** Active background color for all tabs */
  activeBackgroundColor?: string;
  /** Inactive background color for all tabs */
  inactiveBackgroundColor?: string;
  /** Active text color for all tabs */
  activeTextColor?: string;
  /** Inactive text color for all tabs */
  inactiveTextColor?: string;
  /** Show scroll indicators */
  showScrollIndicator?: boolean;
  /** Test ID */
  testID?: string;
}

/** TabGroup component for displaying multiple tabs in a scrollable container */
export const TabGroup = ({
  options,
  value,
  onValueChange,
  containerStyle,
  contentContainerStyle,
  tabStyle,
  activeBackgroundColor,
  inactiveBackgroundColor,
  activeTextColor,
  inactiveTextColor,
  showScrollIndicator = false,
  testID = 'tab-group',
}: TabGroupProps) => {
  return (
    <View style={[styles.container, containerStyle]} testID={testID}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={showScrollIndicator}
        contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
        testID={`${testID}-scroll`}
      >
        {options.map((option, index) => (
          <Tab
            key={option.value}
            label={option.label}
            isActive={value === option.value}
            onPress={() => !option.disabled && onValueChange?.(option.value)}
            disabled={option.disabled}
            style={tabStyle}
            activeBackgroundColor={activeBackgroundColor}
            inactiveBackgroundColor={inactiveBackgroundColor}
            activeTextColor={activeTextColor}
            inactiveTextColor={inactiveTextColor}
            testID={`${testID}-tab-${index}`}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  scrollContent: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
  },
});
