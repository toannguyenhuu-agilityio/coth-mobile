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
} from 'react-native';

export interface ContentListCardItem {
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

export interface ContentListCardProps {
  /** Array of content items */
  items: ContentListCardItem[];
  /** Background color */
  backgroundColor?: string;
  /** Card border radius */
  borderRadius?: number;
  /** Thumbnail size */
  thumbnailSize?: number;
  /** Spacing between items */
  itemSpacing?: number;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** Content list card component displaying items with thumbnail and text */
export const ContentListCard = memo<ContentListCardProps>(
  ({
    items,
    backgroundColor = 'rgba(30, 30, 30, 0.95)',
    borderRadius = 16,
    thumbnailSize = 88,
    itemSpacing = 0,
    style,
    testID = 'content-list-card',
  }) => {
    const renderItem = (item: ContentListCardItem, index: number) => {
      const isLast = index === items.length - 1;

      const renderImage = () => {
        if (item.imageUrl) {
          return (
            <Image
              source={{ uri: item.imageUrl }}
              style={[styles.thumbnail, { width: thumbnailSize, height: thumbnailSize }]}
              resizeMode="cover"
              testID={`${testID}-image-${index}`}
            />
          );
        }

        if (item.imageSource) {
          return (
            <Image
              source={item.imageSource}
              style={[styles.thumbnail, { width: thumbnailSize, height: thumbnailSize }]}
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
              { width: thumbnailSize, height: thumbnailSize },
            ]}
            testID={`${testID}-placeholder-${index}`}
          />
        );
      };

      return (
        <TouchableOpacity
          key={item.id}
          onPress={item.onPress}
          activeOpacity={0.7}
          disabled={!item.onPress}
          style={[styles.item, !isLast && styles.itemBorder, { paddingVertical: itemSpacing }]}
          testID={`${testID}-item-${index}`}
        >
          {renderImage()}
          <View style={styles.textContainer}>
            <Text style={styles.title} numberOfLines={2} testID={`${testID}-title-${index}`}>
              {item.title}
            </Text>
            <Text style={styles.subtitle} numberOfLines={1} testID={`${testID}-subtitle-${index}`}>
              {item.subtitle}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor,
            borderRadius,
          },
          style,
        ]}
        testID={testID}
      >
        {items.map((item, index) => renderItem(item, index))}
      </View>
    );
  },
);

ContentListCard.displayName = 'ContentListCard';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 16,
  },
  itemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
  },
  thumbnail: {
    borderRadius: 12,
    backgroundColor: '#2C2C2E',
  },
  thumbnailPlaceholder: {
    backgroundColor: '#3A3A3C',
  },
  textContainer: {
    flex: 1,
    gap: 6,
    justifyContent: 'center',
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
