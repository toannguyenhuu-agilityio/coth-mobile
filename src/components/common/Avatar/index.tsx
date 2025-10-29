import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

export interface AvatarProps {
  /** Image source for the avatar */
  source?: ImageSourcePropType;
  /** Fallback initials when no image is provided */
  initials?: string;
  /** Size variant */
  size?: 'small' | 'medium' | 'large';
  /** Border width */
  borderWidth?: number;
  /** Border color */
  borderColor?: string;
  /** Background color for initials */
  backgroundColor?: string;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Accessibility label */
  accessibilityLabel?: string;
  /** Test ID */
  testID?: string;
}

/** Avatar component for displaying user profile images or initials */
export const Avatar = ({
  source,
  initials,
  size = 'medium',
  borderWidth = 2,
  borderColor = 'rgba(255, 255, 255, 0.3)',
  backgroundColor = 'rgba(116, 139, 145, 0.5)',
  style,
  accessibilityLabel,
  testID = 'avatar',
}: AvatarProps) => {
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

  const getInitialsFontSize = () => {
    switch (size) {
      case 'small':
        return styles.initialsSmall;
      case 'medium':
        return styles.initialsMedium;
      case 'large':
        return styles.initialsLarge;
      default:
        return styles.initialsMedium;
    }
  };

  const containerStyle = [
    styles.container,
    getSizeStyle(),
    {
      borderWidth,
      borderColor,
      backgroundColor: source ? 'transparent' : backgroundColor,
    },
    style,
  ];

  return (
    <View
      style={containerStyle}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="image"
      testID={testID}
    >
      {source ? (
        <Image source={source} style={styles.image} resizeMode="cover" testID={`${testID}-image`} />
      ) : (
        <Text style={[styles.initials, getInitialsFontSize()]} testID={`${testID}-initials`}>
          {initials || '?'}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 9999, // Fully circular
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  initials: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  // Size styles
  sizeSmall: {
    width: 32,
    height: 32,
  },
  sizeMedium: {
    width: 40,
    height: 40,
  },
  sizeLarge: {
    width: 56,
    height: 56,
  },
  // Initials font size styles
  initialsSmall: {
    fontSize: 12,
    lineHeight: 14,
  },
  initialsMedium: {
    fontSize: 14,
    lineHeight: 18,
  },
  initialsLarge: {
    fontSize: 20,
    lineHeight: 24,
  },
});
