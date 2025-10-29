import { memo, ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle, Text } from 'react-native';

export interface PricingOptionProps {
  /** Title text (e.g., "Pay Annually") */
  title: string;
  /** Price text (e.g., "$29 per month") */
  price: string;
  /** Badge text (e.g., "Save 12%") */
  badgeText?: string;
  /** Badge component */
  badge?: ReactNode;
  /** Background color */
  backgroundColor?: string;
  /** Border color */
  borderColor?: string;
  /** Border width */
  borderWidth?: number;
  /** Border radius */
  borderRadius?: number;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** Pricing option card component */
export const PricingOption = memo<PricingOptionProps>(
  ({
    title,
    price,
    badgeText,
    badge,
    backgroundColor = 'rgba(255, 255, 255, 0.05)',
    borderColor = 'rgba(255, 255, 255, 0.2)',
    borderWidth = 1,
    borderRadius = 16,
    style,
    testID = 'pricing-option',
  }) => {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor,
            borderColor,
            borderWidth,
            borderRadius,
          },
          style,
        ]}
        testID={testID}
      >
        {/* Content Row */}
        <View style={styles.content}>
          {/* Left Side: Title and Price */}
          <View style={styles.textContainer}>
            <Text style={styles.title} testID={`${testID}-title`}>
              {title}
            </Text>
            <Text style={styles.price} testID={`${testID}-price`}>
              {price}
            </Text>
          </View>

          {/* Right Side: Badge */}
          {(badgeText || badge) && (
            <View testID={`${testID}-badge`}>
              {badge || (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{badgeText}</Text>
                </View>
              )}
            </View>
          )}
        </View>
      </View>
    );
  },
);

PricingOption.displayName = 'PricingOption';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  price: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 30,
    color: '#FFFFFF',
  },
  badge: {
    backgroundColor: 'rgba(112, 153, 167, 0.3)',
    borderWidth: 2,
    borderColor: '#7099A7',
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  badgeText: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    color: '#FFFFFF',
  },
});
