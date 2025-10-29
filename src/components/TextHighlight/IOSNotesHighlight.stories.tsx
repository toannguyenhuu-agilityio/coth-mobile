import type { Meta, StoryObj } from '@storybook/react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { IOSNotesHighlight } from './IOSNotesHighlight';
import { textToSegments } from './utils';

const meta = {
  title: 'Components/IOSNotesHighlight',
  component: IOSNotesHighlight,
  decorators: [
    (Story) => (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
        <Story />
      </SafeAreaView>
    ),
  ],
} satisfies Meta<typeof IOSNotesHighlight>;

export default meta;

type Story = StoryObj<typeof meta>;

const BIBLE_VERSE =
  'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. For God did not send his Son into the world to condemn the world, but to save the world through him.';

const STUDY_TEXT =
  'Grace is the unmerited favor of God. It is not something we earn through our works, but rather a gift freely given. Through grace, we receive salvation and forgiveness of sins.';

// Main Demo
export const IOSNotesDemo: Story = {
  render: () => {
    const [segments, setSegments] = useState(textToSegments(BIBLE_VERSE));
    const [notes, setNotes] = useState([]);

    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#000000' }}
        contentContainerStyle={{ padding: 20, gap: 20 }}
      >
        {/* Header */}
        <View style={{ gap: 8 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 28, fontWeight: '700' }}>iOS Notes Style</Text>
          <Text style={{ color: '#8E8E93', fontSize: 15 }}>John 3:16-17</Text>
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
          <Text style={{ color: '#FFD60A', fontSize: 17, fontWeight: '600' }}>How to use:</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 15, lineHeight: 22 }}>
            1. Tap words to select{'\n'}
            2. Tap "Highlight" to add color{'\n'}
            3. Tap "Note" to add annotation{'\n'}
            4. Tap note card to edit{'\n'}
            5. Long press to select all
          </Text>
        </View>

        {/* Content */}
        <View
          style={{
            backgroundColor: '#1C1C1E',
            padding: 20,
            borderRadius: 16,
            minHeight: 200,
          }}
        >
          <IOSNotesHighlight
            segments={segments}
            notes={notes}
            textColor="#FFFFFF"
            fontSize={18}
            lineHeight={28}
            onSegmentsChange={setSegments}
            onNotesChange={setNotes}
          />
        </View>
      </ScrollView>
    );
  },
};

// Study Bible Example
export const StudyBible: Story = {
  render: () => {
    const [segments, setSegments] = useState(textToSegments(STUDY_TEXT));
    const [notes, setNotes] = useState([
      {
        id: 'note-1',
        segmentIds: ['segment-0', 'segment-2'],
        text: 'Key theological concept - grace is central to Christian faith',
        color: '#FFD60A',
        createdAt: Date.now() - 86400000,
        modifiedAt: Date.now() - 86400000,
      },
    ]);

    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#000000' }}
        contentContainerStyle={{ padding: 20 }}
      >
        <View style={{ gap: 16 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#FFFFFF', fontSize: 24, fontWeight: '700' }}>Study Notes</Text>
            <Text style={{ color: '#8E8E93', fontSize: 14 }}>
              {notes.length} {notes.length === 1 ? 'note' : 'notes'}
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#1C1C1E',
              padding: 20,
              borderRadius: 16,
            }}
          >
            <IOSNotesHighlight
              segments={segments}
              notes={notes}
              textColor="#E5E5E7"
              fontSize={17}
              lineHeight={26}
              onSegmentsChange={setSegments}
              onNotesChange={setNotes}
            />
          </View>
        </View>
      </ScrollView>
    );
  },
};

