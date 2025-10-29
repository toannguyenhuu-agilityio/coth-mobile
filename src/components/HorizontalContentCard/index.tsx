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

export interface HorizontalContentCardProps {
  /** Title text */
  title: string;
  /** Subtitle text */
  subtitle?: string;
  /** Image source */
  imageSource?: ImageSourcePropType;
  /** Image URL */
  imageUrl?: string;
  /** Background color */
  backgroundColor?: string;
  /** Border radius */
  borderRadius?: number;
  /** Thumbnail width */
  thumbnailWidth?: number;
  /** Thumbnail height */
  thumbnailHeight?: number;
  /** On press handler */
  onPress?: () => void;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** Horizontal content card component with thumbnail and text */
export const HorizontalContentCard = memo<HorizontalContentCardProps>(
  ({
    title,
    subtitle,
    imageSource,
    imageUrl,
    backgroundColor = 'rgba(40, 50, 55, 0.95)',
    borderRadius = 12,
    thumbnailWidth = 190,
    thumbnailHeight = 120,
    onPress,
    style,
    testID = 'horizontal-content-card',
  }) => {
    const renderImage = () => {
      if (imageUrl) {
        return (
          <Image
            source={{ uri: imageUrl }}
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
            testID={`${testID}-image`}
          />
        );
      }

      if (imageSource) {
        return (
          <Image
            source={imageSource}
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
            testID={`${testID}-image`}
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
          testID={`${testID}-placeholder`}
        />
      );
    };

    const CardContent = (
      <>
        {renderImage()}
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={1} testID={`${testID}-title`}>
            {title}
          </Text>
          {subtitle && (
            <Text style={styles.subtitle} numberOfLines={1} testID={`${testID}-subtitle`}>
              {subtitle}
            </Text>
          )}
        </View>
      </>
    );

    if (onPress) {
      return (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.8}
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
          {CardContent}
        </TouchableOpacity>
      );
    }

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
        {CardContent}
      </View>
    );
  },
);

HorizontalContentCard.displayName = 'HorizontalContentCard';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    overflow: 'hidden',
    minHeight: 120,
  },
  thumbnail: {
    backgroundColor: '#2C2C2E',
  },
  thumbnailPlaceholder: {
    backgroundColor: '#3A3A3C',
  },
  textContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    gap: 8,
  },
  title: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 28,
    color: '#FFFFFF',
  },
  subtitle: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});
