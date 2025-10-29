import { memo, useState, useCallback, useRef } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  Animated,
  TouchableOpacity,
  Modal,
  Dimensions,
  Platform,
} from 'react-native';
import { HighlightSheet, HighlightColor } from '../HighlightSheet';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export interface TextSegment {
  /** Segment ID */
  id: string;
  /** Text content */
  text: string;
  /** Highlight color (if highlighted) */
  highlightColor?: string;
  /** Underline color (if underlined) */
  underlineColor?: string;
  /** Is currently selected */
  isSelected?: boolean;
}

export interface TextSelectionHighlightProps {
  /** Array of text segments */
  segments: TextSegment[];
  /** Text color for non-highlighted text */
  textColor?: string;
  /** Font size */
  fontSize?: number;
  /** Font weight */
  fontWeight?: '400' | '500' | '600' | '700' | '800';
  /** Line height */
  lineHeight?: number;
  /** Available highlight colors */
  colors?: HighlightColor[];
  /** Enable text selection */
  enableSelection?: boolean;
  /** Enable multi-word continuous selection */
  enableMultiSelection?: boolean;
  /** On segments change handler */
  onSegmentsChange?: (segments: TextSegment[]) => void;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/**
 * Text selection highlight component for React Native/Expo
 * Allows users to select text and apply highlight or underline with color picker
 */
export const TextSelectionHighlight = memo<TextSelectionHighlightProps>(
  ({
    segments: initialSegments,
    textColor = '#FFFFFF',
    fontSize = 16,
    fontWeight = '400',
    lineHeight = 24,
    colors,
    enableSelection = true,
    enableMultiSelection = true,
    onSegmentsChange,
    style,
    testID = 'text-selection-highlight',
  }) => {
    const [segments, setSegments] = useState<TextSegment[]>(initialSegments);
    const [selectedSegments, setSelectedSegments] = useState<Set<string>>(new Set());
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [showActionMenu, setShowActionMenu] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const [actionType, setActionType] = useState<'highlight' | 'underline'>('highlight');
    const [selectionStart, setSelectionStart] = useState<number | null>(null);
    const scaleAnim = useRef(new Animated.Value(0)).current;

    const handleSegmentPress = useCallback(
      (segment: TextSegment, index: number) => {
        if (!enableSelection) return;

        const newSelected = new Set(selectedSegments);

        if (enableMultiSelection && selectionStart !== null) {
          // Multi-selection mode: select range from start to current
          const start = Math.min(selectionStart, index);
          const end = Math.max(selectionStart, index);

          for (let i = start; i <= end; i++) {
            const seg = segments[i];
            if (seg && seg.text.trim() !== '') {
              newSelected.add(seg.id);
            }
          }
          setSelectionStart(null); // Reset after range selection
        } else {
          // Single selection or toggle
          if (newSelected.has(segment.id)) {
            newSelected.delete(segment.id);
            setSelectionStart(null);
          } else {
            if (!enableMultiSelection) {
              newSelected.clear(); // Clear previous if multi not enabled
            }
            newSelected.add(segment.id);
            setSelectionStart(index);
          }
        }

        setSelectedSegments(newSelected);

        // Show action menu if there are selections
        if (newSelected.size > 0) {
          setShowActionMenu(true);
          Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
            tension: 100,
            friction: 7,
          }).start();
        } else {
          Animated.timing(scaleAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
            setShowActionMenu(false);
          });
        }
      },
      [
        enableSelection,
        enableMultiSelection,
        selectedSegments,
        selectionStart,
        segments,
        scaleAnim,
      ],
    );

    const handleLongPress = useCallback(
      (segment: TextSegment, index: number) => {
        if (!enableSelection) return;

        // Long press: Select entire paragraph or all segments
        const newSelected = new Set<string>();

        // Select all non-space segments
        segments.forEach((seg) => {
          if (seg.text.trim() !== '') {
            newSelected.add(seg.id);
          }
        });

        setSelectedSegments(newSelected);
        setSelectionStart(null);
        setShowActionMenu(true);
        Animated.spring(scaleAnim, {
          toValue: 1,
          useNativeDriver: true,
          tension: 100,
          friction: 7,
        }).start();
      },
      [enableSelection, segments, scaleAnim],
    );

    // Handle click outside to deselect
    const handleContainerPress = useCallback(() => {
      if (selectedSegments.size > 0 && !showColorPicker) {
        setSelectedSegments(new Set());
        setSelectionStart(null);
        Animated.timing(scaleAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          setShowActionMenu(false);
        });
      }
    }, [selectedSegments, showColorPicker, scaleAnim]);

    const handleApplyColor = useCallback(
      (color: HighlightColor) => {
        const newSegments = segments.map((seg) => {
          if (selectedSegments.has(seg.id)) {
            if (actionType === 'highlight') {
              return { ...seg, highlightColor: color.color };
            } else {
              return { ...seg, underlineColor: color.color };
            }
          }
          return seg;
        });

        setSegments(newSegments);
        onSegmentsChange?.(newSegments);
        setShowColorPicker(false);
        setSelectedSegments(new Set());
        setSelectionStart(null);
        Animated.timing(scaleAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          setShowActionMenu(false);
        });
      },
      [segments, selectedSegments, actionType, onSegmentsChange, scaleAnim],
    );

    const handleRemoveFormat = useCallback(() => {
      const newSegments = segments.map((seg) => {
        if (selectedSegments.has(seg.id)) {
          return {
            ...seg,
            highlightColor: undefined,
            underlineColor: undefined,
          };
        }
        return seg;
      });

      setSegments(newSegments);
      onSegmentsChange?.(newSegments);
      setSelectedSegments(new Set());
      setSelectionStart(null);
      Animated.timing(scaleAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        setShowActionMenu(false);
      });
    }, [segments, selectedSegments, onSegmentsChange, scaleAnim]);

    const openColorPicker = useCallback((type: 'highlight' | 'underline') => {
      setActionType(type);
      setShowColorPicker(true);
    }, []);

    const handleSelectAll = useCallback(() => {
      const newSelected = new Set<string>();
      segments.forEach((seg) => {
        if (seg.text.trim() !== '') {
          newSelected.add(seg.id);
        }
      });
      setSelectedSegments(newSelected);
      setSelectionStart(null);
    }, [segments]);

    const renderSegment = (segment: TextSegment, index: number) => {
      const isSelected = selectedSegments.has(segment.id);
      const hasFormat = segment.highlightColor || segment.underlineColor;

      return (
        <TouchableOpacity
          key={segment.id}
          onPress={() => handleSegmentPress(segment, index)}
          onLongPress={() => handleLongPress(segment, index)}
          activeOpacity={0.7}
          disabled={!enableSelection}
          testID={`${testID}-segment-${index}`}
        >
          <View
            style={[
              styles.segmentContainer,
              {
                backgroundColor: segment.highlightColor || 'transparent',
                borderBottomWidth: segment.underlineColor ? 2 : 0,
                borderBottomColor: segment.underlineColor || 'transparent',
              },
              isSelected && styles.selectedSegment,
            ]}
          >
            <Text
              style={[
                styles.segmentText,
                {
                  color: textColor,
                  fontSize,
                  fontWeight,
                  lineHeight,
                },
              ]}
            >
              {segment.text}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };

    const hasSelectedSegments = selectedSegments.size > 0;
    const hasExistingFormat = segments.some(
      (seg) => selectedSegments.has(seg.id) && (seg.highlightColor || seg.underlineColor),
    );

    return (
      <TouchableOpacity
        style={[styles.container, style]}
        activeOpacity={1}
        onPress={handleContainerPress}
        testID={testID}
      >
        {/* Text Content */}
        <View style={styles.textContainer}>{segments.map(renderSegment)}</View>

        {/* Floating Action Menu */}
        {showActionMenu && (
          <Animated.View
            style={[
              styles.actionMenu,
              {
                transform: [{ scale: scaleAnim }],
                opacity: scaleAnim,
              },
            ]}
          >
            {/* Select All Button */}
            {selectedSegments.size < segments.filter((s) => s.text.trim() !== '').length && (
              <>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={handleSelectAll}
                  testID={`${testID}-select-all-btn`}
                >
                  <View style={styles.selectAllIcon} />
                  <Text style={styles.actionButtonText}>All</Text>
                </TouchableOpacity>
                <View style={styles.actionDivider} />
              </>
            )}

            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => openColorPicker('highlight')}
              testID={`${testID}-highlight-btn`}
            >
              <View style={styles.highlightIcon} />
              <Text style={styles.actionButtonText}>Highlight</Text>
            </TouchableOpacity>

            <View style={styles.actionDivider} />

            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => openColorPicker('underline')}
              testID={`${testID}-underline-btn`}
            >
              <View style={styles.underlineIcon} />
              <Text style={styles.actionButtonText}>Underline</Text>
            </TouchableOpacity>

            {hasExistingFormat && (
              <>
                <View style={styles.actionDivider} />
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={handleRemoveFormat}
                  testID={`${testID}-remove-btn`}
                >
                  <View style={styles.removeIcon} />
                  <Text style={styles.actionButtonText}>Remove</Text>
                </TouchableOpacity>
              </>
            )}
          </Animated.View>
        )}

        {/* Color Picker Modal */}
        <Modal
          visible={showColorPicker}
          transparent
          animationType="fade"
          onRequestClose={() => setShowColorPicker(false)}
          testID={`${testID}-modal`}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={() => setShowColorPicker(false)}
          >
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>
                {actionType === 'highlight' ? 'Choose Highlight Color' : 'Choose Underline Color'}
              </Text>

              <HighlightSheet
                colors={colors}
                onColorSelect={handleApplyColor}
                style={styles.colorPicker}
                testID={`${testID}-color-picker`}
              />

              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setShowColorPicker(false)}
                testID={`${testID}-cancel`}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </TouchableOpacity>
    );
  },
);

