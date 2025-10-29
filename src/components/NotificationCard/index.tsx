import { memo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle, Text, TouchableOpacity } from 'react-native';

export interface NotificationCardProps {
  /** Notification message text */
  message: string;
  /** Timestamp text */
  timestamp: string;
  /** On press handler */
  onPress?: () => void;
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

/** Notification card component with message and timestamp */
export const NotificationCard = memo<NotificationCardProps>(
  ({
    message,
    timestamp,
    onPress,
    backgroundColor = 'rgba(255, 255, 255, 0.05)',
    borderColor = 'rgba(255, 255, 255, 0.2)',
    borderWidth = 1,
    borderRadius = 16,
    style,
    testID = 'notification-card',
  }) => {
    const CardContent = (
      <>
        {/* Message */}
        <Text style={styles.message} testID={`${testID}-message`}>
          {message}
        </Text>

        {/* Timestamp */}
        <Text style={styles.timestamp} testID={`${testID}-timestamp`}>
          {timestamp}
        </Text>
      </>
    );

    if (onPress) {
      return (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.8}
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
          {CardContent}
        </TouchableOpacity>
      );
    }

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
        {CardContent}
      </View>
    );
  },
);

NotificationCard.displayName = 'NotificationCard';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 8,
  },
  message: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#FFFFFF',
  },
  timestamp: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: 'rgba(255, 255, 255, 0.6)',
  },
});
