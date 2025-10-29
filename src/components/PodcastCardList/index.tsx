import { memo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle, ScrollView, FlatList } from 'react-native';
import { PodcastCard, PodcastCardProps } from '../PodcastCard';

export interface PodcastCardListItem extends Omit<PodcastCardProps, 'style'> {
  id: string;
}

export interface PodcastCardListProps {
  /** Array of podcast items */
  items: PodcastCardListItem[];
  /** Use ScrollView instead of FlatList */
  useScrollView?: boolean;
  /** Background color */
  backgroundColor?: string;
  /** Spacing between cards */
  spacing?: number;
  /** Horizontal padding */
  horizontalPadding?: number;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Content container style */
  contentContainerStyle?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** Podcast card list component - Optimized with memo and FlatList */
export const PodcastCardList = memo<PodcastCardListProps>(
  ({
    items,
    useScrollView = false,
    backgroundColor = '#000000',
    spacing = 16,
    horizontalPadding = 16,
    style,
    contentContainerStyle,
    testID = 'podcast-card-list',
  }) => {
    const renderItem = ({ item, index }: { item: PodcastCardListItem; index: number }) => {
      const { id, ...cardProps } = item;
      return (
        <View
          style={[styles.cardWrapper, { marginBottom: index === items.length - 1 ? 0 : spacing }]}
          testID={`${testID}-item-${index}`}
        >
          <PodcastCard {...cardProps} testID={`${testID}-card-${index}`} />
        </View>
      );
    };

    if (useScrollView) {
      return (
        <ScrollView
          style={[styles.container, { backgroundColor }, style]}
          contentContainerStyle={[
            styles.scrollContentContainer,
            {
              paddingHorizontal: horizontalPadding,
              paddingVertical: spacing,
            },
            contentContainerStyle,
          ]}
          showsVerticalScrollIndicator={false}
          testID={testID}
        >
          {items.map((item, index) => (
            <View
              key={item.id}
              style={[
                styles.cardWrapper,
                { marginBottom: index === items.length - 1 ? 0 : spacing },
              ]}
              testID={`${testID}-item-${index}`}
            >
              <PodcastCard {...item} testID={`${testID}-card-${index}`} />
            </View>
          ))}
        </ScrollView>
      );
    }

    return (
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={[styles.container, { backgroundColor }, style]}
        contentContainerStyle={[
          styles.contentContainer,
          {
            paddingHorizontal: horizontalPadding,
            paddingVertical: spacing,
          },
          contentContainerStyle,
        ]}
        showsVerticalScrollIndicator={false}
        testID={testID}
      />
    );
  },
);

PodcastCardList.displayName = 'PodcastCardList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  scrollContentContainer: {
    flexGrow: 1,
  },
  cardWrapper: {
    width: '100%',
  },
});
