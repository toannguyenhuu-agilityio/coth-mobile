import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

export interface MonthCompletionCardProps {
  /** Title text */
  title?: string;
  /** Current progress value */
  current: number;
  /** Total/target value */
  total: number;
  /** Show percentage */
  showPercentage?: boolean;
  /** Progress bar color */
  progressColor?: string;
  /** Progress bar background color */
  progressBackgroundColor?: string;
  /** Card background color */
  backgroundColor?: string;
  /** Title text color */
  titleColor?: string;
  /** Stats text color */
  statsColor?: string;
  /** Container style */
  containerStyle?: StyleProp<ViewStyle>;
  /** Title style */
  titleStyle?: StyleProp<TextStyle>;
  /** Stats style */
  statsStyle?: StyleProp<TextStyle>;
  /** Progress bar style */
  progressBarStyle?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** MonthCompletionCard component - displays progress with title and percentage */
export const MonthCompletionCard = ({
  title = 'Month Completion',
  current,
  total,
  showPercentage = true,
  progressColor = '#8BB4C8',
  progressBackgroundColor = 'rgba(255, 255, 255, 0.2)',
  backgroundColor = 'rgba(0, 0, 0, 0.5)',
  titleColor = '#FFFFFF',
  statsColor = '#FFFFFF',
  containerStyle,
  titleStyle,
  statsStyle,
  progressBarStyle,
  testID = 'month-completion-card',
}: MonthCompletionCardProps) => {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;
  const progressWidth = `${percentage}%`;

  return (
    <View style={[styles.container, { backgroundColor }, containerStyle]} testID={testID}>
      {/* Header: Title and Stats */}
      <View style={styles.header}>
        {/* Title */}
        {
          <Text
            style={[styles.title, { color: titleColor }, titleStyle]}
            testID={`${testID}-title`}
          >
            {title}
          </Text>
        }

        <Text style={[styles.stats, { color: statsColor }, statsStyle]} testID={`${testID}-stats`}>
          {current}/{total}
          {showPercentage && ` (${percentage}%)`}
        </Text>
      </View>

      {/* Progress Bar */}
      <View
        style={[
          styles.progressBarBackground,
          { backgroundColor: progressBackgroundColor },
          progressBarStyle,
        ]}
        testID={`${testID}-progress-background`}
      >
        <View
          style={[styles.progressBarFill, { width: progressWidth, backgroundColor: progressColor }]}
          testID={`${testID}-progress-fill`}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    padding: 16,
    gap: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
  },
  stats: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
  progressBarBackground: {
    height: 12,
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 6,
  },
});
