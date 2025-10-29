import { memo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle, Text, TouchableOpacity } from 'react-native';

export type BillingPeriod = 'annually' | 'monthly';

export interface BillingToggleProps {
  /** Selected billing period */
  selected: BillingPeriod;
  /** Callback when selection changes */
  onSelect: (period: BillingPeriod) => void;
  /** Annually button text */
  annuallyText?: string;
  /** Monthly button text */
  monthlyText?: string;
  /** Container background color */
  backgroundColor?: string;
  /** Selected button background color */
  selectedBackgroundColor?: string;
  /** Selected button border color */
  selectedBorderColor?: string;
  /** Unselected text color */
  unselectedTextColor?: string;
  /** Selected text color */
  selectedTextColor?: string;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** Billing period toggle component (Annually/Monthly) */
export const BillingToggle = memo<BillingToggleProps>(
  ({
    selected,
    onSelect,
    annuallyText = 'Annually',
    monthlyText = 'Monthly',
    backgroundColor = 'rgba(255, 255, 255, 0.1)',
    selectedBackgroundColor = 'rgba(112, 153, 167, 0.3)',
    selectedBorderColor = '#7099A7',
    unselectedTextColor = 'rgba(255, 255, 255, 0.6)',
    selectedTextColor = '#FFFFFF',
    style,
    testID = 'billing-toggle',
  }) => {
    return (
      <View style={[styles.container, { backgroundColor }, style]} testID={testID}>
        {/* Annually Button */}
        <TouchableOpacity
          onPress={() => onSelect('annually')}
          activeOpacity={0.8}
          style={[
            styles.button,
            selected === 'annually' && {
              backgroundColor: selectedBackgroundColor,
              borderColor: selectedBorderColor,
              borderWidth: 2,
            },
          ]}
          testID={`${testID}-annually`}
        >
          <Text
            style={[
              styles.buttonText,
              { color: selected === 'annually' ? selectedTextColor : unselectedTextColor },
            ]}
          >
            {annuallyText}
          </Text>
        </TouchableOpacity>

        {/* Monthly Button */}
        <TouchableOpacity
          onPress={() => onSelect('monthly')}
          activeOpacity={0.8}
          style={[
            styles.button,
            selected === 'monthly' && {
              backgroundColor: selectedBackgroundColor,
              borderColor: selectedBorderColor,
              borderWidth: 2,
            },
          ]}
          testID={`${testID}-monthly`}
        >
          <Text
            style={[
              styles.buttonText,
              { color: selected === 'monthly' ? selectedTextColor : unselectedTextColor },
            ]}
          >
            {monthlyText}
          </Text>
        </TouchableOpacity>
      </View>
    );
  },
);

BillingToggle.displayName = 'BillingToggle';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 100,
    padding: 4,
    gap: 4,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
});
