import { ReactNode } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';

export interface DayStatus {
  /** Day of week abbreviation */
  day: string;
  /** Day status: completed, missed, upcoming, future */
  status: 'completed' | 'missed' | 'upcoming' | 'future';
  /** Day number (optional, for upcoming/future) */
  dayNumber?: number;
}

export interface DayStreakCardProps {
  /** Current streak count */
  streakCount: number;
  /** Streak label */
  streakLabel?: string;
  /** Array of day statuses for the week */
  days: DayStatus[];
  /** Encouragement message */
  message?: string;
  /** Icon to show for completed days */
  completedIcon?: ReactNode;
  /** Icon to show for missed days */
  missedIcon?: ReactNode;
  /** Show calendar icon */
  showCalendarIcon?: boolean;
  /** Calendar icon press handler */
  onCalendarPress?: () => void;
  /** Container style */
  containerStyle?: StyleProp<ViewStyle>;
  /** Streak number style */
  streakNumberStyle?: StyleProp<TextStyle>;
  /** Message style */
  messageStyle?: StyleProp<TextStyle>;
  /** Test ID */
  testID?: string;
}

/** DayStreakCard component - displays streak count and week progress */
export const DayStreakCard = ({
  streakCount,
  streakLabel = 'Day Streak',
  days,
  message = "Keep going, you're doing great!",
  completedIcon,
  missedIcon,
  showCalendarIcon = true,
  onCalendarPress,
  containerStyle,
  streakNumberStyle,
  messageStyle,
  testID = 'day-streak-card',
}: DayStreakCardProps) => {
  const renderDayBox = (dayStatus: DayStatus, index: number) => {
    const { day, status, dayNumber } = dayStatus;

    const getBoxStyle = () => {
      switch (status) {
        case 'completed':
          return styles.dayBoxCompleted;
        case 'missed':
          return styles.dayBoxMissed;
        case 'upcoming':
        case 'future':
          return styles.dayBoxFuture;
        default:
          return styles.dayBoxFuture;
      }
    };

    const renderContent = () => {
      if (status === 'completed' && completedIcon) {
        return completedIcon;
      }
      if (status === 'missed' && missedIcon) {
        return <Text style={styles.missedText}>✕</Text>;
      }
      if (status === 'missed' && !missedIcon) {
        return <Text style={styles.missedText}>✕</Text>;
      }
      if (status === 'completed' && !completedIcon) {
        return <Text style={styles.completedIcon}>🙏</Text>;
      }
      if ((status === 'upcoming' || status === 'future') && dayNumber) {
        return <Text style={styles.dayNumber}>{dayNumber}</Text>;
      }
      return null;
    };

    return (
      <View key={`${day}-${index}`} style={styles.dayContainer} testID={`${testID}-day-${index}`}>
        <Text style={styles.dayLabel} testID={`${testID}-day-label-${index}`}>
          {day}
        </Text>
        <View style={[styles.dayBox, getBoxStyle()]} testID={`${testID}-day-box-${index}`}>
          {renderContent()}
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.container, containerStyle]} testID={testID}>
      {/* Header with streak count and calendar icon */}
      <View style={styles.header}>
        <View style={styles.streakInfo}>
          <Text style={[styles.streakNumber, streakNumberStyle]} testID={`${testID}-streak-number`}>
            {streakCount}
          </Text>
          <Text style={styles.streakLabel} testID={`${testID}-streak-label`}>
            {streakLabel}
          </Text>
        </View>

        {showCalendarIcon && (
          <TouchableOpacity
            style={styles.calendarButton}
            onPress={onCalendarPress}
            testID={`${testID}-calendar-button`}
          >
            <Text style={styles.calendarIcon}>📅</Text>
            <Text style={styles.arrowIcon}>›</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Days of the week */}
      <View style={styles.daysContainer} testID={`${testID}-days-container`}>
        {days.map((dayStatus, index) => renderDayBox(dayStatus, index))}
      </View>

      {/* Encouragement message */}
      {message && (
        <Text style={[styles.message, messageStyle]} testID={`${testID}-message`}>
          {message}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    padding: 20,
    gap: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  streakInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  streakNumber: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 72,
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: 72,
  },
  streakLabel: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 24,
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: 30,
  },
  calendarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  calendarIcon: {
    fontSize: 24,
  },
  arrowIcon: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: '300',
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  dayContainer: {
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  dayLabel: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  dayBox: {
    width: 56,
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  dayBoxCompleted: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  dayBoxMissed: {
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    borderColor: 'rgba(255, 0, 0, 0.5)',
  },
  dayBoxFuture: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  completedIcon: {
    fontSize: 32,
  },
  missedText: {
    fontSize: 32,
    color: '#FF5555',
    fontWeight: 'bold',
  },
  dayNumber: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 20,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  message: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 18,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'left',
  },
});
