import { ReactNode } from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export interface CommentCardProps {
  /** User avatar image source */
  avatar?: ImageSourcePropType;
  /** Custom avatar component */
  avatarComponent?: ReactNode;
  /** User name */
  name: string;
  /** Comment text */
  comment: string;
  /** Time ago text (e.g., "Just now", "3min ago") */
  timeAgo?: string;
  /** Reaction count (e.g., prayer count, like count) */
  reactionCount?: number;
  /** Reaction icon */
  reactionIcon?: ReactNode;
  /** Show reaction button */
  showReaction?: boolean;
  /** Reaction button press handler */
  onReactionPress?: () => void;
  /** Card press handler */
  onPress?: () => void;
  /** Avatar press handler */
  onAvatarPress?: () => void;
  /** Background color */
  backgroundColor?: string;
  /** Name text color */
  nameColor?: string;
  /** Comment text color */
  commentColor?: string;
  /** Time text color */
  timeColor?: string;
  /** Reaction count color */
  reactionCountColor?: string;
  /** Container style */
  containerStyle?: StyleProp<ViewStyle>;
  /** Avatar style */
  avatarStyle?: StyleProp<ImageStyle>;
  /** Name style */
  nameStyle?: StyleProp<TextStyle>;
  /** Comment style */
  commentStyle?: StyleProp<TextStyle>;
  /** Time style */
  timeStyle?: StyleProp<TextStyle>;
  /** Test ID */
  testID?: string;
}

/** CommentCard component - displays user comment/testimonial with avatar and reaction */
export const CommentCard = ({
  avatar,
  avatarComponent,
  name,
  comment,
  timeAgo,
  reactionCount,
  reactionIcon,
  showReaction = true,
  onReactionPress,
  onPress,
  onAvatarPress,
  backgroundColor = 'transparent',
  nameColor = '#FFFFFF',
  commentColor = '#CCCCCC',
  timeColor = '#999999',
  reactionCountColor = '#FFFFFF',
  containerStyle,
  avatarStyle,
  nameStyle,
  commentStyle,
  timeStyle,
  testID = 'comment-card',
}: CommentCardProps) => {
  const renderAvatar = () => {
    if (avatarComponent) {
      return avatarComponent;
    }

    if (avatar) {
      return (
        <TouchableOpacity
          onPress={onAvatarPress}
          disabled={!onAvatarPress}
          activeOpacity={0.7}
          testID={`${testID}-avatar-button`}
        >
          <Image source={avatar} style={[styles.avatar, avatarStyle]} testID={`${testID}-avatar`} />
        </TouchableOpacity>
      );
    }

    return (
      <View style={[styles.avatar, styles.defaultAvatar, avatarStyle]} testID={`${testID}-avatar`}>
        <Text style={styles.defaultAvatarText}>{name.charAt(0).toUpperCase()}</Text>
      </View>
    );
  };

  const content = (
    <View style={[styles.container, { backgroundColor }, containerStyle]} testID={testID}>
      {/* Avatar */}
      <View style={styles.avatarContainer}>{renderAvatar()}</View>

      {/* Content */}
      <View style={styles.content}>
        {/* Header: Name and Time */}
        <View style={styles.header}>
          <Text style={[styles.name, { color: nameColor }, nameStyle]} testID={`${testID}-name`}>
            {name}
          </Text>
          {timeAgo && (
            <Text style={[styles.time, { color: timeColor }, timeStyle]} testID={`${testID}-time`}>
              {timeAgo}
            </Text>
          )}
        </View>

        {/* Comment Text */}
        <Text
          style={[styles.comment, { color: commentColor }, commentStyle]}
          testID={`${testID}-comment`}
        >
          {comment}
        </Text>

        {/* Reaction */}
        {showReaction && (
          <TouchableOpacity
            style={styles.reactionContainer}
            onPress={onReactionPress}
            disabled={!onReactionPress}
            activeOpacity={0.7}
            testID={`${testID}-reaction-button`}
          >
            {reactionIcon || <Text style={styles.defaultReactionIcon}>🙏</Text>}
            {reactionCount !== undefined && (
              <Text
                style={[styles.reactionCount, { color: reactionCountColor }]}
                testID={`${testID}-reaction-count`}
              >
                {reactionCount.toLocaleString()}
              </Text>
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.9} testID={`${testID}-touchable`}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  avatarContainer: {
    paddingTop: 4,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  defaultAvatar: {
    backgroundColor: '#555555',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultAvatarText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    gap: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    flex: 1,
  },
  time: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    marginLeft: 8,
  },
  comment: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
  },
  reactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  defaultReactionIcon: {
    fontSize: 18,
  },
  reactionCount: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 18,
  },
});
