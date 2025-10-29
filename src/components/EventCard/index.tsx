import { ReactNode } from 'react';
import {
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  Image,
} from 'react-native';

export interface EventCardProps {
  /** Event title */
  title: string;
  /** Event time */
  time: string;
  /** Event logo/icon */
  logo?: ReactNode;
  /** Event logo image source */
  logoImage?: ImageSourcePropType;
  /** Show lock icon (for locked/premium events) */
  isLocked?: boolean;
  /** Show calendar button */
  showCalendarButton?: boolean;
  /** Show play button */
  showPlayButton?: boolean;
  /** Calendar button press handler */
  onCalendarPress?: () => void;
  /** Play button press handler */
  onPlayPress?: () => void;
  /** Card press handler */
  onPress?: () => void;
  /** Highlight/featured state */
  isHighlighted?: boolean;
  /** Container style */
  containerStyle?: StyleProp<ViewStyle>;
  /** Title style */
  titleStyle?: StyleProp<TextStyle>;
  /** Time style */
  timeStyle?: StyleProp<TextStyle>;
  /** Time badge style */
  timeBadgeStyle?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** EventCard component - displays event information with action buttons */
export const EventCard = ({
  title,
  time,
  logo,
  logoImage,
  isLocked = false,
  showCalendarButton = true,
  showPlayButton = true,
  onCalendarPress,
  onPlayPress,
  onPress,
  isHighlighted = false,
  containerStyle,
  titleStyle,
  timeStyle,
  timeBadgeStyle,
  testID = 'event-card',
}: EventCardProps) => {
  const renderLogo = () => {
    if (logoImage) {
      return (
        <Image
          source={logoImage}
          style={styles.logoImage}
          resizeMode="contain"
          testID={`${testID}-logo-image`}
        />
      );
    }
    if (logo) {
      return logo;
    }
    return <Text style={styles.defaultLogo}>📅</Text>;
  };

  return (
    <TouchableOpacity
      style={[styles.container, isHighlighted && styles.containerHighlighted, containerStyle]}
      onPress={onPress}
      activeOpacity={0.8}
      testID={testID}
    >
      {/* Lock Icon (top-left corner) - Diagonal Triangle */}
      {isLocked && (
        <View style={styles.lockWrapper} testID={`${testID}-lock`}>
          <View style={styles.lockTriangle} />
          <View style={styles.lockContent}>
            <Text style={styles.lockIcon}>🔒</Text>
          </View>
        </View>
      )}

      {/* Logo */}
      <View style={styles.logoContainer} testID={`${testID}-logo-container`}>
        {renderLogo()}
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Title */}
        <Text style={[styles.title, titleStyle]} numberOfLines={2} testID={`${testID}-title`}>
          {title}
        </Text>

        {/* Time Badge */}
        <View style={[styles.timeBadge, timeBadgeStyle]} testID={`${testID}-time-badge`}>
          <Text style={[styles.time, timeStyle]} testID={`${testID}-time`}>
            {time}
          </Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actions}>
        {showCalendarButton && (
          <TouchableOpacity
            style={styles.actionButton}
            onPress={onCalendarPress}
            testID={`${testID}-calendar-button`}
          >
            <Text style={styles.calendarIcon}>📅</Text>
          </TouchableOpacity>
        )}

        {showPlayButton && (
          <TouchableOpacity
            style={styles.actionButton}
            onPress={onPlayPress}
            testID={`${testID}-play-button`}
          >
            <Text style={styles.playIcon}>▶</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    padding: 16,
    gap: 16,
    minHeight: 100,
    position: 'relative',
  },
  containerHighlighted: {
    borderColor: '#D4AF37',
    borderWidth: 2,
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
  },
  lockWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    zIndex: 10,
  },
  lockTriangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 60,
    borderRightWidth: 60,
    borderTopColor: '#D4AF37',
    borderRightColor: 'transparent',
    borderTopLeftRadius: 12,
  },
  lockContent: {
    position: 'absolute',
    top: 5,
    left: 5,
  },
  lockIcon: {
    fontSize: 20,
    color: '#000',
  },
  logoContainer: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 80,
    height: 80,
  },
  defaultLogo: {
    fontSize: 48,
  },
  content: {
    flex: 1,
    gap: 8,
  },
  title: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    lineHeight: 26,
  },
  timeBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
  },
  time: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 16,
    fontWeight: '600',
    color: '#8BB4C8',
    lineHeight: 20,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarIcon: {
    fontSize: 24,
  },
  playIcon: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});
