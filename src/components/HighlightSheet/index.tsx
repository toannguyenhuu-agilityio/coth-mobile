import { memo, useState } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle, TouchableOpacity } from 'react-native';

export interface HighlightColor {
  /** Color value */
  color: string;
  /** Color label/name */
  label?: string;
}

export interface HighlightSheetProps {
  /** Available highlight colors */
  colors?: HighlightColor[];
  /** Selected color index */
  selectedIndex?: number;
  /** On color select handler */
  onColorSelect?: (color: HighlightColor, index: number) => void;
  /** Background color */
  backgroundColor?: string;
  /** Border color */
  borderColor?: string;
  /** Border width */
  borderWidth?: number;
  /** Border radius */
  borderRadius?: number;
  /** Shadow color */
  shadowColor?: string;
  /** Color circle size */
  colorSize?: number;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

// Default highlight colors from Figma
const DEFAULT_COLORS: HighlightColor[] = [
  { color: '#562C30', label: 'Maroon' },
  { color: '#6F513B', label: 'Brown' },
  { color: '#544D01', label: 'Olive' },
  { color: '#4E5641', label: 'Sage' },
  { color: '#3B605D', label: 'Teal' },
  { color: '#235B76', label: 'Blue' },
  { color: '#3C5175', label: 'Navy' },
  { color: '#4D466F', label: 'Purple' },
  { color: '#653560', label: 'Magenta' },
  { color: '#4C515A', label: 'Gray' },
];

/** Bottom sheet component for selecting highlight colors */
export const HighlightSheet = memo<HighlightSheetProps>(
  ({
    colors = DEFAULT_COLORS,
    selectedIndex: controlledSelectedIndex,
    onColorSelect,
    backgroundColor = '#1E1E1E',
    borderColor = '#9B9B9B',
    borderWidth = 1,
    borderRadius = 16,
    shadowColor = 'rgba(255, 255, 255, 0.3)',
    colorSize = 48,
    style,
    testID = 'highlight-sheet',
  }) => {
    const [internalSelectedIndex, setInternalSelectedIndex] = useState<number | null>(null);
    const selectedIndex = controlledSelectedIndex ?? internalSelectedIndex;

    const handleColorPress = (color: HighlightColor, index: number) => {
      setInternalSelectedIndex(index);
      onColorSelect?.(color, index);
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
            shadowColor,
          },
          style,
        ]}
        testID={testID}
      >
        {/* Content Container */}
        <View style={styles.content}>
          {/* Color Grid */}
          <View style={styles.colorGrid} testID={`${testID}-grid`}>
            {colors.map((colorOption, index) => {
              const isSelected = selectedIndex === index;
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleColorPress(colorOption, index)}
                  style={[
                    styles.colorCircle,
                    {
                      width: colorSize,
                      height: colorSize,
                      borderRadius: colorSize / 2,
                      backgroundColor: colorOption.color,
                    },
                  ]}
                  testID={`${testID}-color-${index}`}
                  activeOpacity={0.8}
                >
                  {isSelected && (
                    <View style={styles.checkmarkContainer}>
                      <View style={styles.checkmark}>
                        <View style={styles.checkmarkIcon} />
                      </View>
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    );
  },
);

HighlightSheet.displayName = 'HighlightSheet';

const styles = StyleSheet.create({
  container: {
    width: 354,
    shadowOffset: { width: 0, height: -20 },
    shadowOpacity: 1,
    shadowRadius: 45,
    elevation: 10,
  },
  content: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 10,
    alignItems: 'center',
  },
  colorGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    gap: 12,
    flexWrap: 'wrap',
  },
  colorCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  checkmarkContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(255, 255, 255, 0.5)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 2.8,
    elevation: 5,
  },
  checkmark: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkIcon: {
    width: 12,
    height: 9,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#000000',
    transform: [{ rotate: '-45deg' }, { translateY: -2 }],
  },
});
