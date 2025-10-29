import { memo, useCallback } from 'react';
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

export interface PodcastCardProps {
  /** Title of the podcast */
  title: string;
  /** Episode info text */
  episodeInfo?: string;
  /** Image source */
  imageSource?: ImageSourcePropType;
  /** Image URL */
  imageUrl?: string;
  /** Default image when no image provided */
  defaultImageSource?: ImageSourcePropType;
  /** Overlay background color */
  overlayColor?: string;
  /** On press handler */
  onPress?: () => void;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** Podcast card component with image overlay - Optimized with memo */
export const PodcastCard = memo<PodcastCardProps>(
  ({
    title,
    episodeInfo,
    imageSource,
    imageUrl,
    defaultImageSource,
    overlayColor = 'rgba(0, 0, 0, 0.4)',
    onPress,
    style,
    testID = 'podcast-card',
  }) => {
    const handlePress = useCallback(() => {
      onPress?.();
    }, [onPress]);

    const renderImage = useCallback(() => {
      if (imageUrl) {
        return (
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="cover"
            testID={`${testID}-image`}
          />
        );
      }

      if (imageSource) {
        return (
          <Image
            source={imageSource}
            style={styles.image}
            resizeMode="cover"
            testID={`${testID}-image`}
          />
        );
      }

      if (defaultImageSource) {
        return (
          <Image
            source={defaultImageSource}
            style={styles.image}
            resizeMode="cover"
            testID={`${testID}-default-image`}
          />
        );
      }

      return <View style={[styles.image, styles.imagePlaceholder]} />;
    }, [imageSource, imageUrl, defaultImageSource, testID]);

    return (
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.9}
        disabled={!onPress}
        style={[styles.container, style]}
        testID={testID}
      >
        {renderImage()}
        <View style={[styles.overlay, { backgroundColor: overlayColor }]}>
          <View style={styles.content}>
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
            {episodeInfo && (
              <Text style={styles.episodeInfo} numberOfLines={1}>
                {episodeInfo}
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  },
);

PodcastCard.displayName = 'PodcastCard';

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    width: '100%',
    height: 240,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  imagePlaceholder: {
    backgroundColor: '#2C2C2E',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  content: {
    gap: 8,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
  },
  episodeInfo: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    opacity: 0.9,
  },
});
