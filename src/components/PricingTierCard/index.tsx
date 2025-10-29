import { memo, ReactNode, useState, useRef, useEffect } from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';

export interface PricingTierCardProps {
  /** Tier name (e.g., "Gold", "Silver") */
  tierName: string;
  /** Price text */
  price: string;
  /** Billing period text */
  billingPeriod?: string;
  /** Badge text (e.g., "Best Value") */
  badgeText?: string;
  /** Button text */
  buttonText?: string;
  /** Features list */
  features: string[];
  /** Icon component */
  icon?: ReactNode;
  /** Background color */
  backgroundColor?: string;
  /** Border color */
  borderColor?: string;
  /** Border width */
  borderWidth?: number;
  /** Border radius */
  borderRadius?: number;
  /** Show shadow effect */
  showShadow?: boolean;
  /** Show "See All Perks" expandable section */
  showPerksToggle?: boolean;
  /** Initial expanded state */
  initialExpanded?: boolean;
  /** Text for collapsed state */
  collapsedText?: string;
  /** Text for expanded state */
  expandedText?: string;
  /** Number of features to show when collapsed (0 = show all) */
  collapsedFeaturesCount?: number;
  /** On button press handler */
  onButtonPress?: () => void;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** Pricing tier card component for membership plans */
export const PricingTierCard = memo<PricingTierCardProps>(
  ({
    tierName,
    price,
    billingPeriod,
    badgeText,
    buttonText = 'Upgrade',
    features,
    icon,
    backgroundColor = 'rgba(255, 255, 255, 0.1)',
    borderColor = '#3FC9ED',
    borderWidth = 1,
    borderRadius = 16,
    showShadow = true,
    showPerksToggle = true,
    initialExpanded = false,
    collapsedText = 'See All Perks',
    expandedText = 'Collapse',
    collapsedFeaturesCount = 4,
    onButtonPress,
    style,
    testID = 'pricing-tier-card',
  }) => {
    const [isExpanded, setIsExpanded] = useState(initialExpanded);
    const chevronRotation = useRef(new Animated.Value(initialExpanded ? 1 : 0)).current;
    const fadeAnims = useRef<{ [key: number]: Animated.Value }>({}).current;

    // Only show toggle if there are more features than the collapsed count
    const shouldShowToggle = showPerksToggle && features.length > collapsedFeaturesCount;

    // Initialize fade animations for features
    features.forEach((_, index) => {
      if (!fadeAnims[index]) {
        const shouldBeVisible =
          isExpanded || collapsedFeaturesCount === 0 || index < collapsedFeaturesCount;
        fadeAnims[index] = new Animated.Value(shouldBeVisible ? 1 : 0);
      }
    });

    // Handle toggle with animations
    const handleToggle = () => {
      const newExpandedState = !isExpanded;

      // Animate chevron rotation
      Animated.timing(chevronRotation, {
        toValue: newExpandedState ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }).start();

      // Animate features fade in/out
      if (newExpandedState) {
        // Expanding: fade in hidden features
        const animations = features.slice(collapsedFeaturesCount).map((_, idx) => {
          const index = collapsedFeaturesCount + idx;
          return Animated.timing(fadeAnims[index], {
            toValue: 1,
            duration: 300,
            delay: idx * 30, // Stagger effect
            useNativeDriver: true,
          });
        });
        Animated.parallel(animations).start();
      } else {
        // Collapsing: fade out extra features
        const animations = features.slice(collapsedFeaturesCount).map((_, idx) => {
          const index = collapsedFeaturesCount + idx;
          return Animated.timing(fadeAnims[index], {
            toValue: 0,
            duration: 200,
            delay: 0,
            useNativeDriver: true,
          });
        });
        Animated.parallel(animations).start();
      }

      setIsExpanded(newExpandedState);
    };

    // Sync chevron rotation with initial state
    useEffect(() => {
      chevronRotation.setValue(isExpanded ? 1 : 0);
    }, [chevronRotation, isExpanded]);

    const chevronRotationStyle = {
      transform: [
        {
          rotate: chevronRotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['90deg', '-90deg'],
          }),
        },
      ],
    };

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
          showShadow && styles.shadow,
          style,
        ]}
        testID={testID}
      >
        {/* Header Section */}
        <View style={styles.header}>
          {/* Title and Price Row */}
          <View style={styles.titlePriceRow}>
            {/* Tier Name with Icon */}
            <View style={styles.tierNameContainer}>
              {icon && (
                <View style={styles.iconContainer} testID={`${testID}-icon`}>
                  {icon}
                </View>
              )}
              <Text style={styles.tierName} testID={`${testID}-tier-name`}>
                {tierName}
              </Text>
            </View>

            {/* Price Info */}
            <View style={styles.priceContainer}>
              <Text style={styles.price} testID={`${testID}-price`}>
                {price}
              </Text>
              {billingPeriod && (
                <Text style={styles.billingPeriod} testID={`${testID}-billing-period`}>
                  {billingPeriod}
                </Text>
              )}
            </View>
          </View>

          {/* Badge */}
          {badgeText && (
            <View style={styles.badge} testID={`${testID}-badge`}>
              <View style={styles.badgeBackground} />
              <Text style={styles.badgeText}>{badgeText}</Text>
            </View>
          )}
        </View>

        {/* Button */}
        <TouchableOpacity
          onPress={onButtonPress}
          activeOpacity={0.8}
          disabled={!onButtonPress}
          style={styles.button}
          testID={`${testID}-button`}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>

        {/* Features List */}
        <View style={styles.featuresContainer} testID={`${testID}-features`}>
          {features.map((feature, index) => {
            const shouldShow =
              isExpanded || collapsedFeaturesCount === 0 || index < collapsedFeaturesCount;
            const opacity = fadeAnims[index];

            if (!shouldShow && !isExpanded) return null;

            return (
              <Animated.View
                key={index}
                style={[styles.featureRow, { opacity }]}
                pointerEvents={shouldShow ? 'auto' : 'none'}
              >
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.featureText}>{feature}</Text>
              </Animated.View>
            );
          })}
        </View>

        {/* See All Perks Toggle */}
        {shouldShowToggle && (
          <TouchableOpacity
            onPress={handleToggle}
            activeOpacity={0.7}
            style={styles.perksToggle}
            testID={`${testID}-perks-toggle`}
          >
            <Text style={styles.perksToggleText}>{isExpanded ? expandedText : collapsedText}</Text>
            <Animated.Text style={[styles.chevron, chevronRotationStyle]}>›</Animated.Text>
          </TouchableOpacity>
        )}
      </View>
    );
  },
);

PricingTierCard.displayName = 'PricingTierCard';

const styles = StyleSheet.create({
  container: {
    width: 354,
    padding: 16,
    gap: 24,
  },
  shadow: {
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  header: {
    gap: 12,
  },
  titlePriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tierNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  iconContainer: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tierName: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 36,
    color: '#FFFFFF',
  },
  priceContainer: {
    gap: 2,
    alignItems: 'flex-end',
  },
  price: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: -0.3,
    color: '#FFFFFF',
  },
  billingPeriod: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15,
    color: '#D8D8D8',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 7,
  },
  badgeBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(63, 201, 237, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 8,
  },
  badgeText: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    zIndex: 1,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    height: 48,
    backgroundColor: 'rgba(116, 139, 145, 0.2)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  buttonText: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2,
  },
  featuresContainer: {
    gap: 12,
  },
  featureRow: {
    flexDirection: 'row',
    gap: 12,
  },
  bullet: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21,
    color: '#D8D8D8',
  },
  featureText: {
    flex: 1,
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21,
    color: '#D8D8D8',
  },
  perksToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  perksToggleText: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: '#FFFFFF',
  },
  chevron: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
