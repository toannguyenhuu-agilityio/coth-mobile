import { ReactNode } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';

export interface CardProps {
  /** Card title */
  title?: string;
  /** Title action text (e.g., "Edit") */
  actionText?: string;
  /** Action press handler */
  onActionPress?: () => void;
  /** Card content */
  children?: ReactNode;
  /** Background color */
  backgroundColor?: string;
  /** Border color */
  borderColor?: string;
  /** Border width */
  borderWidth?: number;
  /** Border radius */
  borderRadius?: number;
  /** Padding */
  padding?: number;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Header style */
  headerStyle?: StyleProp<ViewStyle>;
  /** Title text style */
  titleStyle?: StyleProp<TextStyle>;
  /** Action text style */
  actionStyle?: StyleProp<TextStyle>;
  /** Content style */
  contentStyle?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** Card component for displaying content in a bordered container */
export const OnboardingFeatureCard = ({
  title,
  actionText,
  onActionPress,
  children,
  backgroundColor = 'rgba(255, 255, 255, 0.05)',
  borderColor = 'rgba(255, 255, 255, 0.2)',
  borderWidth = 1,
  borderRadius = 12,
  padding = 16,
  style,
  headerStyle,
  titleStyle,
  actionStyle,
  contentStyle,
  testID = 'card',
}: CardProps) => {
  const renderHeader = () => {
    if (!title && !actionText) return null;

    return (
      <View style={[styles.header, headerStyle]} testID={`${testID}-header`}>
        {title && (
          <Text style={[styles.title, titleStyle]} testID={`${testID}-title`}>
            {title}
          </Text>
        )}
        {actionText && (
          <TouchableOpacity
            onPress={onActionPress}
            disabled={!onActionPress}
            activeOpacity={0.7}
            testID={`${testID}-action`}
          >
            <Text style={[styles.action, actionStyle]}>{actionText}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor,
          borderColor,
          borderWidth,
          borderRadius,
          padding,
        },
        style,
      ]}
      testID={testID}
    >
      {renderHeader()}
      {children && (
        <View style={[styles.content, contentStyle]} testID={`${testID}-content`}>
          {children}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: '#FFFFFF',
    flex: 1,
  },
  action: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: '#7099A7',
    marginLeft: 12,
  },
  content: {
    gap: 8,
  },
});
