import { View, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Rect } from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
}

// User Profile Icon
export const UserProfileIcon = ({ size = 24, color = '#FFFFFF' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="8" r="4" stroke={color} strokeWidth="2" fill="none" />
    <Path
      d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

// Bell/Notification Icon
export const BellIcon = ({ size = 24, color = '#FFFFFF' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 3C10.3431 3 9 4.34315 9 6V7.58579C9 8.11622 8.78929 8.62493 8.41421 9L6.58579 10.8284C5.80474 11.6095 6.35817 13 7.41421 13H16.5858C17.6418 13 18.1953 11.6095 17.4142 10.8284L15.5858 9C15.2107 8.62493 15 8.11622 15 7.58579V6C15 4.34315 13.6569 3 12 3Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

// Clock/Reminder Icon
export const ClockIcon = ({ size = 24, color = '#FFFFFF' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" fill="none" />
    <Path
      d="M12 7V12L15 15"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Shopping Bag/Subscription Icon
export const ShoppingBagIcon = ({ size = 24, color = '#FFFFFF' }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M6 6H18L20 20H4L6 6Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

// Simple icon components without SVG (fallback)
export const SimpleUserIcon = ({ color = '#FFFFFF' }: { color?: string }) => (
  <View style={[styles.iconCircle, { borderColor: color }]}>
    <View style={[styles.iconHead, { backgroundColor: color }]} />
  </View>
);

export const SimpleBellIcon = ({ color = '#FFFFFF' }: { color?: string }) => (
  <View style={styles.bellContainer}>
    <View style={[styles.bellBody, { borderColor: color }]} />
    <View style={[styles.bellClapper, { backgroundColor: color }]} />
  </View>
);

export const SimpleClockIcon = ({ color = '#FFFFFF' }: { color?: string }) => (
  <View style={[styles.clockCircle, { borderColor: color }]}>
    <View style={[styles.clockHand, { backgroundColor: color }]} />
  </View>
);

export const SimpleBagIcon = ({ color = '#FFFFFF' }: { color?: string }) => (
  <View style={[styles.bagContainer, { borderColor: color }]}>
    <View style={[styles.bagHandle, { borderColor: color }]} />
  </View>
);

const styles = StyleSheet.create({
  // Simple User Icon
  iconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconHead: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: 2,
  },
  // Simple Bell Icon
  bellContainer: {
    width: 24,
    height: 24,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bellBody: {
    width: 16,
    height: 16,
    borderWidth: 2,
    borderRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  bellClapper: {
    width: 4,
    height: 4,
    borderRadius: 2,
  },
  // Simple Clock Icon
  clockCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockHand: {
    width: 2,
    height: 8,
    position: 'absolute',
    top: 6,
  },
  // Simple Bag Icon
  bagContainer: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderTopWidth: 0,
    borderRadius: 4,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  bagHandle: {
    width: 12,
    height: 8,
    borderWidth: 2,
    borderBottomWidth: 0,
    borderRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    position: 'absolute',
    top: -8,
    left: 2,
  },
});
