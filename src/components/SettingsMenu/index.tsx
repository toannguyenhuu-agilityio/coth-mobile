import { memo, ReactNode } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  Switch,
} from 'react-native';

export type SettingsItemType = 'navigation' | 'toggle' | 'info';

export interface SettingsItem {
  /** Item ID */
  id: string;
  /** Item type */
  type: SettingsItemType;
  /** Icon component */
  icon: ReactNode;
  /** Label text */
  label: string;
  /** Value text (for info type) */
  value?: string;
  /** Toggle value (for toggle type) */
  isEnabled?: boolean;
  /** Show chevron icon */
  showChevron?: boolean;
  /** On press handler */
  onPress?: () => void;
  /** On toggle handler (for toggle type) */
  onToggle?: (value: boolean) => void;
  /** Disabled state */
  disabled?: boolean;
}

export interface SettingsMenuProps {
  /** Array of settings items */
  items: SettingsItem[];
  /** Background color */
  backgroundColor?: string;
  /** Border color */
  borderColor?: string;
  /** Border radius */
  borderRadius?: number;
  /** Border width */
  borderWidth?: number;
  /** Item height */
  itemHeight?: number;
  /** Show dividers between items */
  showDividers?: boolean;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** Settings menu component with list items */
export const SettingsMenu = memo<SettingsMenuProps>(
  ({
    items,
    backgroundColor = '#2C2C2E',
    borderColor = '#3A3A3C',
    borderRadius = 16,
    borderWidth = 1,
    itemHeight = 64,
    showDividers = true,
    style,
    testID = 'settings-menu',
  }) => {
    const renderItem = (item: SettingsItem, index: number) => {
      const isLast = index === items.length - 1;
      const {
        id,
        type,
        icon,
        label,
        value,
        isEnabled,
        showChevron = true,
        onPress,
        onToggle,
        disabled = false,
      } = item;

      const handlePress = () => {
        if (disabled) return;
        onPress?.();
      };

      const handleToggle = (newValue: boolean) => {
        if (disabled) return;
        onToggle?.(newValue);
      };

      return (
        <View key={id}>
          <TouchableOpacity
            style={[
              styles.item,
              {
                height: itemHeight,
                opacity: disabled ? 0.5 : 1,
              },
            ]}
            onPress={handlePress}
            disabled={disabled || type === 'toggle'}
            activeOpacity={0.6}
            testID={`${testID}-item-${index}`}
          >
            {/* Icon */}
            <View style={styles.iconContainer}>{icon}</View>

            {/* Label */}
            <Text style={styles.label}>{label}</Text>

            {/* Right Content */}
            <View style={styles.rightContent}>
              {type === 'toggle' && (
                <Switch
                  value={isEnabled}
                  onValueChange={handleToggle}
                  trackColor={{
                    false: '#39393D',
                    true: '#5E8B99',
                  }}
                  thumbColor="#FFFFFF"
                  ios_backgroundColor="#39393D"
                  disabled={disabled}
                  testID={`${testID}-toggle-${index}`}
                />
              )}

              {type === 'info' && value && <Text style={styles.value}>{value}</Text>}

              {(type === 'navigation' || (type === 'info' && showChevron)) && (
                <View style={styles.chevron}>
                  <Text style={styles.chevronText}>›</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>

          {/* Divider */}
          {showDividers && !isLast && <View style={[styles.divider, { marginLeft: 60 }]} />}
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
            borderRadius,
            borderWidth,
          },
          style,
        ]}
        testID={testID}
      >
        {items.map(renderItem)}
      </View>
    );
  },
);

SettingsMenu.displayName = 'SettingsMenu';

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 16,
  },
  iconContainer: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    flex: 1,
    fontSize: 17,
    fontWeight: '400',
    color: '#FFFFFF',
    fontFamily: 'Akzidenz-Grotesk Pro',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  value: {
    fontSize: 17,
    fontWeight: '400',
    color: '#8E8E93',
    fontFamily: 'Akzidenz-Grotesk Pro',
  },
  chevron: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chevronText: {
    fontSize: 24,
    fontWeight: '300',
    color: '#8E8E93',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});
