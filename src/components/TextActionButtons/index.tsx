import { memo, ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle, Text, TouchableOpacity } from 'react-native';

export interface TextAction {
  /** Action label */
  label: string;
  /** Icon component */
  icon?: ReactNode;
  /** Badge text (e.g., "A") */
  badgeText?: string;
  /** Badge background color */
  badgeBackgroundColor?: string;
  /** Badge text color */
  badgeTextColor?: string;
  /** Badge border color */
  badgeBorderColor?: string;
  /** On press handler */
  onPress?: () => void;
  /** Disabled state */
  disabled?: boolean;
}

export interface TextActionButtonsProps {
  /** Array of action buttons */
  actions: TextAction[];
  /** Button background color */
  buttonBackgroundColor?: string;
  /** Button text color */
  buttonTextColor?: string;
  /** Border radius */
  borderRadius?: number;
  /** Gap between buttons */
  gap?: number;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** Text action buttons component for highlight and note actions */
export const TextActionButtons = memo<TextActionButtonsProps>(
  ({
    actions,
    buttonBackgroundColor = 'rgba(58, 58, 60, 1)',
    buttonTextColor = '#FFFFFF',
    borderRadius = 12,
    gap = 8,
    style,
    testID = 'text-action-buttons',
  }) => {
    const renderAction = (action: TextAction, index: number) => {
      const {
        label,
        icon,
        badgeText,
        badgeBackgroundColor = '#6F6E30',
        badgeTextColor = '#FFFFFF',
        badgeBorderColor = 'rgba(255, 255, 255, 0.3)',
        onPress,
        disabled = false,
      } = action;

      return (
        <TouchableOpacity
          key={index}
          onPress={onPress}
          disabled={disabled}
          activeOpacity={0.7}
          style={[
            styles.button,
            {
              backgroundColor: buttonBackgroundColor,
              borderRadius,
              opacity: disabled ? 0.5 : 1,
            },
          ]}
          testID={`${testID}-action-${index}`}
        >
          <View style={styles.content}>
            {/* Icon */}
            {icon && (
              <View style={styles.iconContainer} testID={`${testID}-icon-${index}`}>
                {icon}
              </View>
            )}

            {/* Divider (only if icon exists) */}
            {icon && <View style={styles.divider} />}

            {/* Badge */}
            {badgeText && (
              <View
                style={[
                  styles.badge,
                  {
                    backgroundColor: badgeBackgroundColor,
                    borderColor: badgeBorderColor,
                  },
                ]}
                testID={`${testID}-badge-${index}`}
              >
                <Text style={[styles.badgeText, { color: badgeTextColor }]}>{badgeText}</Text>
              </View>
            )}
          </View>

          {/* Label */}
          <Text
            style={[styles.label, { color: buttonTextColor }]}
            testID={`${testID}-label-${index}`}
          >
            {label}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={[styles.container, { gap }, style]} testID={testID}>
        {actions.map((action, index) => renderAction(action, index))}
      </View>
    );
  },
);

TextActionButtons.displayName = 'TextActionButtons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 4,
    height: 64,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  badge: {
    width: 32,
    height: 32,
    borderRadius: 8,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 18,
    fontWeight: '700',
  },
  label: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
  },
});
