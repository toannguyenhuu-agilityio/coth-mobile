import { memo, ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle, Text, TouchableOpacity } from 'react-native';

export interface UpgradeSheetProps {
  /** Title text */
  title?: string;
  /** Message text */
  message?: string;
  /** Button text */
  buttonText?: string;
  /** Icon component */
  icon?: ReactNode;
  /** Close icon component */
  closeIcon?: ReactNode;
  /** Background color */
  backgroundColor?: string;
  /** Border radius */
  borderRadius?: number;
  /** On button press handler */
  onButtonPress?: () => void;
  /** On close press handler */
  onClosePress?: () => void;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** Upgrade sheet component for premium content prompts */
export const UpgradeSheet = memo<UpgradeSheetProps>(
  ({
    title = 'Upgrade To Gold Tier',
    message = 'Live Mentorship requires Gold tier. Upgrade your tier to access it.',
    buttonText = 'Upgrade',
    icon,
    closeIcon,
    backgroundColor = '#1E1E1E',
    borderRadius = 38,
    onButtonPress,
    onClosePress,
    style,
    testID = 'upgrade-sheet',
  }) => {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor,
            borderRadius,
          },
          style,
        ]}
        testID={testID}
      >
        {/* Toolbar */}
        <View style={styles.toolbar}>
          <View style={styles.titleRow}>
            <Text style={styles.title} testID={`${testID}-title`}>
              {title}
            </Text>
            {(closeIcon || onClosePress) && (
              <TouchableOpacity
                onPress={onClosePress}
                activeOpacity={0.7}
                style={styles.closeButton}
                testID={`${testID}-close-button`}
              >
                {closeIcon || <Text style={styles.closeText}>✕</Text>}
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Icon */}
          {icon && (
            <View style={styles.iconContainer} testID={`${testID}-icon`}>
              {icon}
            </View>
          )}

          {/* Message */}
          <Text style={styles.message} testID={`${testID}-message`}>
            {message}
          </Text>

          {/* Button */}
          <TouchableOpacity
            onPress={onButtonPress}
            activeOpacity={0.8}
            disabled={!onButtonPress}
            style={styles.button}
            testID={`${testID}-button`}
          >
            <Text style={styles.buttonText}>{buttonText}</Text>
            <Text style={styles.buttonIcon}>›</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  },
);

UpgradeSheet.displayName = 'UpgradeSheet';

const styles = StyleSheet.create({
  container: {
    width: 354,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.18,
    shadowRadius: 75,
    elevation: 10,
  },
  toolbar: {
    width: '100%',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 0,
    paddingLeft: 24,
    paddingRight: 16,
  },
  title: {
    flex: 1,
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: -0.3,
    color: '#FFFFFF',
  },
  closeButton: {
    padding: 8,
    marginLeft: -4,
  },
  closeText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  content: {
    alignItems: 'center',
    gap: 24,
    padding: 24,
  },
  iconContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21,
    color: '#D8D8D8',
    textAlign: 'center',
    width: '100%',
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
  buttonIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
