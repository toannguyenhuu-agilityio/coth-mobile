import type { Meta, StoryObj } from '@storybook/react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { useState } from 'react';
import { TextSelectionHighlight } from './TextSelectionHighlight';
import { textToSegments, textToSentenceSegments, exportHighlights } from './utils';

const meta = {
  title: 'Components/TextSelectionHighlight',
  component: TextSelectionHighlight,
  decorators: [
    (Story) => (
      <View
        style={{
          flex: 1,
          backgroundColor: '#000000',
        }}
      >
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof TextSelectionHighlight>;

export default meta;

type Story = StoryObj<typeof meta>;

// Sample text for demos
const SAMPLE_TEXT =
  'Semper vel adipiscing laoreet iaculis sed at. Ac urna nibh scelerisque congue molestie. Integer enim neque volutpat ac tincidunt vitae semper quis.';

const LONG_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

// Basic Example - Word by Word Selection
export const BasicWordSelection: Story = {
  decorators: [
    () => {
      const [segments, setSegments] = useState(textToSegments(SAMPLE_TEXT));

      return (
        <ScrollView contentContainerStyle={{ padding: 20, gap: 16 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 14, marginBottom: 8 }}>
            Cách sử dụng:
            {'\n'}• Nhấn 1 từ để chọn từ đầu tiên
            {'\n'}• Nhấn từ khác để chọn khoảng từ đầu đến từ cuối
            {'\n'}• Nhấn giữ (long press) để chọn tất cả
            {'\n'}• Click ngoài vùng văn bản để bỏ chọn
            {'\n'}• Nhấn "All" để chọn tất cả
            {'\n'}• Chọn Highlight hoặc Underline rồi chọn màu
          </Text>

          <TextSelectionHighlight
            segments={segments}
            textColor="#FFFFFF"
            fontSize={16}
            lineHeight={24}
            onSegmentsChange={(newSegments) => {
              setSegments(newSegments);
              const highlights = exportHighlights(newSegments);
              console.log('Highlights saved:', highlights);
            }}
          />
        </ScrollView>
      );
    },
  ],
};

// Sentence Selection
export const SentenceSelection: Story = {
  decorators: [
    () => {
      const [segments, setSegments] = useState(textToSentenceSegments(LONG_TEXT));

      return (
        <ScrollView contentContainerStyle={{ padding: 20, gap: 16 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 14, marginBottom: 8 }}>
            Chọn từng câu (sentence) để highlight:
            {'\n'}• Mỗi câu là một đơn vị chọn
            {'\n'}• Dễ dàng highlight cả câu
          </Text>

          <TextSelectionHighlight
            segments={segments}
            textColor="#FFFFFF"
            fontSize={16}
            lineHeight={24}
            onSegmentsChange={setSegments}
          />
        </ScrollView>
      );
    },
  ],
};

// With Pre-existing Highlights
export const WithExistingHighlights: Story = {
  decorators: [
    () => {
      const initialSegments = textToSegments(SAMPLE_TEXT).map((seg, index) => {
        // Pre-highlight some words
        if (index === 4 || index === 6) {
          return { ...seg, highlightColor: '#6F6E30' };
        }
        if (index === 10 || index === 12) {
          return { ...seg, underlineColor: '#562C30' };
        }
        return seg;
      });

      const [segments, setSegments] = useState(initialSegments);

      return (
        <ScrollView contentContainerStyle={{ padding: 20, gap: 16 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 14, marginBottom: 8 }}>
            Văn bản với highlights có sẵn:
            {'\n'}• Một số từ đã được highlight (màu vàng)
            {'\n'}• Một số từ đã được underline (màu đỏ)
            {'\n'}• Chọn từ và nhấn Remove để xóa format
          </Text>

          <TextSelectionHighlight
            segments={segments}
            textColor="#FFFFFF"
            fontSize={16}
            lineHeight={24}
            onSegmentsChange={setSegments}
          />
        </ScrollView>
      );
    },
  ],
};

// Reading Mode Example
export const ReadingMode: Story = {
  decorators: [
    () => {
      const [segments, setSegments] = useState(textToSegments(LONG_TEXT));

      return (
        <ScrollView
          contentContainerStyle={{
            padding: 24,
            gap: 20,
          }}
        >
          <View style={{ gap: 8 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: '700' }}>
              Chapter 1: Getting Started
            </Text>
            <Text style={{ color: '#999999', fontSize: 14 }}>Reading Time: 5 minutes</Text>
          </View>

          <View
            style={{
              backgroundColor: '#1C1C1E',
              padding: 20,
              borderRadius: 12,
            }}
          >
            <TextSelectionHighlight
              segments={segments}
              textColor="#FFFFFF"
              fontSize={17}
              fontWeight="400"
              lineHeight={28}
              onSegmentsChange={setSegments}
            />
          </View>

          <Text style={{ color: '#666666', fontSize: 12, textAlign: 'center' }}>
            Nhấn giữ bất kỳ từ nào để highlight hoặc underline
          </Text>
        </ScrollView>
      );
    },
  ],
};

// Multiple Selection Example
export const MultipleSelection: Story = {
  decorators: [
    () => {
      const [segments, setSegments] = useState(textToSegments(SAMPLE_TEXT));

      return (
        <ScrollView contentContainerStyle={{ padding: 20, gap: 16 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 14, marginBottom: 8 }}>
            Chọn nhiều từ cùng lúc:
            {'\n'}• Nhấn vào nhiều từ để chọn
            {'\n'}• Tất cả từ được chọn sẽ có cùng định dạng
            {'\n'}• Menu action bar xuất hiện khi có chọn lựa
          </Text>

          <TextSelectionHighlight
            segments={segments}
            textColor="#FFFFFF"
            fontSize={18}
            lineHeight={28}
            onSegmentsChange={setSegments}
          />
        </ScrollView>
      );
    },
  ],
};

// Custom Colors Example
export const CustomColors: Story = {
  decorators: [
    () => {
      const [segments, setSegments] = useState(textToSegments(SAMPLE_TEXT));

      const customColors = [
        { color: '#FF6B6B', label: 'Red' },
        { color: '#4ECDC4', label: 'Cyan' },
        { color: '#45B7D1', label: 'Blue' },
        { color: '#FFA07A', label: 'Orange' },
        { color: '#98D8C8', label: 'Mint' },
        { color: '#F7DC6F', label: 'Yellow' },
        { color: '#BB8FCE', label: 'Purple' },
        { color: '#85C1E2', label: 'Sky' },
      ];

      return (
        <ScrollView contentContainerStyle={{ padding: 20, gap: 16 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 14, marginBottom: 8 }}>
            Bảng màu tùy chỉnh:
            {'\n'}• 8 màu tùy chỉnh
            {'\n'}• Sử dụng cho highlight và underline
          </Text>

          <TextSelectionHighlight
            segments={segments}
            colors={customColors}
            textColor="#FFFFFF"
            fontSize={16}
            lineHeight={24}
            onSegmentsChange={setSegments}
          />
        </ScrollView>
      );
    },
  ],
};

// Bible Verse Example
export const BibleVerse: Story = {
  decorators: [
    () => {
      const verseText =
        'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.';
      const [segments, setSegments] = useState(textToSegments(verseText));

      return (
        <ScrollView
          contentContainerStyle={{
            padding: 24,
            gap: 16,
          }}
        >
          <View
            style={{
              backgroundColor: '#1C1C1E',
              padding: 20,
              borderRadius: 16,
              borderLeftWidth: 4,
              borderLeftColor: '#6F6E30',
            }}
          >
            <Text style={{ color: '#999999', fontSize: 12, marginBottom: 12 }}>John 3:16</Text>

            <TextSelectionHighlight
              segments={segments}
              textColor="#FFFFFF"
              fontSize={18}
              fontWeight="400"
              lineHeight={30}
              onSegmentsChange={(newSegments) => {
                setSegments(newSegments);
                const highlights = exportHighlights(newSegments);
                if (highlights.length > 0) {
                  Alert.alert('Saved', `${highlights.length} highlights saved`);
                }
              }}
            />
          </View>

          <Text style={{ color: '#666666', fontSize: 13, textAlign: 'center' }}>
            Long press words to highlight meaningful passages
          </Text>
        </ScrollView>
      );
    },
  ],
};

// Study Notes Example
export const StudyNotes: Story = {
  decorators: [
    () => {
      const studyText =
        'The concept of grace is central to Christian theology. Grace refers to the unmerited favor of God toward humanity. It is through grace that believers receive salvation, not through their own works or merit.';

      const initialSegments = textToSegments(studyText).map((seg, index) => {
        // Highlight key terms
        if (seg.text === 'grace' || seg.text === 'Grace') {
          return { ...seg, highlightColor: '#6F513B' };
        }
        if (seg.text === 'salvation,') {
          return { ...seg, highlightColor: '#544D01' };
        }
        if (seg.text === 'unmerited') {
          return { ...seg, underlineColor: '#562C30' };
        }
        return seg;
      });

      const [segments, setSegments] = useState(initialSegments);

      return (
        <ScrollView
          contentContainerStyle={{
            padding: 24,
            gap: 20,
          }}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 22, fontWeight: '700' }}>Study Notes</Text>

          <View
            style={{
              backgroundColor: '#1C1C1E',
              padding: 20,
              borderRadius: 12,
            }}
          >
            <TextSelectionHighlight
              segments={segments}
              textColor="#E8E8E8"
              fontSize={16}
              lineHeight={26}
              onSegmentsChange={setSegments}
            />
          </View>

          <View style={{ gap: 8 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>Color Legend:</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <View
                style={{ width: 20, height: 20, backgroundColor: '#6F513B', borderRadius: 4 }}
              />
              <Text style={{ color: '#CCCCCC', fontSize: 14 }}>Key Concepts</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <View
                style={{ width: 20, height: 20, backgroundColor: '#544D01', borderRadius: 4 }}
              />
              <Text style={{ color: '#CCCCCC', fontSize: 14 }}>Important Terms</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderBottomWidth: 3,
                  borderBottomColor: '#562C30',
                }}
              />
              <Text style={{ color: '#CCCCCC', fontSize: 14 }}>Definitions</Text>
            </View>
          </View>
        </ScrollView>
      );
    },
  ],
};
