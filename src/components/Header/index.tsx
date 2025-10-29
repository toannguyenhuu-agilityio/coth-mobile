import { ReactNode } from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { Icon } from '@/components/common/Icon';

export interface HeaderProps {
  /** Left action button (typically menu/back) */
  leftIcon?: ReactNode;
  /** Handler for left icon press */
  onLeftPress?: () => void;
  /** Center content - can be logo image or custom component */
  centerContent?: ReactNode;
  /** Logo image source for center */
  logoSource?: ImageSourcePropType;
  /** Right action buttons */
  rightIcons?: ReactNode[];
  /** Handlers for right icons press */
  onRightPress?: ((index: number) => void)[];
  /** Background color of header */
  backgroundColor?: string;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** Header component for navigation with logo and action buttons */
export const Header = ({
  leftIcon,
  onLeftPress,
  centerContent,
  logoSource,
  rightIcons = [],
  onRightPress = [],
  backgroundColor = '#2C2C2E',
  style,
  testID = 'header',
}: HeaderProps) => {
  const renderLeftIcon = () => {
    if (!leftIcon && !onLeftPress) return <View style={styles.iconPlaceholder} />;

    return (
      <TouchableOpacity
        onPress={onLeftPress}
        style={styles.iconButton}
        testID={`${testID}-left-button`}
        disabled={!onLeftPress}
      >
        {leftIcon || <Icon name="menu" size={24} color="#FFFFFF" />}
      </TouchableOpacity>
    );
  };

  const renderCenter = () => {
    if (centerContent) {
      return <View style={styles.centerContent}>{centerContent}</View>;
    }

    if (logoSource) {
      return (
        <View style={styles.centerContent}>
          <Image
            source={logoSource}
            style={styles.logo}
            resizeMode="contain"
            testID={`${testID}-logo`}
          />
        </View>
      );
    }

    return <View style={styles.centerContent} />;
  };

  const renderRightIcons = () => {
    if (rightIcons.length === 0) {
      return <View style={styles.iconPlaceholder} />;
    }

    return (
      <View style={styles.rightContainer}>
        {rightIcons.map((icon, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onRightPress[index]?.(index)}
            style={styles.iconButton}
            testID={`${testID}-right-button-${index}`}
            disabled={!onRightPress[index]}
          >
            {icon}
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor }, style]} testID={testID}>
      <View style={styles.leftContainer}>{renderLeftIcon()}</View>
      {renderCenter()}
      {renderRightIcons()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    paddingHorizontal: 16,
    width: '100%',
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerContent: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 12,
  },
  iconButton: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconPlaceholder: {
    width: 32,
    height: 32,
  },
  logo: {
    height: 32,
    width: 150,
  },
});
