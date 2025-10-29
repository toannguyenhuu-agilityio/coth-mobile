import { memo, ReactNode } from 'react';
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

export interface UserProfileCardProps {
  /** User name */
  name: string;
  /** Tier text (e.g., "Gold Tier") */
  tierText?: string;
  /** Tier icon component */
  tierIcon?: ReactNode;
  /** Avatar image source */
  avatarSource?: ImageSourcePropType;
  /** Avatar image URL */
  avatarUrl?: string;
  /** Show chevron icon */
  showChevron?: boolean;
  /** On press handler */
  onPress?: () => void;
  /** Background color */
  backgroundColor?: string;
  /** Border color */
  borderColor?: string;
  /** Border width */
  borderWidth?: number;
  /** Border radius */
  borderRadius?: number;
  /** Avatar size */
  avatarSize?: number;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** User profile card component with avatar and tier badge */
export const UserProfileCard = memo<UserProfileCardProps>(
  ({
    name,
    tierText,
    tierIcon,
    avatarSource,
    avatarUrl,
    showChevron = true,
    onPress,
    backgroundColor = 'rgba(255, 255, 255, 0.05)',
    borderColor = 'rgba(255, 255, 255, 0.2)',
    borderWidth = 1,
    borderRadius = 20,
    avatarSize = 64,
    style,
    testID = 'user-profile-card',
  }) => {
    const renderAvatar = () => {
      if (avatarUrl) {
        return (
          <Image
            source={{ uri: avatarUrl }}
            style={[
              styles.avatar,
              { width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2 },
            ]}
            testID={`${testID}-avatar`}
          />
        );
      }

      if (avatarSource) {
        return (
          <Image
            source={avatarSource}
            style={[
              styles.avatar,
              { width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2 },
            ]}
            testID={`${testID}-avatar`}
          />
        );
      }

      return (
        <View
          style={[
            styles.avatar,
            styles.avatarPlaceholder,
            { width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2 },
          ]}
          testID={`${testID}-avatar-placeholder`}
        />
      );
    };

    const CardContent = (
      <>
        {/* Avatar */}
        {renderAvatar()}

        {/* Text Content */}
        <View style={styles.textContainer}>
          {/* Name */}
          <Text style={styles.name} testID={`${testID}-name`}>
            {name}
          </Text>

          {/* Tier */}
          {tierText && (
            <View style={styles.tierContainer}>
              {tierIcon && (
                <View style={styles.tierIconContainer} testID={`${testID}-tier-icon`}>
                  {tierIcon}
                </View>
              )}
              <Text style={styles.tierText} testID={`${testID}-tier-text`}>
                {tierText}
              </Text>
            </View>
          )}
        </View>

        {/* Chevron */}
        {showChevron && <Text style={styles.chevron}>›</Text>}
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
              borderColor,
              borderWidth,
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
            borderColor,
            borderWidth,
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

UserProfileCard.displayName = 'UserProfileCard';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    gap: 16,
  },
  avatar: {
    backgroundColor: '#3A3A3C',
  },
  avatarPlaceholder: {
    backgroundColor: '#3A3A3C',
  },
  textContainer: {
    flex: 1,
    gap: 4,
  },
  name: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 25,
    color: '#FFFFFF',
  },
  tierContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  tierIconContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tierText: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  chevron: {
    fontSize: 28,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 0.6)',
  },
});
