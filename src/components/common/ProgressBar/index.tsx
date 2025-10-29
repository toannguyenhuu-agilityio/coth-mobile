import { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle, Text } from 'react-native';

export interface ProgressBarProps {
  /** Progress value (0-100) */
  progress: number;
  /** Progress bar height */
  height?: number;
  /** Filled/progress color */
  progressColor?: string;
  /** Background/track color */
  backgroundColor?: string;
  /** Border radius */
  borderRadius?: number;
  /** Show completion icon */
  showIcon?: boolean;
  /** Custom completion icon */
  icon?: ReactNode;
  /** Icon size */
  iconSize?: number;
  /** Gap between progress bar and icon */
  iconGap?: number;
  /** Show progress text */
  showProgressText?: boolean;
  /** Progress text format function */
  formatProgressText?: (progress: number) => string;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Progress bar style */
  progressStyle?: StyleProp<ViewStyle>;
  /** Accessibility label */
  accessibilityLabel?: string;
  /** Test ID */
  testID?: string;
}

/** ProgressBar component for displaying progress indicators */
export const ProgressBar = ({
  progress,
  height = 8,
  progressColor = '#7099A7',
  backgroundColor = 'rgba(255, 255, 255, 0.2)',
  borderRadius = 20,
  showIcon = true,
  icon,
  iconSize = 16,
  iconGap = 8,
  showProgressText = false,
  formatProgressText = (p) => `${Math.round(p)}%`,
  style,
  progressStyle,
  accessibilityLabel,
  testID = 'progress-bar',
}: ProgressBarProps) => {
  // Clamp progress between 0 and 100
  const clampedProgress = Math.max(0, Math.min(100, progress));

  // Calculate track width when icon is shown and progress is complete
  const trackWidthAdjustment = showIcon && clampedProgress >= 100 ? iconSize + iconGap : 0;

  // Default check icon
  const renderIcon = () => {
    if (!showIcon || clampedProgress < 100) return null;

    if (icon) {
      return (
        <View
          style={[
            styles.iconWrapper,
            {
              width: iconSize,
              height: iconSize,
            },
          ]}
        >
          {icon}
        </View>
      );
    }

    return (
      <View
        style={[
          styles.iconContainer,
          {
            width: iconSize,
            height: iconSize,
            borderRadius: iconSize / 2,
          },
        ]}
        testID={`${testID}-icon`}
      >
        <Text style={styles.checkIcon}>✓</Text>
      </View>
    );
  };

  return (
    <View
      style={[styles.container, style]}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="progressbar"
      testID={testID}
    >
      <View style={styles.innerContainer}>
        <View
          style={[
            styles.track,
            {
              height,
              borderRadius,
              backgroundColor,
              marginRight: trackWidthAdjustment > 0 ? iconGap : 0,
            },
          ]}
          testID={`${testID}-track`}
        >
          <View
            style={[
              styles.progress,
              {
                width: `${clampedProgress}%`,
                height,
                borderRadius,
                backgroundColor: progressColor,
              },
              progressStyle,
            ]}
            testID={`${testID}-progress`}
          />
        </View>

        {/* Icon positioned at the end */}
        {renderIcon() && (
          <View
            style={[
              styles.iconPositioner,
              {
                width: iconSize,
                height: iconSize,
              },
            ]}
          >
            {renderIcon()}
          </View>
        )}
      </View>

      {showProgressText && (
        <Text style={styles.progressText} testID={`${testID}-text`}>
          {formatProgressText(clampedProgress)}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  track: {
    flex: 1,
    overflow: 'visible',
  },
  progress: {
    position: 'relative',
  },
  iconPositioner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#7099A7',
  },
  checkIcon: {
    color: '#7099A7',
    fontSize: 12,
    fontWeight: '700',
  },
  progressText: {
    position: 'absolute',
    right: 0,
    top: -20,
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
});