TextSelectionHighlight.displayName = 'TextSelectionHighlight';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 0,
  },
  segmentContainer: {
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderRadius: 4,
  },
  selectedSegment: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  segmentText: {
    fontFamily: 'Akzidenz-Grotesk Pro',
  },
  actionMenu: {
    position: 'absolute',
    bottom: 20,
    left: (SCREEN_WIDTH - 340) / 2,
    backgroundColor: '#2C2C2E',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#9B9B9B',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    gap: 8,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  actionButtonText: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  actionDivider: {
    width: 1,
    height: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  highlightIcon: {
    width: 20,
    height: 16,
    backgroundColor: '#6F6E30',
    borderRadius: 4,
  },
  underlineIcon: {
    width: 20,
    height: 16,
    borderBottomWidth: 3,
    borderBottomColor: '#6F6E30',
  },
  removeIcon: {
    width: 20,
    height: 16,
    backgroundColor: '#FF3B30',
    borderRadius: 4,
  },
  selectAllIcon: {
    width: 20,
    height: 16,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    gap: 16,
    padding: 16,
    alignItems: 'center',
  },
  modalTitle: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  colorPicker: {
    alignSelf: 'center',
  },
  cancelButton: {
    backgroundColor: '#3A3A3C',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 8,
  },
  cancelButtonText: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
