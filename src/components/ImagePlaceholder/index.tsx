import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

export interface ImagePlaceholderProps {
  /** File extension or label */
  label?: string;
  /** Container background color */
  backgroundColor?: string;
  /** Icon color */
  iconColor?: string;
  /** Label text color */
  labelColor?: string;
  /** Size of the placeholder */
  size?: 'small' | 'medium' | 'large';
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** Image placeholder component for displaying file type with icon */
export const ImagePlaceholder = ({
  label = 'PNG',
  backgroundColor = 'rgba(255, 255, 255, 0.05)',
  iconColor = '#999999',
  labelColor = '#999999',
  size = 'medium',
  style,
  testID = 'image-placeholder',
}: ImagePlaceholderProps) => {
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

  const getIconSize = () => {
    switch (size) {
      case 'small':
        return 32;
      case 'medium':
        return 48;
      case 'large':
        return 64;
      default:
        return 48;
    }
  };

  const getLabelFontSize = () => {
    switch (size) {
      case 'small':
        return 12;
      case 'medium':
        return 16;
      case 'large':
        return 20;
      default:
        return 16;
    }
  };

  return (
    <View style={[styles.container, getSizeStyle(), { backgroundColor }, style]} testID={testID}>
      <View style={[styles.iconWrapper, { width: getIconSize(), height: getIconSize() }]}>
        {/* Frame icon */}
        <View style={styles.iconInner}>
          {/* Top left circle */}
          <View
            style={[
              styles.circle,
              {
                width: getIconSize() * 0.18,
                height: getIconSize() * 0.18,
                backgroundColor: iconColor,
              },
            ]}
          />
          {/* Bottom landscape */}
          <View
            style={[
              styles.landscape,
              {
                width: getIconSize() * 0.6,
                height: getIconSize() * 0.35,
                backgroundColor: iconColor,
                borderRadius: getIconSize() * 0.08,
              },
            ]}
          />
        </View>
      </View>
      <Text
        style={[
          styles.label,
          {
            fontSize: getLabelFontSize(),
            color: labelColor,
          },
        ]}
        testID={`${testID}-label`}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    gap: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  sizeSmall: {
    width: 80,
    height: 80,
  },
  sizeMedium: {
    width: 120,
    height: 120,
  },
  sizeLarge: {
    width: 160,
    height: 160,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconInner: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  circle: {
    borderRadius: 100,
  },
  landscape: {
    marginTop: 4,
  },
  label: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
