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
  SectionList,
  ScrollView,
} from 'react-native';

export interface GroupedContentItem {
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

export interface GroupedContentSection {
  /** Section title (e.g., date) */
  title: string;
  /** Items in this section */
  data: GroupedContentItem[];
}

export interface GroupedContentListProps {
  /** Array of sections with their items */
  sections: GroupedContentSection[];
  /** Use ScrollView instead of SectionList */
  useScrollView?: boolean;
  /** Background color */
  backgroundColor?: string;
  /** Card background color */
  cardBackgroundColor?: string;
  /** Section header background color */
  sectionHeaderBackgroundColor?: string;
  /** Card border radius */
  cardBorderRadius?: number;
  /** Thumbnail width */
  thumbnailWidth?: number;
  /** Thumbnail height */
  thumbnailHeight?: number;
  /** Spacing between cards */
  cardSpacing?: number;
  /** Spacing between sections */
  sectionSpacing?: number;
  /** Horizontal padding */
  horizontalPadding?: number;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Content container style */
  contentContainerStyle?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** Grouped content list component with date headers and cards */
export const GroupedContentList = memo<GroupedContentListProps>(
  ({
    sections,
    useScrollView = false,
    backgroundColor = 'transparent',
    cardBackgroundColor = 'rgba(30, 30, 30, 0.95)',
    sectionHeaderBackgroundColor = 'transparent',
    cardBorderRadius = 16,
    thumbnailWidth = 110,
    thumbnailHeight = 80,
    cardSpacing = 12,
    sectionSpacing = 24,
    horizontalPadding = 16,
    style,
    contentContainerStyle,
    testID = 'grouped-content-list',
  }) => {
    const renderImage = (item: GroupedContentItem, sectionIndex: number, itemIndex: number) => {
      if (item.imageUrl) {
        return (
          <Image
            source={{ uri: item.imageUrl }}
            style={[
              styles.thumbnail,
              {
                width: thumbnailWidth,
                height: thumbnailHeight,
                borderRadius: 12,
              },
            ]}
            resizeMode="cover"
            testID={`${testID}-image-${sectionIndex}-${itemIndex}`}
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
                borderRadius: 12,
              },
            ]}
            resizeMode="cover"
            testID={`${testID}-image-${sectionIndex}-${itemIndex}`}
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
              borderRadius: 12,
            },
          ]}
          testID={`${testID}-placeholder-${sectionIndex}-${itemIndex}`}
        />
      );
    };

    const renderCard = (
      item: GroupedContentItem,
      sectionIndex: number,
      itemIndex: number,
      isLast: boolean,
    ) => {
      return (
        <TouchableOpacity
          key={item.id}
          onPress={item.onPress}
          activeOpacity={0.8}
          disabled={!item.onPress}
          style={[
            styles.card,
            {
              marginBottom: isLast ? 0 : cardSpacing,
            },
          ]}
          testID={`${testID}-item-${sectionIndex}-${itemIndex}`}
        >
          {renderImage(item, sectionIndex, itemIndex)}
          <View style={styles.textContainer}>
            <Text
              style={styles.title}
              numberOfLines={1}
              testID={`${testID}-title-${sectionIndex}-${itemIndex}`}
            >
              {item.title}
            </Text>
            <Text
              style={styles.subtitle}
              numberOfLines={1}
              testID={`${testID}-subtitle-${sectionIndex}-${itemIndex}`}
            >
              {item.subtitle}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };

    const renderSectionHeader = (title: string, sectionIndex: number) => {
      return (
        <View
          style={[styles.sectionHeader, { backgroundColor: sectionHeaderBackgroundColor }]}
          testID={`${testID}-header-${sectionIndex}`}
        >
          <Text style={styles.sectionTitle}>{title}</Text>
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
            },
            contentContainerStyle,
          ]}
          showsVerticalScrollIndicator={false}
          testID={testID}
        >
          {sections.map((section, sectionIndex) => (
            <View
              key={`section-${sectionIndex}`}
              style={[
                styles.section,
                {
                  marginBottom: sectionIndex === sections.length - 1 ? 0 : sectionSpacing,
                },
              ]}
            >
              {renderSectionHeader(section.title, sectionIndex)}
              <View
                style={[
                  styles.cardContainer,
                  {
                    backgroundColor: cardBackgroundColor,
                    borderRadius: cardBorderRadius,
                    padding: 16,
                  },
                ]}
              >
                {section.data.map((item, itemIndex) =>
                  renderCard(item, sectionIndex, itemIndex, itemIndex === section.data.length - 1),
                )}
              </View>
            </View>
          ))}
        </ScrollView>
      );
    }

    return (
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.id || `item-${index}`}
        renderItem={({ item, section, index }) => {
          const sectionIndex = sections.findIndex((s) => s === section);
          const isLast = index === section.data.length - 1;
          return (
            <View style={styles.cardWrapper}>{renderCard(item, sectionIndex, index, isLast)}</View>
          );
        }}
        renderSectionHeader={({ section }) => {
          const sectionIndex = sections.findIndex((s) => s === section);
          return (
            <View>
              {renderSectionHeader(section.title, sectionIndex)}
              <View
                style={[
                  styles.cardContainerWrapper,
                  {
                    backgroundColor: cardBackgroundColor,
                    borderRadius: cardBorderRadius,
                    padding: 16,
                    marginBottom: sectionSpacing,
                  },
                ]}
              />
            </View>
          );
        }}
        renderSectionFooter={() => <View style={{ height: sectionSpacing }} />}
        stickySectionHeadersEnabled={false}
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

GroupedContentList.displayName = 'GroupedContentList';

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
  section: {
    width: '100%',
  },
  sectionHeader: {
    paddingVertical: 8,
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    color: '#FFFFFF',
  },
  cardContainer: {
    width: '100%',
  },
  cardContainerWrapper: {
    width: '100%',
  },
  cardWrapper: {
    width: '100%',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  thumbnail: {
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
