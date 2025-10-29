import { memo, useState, useCallback, useRef } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TouchableOpacity,
  Modal,
  TextInput,
  Animated,
  ScrollView,
  Keyboard,
  Platform,
} from 'react-native';
import { TextSegment } from './TextSelectionHighlight';
import { HighlightSheet, HighlightColor } from '../HighlightSheet';

export interface NoteAnnotation {
  /** Note ID */
  id: string;
  /** Related segment IDs */
  segmentIds: string[];
  /** Note text content */
  text: string;
  /** Highlight color */
  color?: string;
  /** Created timestamp */
  createdAt: number;
  /** Last modified timestamp */
  modifiedAt: number;
}

export interface IOSNotesHighlightProps {
  /** Text segments */
  segments: TextSegment[];
  /** Existing notes */
  notes?: NoteAnnotation[];
  /** Text color */
  textColor?: string;
  /** Font size */
  fontSize?: number;
  /** Font weight */
  fontWeight?: '400' | '500' | '600' | '700' | '800';
  /** Line height */
  lineHeight?: number;
  /** Available colors */
  colors?: HighlightColor[];
  /** On segments change */
  onSegmentsChange?: (segments: TextSegment[]) => void;
  /** On notes change */
  onNotesChange?: (notes: NoteAnnotation[]) => void;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/**
 * iOS Notes-style text highlighter with note annotations
 */
export const IOSNotesHighlight = memo<IOSNotesHighlightProps>(
  ({
    segments: initialSegments,
    notes: initialNotes = [],
    textColor = '#FFFFFF',
    fontSize = 17,
    fontWeight = '400',
    lineHeight = 26,
    colors,
    onSegmentsChange,
    onNotesChange,
    style,
    testID = 'ios-notes-highlight',
  }) => {
    const [segments, setSegments] = useState<TextSegment[]>(initialSegments);
    const [notes, setNotes] = useState<NoteAnnotation[]>(initialNotes);
    const [selectedSegments, setSelectedSegments] = useState<Set<string>>(new Set());
    const [selectionStart, setSelectionStart] = useState<number | null>(null);
    const [showActionMenu, setShowActionMenu] = useState(false);
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [showNoteEditor, setShowNoteEditor] = useState(false);
    const [currentNote, setCurrentNote] = useState<NoteAnnotation | null>(null);
    const [noteText, setNoteText] = useState('');
    const [selectedColor, setSelectedColor] = useState<string>('#FFD60A');
    const scaleAnim = useRef(new Animated.Value(0)).current;
    const noteInputRef = useRef<TextInput>(null);

    // Default iOS Notes colors
    const defaultColors: HighlightColor[] = colors || [
      { color: '#FFD60A', label: 'Yellow' },
      { color: '#FF9F0A', label: 'Orange' },
      { color: '#FF453A', label: 'Red' },
      { color: '#BF5AF2', label: 'Purple' },
      { color: '#5E5CE6', label: 'Blue' },
      { color: '#64D2FF', label: 'Cyan' },
      { color: '#30D158', label: 'Green' },
      { color: '#AC8E68', label: 'Brown' },
      { color: '#98989D', label: 'Gray' },
    ];

    const handleSegmentPress = useCallback(
      (segment: TextSegment, index: number) => {
        const newSelected = new Set(selectedSegments);

        if (selectionStart !== null) {
          // Multi-selection mode
          const start = Math.min(selectionStart, index);
          const end = Math.max(selectionStart, index);

          for (let i = start; i <= end; i++) {
            const seg = segments[i];
            if (seg && seg.text.trim() !== '') {
              newSelected.add(seg.id);
            }
          }
          setSelectionStart(null);
        } else {
          // Single selection
          if (newSelected.has(segment.id)) {
            newSelected.delete(segment.id);
            setSelectionStart(null);
          } else {
            newSelected.add(segment.id);
            setSelectionStart(index);
          }
        }

        setSelectedSegments(newSelected);

        // Show action menu
        if (newSelected.size > 0) {
          setShowActionMenu(true);
          Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
            tension: 100,
            friction: 7,
          }).start();
        } else {
          hideActionMenu();
        }
      },
      [selectedSegments, selectionStart, segments, scaleAnim],
    );

