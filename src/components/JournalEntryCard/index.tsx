import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export interface JournalEntryCardProps {
  /** Entry title */
  title: string;
  /** Entry date (formatted string, e.g., "5/28/25") */
  date: string;
  /** Entry preview text */
  preview: string;
  /** Card press handler */
  onPress?: () => void;
  /** Show title label */
  showTitleLabel?: boolean;
  /** Title label text */
  titleLabel?: string;
  /** Background color */
  backgroundColor?: string;
  /** Title label color */
  titleLabelColor?: string;
  /** Date color */
  dateColor?: string;
  /** Preview color */
  previewColor?: string;
  /** Container style */
  containerStyle?: StyleProp<ViewStyle>;
  /** Title label style */
  titleLabelStyle?: StyleProp<TextStyle>;
  /** Date style */
  dateStyle?: StyleProp<TextStyle>;
  /** Preview style */
  previewStyle?: StyleProp<TextStyle>;
  /** Number of lines for preview */
  previewNumberOfLines?: number;
  /** Test ID */
  testID?: string;
}

/** JournalEntryCard component - displays journal entry with date and preview */
export const JournalEntryCard = ({
  title,
  date,
  preview,
  onPress,
  showTitleLabel = true,
  titleLabel = 'Title',
  backgroundColor = 'rgba(255, 255, 255, 0.05)',
  titleLabelColor = '#FFFFFF',
  dateColor = '#999999',
  previewColor = '#CCCCCC',
  containerStyle,
  titleLabelStyle,
  dateStyle,
  previewStyle,
  previewNumberOfLines = 1,
  testID = 'journal-entry-card',
}: JournalEntryCardProps) => {
  const content = (
    <View style={[styles.container, { backgroundColor }, containerStyle]} testID={testID}>
      {/* Title Label */}
      {showTitleLabel && (
        <Text
          style={[styles.titleLabel, { color: titleLabelColor }, titleLabelStyle]}
          testID={`${testID}-title-label`}
        >
          {titleLabel}
        </Text>
      )}

      {/* Date and Preview */}
      <View style={styles.content}>
        <Text style={[styles.date, { color: dateColor }, dateStyle]} testID={`${testID}-date`}>
          {date}
        </Text>
        <Text
          style={[styles.preview, { color: previewColor }, previewStyle]}
          numberOfLines={previewNumberOfLines}
          ellipsizeMode="tail"
          testID={`${testID}-preview`}
        >
          {preview}
        </Text>
      </View>
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.8} testID={`${testID}-touchable`}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    gap: 12,
  },
  titleLabel: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
  },
  content: {
    gap: 8,
  },
  date: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
  },
  preview: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
  },
});