// Reading Mode
export const ReadingMode: Story = {
  render: () => {
    const text =
      'In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.';

    const [segments, setSegments] = useState(textToSegments(text));
    const [notes, setNotes] = useState([]);

    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#000000' }}
        contentContainerStyle={{ padding: 24, gap: 24 }}
      >
        {/* Book Header */}
        <View style={{ gap: 8 }}>
          <Text style={{ color: '#8E8E93', fontSize: 13, textTransform: 'uppercase' }}>
            Genesis
          </Text>
          <Text style={{ color: '#FFFFFF', fontSize: 32, fontWeight: '700' }}>Chapter 1</Text>
        </View>

        {/* Content Card */}
        <View
          style={{
            backgroundColor: '#1C1C1E',
            padding: 24,
            borderRadius: 20,
            borderLeftWidth: 4,
            borderLeftColor: '#FFD60A',
          }}
        >
          <IOSNotesHighlight
            segments={segments}
            notes={notes}
            textColor="#FFFFFF"
            fontSize={19}
            lineHeight={30}
            fontWeight="400"
            onSegmentsChange={setSegments}
            onNotesChange={setNotes}
          />
        </View>

        {/* Stats */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#1C1C1E',
            padding: 16,
            borderRadius: 12,
          }}
        >
          <View style={{ alignItems: 'center', gap: 4 }}>
            <Text style={{ color: '#FFD60A', fontSize: 24, fontWeight: '700' }}>
              {segments.filter((s) => s.highlightColor).length}
            </Text>
            <Text style={{ color: '#8E8E93', fontSize: 13 }}>Highlights</Text>
          </View>
          <View style={{ alignItems: 'center', gap: 4 }}>
            <Text style={{ color: '#FFD60A', fontSize: 24, fontWeight: '700' }}>
              {notes.length}
            </Text>
            <Text style={{ color: '#8E8E93', fontSize: 13 }}>Notes</Text>
          </View>
        </View>
      </ScrollView>
    );
  },
};

// Dark Mode Book Reader
export const BookReader: Story = {
  render: () => {
    const bookText =
      'The greatest gift you can give someone is your undivided attention. In a world full of distractions, the simple act of being fully present with another person has become rare and precious.';

    const [segments, setSegments] = useState(textToSegments(bookText));
    const [notes, setNotes] = useState([
      {
        id: 'note-1',
        segmentIds: ['segment-0', 'segment-2', 'segment-4'],
        text: 'Important reminder about mindfulness and relationships',
        color: '#FF9F0A',
        createdAt: Date.now(),
        modifiedAt: Date.now(),
      },
    ]);

    return (
      <View style={{ flex: 1, backgroundColor: '#000000' }}>
        <ScrollView contentContainerStyle={{ padding: 20 }}>
          {/* Book Info */}
          <View
            style={{
              paddingVertical: 20,
              borderBottomWidth: 1,
              borderBottomColor: '#2C2C2E',
              marginBottom: 20,
            }}
          >
            <Text style={{ color: '#8E8E93', fontSize: 13, marginBottom: 4 }}>Chapter 5</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 22, fontWeight: '600' }}>
              The Power of Presence
            </Text>
          </View>

          {/* Reading Content */}
          <View style={{ paddingVertical: 10 }}>
            <IOSNotesHighlight
              segments={segments}
              notes={notes}
              textColor="#E5E5E7"
              fontSize={18}
              lineHeight={30}
              fontWeight="400"
              onSegmentsChange={setSegments}
              onNotesChange={setNotes}
            />
          </View>
        </ScrollView>
      </View>
    );
  },
};

// Minimal Clean
export const MinimalClean: Story = {
  render: () => {
    const quote = 'Be the change you wish to see in the world.';
    const [segments, setSegments] = useState(textToSegments(quote));
    const [notes, setNotes] = useState([]);

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#000000',
          justifyContent: 'center',
          padding: 32,
        }}
      >
        <IOSNotesHighlight
          segments={segments}
          notes={notes}
          textColor="#FFFFFF"
          fontSize={28}
          lineHeight={42}
          fontWeight="600"
          onSegmentsChange={setSegments}
          onNotesChange={setNotes}
        />
      </View>
    );
  },
};