    const handleLongPress = useCallback(
      (_segment: TextSegment, _index: number) => {
        // Select all on long press
        const newSelected = new Set<string>();
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
        }).start();
      },
      [segments, scaleAnim],
    );

    const hideActionMenu = useCallback(() => {
      Animated.timing(scaleAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        setShowActionMenu(false);
      });
    }, [scaleAnim]);

    const handleContainerPress = useCallback(() => {
      if (selectedSegments.size > 0 && !showColorPicker && !showNoteEditor) {
        setSelectedSegments(new Set());
        setSelectionStart(null);
        hideActionMenu();
      }
    }, [selectedSegments, showColorPicker, showNoteEditor, hideActionMenu]);

    const handleHighlight = useCallback(
      (color: HighlightColor) => {
        const newSegments = segments.map((seg) => {
          if (selectedSegments.has(seg.id)) {
            return { ...seg, highlightColor: color.color };
          }
          return seg;
        });

        setSegments(newSegments);
        onSegmentsChange?.(newSegments);
        setSelectedColor(color.color);
        setShowColorPicker(false);
      },
      [segments, selectedSegments, onSegmentsChange],
    );

    const handleOpenNoteEditor = useCallback(() => {
      // Check if there's existing note for selected segments
      const selectedIds = Array.from(selectedSegments);
      const existingNote = notes.find((note) =>
        note.segmentIds.some((id) => selectedIds.includes(id)),
      );

      if (existingNote) {
        setCurrentNote(existingNote);
        setNoteText(existingNote.text);
      } else {
        setCurrentNote(null);
        setNoteText('');
      }

      setShowNoteEditor(true);
      hideActionMenu();
      setTimeout(() => noteInputRef.current?.focus(), 300);
    }, [selectedSegments, notes, hideActionMenu]);

    const handleSaveNote = useCallback(() => {
      const selectedIds = Array.from(selectedSegments);

      if (currentNote) {
        // Update existing note
        const updatedNotes = notes.map((note) =>
          note.id === currentNote.id
            ? {
                ...note,
                text: noteText,
                color: selectedColor,
                modifiedAt: Date.now(),
              }
            : note,
        );
        setNotes(updatedNotes);
        onNotesChange?.(updatedNotes);
      } else {
        // Create new note
        const newNote: NoteAnnotation = {
          id: `note-${Date.now()}`,
          segmentIds: selectedIds,
          text: noteText,
          color: selectedColor,
          createdAt: Date.now(),
          modifiedAt: Date.now(),
        };
        const updatedNotes = [...notes, newNote];
        setNotes(updatedNotes);
        onNotesChange?.(updatedNotes);
      }

      // Apply highlight to selected segments
      const newSegments = segments.map((seg) => {
        if (selectedIds.includes(seg.id)) {
          return { ...seg, highlightColor: selectedColor };
        }
        return seg;
      });
      setSegments(newSegments);
      onSegmentsChange?.(newSegments);

      // Close editor
      setShowNoteEditor(false);
      setSelectedSegments(new Set());
      setNoteText('');
      setCurrentNote(null);
      Keyboard.dismiss();
    }, [
      selectedSegments,
      currentNote,
      noteText,
      selectedColor,
      notes,
      segments,
      onNotesChange,
      onSegmentsChange,
    ]);

    const handleDeleteNote = useCallback(() => {
      if (!currentNote) return;

      // Remove note
      const updatedNotes = notes.filter((note) => note.id !== currentNote.id);
      setNotes(updatedNotes);
      onNotesChange?.(updatedNotes);

      // Remove highlight from segments
      const newSegments = segments.map((seg) => {
        if (currentNote.segmentIds.includes(seg.id)) {
          return { ...seg, highlightColor: undefined };
        }
        return seg;
      });
      setSegments(newSegments);
      onSegmentsChange?.(newSegments);

      setShowNoteEditor(false);
      setSelectedSegments(new Set());
      setCurrentNote(null);
    }, [currentNote, notes, segments, onNotesChange, onSegmentsChange]);

    const renderSegment = (segment: TextSegment, index: number) => {
      const isSelected = selectedSegments.has(segment.id);
      const isSpace = segment.text.trim() === '';

      if (isSpace) {
        return (
          <Text key={segment.id} style={[styles.text, { color: textColor, fontSize, lineHeight }]}>
            {segment.text}
          </Text>
        );
      }

      return (
        <TouchableOpacity
          key={segment.id}
          onPress={() => handleSegmentPress(segment, index)}
          onLongPress={() => handleLongPress(segment, index)}
          activeOpacity={0.7}
        >
          <View
            style={[
              styles.segmentContainer,
              {
                backgroundColor: segment.highlightColor || 'transparent',
                paddingHorizontal: segment.highlightColor ? 2 : 0,
                paddingVertical: segment.highlightColor ? 1 : 0,
                borderRadius: segment.highlightColor ? 4 : 0,
              },
              isSelected && styles.selectedSegment,
            ]}
          >
            <Text
              style={[
                styles.text,
                {
                  color: segment.highlightColor ? '#000000' : textColor,
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

    return (
      <TouchableOpacity
        style={[styles.container, style]}
        activeOpacity={1}
        onPress={handleContainerPress}
        testID={testID}
      >
        <View style={styles.textContainer}>{segments.map(renderSegment)}</View>

        {/* iOS-style Action Menu */}
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
            <TouchableOpacity style={styles.menuButton} onPress={() => setShowColorPicker(true)}>
              <Text style={styles.menuButtonText}>Highlight</Text>
            </TouchableOpacity>

            <View style={styles.menuDivider} />

            <TouchableOpacity style={styles.menuButton} onPress={handleOpenNoteEditor}>
              <Text style={styles.menuButtonText}>Note</Text>
            </TouchableOpacity>
          </Animated.View>
        )}

        {/* Color Picker Modal */}
        <Modal visible={showColorPicker} transparent animationType="fade">
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={() => setShowColorPicker(false)}
          >
            <View style={styles.colorPickerContainer}>
              <Text style={styles.pickerTitle}>Choose Color</Text>
              <HighlightSheet colors={defaultColors} onColorSelect={handleHighlight} />
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setShowColorPicker(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>

        {/* Note Editor Modal */}
        <Modal visible={showNoteEditor} animationType="slide" presentationStyle="pageSheet">
          <View style={styles.noteEditorContainer}>
            {/* Header */}
            <View style={styles.noteHeader}>
              <TouchableOpacity onPress={() => setShowNoteEditor(false)}>
                <Text style={styles.headerButton}>Cancel</Text>
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Note</Text>
              <TouchableOpacity onPress={handleSaveNote}>
                <Text style={[styles.headerButton, styles.saveButton]}>Save</Text>
              </TouchableOpacity>
            </View>

            {/* Color Selector */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.colorSelector}
              contentContainerStyle={styles.colorSelectorContent}
            >
              {defaultColors.map((color, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.colorOption,
                    { backgroundColor: color.color },
                    selectedColor === color.color && styles.selectedColorOption,
                  ]}
                  onPress={() => setSelectedColor(color.color)}
                />
              ))}
            </ScrollView>

            {/* Note Input */}
            <TextInput
              ref={noteInputRef}
              style={styles.noteInput}
              value={noteText}
              onChangeText={setNoteText}
              placeholder="Add a note..."
              placeholderTextColor="#8E8E93"
              multiline
              autoFocus
            />

            {/* Delete Button */}
            {currentNote && (
              <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteNote}>
                <Text style={styles.deleteButtonText}>Delete Note</Text>
              </TouchableOpacity>
            )}
          </View>
        </Modal>

        {/* Notes List */}
        {notes.length > 0 && (
          <View style={styles.notesList}>
            <Text style={styles.notesListTitle}>Notes ({notes.length})</Text>
            {notes.map((note) => (
              <TouchableOpacity
                key={note.id}
                style={styles.noteCard}
                onPress={() => {
                  setCurrentNote(note);
                  setNoteText(note.text);
                  setSelectedColor(note.color || '#FFD60A');
                  setShowNoteEditor(true);
                }}
              >
                <View style={[styles.noteColorBar, { backgroundColor: note.color }]} />
                <View style={styles.noteContent}>
                  <Text style={styles.noteTextPreview} numberOfLines={2}>
                    {note.text}
                  </Text>
                  <Text style={styles.noteTimestamp}>
                    {new Date(note.modifiedAt).toLocaleDateString()}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </TouchableOpacity>
    );
  },
);

IOSNotesHighlight.displayName = 'IOSNotesHighlight';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  segmentContainer: {
    justifyContent: 'center',
  },
  selectedSegment: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 2,
    paddingVertical: 1,
    borderRadius: 4,
  },
  text: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Text' : 'Roboto',
  },
  // Action Menu
  actionMenu: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#2C2C2E',
    borderRadius: 14,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  menuButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  menuButtonText: {
    color: '#0A84FF',
    fontSize: 17,
    fontWeight: '400',
  },
  menuDivider: {
    width: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  // Modals
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorPickerContainer: {
    gap: 16,
    padding: 16,
  },
  pickerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: '#3A3A3C',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    alignSelf: 'center',
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
  // Note Editor
  noteEditorContainer: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  noteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#38383A',
  },
  headerButton: {
    fontSize: 17,
    color: '#0A84FF',
  },
  saveButton: {
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  colorSelector: {
    borderBottomWidth: 1,
    borderBottomColor: '#38383A',
  },
  colorSelectorContent: {
    padding: 16,
    gap: 12,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'transparent',
  },
  selectedColorOption: {
    borderColor: '#FFFFFF',
    shadowColor: '#FFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  noteInput: {
    flex: 1,
    padding: 16,
    fontSize: 17,
    color: '#FFFFFF',
    textAlignVertical: 'top',
  },
  deleteButton: {
    margin: 16,
    padding: 16,
    backgroundColor: '#FF453A',
    borderRadius: 10,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
  // Notes List
  notesList: {
    marginTop: 24,
    gap: 12,
  },
  notesListTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  noteCard: {
    flexDirection: 'row',
    backgroundColor: '#2C2C2E',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 8,
  },
  noteColorBar: {
    width: 4,
  },
  noteContent: {
    flex: 1,
    padding: 12,
    gap: 6,
  },
  noteTextPreview: {
    fontSize: 15,
    color: '#FFFFFF',
    lineHeight: 20,
  },
  noteTimestamp: {
    fontSize: 13,
    color: '#8E8E93',
  },
});
