import type { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import React from 'react';

export type IconName =
  | 'check'
  | 'close'
  | 'plus'
  | 'minus'
  | 'arrow-up'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'chevron-up'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'heart'
  | 'star'
  | 'info'
  | 'warning'
  | 'error'
  | 'success'
  | 'play'
  | 'pause'
  | 'refresh'
  | 'search'
  | 'menu'
  | 'home'
  | 'user'
  | 'settings';

export interface IconProps {
  /** Built-in icon name */
  name?: IconName;
  /** Custom icon component to render (overrides name) */
  children?: React.ReactNode;
  /** Size of the icon */
  size?: number;
  /** Color of the icon */
  color?: string;
  /** Background color */
  backgroundColor?: string;
  /** Border radius */
  borderRadius?: number;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Icon text style (for built-in icons) */
  iconStyle?: StyleProp<TextStyle>;
  /** Test ID */
  testID?: string;
}

const ICON_MAP: Record<IconName, string> = {
  check: '✓',
  close: '✕',
  plus: '+',
  minus: '−',
  'arrow-up': '↑',
  'arrow-down': '↓',
  'arrow-left': '←',
  'arrow-right': '→',
  'chevron-up': '︿',
  'chevron-down': '﹀',
  'chevron-left': '‹',
  'chevron-right': '›',
  heart: '♥',
  star: '★',
  info: 'ⓘ',
  warning: '⚠',
  error: '✖',
  success: '✓',
  play: '▶',
  pause: '❚❚',
  refresh: '↻',
  search: '🔍',
  menu: '☰',
  home: '⌂',
  user: '👤',
  settings: '⚙',
};

/** Icon wrapper component */
export const Icon = ({
  name,
  children,
  size = 24,
  color = '#FFFFFF',
  backgroundColor,
  borderRadius,
  style,
  iconStyle,
  testID = 'icon',
}: IconProps) => {
  const renderContent = () => {
    if (children) {
      return children;
    }

    if (name && ICON_MAP[name]) {
      return (
        <Text
          style={[styles.iconText, { fontSize: size, color }, iconStyle]}
          testID={`${testID}-text`}
        >
          {ICON_MAP[name]}
        </Text>
      );
    }

    return null;
  };

  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          backgroundColor,
          borderRadius,
        },
        style,
      ]}
      testID={testID}
    >
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    textAlign: 'center',
  },
});
