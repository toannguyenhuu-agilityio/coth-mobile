import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Accordion } from './index';
import { NumberGrid } from '../NumberGrid';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16, backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Accordion title',
    },
    defaultExpanded: {
      control: 'boolean',
      description: 'Initially expanded state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

// Basic Examples
export const Collapsed: Story = {
  args: {
    title: 'Genesis',
    defaultExpanded: false,
    children: (
      <Text style={{ color: '#FFFFFF' }}>
        This is the content of the accordion. It can contain any React components.
      </Text>
    ),
  },
};

export const Expanded: Story = {
  args: {
    title: 'Genesis',
    defaultExpanded: true,
    children: (
      <Text style={{ color: '#FFFFFF' }}>
        This is the content of the accordion. It can contain any React components.
      </Text>
    ),
  },
};

export const Disabled: Story = {
  args: {
    title: 'Genesis',
    disabled: true,
    children: <Text style={{ color: '#FFFFFF' }}>This content cannot be accessed.</Text>,
  },
};

// With Number Grid (like in the image)
export const WithNumberGrid: Story = {
  render: () => {
    const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

    return (
      <Accordion title="Genesis" defaultExpanded={true}>
        <NumberGrid
          count={50}
          startNumber={1}
          columns={5}
          selectedNumbers={selectedChapter !== null ? [selectedChapter] : []}
          onNumberPress={setSelectedChapter}
        />
      </Accordion>
    );
  },
};

// Multiple Accordions (Bible Books Example)
export const BibleBooksList: Story = {
  render: () => {
    const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

    const bibleBooks = [
      { name: 'Genesis', chapters: 50 },
      { name: 'Exodus', chapters: 40 },
      { name: 'Leviticus', chapters: 27 },
      { name: 'Numbers', chapters: 36 },
      { name: 'Deuteronomy', chapters: 34 },
    ];

    return (
      <View style={{ gap: 8 }}>
        {bibleBooks.map((book, index) => (
          <Accordion key={book.name} title={book.name} defaultExpanded={index === 0}>
            <NumberGrid
              count={book.chapters}
              startNumber={1}
              columns={5}
              selectedNumbers={selectedChapter !== null ? [selectedChapter] : []}
              onNumberPress={setSelectedChapter}
            />
          </Accordion>
        ))}
      </View>
    );
  },
};

// Controlled Example
export const Controlled: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(false);

    return (
      <View style={{ gap: 16 }}>
        <Text style={{ color: '#FFFFFF' }}>Expanded: {expanded ? 'Yes' : 'No'}</Text>
        <Accordion
          title="Genesis"
          expanded={expanded}
          onExpandedChange={setExpanded}
          children={
            <NumberGrid count={15} startNumber={1} columns={5} onNumberPress={(num) => null} />
          }
        />
      </View>
    );
  },
};

// Custom Styled
export const CustomStyled: Story = {
  args: {
    title: 'Genesis',
    defaultExpanded: true,
    headerStyle: {
      backgroundColor: '#7099A7',
      borderRadius: 8,
    },
    titleStyle: {
      fontSize: 18,
      fontWeight: '700',
    },
    contentStyle: {
      backgroundColor: 'rgba(112, 153, 167, 0.2)',
    },
    children: <NumberGrid count={15} startNumber={1} columns={5} onNumberPress={(num) => null} />,
  },
};

// With Long Title
export const LongTitle: Story = {
  args: {
    title: 'The Book of Genesis - In the Beginning',
    defaultExpanded: true,
    children: (
      <Text style={{ color: '#FFFFFF' }}>
        Content for the first book of the Bible with a very long title.
      </Text>
    ),
  },
};

// With Complex Content
export const ComplexContent: Story = {
  render: () => {
    const [selectedChapter, setSelectedChapter] = useState(1);

    return (
      <Accordion title="Genesis" defaultExpanded={true}>
        <View style={{ gap: 16 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 14 }}>Select a chapter:</Text>
          <NumberGrid
            count={50}
            startNumber={1}
            columns={5}
            selectedNumbers={[selectedChapter]}
            onNumberPress={setSelectedChapter}
          />
          <View
            style={{
              padding: 12,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 8,
              marginTop: 8,
            }}
          >
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>
              Genesis Chapter {selectedChapter}
            </Text>
            <Text style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 14, marginTop: 4 }}>
              Tap a number to select a different chapter
            </Text>
          </View>
        </View>
      </Accordion>
    );
  },
};

// Nested Accordions
export const Nested: Story = {
  render: () => (
    <Accordion title="Old Testament" defaultExpanded={true}>
      <View style={{ gap: 8 }}>
        <Accordion title="Genesis">
          <NumberGrid count={50} columns={5} onNumberPress={(num) => null} />
        </Accordion>
        <Accordion title="Exodus">
          <NumberGrid count={40} columns={5} onNumberPress={(num) => null} />
        </Accordion>
      </View>
    </Accordion>
  ),
};

// Real World Usage - Bible Reader
export const BibleReaderExample: Story = {
  render: () => {
    const [selectedBook, setSelectedBook] = useState<string | null>('Genesis');
    const [selectedChapter, setSelectedChapter] = useState<number | null>(1);

    const books = [
      { name: 'Genesis', chapters: 50 },
      { name: 'Exodus', chapters: 40 },
      { name: 'Leviticus', chapters: 27 },
      { name: 'Numbers', chapters: 36 },
      { name: 'Deuteronomy', chapters: 34 },
    ];

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Bible Reader</Text>
          {selectedBook && selectedChapter && (
            <Text style={styles.selectedText}>
              {selectedBook} {selectedChapter}
            </Text>
          )}
        </View>

        <View style={styles.booksList}>
          {books.map((book) => (
            <Accordion
              key={book.name}
              title={book.name}
              defaultExpanded={book.name === 'Genesis'}
              onExpandedChange={(expanded) => expanded && setSelectedBook(book.name)}
            >
              <NumberGrid
                count={book.chapters}
                startNumber={1}
                columns={5}
                selectedNumbers={
                  selectedBook === book.name && selectedChapter !== null ? [selectedChapter] : []
                }
                onNumberPress={(num) => {
                  setSelectedBook(book.name);
                  setSelectedChapter(num);
                }}
              />
            </Accordion>
          ))}
        </View>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
  header: {
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  selectedText: {
    fontSize: 16,
    color: '#7099A7',
  },
  booksList: {
    gap: 8,
  },
});
