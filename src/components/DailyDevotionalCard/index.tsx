import { ReactNode } from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export interface DailyDevotionalCardProps {
  /** Card title */
  title?: string;
  /** Title icon */
  titleIcon?: ReactNode;
  /** Devotional quote/verse text */
  quote: string;
  /** Scripture reference (e.g., "Matthew 11:28") */
  reference?: string;
  /** Background image source */
  backgroundImage?: ImageSourcePropType;
  /** Button text */
  buttonText?: string;
  /** Button press handler */
  onButtonPress?: () => void;
  /** Show button arrow */
  showButtonArrow?: boolean;
  /** Container style */
  containerStyle?: StyleProp<ViewStyle>;
  /** Title style */
  titleStyle?: StyleProp<TextStyle>;
  /** Quote style */
  quoteStyle?: StyleProp<TextStyle>;
  /** Reference style */
  referenceStyle?: StyleProp<TextStyle>;
  /** Button style */
  buttonStyle?: StyleProp<ViewStyle>;
  /** Button text style */
  buttonTextStyle?: StyleProp<TextStyle>;
  /** Test ID */
  testID?: string;
}

/** DailyDevotionalCard component - displays daily devotional with quote and CTA */
export const DailyDevotionalCard = ({
  title = 'Daily Devotional',
  titleIcon,
  quote,
  reference,
  backgroundImage,
  buttonText = 'Read Full Devotional',
  onButtonPress,
  showButtonArrow = true,
  containerStyle,
  titleStyle,
  quoteStyle,
  referenceStyle,
  buttonStyle,
  buttonTextStyle,
  testID = 'daily-devotional-card',
}: DailyDevotionalCardProps) => {
  const renderContent = () => (
    <View style={styles.contentContainer}>
      {/* Title with icon */}
      <View style={styles.titleContainer} testID={`${testID}-title-container`}>
        {titleIcon || <Text style={styles.defaultIcon}>📖</Text>}
        <Text style={[styles.title, titleStyle]} testID={`${testID}-title`}>
          {title}
        </Text>
      </View>

      {/* Quote/Verse */}
      <Text style={[styles.quote, quoteStyle]} testID={`${testID}-quote`}>
        {quote}
      </Text>

      {/* Scripture Reference */}
      {reference && (
        <Text style={[styles.reference, referenceStyle]} testID={`${testID}-reference`}>
          – {reference}
        </Text>
      )}

      {/* CTA Button */}
      <TouchableOpacity
        style={[styles.button, buttonStyle]}
        onPress={onButtonPress}
        activeOpacity={0.7}
        testID={`${testID}-button`}
      >
        <Text style={[styles.buttonText, buttonTextStyle]} testID={`${testID}-button-text`}>
          {buttonText}
        </Text>
        {showButtonArrow && <Text style={styles.arrow}>›</Text>}
      </TouchableOpacity>
    </View>
  );

  if (backgroundImage) {
    return (
      <ImageBackground
        source={backgroundImage}
        style={[styles.container, containerStyle]}
        imageStyle={styles.backgroundImage}
        testID={testID}
      >
        <View style={styles.overlay}>{renderContent()}</View>
      </ImageBackground>
    );
  }

  return (
    <View style={[styles.container, containerStyle]} testID={testID}>
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    overflow: 'hidden',
    minHeight: 400,
  },
  backgroundImage: {
    borderRadius: 16,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 20,
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  defaultIcon: {
    fontSize: 24,
  },
  title: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    lineHeight: 24,
  },
  quote: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: 36,
    marginBottom: 16,
    flex: 1,
  },
  reference: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 18,
    fontWeight: '400',
    color: '#FFFFFF',
    lineHeight: 24,
    marginBottom: 24,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  buttonText: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    lineHeight: 22,
  },
  arrow: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '300',
    lineHeight: 28,
  },
});
