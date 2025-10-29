import { ReactNode } from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';

export interface ActionButton {
  /** Button icon */
  icon: ReactNode;
  /** Button press handler */
  onPress?: () => void;
  /** Button test ID */
  testID?: string;
  /** Disable button */
  disabled?: boolean;
}

export interface GroupedActionBarProps {
  /** Back button configuration */
  backButton?: ActionButton;
  /** Forward button configuration */
  forwardButton?: ActionButton;
  /** Array of action buttons in the center group */
  actionButtons?: ActionButton[];
  /** Show back button */
  showBackButton?: boolean;
  /** Show forward button */
  showForwardButton?: boolean;
  /** Background color */
  backgroundColor?: string;
  /** Navigation button background color */
  navigationButtonBackground?: string;
  /** Action group background color */
  actionGroupBackground?: string;
  /** Container style */
  containerStyle?: StyleProp<ViewStyle>;
  /** Navigation button style */
  navigationButtonStyle?: StyleProp<ViewStyle>;
  /** Action group style */
  actionGroupStyle?: StyleProp<ViewStyle>;
  /** Action button style */
  actionButtonStyle?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** GroupedActionBar component - displays navigation buttons and grouped action buttons */
export const GroupedActionBar = ({
  backButton,
  forwardButton,
  actionButtons = [],
  showBackButton = true,
  showForwardButton = true,
  backgroundColor = 'transparent',
  navigationButtonBackground = 'rgba(255, 255, 255, 0.1)',
  actionGroupBackground = 'rgba(255, 255, 255, 0.1)',
  containerStyle,
  navigationButtonStyle,
  actionGroupStyle,
  actionButtonStyle,
  testID = 'grouped-action-bar',
}: GroupedActionBarProps) => {
  return (
    <View style={[styles.container, { backgroundColor }, containerStyle]} testID={testID}>
      {/* Back Button */}
      {showBackButton && backButton && (
        <TouchableOpacity
          style={[
            styles.navigationButton,
            { backgroundColor: navigationButtonBackground },
            navigationButtonStyle,
          ]}
          onPress={backButton.onPress}
          disabled={backButton.disabled}
          activeOpacity={0.7}
          testID={backButton.testID || `${testID}-back-button`}
        >
          {backButton.icon}
        </TouchableOpacity>
      )}

      {/* Action Buttons Group */}
      {actionButtons.length > 0 && (
        <View
          style={[styles.actionGroup, { backgroundColor: actionGroupBackground }, actionGroupStyle]}
          testID={`${testID}-action-group`}
        >
          {actionButtons.map((button, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.actionButton, actionButtonStyle]}
              onPress={button.onPress}
              disabled={button.disabled}
              activeOpacity={0.7}
              testID={button.testID || `${testID}-action-${index}`}
            >
              {button.icon}
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Forward Button */}
      {showForwardButton && forwardButton && (
        <TouchableOpacity
          style={[
            styles.navigationButton,
            { backgroundColor: navigationButtonBackground },
            navigationButtonStyle,
          ]}
          onPress={forwardButton.onPress}
          disabled={forwardButton.disabled}
          activeOpacity={0.7}
          testID={forwardButton.testID || `${testID}-forward-button`}
        >
          {forwardButton.icon}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  navigationButton: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 16,
  },
  actionButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
