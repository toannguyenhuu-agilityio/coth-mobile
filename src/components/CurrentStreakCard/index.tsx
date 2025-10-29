import { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

export interface WeekDay {
  /** Day abbreviation (e.g., 'Su', 'Mo') */
  day: string;
  /** Day number (e.g., 8, 9, 10) */
  dayNumber: number;
  /** Whether this day is highlighted/selected */
  isHighlighted?: boolean;
  /** Whether this day is completed (shows icon instead of number) */
  isCompleted?: boolean;
}

export interface CurrentStreakCardProps {
  /** Current streak count */
  streakCount: number;
  /** Streak title text */
  streakTitle?: string;
  /** Array of week days to display */
  weekDays: WeekDay[];
  /** Custom streak icon */
  streakIcon?: ReactNode;
  /** Custom completed day icon */
  completedDayIcon?: ReactNode;
  /** Streak card background color */
  streakCardBackground?: string;
  /** Week card background color */
  weekCardBackground?: string;
  /** Streak text color */
  streakTextColor?: string;
  /** Week day text color */
  weekDayTextColor?: string;
  /** Day number text color */
  dayNumberTextColor?: string;
  /** Highlighted day background color */
  highlightedDayBackground?: string;
  /** Completed day background color */
  completedDayBackground?: string;
  /** Container style */
  containerStyle?: StyleProp<ViewStyle>;
  /** Streak card style */
  streakCardStyle?: StyleProp<ViewStyle>;
  /** Week card style */
  weekCardStyle?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** CurrentStreakCard component - displays current streak with week calendar view */
export const CurrentStreakCard = ({
  streakCount,
  streakTitle = 'Your Current Streak',
  weekDays,
  streakIcon,
  completedDayIcon,
  streakCardBackground = '#8BB4C8',
  weekCardBackground = '#2A2A2A',
  streakTextColor = '#FFFFFF',
  weekDayTextColor = '#FFFFFF',
  dayNumberTextColor = '#FFFFFF',
  highlightedDayBackground = '#4A4A4A',
  completedDayBackground = '#555555',
  containerStyle,
  streakCardStyle,
  weekCardStyle,
  testID = 'current-streak-card',
}: CurrentStreakCardProps) => {
  return (
    <View style={[styles.container, containerStyle]} testID={testID}>
      {/* Streak Card */}
      <View
        style={[styles.streakCard, { backgroundColor: streakCardBackground }, streakCardStyle]}
        testID={`${testID}-streak-card`}
      >
        <Text
          style={[styles.streakTitle, { color: streakTextColor }]}
          testID={`${testID}-streak-title`}
        >
          {streakTitle}
        </Text>
        <View style={styles.streakIconContainer}>
          {streakIcon || (
            <Text style={styles.defaultStreakNumber} testID={`${testID}-streak-count`}>
              {streakCount}
            </Text>
          )}
        </View>
      </View>

      {/* Week Calendar Card */}
      <View
        style={[styles.weekCard, { backgroundColor: weekCardBackground }, weekCardStyle]}
        testID={`${testID}-week-card`}
      >
        {/* Day Labels */}
        <View style={styles.dayLabelsRow} testID={`${testID}-day-labels`}>
          {weekDays.map((day, index) => (
            <Text
              key={`label-${index}`}
              style={[styles.dayLabel, { color: weekDayTextColor }]}
              testID={`${testID}-day-label-${day.day}`}
            >
              {day.day}
            </Text>
          ))}
        </View>

        {/* Day Numbers */}
        <View style={styles.dayNumbersRow} testID={`${testID}-day-numbers`}>
          {weekDays.map((day, index) => (
            <View
              key={`number-${index}`}
              style={[
                styles.dayNumberBox,
                day.isCompleted && {
                  backgroundColor: completedDayBackground,
                },
                day.isHighlighted && {
                  backgroundColor: highlightedDayBackground,
                },
              ]}
              testID={`${testID}-day-box-${day.dayNumber}`}
            >
              {day.isCompleted ? (
                completedDayIcon || <Text style={styles.completedIcon}>🤍</Text>
              ) : (
                <Text
                  style={[styles.dayNumber, { color: dayNumberTextColor }]}
                  testID={`${testID}-day-number-${day.dayNumber}`}
                >
                  {day.dayNumber}
                </Text>
              )}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  streakCard: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
  },
  streakTitle: {
    fontFamily: 'AkzidenzGrotesk-Regular',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 30,
    marginBottom: 24,
    textAlign: 'center',
  },
  streakIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultStreakNumber: {
    fontFamily: 'RobotoMono-Bold',
    fontWeight: '700',
    fontSize: 120,
    color: '#FFFFFF',
    lineHeight: 120,
  },
  weekCard: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 24,
    paddingHorizontal: 20,
    gap: 16,
  },
  dayLabelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dayLabel: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    flex: 1,
    textAlign: 'center',
  },
  dayNumbersRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 4,
  },
  dayNumberBox: {
    flex: 1,
    aspectRatio: 1,
    maxWidth: 60,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  dayNumber: {
    // fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
  },
  completedIcon: {
    fontSize: 32,
  },
});
