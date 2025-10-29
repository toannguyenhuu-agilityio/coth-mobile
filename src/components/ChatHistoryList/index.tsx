import { ReactNode } from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export interface ChatHistoryItem {
  id: string;
  title: string;
  date: Date | string;
  onPress?: () => void;
  onMenuPress?: () => void;
}

export interface ChatHistoryGroup {
  title: string;
  data: ChatHistoryItem[];
}

export interface ChatHistoryListProps {
  /** Array of chat items (will be auto-grouped by date) */
  items?: ChatHistoryItem[];
  /** Pre-grouped chat items by date */
  groupedItems?: ChatHistoryGroup[];
  /** Background color */
  backgroundColor?: string;
  /** Section background color */
  sectionBackgroundColor?: string;
  /** Custom section header renderer */
  renderSectionHeader?: (title: string) => ReactNode;
  /** Custom item renderer */
  renderItem?: (item: ChatHistoryItem, index: number) => ReactNode;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Content container style */
  contentContainerStyle?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** Chat history list component with date grouping */
export const ChatHistoryList = ({
  items = [],
  groupedItems,
  backgroundColor = '#1C1C1E',
  sectionBackgroundColor = 'rgba(58, 58, 60, 0.6)',
  renderSectionHeader,
  renderItem,
  style,
  contentContainerStyle,
  testID = 'chat-history-list',
}: ChatHistoryListProps) => {
  const groupItemsByDate = (chatItems: ChatHistoryItem[]): ChatHistoryGroup[] => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const groups: { [key: string]: ChatHistoryItem[] } = {
      Today: [],
      Yesterday: [],
    };

    chatItems.forEach((item) => {
      const itemDate = typeof item.date === 'string' ? new Date(item.date) : item.date;
      itemDate.setHours(0, 0, 0, 0);

      if (itemDate.getTime() === today.getTime()) {
        groups['Today'].push(item);
      } else if (itemDate.getTime() === yesterday.getTime()) {
        groups['Yesterday'].push(item);
      } else {
        const dateKey = itemDate.toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        });
        if (!groups[dateKey]) {
          groups[dateKey] = [];
        }
        groups[dateKey].push(item);
      }
    });

    const result: ChatHistoryGroup[] = [];

    if (groups['Today'].length > 0) {
      result.push({ title: 'Today', data: groups['Today'] });
    }
    if (groups['Yesterday'].length > 0) {
      result.push({ title: 'Yesterday', data: groups['Yesterday'] });
    }

    Object.keys(groups)
      .filter((key) => key !== 'Today' && key !== 'Yesterday' && groups[key].length > 0)
      .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
      .forEach((key) => {
        result.push({ title: key, data: groups[key] });
      });

    return result;
  };

  const sections = groupedItems || groupItemsByDate(items);

  const renderDefaultSectionHeader = (title: string) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  const renderDefaultItem = (item: ChatHistoryItem, index: number) => (
    <TouchableOpacity
      key={item.id || index}
      onPress={item.onPress}
      style={styles.chatItem}
      testID={`${testID}-item-${index}`}
    >
      <Text style={styles.chatItemText} numberOfLines={1}>
        {item.title}
      </Text>
      <TouchableOpacity
        onPress={item.onMenuPress}
        style={styles.chatItemMenu}
        testID={`${testID}-item-menu-${index}`}
      >
        <Text style={styles.menuDots}>⋮</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor }, style]} testID={testID}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
        showsVerticalScrollIndicator={false}
      >
        {sections.map((section, sectionIndex) => (
          <View
            key={section.title}
            style={[styles.section, { backgroundColor: sectionBackgroundColor }]}
            testID={`${testID}-section-${sectionIndex}`}
          >
            {renderSectionHeader
              ? renderSectionHeader(section.title)
              : renderDefaultSectionHeader(section.title)}
            <View style={styles.sectionContent}>
              {section.data.map((item, itemIndex) =>
                renderItem ? renderItem(item, itemIndex) : renderDefaultItem(item, itemIndex),
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    gap: 16,
  },
  section: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  sectionHeader: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  sectionHeaderText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  sectionContent: {
    paddingBottom: 8,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
  },
  chatItemText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '400',
    flex: 1,
    marginRight: 12,
  },
  chatItemMenu: {
    padding: 8,
  },
  menuDots: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
});
