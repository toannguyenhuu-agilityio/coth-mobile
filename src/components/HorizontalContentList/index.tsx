import { memo } from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  FlatList,
  ScrollView,
} from 'react-native';

export interface HorizontalContentListItem {
  /** Unique identifier */
  id: string;
  /** Title text */
  title: string;
  /** Subtitle text */
  subtitle: string;
  /** Image source */
  imageSource?: ImageSourcePropType;
  /** Image URL */
  imageUrl?: string;
  /** On press handler */
  onPress?: () => void;
}

export interface HorizontalContentListProps {
  /** Array of content items */
  items: HorizontalContentListItem[];
  /** Use ScrollView instead of FlatList */
  useScrollView?: boolean;
  /** Background color */
  backgroundColor?: string;
  /** Card background color */
  cardBackgroundColor?: string;
  /** Border radius for cards */
  borderRadius?: number;
  /** Thumbnail width */
  thumbnailWidth?: number;
  /** Thumbnail height */
  thumbnailHeight?: number;
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

/** Horizontal content list component with thumbnail cards */
export const HorizontalContentList = memo<HorizontalContentListProps>(
  ({
    items,
    useScrollView = false,
    backgroundColor = 'transparent',
    cardBackgroundColor = 'rgba(30, 30, 30, 0.95)',
    borderRadius = 12,
    thumbnailWidth = 120,
    thumbnailHeight = 80,
    spacing = 12,
    horizontalPadding = 0,
    style,
    contentContainerStyle,
    testID = 'horizontal-content-list',
  }) => {
    const renderImage = (item: HorizontalContentListItem, index: number) => {
      if (item.imageUrl) {
        return (
          <Image
            source={{ uri: item.imageUrl }}
            style={[
              styles.thumbnail,
              {
                width: thumbnailWidth,
                height: thumbnailHeight,
                borderTopLeftRadius: borderRadius,
                borderBottomLeftRadius: borderRadius,
              },
            ]}
            resizeMode="cover"
            testID={`${testID}-image-${index}`}
          />
        );
      }

      if (item.imageSource) {
        return (
          <Image
            source={item.imageSource}
            style={[
              styles.thumbnail,
              {
                width: thumbnailWidth,
                height: thumbnailHeight,
                borderTopLeftRadius: borderRadius,
                borderBottomLeftRadius: borderRadius,
              },
            ]}
            resizeMode="cover"
            testID={`${testID}-image-${index}`}
          />
        );
      }

      return (
        <View
          style={[
            styles.thumbnail,
            styles.thumbnailPlaceholder,
            {
              width: thumbnailWidth,
              height: thumbnailHeight,
              borderTopLeftRadius: borderRadius,
              borderBottomLeftRadius: borderRadius,
            },
          ]}
          testID={`${testID}-placeholder-${index}`}
        />
      );
    };

    const renderItem = ({ item, index }: { item: HorizontalContentListItem; index: number }) => {
      return (
        <TouchableOpacity
          onPress={item.onPress}
          activeOpacity={0.8}
          disabled={!item.onPress}
          style={[
            styles.card,
            {
              backgroundColor: cardBackgroundColor,
              borderRadius,
              marginBottom: index === items.length - 1 ? 0 : spacing,
            },
          ]}
          testID={`${testID}-item-${index}`}
        >
          {renderImage(item, index)}
          <View style={styles.textContainer}>
            <Text style={styles.title} numberOfLines={1} testID={`${testID}-title-${index}`}>
              {item.title}
            </Text>
            <Text style={styles.subtitle} numberOfLines={1} testID={`${testID}-subtitle-${index}`}>
              {item.subtitle}
            </Text>
          </View>
        </TouchableOpacity>
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
            },
            contentContainerStyle,
          ]}
          showsVerticalScrollIndicator={false}
          testID={testID}
        >
          {items.map((item, index) => (
            <View key={item.id}>{renderItem({ item, index })}</View>
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
          },
          contentContainerStyle,
        ]}
        showsVerticalScrollIndicator={false}
        testID={testID}
      />
    );
  },
);

HorizontalContentList.displayName = 'HorizontalContentList';

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
  card: {
    flexDirection: 'row',
    width: '100%',
    overflow: 'hidden',
    minHeight: 80,
  },
  thumbnail: {
    backgroundColor: '#2C2C2E',
  },
  thumbnailPlaceholder: {
    backgroundColor: '#3A3A3C',
  },
  textContainer: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    gap: 6,
  },
  title: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: '#FFFFFF',
  },
  subtitle: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
