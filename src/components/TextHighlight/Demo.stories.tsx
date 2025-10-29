import type { Meta, StoryObj } from '@storybook/react';
import { View, Text, ScrollView } from 'react-native';
import { useState } from 'react';
import { TextSelectionHighlight } from './TextSelectionHighlight';
import { textToSegments } from './utils';

const meta = {
  title: 'Demo/TextHighlightDemo',
  component: TextSelectionHighlight,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: '#000000' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof TextSelectionHighlight>;

export default meta;

type Story = StoryObj<typeof meta>;

const DEMO_TEXT =
  'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.';

// Main Demo - Simple and Clear
export const MainDemo: Story = {
  render: () => {
    const [segments, setSegments] = useState(textToSegments(DEMO_TEXT));

    return (
      <ScrollView contentContainerStyle={{ padding: 24, gap: 20 }}>
        {/* Title */}
        <View style={{ gap: 8 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 24, fontWeight: '700' }}>
            Text Highlighter
          </Text>
          <Text style={{ color: '#999999', fontSize: 14 }}>John 3:16</Text>
        </View>

        {/* Instructions */}
        <View
          style={{
            backgroundColor: '#1C1C1E',
            padding: 16,
            borderRadius: 12,
            gap: 8,
          }}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>How to use:</Text>
          <Text style={{ color: '#CCCCCC', fontSize: 14, lineHeight: 22 }}>
            <Text style={{ color: '#6F6E30' }}>1.</Text> Tap first word to start selection{'\n'}
            <Text style={{ color: '#6F6E30' }}>2.</Text> Tap another word to select range{'\n'}
            <Text style={{ color: '#6F6E30' }}>3.</Text> Long press to select all text{'\n'}
            <Text style={{ color: '#6F6E30' }}>4.</Text> Tap "All" button to select all{'\n'}
            <Text style={{ color: '#6F6E30' }}>5.</Text> Tap outside to deselect{'\n'}
            <Text style={{ color: '#6F6E30' }}>6.</Text> Choose Highlight or Underline{'\n'}
            <Text style={{ color: '#6F6E30' }}>7.</Text> Pick a color from palette
          </Text>
        </View>

        {/* Text Content */}
        <View
          style={{
            backgroundColor: '#1C1C1E',
            padding: 20,
            borderRadius: 16,
            minHeight: 200,
          }}
        >
          <TextSelectionHighlight
            segments={segments}
            textColor="#FFFFFF"
            fontSize={18}
            lineHeight={30}
            enableMultiSelection={true}
            onSegmentsChange={setSegments}
          />
        </View>

        {/* Tips */}
        <View style={{ gap: 8 }}>
          <Text style={{ color: '#666666', fontSize: 12 }}>
            💡 TIP: Select multiple words by tapping first word, then last word
          </Text>
          <Text style={{ color: '#666666', fontSize: 12 }}>
            💡 TIP: Long press anywhere to quickly select all text
          </Text>
          <Text style={{ color: '#666666', fontSize: 12 }}>
            💡 TIP: Tap outside the text box to clear selection
          </Text>
        </View>
      </ScrollView>
    );
  },
};

// Quick Test
export const QuickTest: Story = {
  render: () => {
    const text = 'The quick brown fox jumps over the lazy dog';
    const [segments, setSegments] = useState(textToSegments(text));

    return (
      <View style={{ flex: 1, padding: 20, gap: 16 }}>
        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>
          Quick test - Try selecting multiple words:
        </Text>

        <View style={{ backgroundColor: '#1C1C1E', padding: 16, borderRadius: 12 }}>
          <TextSelectionHighlight
            segments={segments}
            textColor="#FFFFFF"
            fontSize={20}
            lineHeight={32}
            onSegmentsChange={setSegments}
          />
        </View>

        <View style={{ gap: 4 }}>
          <Text style={{ color: '#999999', fontSize: 13 }}>Try this:</Text>
          <Text style={{ color: '#CCCCCC', fontSize: 13 }}>
            1. Tap "quick" then tap "fox" → selects "quick brown fox"
          </Text>
          <Text style={{ color: '#CCCCCC', fontSize: 13 }}>2. Long press → selects all words</Text>
          <Text style={{ color: '#CCCCCC', fontSize: 13 }}>3. Tap outside → deselects all</Text>
        </View>
      </View>
    );
  },
};

// Reading Experience
export const ReadingExperience: Story = {
  render: () => {
    const bookText =
      'In the beginning was the Word, and the Word was with God, and the Word was God. He was with God in the beginning. Through him all things were made; without him nothing was made that has been made.';

    const [segments, setSegments] = useState(textToSegments(bookText));

    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#0A0A0A' }}
        contentContainerStyle={{ padding: 24, gap: 24 }}
      >
        <View style={{ gap: 12 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 28, fontWeight: '700' }}>John 1:1-3</Text>
          <Text style={{ color: '#666666', fontSize: 14 }}>New International Version</Text>
        </View>

        <View
          style={{
            backgroundColor: '#1A1A1A',
            padding: 24,
            borderRadius: 20,
            borderLeftWidth: 4,
            borderLeftColor: '#6F6E30',
          }}
        >
          <TextSelectionHighlight
            segments={segments}
            textColor="#E8E8E8"
            fontSize={19}
            lineHeight={32}
            fontWeight="400"
            onSegmentsChange={setSegments}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingVertical: 16,
          }}
        >
          <View style={{ alignItems: 'center', gap: 4 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 24, fontWeight: '700' }}>
              {segments.filter((s) => s.highlightColor).length}
            </Text>
            <Text style={{ color: '#999999', fontSize: 12 }}>Highlights</Text>
          </View>
          <View style={{ alignItems: 'center', gap: 4 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 24, fontWeight: '700' }}>
              {segments.filter((s) => s.underlineColor).length}
            </Text>
            <Text style={{ color: '#999999', fontSize: 12 }}>Underlines</Text>
          </View>
        </View>
      </ScrollView>
    );
  },
};
