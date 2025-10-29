import {
  Dimensions,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { Accordion } from '../common/Accordion';

export interface BookChapterAccordionProps {
  /** Book name */
  bookName: string;
  /** Number of chapters */
  chapterCount: number;
  /** Chapter press handler */
  onChapterPress?: (chapter: number) => void;
  /** Initially expanded state */
  defaultExpanded?: boolean;
  /** Controlled expanded state */
  expanded?: boolean;
  /** Change handler for controlled mode */
  onExpandedChange?: (expanded: boolean) => void;
  /** Number of columns in grid */
  columns?: number;
  /** Container style */
  containerStyle?: StyleProp<ViewStyle>;
  /** Chapter button style */
  chapterButtonStyle?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** BookChapterAccordion component - displays book chapters in expandable grid */
export const BookChapterAccordion = ({
  bookName,
  chapterCount,
  onChapterPress,
  defaultExpanded = false,
  expanded,
  onExpandedChange,
  columns = 5,
  containerStyle,
  chapterButtonStyle,
  testID = 'book-chapter-accordion',
}: BookChapterAccordionProps) => {
  const chapters = Array.from({ length: chapterCount }, (_, i) => i + 1);

  const handleChapterPress = (chapter: number) => {
    onChapterPress?.(chapter);
  };

  // Get screen width and calculate button size
  const screenWidth = Dimensions.get('window').width;
  const containerPadding = 32; // 16px padding on each side from screen edge
  const gridPadding = 24; // 12px padding on each side within grid
  const gap = 12;
  const totalHorizontalPadding = containerPadding + gridPadding;
  const availableWidth = screenWidth - totalHorizontalPadding;
  const totalGapWidth = gap * (columns - 1);
  const buttonSize = (availableWidth - totalGapWidth) / columns;

  return (
    <Accordion
      title={bookName}
      defaultExpanded={defaultExpanded}
      expanded={expanded}
      onExpandedChange={onExpandedChange}
      style={containerStyle}
      testID={testID}
    >
      <View style={styles.grid} testID={`${testID}-grid`}>
        {chapters.map((chapter) => (
          <TouchableOpacity
            key={chapter}
            style={[
              styles.chapterButton,
              chapterButtonStyle,
              { width: buttonSize, height: buttonSize },
            ]}
            onPress={() => handleChapterPress(chapter)}
            activeOpacity={0.7}
            testID={`${testID}-chapter-${chapter}`}
          >
            <Text style={styles.chapterText} testID={`${testID}-chapter-text-${chapter}`}>
              {chapter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </Accordion>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 5,
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  chapterButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chapterText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: 28,
  },
});
