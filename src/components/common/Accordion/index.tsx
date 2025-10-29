import { ReactNode, useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export interface AccordionProps {
  /** Title text */
  title: string;
  /** Content to show when expanded */
  children: ReactNode;
  /** Initially expanded state */
  defaultExpanded?: boolean;
  /** Controlled expanded state */
  expanded?: boolean;
  /** Change handler for controlled mode */
  onExpandedChange?: (expanded: boolean) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Header container style */
  headerStyle?: StyleProp<ViewStyle>;
  /** Title text style */
  titleStyle?: StyleProp<TextStyle>;
  /** Content container style */
  contentStyle?: StyleProp<ViewStyle>;
  /** Icon for collapsed state (default: chevron down) */
  iconCollapsed?: ReactNode;
  /** Icon for expanded state (default: chevron up) */
  iconExpanded?: ReactNode;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Accessibility label */
  accessibilityLabel?: string;
  /** Test ID */
  testID?: string;
}

/** Accordion component for expandable/collapsible content sections */
export const Accordion = ({
  title,
  children,
  defaultExpanded = false,
  expanded: controlledExpanded,
  onExpandedChange,
  disabled = false,
  headerStyle,
  titleStyle,
  contentStyle,
  iconCollapsed,
  iconExpanded,
  style,
  accessibilityLabel,
  testID = 'accordion',
}: AccordionProps) => {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);

  // Use controlled state if provided, otherwise use internal state
  const isExpanded = controlledExpanded ?? internalExpanded;

  const handleToggle = () => {
    if (disabled) return;

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const newExpanded = !isExpanded;

    if (controlledExpanded === undefined) {
      setInternalExpanded(newExpanded);
    }

    onExpandedChange?.(newExpanded);
  };

  const renderIcon = () => {
    if (iconExpanded && isExpanded) {
      return iconExpanded;
    }
    if (iconCollapsed && !isExpanded) {
      return iconCollapsed;
    }

    // Default chevron icon
    return (
      <Text style={[styles.defaultIcon, disabled && styles.disabledIcon]}>
        {isExpanded ? '▲' : '▼'}
      </Text>
    );
  };

  return (
    <View style={[styles.container, style]} testID={testID}>
      <TouchableOpacity
        style={[styles.header, headerStyle, disabled && styles.disabledHeader]}
        onPress={handleToggle}
        disabled={disabled}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityState={{ expanded: isExpanded, disabled }}
        accessibilityLabel={accessibilityLabel || title}
        testID={`${testID}-header`}
      >
        <Text
          style={[styles.title, titleStyle, disabled && styles.disabledTitle]}
          testID={`${testID}-title`}
        >
          {title}
        </Text>
        <View testID={`${testID}-icon`}>{renderIcon()}</View>
      </TouchableOpacity>

      {isExpanded && (
        <View style={[styles.content, contentStyle]} testID={`${testID}-content`}>
          {children}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 8,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  title: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    color: '#FFFFFF',
    flex: 1,
  },
  defaultIcon: {
    fontSize: 12,
    color: '#FFFFFF',
    marginLeft: 12,
  },
  content: {
    padding: 16,
  },
  disabledHeader: {
    opacity: 0.5,
  },
  disabledTitle: {
    opacity: 0.5,
  },
  disabledIcon: {
    opacity: 0.5,
  },
});
