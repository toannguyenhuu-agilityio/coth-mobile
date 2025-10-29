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

export interface ChatListItem {
  id: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  onPress?: () => void;
  onLongPress?: () => void;
}

export interface ChatListProps {
  /** Array of chat items */
  items: ChatListItem[];
  /** Background color */
  backgroundColor?: string;
  /** Card wrapper background color */
  cardBackgroundColor?: string;
  /** Show chat bubble icons */
  showIcons?: boolean;
  /** Show card wrapper */
  showCard?: boolean;
  /** Custom item renderer */
  renderItem?: (item: ChatListItem, index: number) => ReactNode;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Content container style */
  contentContainerStyle?: StyleProp<ViewStyle>;
  /** Card style */
  cardStyle?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** Chat list component with icons and subtitles */
export const ChatList = ({
  items,
  backgroundColor = '#1C1C1E',
  cardBackgroundColor = 'rgba(58, 58, 60, 0.6)',
  showIcons = true,
  renderItem,
  style,
  contentContainerStyle,
  cardStyle,
  testID = 'chat-list',
}: ChatListProps) => {
  const renderDefaultIcon = () => (
    <View style={styles.iconContainer}>
      <Text style={styles.iconText}>💬</Text>
    </View>
  );

  const renderDefaultItem = (item: ChatListItem, index: number) => (
    <TouchableOpacity
      key={item.id || index}
      onPress={item.onPress}
      onLongPress={item.onLongPress}
      style={styles.chatItem}
      activeOpacity={0.7}
      testID={`${testID}-item-${index}`}
    >
      {showIcons && <View style={styles.iconWrapper}>{item.icon || renderDefaultIcon()}</View>}
      <View style={styles.chatContent}>
        <Text style={styles.chatTitle} numberOfLines={1}>
          {item.title}
        </Text>
        {item.subtitle && (
          <Text style={styles.chatSubtitle} numberOfLines={1}>
            {item.subtitle}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor }, style]} testID={testID}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[styles.card, { backgroundColor: cardBackgroundColor }, cardStyle]}
          testID={`${testID}-card`}
        >
          {items.length > 0 ? (
            items.map((item, index) =>
              renderItem ? renderItem(item, index) : renderDefaultItem(item, index),
            )
          ) : (
            <View style={styles.emptyState} testID={`${testID}-empty`}>
              <Text style={styles.emptyStateText}>No Results</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    width: '100%',
  },
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    width: '100%',
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 12,
    width: '100%',
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 24,
  },
  chatContent: {
    flex: 1,
    justifyContent: 'center',
  },
  chatTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  chatSubtitle: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 14,
    fontWeight: '400',
  },
  emptyState: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  emptyStateText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});
