import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { View, Text } from 'react-native';

import { NumberGrid } from './index';

const meta = {
  title: 'Components/NumberGrid',
  component: NumberGrid,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16, backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: 'number',
      description: 'Total number of items',
    },
    startNumber: {
      control: 'number',
      description: 'Start number',
    },
    columns: {
      control: 'number',
      description: 'Number of columns',
    },
    gap: {
      control: 'number',
      description: 'Gap between buttons',
    },
    selectedBackgroundColor: {
      control: 'color',
      description: 'Selected button background color',
    },
    unselectedBackgroundColor: {
      control: 'color',
      description: 'Unselected button background color',
    },
  },
} satisfies Meta<typeof NumberGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    count: 15,
    startNumber: 1,
    columns: 5,
  },
};

export const SmallGrid: Story = {
  args: {
    count: 9,
    startNumber: 1,
    columns: 3,
  },
};

export const LargeGrid: Story = {
  args: {
    count: 50,
    startNumber: 1,
    columns: 5,
  },
};

// Different Column Layouts
export const ThreeColumns: Story = {
  args: {
    count: 12,
    columns: 3,
  },
};

export const FourColumns: Story = {
  args: {
    count: 16,
    columns: 4,
  },
};

export const SixColumns: Story = {
  args: {
    count: 18,
    columns: 6,
  },
};

// With Selection
export const WithSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState<number[]>([5]);

    return (
      <View style={{ gap: 16 }}>
        <Text style={{ color: '#FFFFFF' }}>Selected: {selected.join(', ')}</Text>
        <NumberGrid
          count={15}
          columns={5}
          selectedNumbers={selected}
          onNumberPress={(num) => setSelected([num])}
        />
      </View>
    );
  },
};

export const MultipleSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState<number[]>([1, 5, 10]);

    const handlePress = (num: number) => {
      if (selected.includes(num)) {
        setSelected(selected.filter((n) => n !== num));
      } else {
        setSelected([...selected, num]);
      }
    };

    return (
      <View style={{ gap: 16 }}>
        <Text style={{ color: '#FFFFFF' }}>Selected: {selected.join(', ')}</Text>
        <NumberGrid count={15} columns={5} selectedNumbers={selected} onNumberPress={handlePress} />
      </View>
    );
  },
};

// With Disabled Numbers
export const WithDisabled: Story = {
  args: {
    count: 15,
    columns: 5,
    disabledNumbers: [3, 7, 11],
    selectedNumbers: [5],
  },
};

// Different Start Numbers
export const StartAtZero: Story = {
  args: {
    count: 10,
    startNumber: 0,
    columns: 5,
  },
};

export const StartAt100: Story = {
  args: {
    count: 15,
    startNumber: 100,
    columns: 5,
  },
};

// Custom Colors
export const CustomColors: Story = {
  args: {
    count: 15,
    columns: 5,
    selectedNumbers: [5, 8],
    selectedBackgroundColor: '#4CAF50',
    unselectedBackgroundColor: 'rgba(76, 175, 80, 0.2)',
    selectedTextColor: '#000000',
    unselectedTextColor: '#4CAF50',
  },
};

// Custom Gap
export const LargeGap: Story = {
  args: {
    count: 12,
    columns: 4,
    gap: 16,
  },
};

export const SmallGap: Story = {
  args: {
    count: 12,
    columns: 4,
    gap: 4,
  },
};

// Bible Chapter Example
export const BibleChapterSelection: Story = {
  render: () => {
    const [selectedChapter, setSelectedChapter] = useState<number>(1);

    return (
      <View style={{ gap: 16 }}>
        <View
          style={{
            padding: 12,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 8,
          }}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: '600' }}>
            Genesis Chapter {selectedChapter}
          </Text>
        </View>
        <NumberGrid
          count={50}
          startNumber={1}
          columns={5}
          selectedNumbers={[selectedChapter]}
          onNumberPress={setSelectedChapter}
        />
      </View>
    );
  },
};

// Pagination Example
export const PaginationExample: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    return (
      <View style={{ gap: 16 }}>
        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Page {currentPage} of 20</Text>
        <NumberGrid
          count={20}
          startNumber={1}
          columns={5}
          selectedNumbers={[currentPage]}
          onNumberPress={setCurrentPage}
        />
      </View>
    );
  },
};

// Calendar Days Example
export const CalendarDays: Story = {
  render: () => {
    const [selectedDay, setSelectedDay] = useState<number>(15);

    return (
      <View style={{ gap: 16 }}>
        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Selected: Day {selectedDay}</Text>
        <NumberGrid
          count={31}
          startNumber={1}
          columns={7}
          selectedNumbers={[selectedDay]}
          onNumberPress={setSelectedDay}
        />
      </View>
    );
  },
};

// Real World - Verse Selection
export const VerseSelection: Story = {
  render: () => {
    const [selectedVerses, setSelectedVerses] = useState<number[]>([1]);

    const handlePress = (num: number) => {
      if (selectedVerses.includes(num)) {
        setSelectedVerses(selectedVerses.filter((n) => n !== num));
      } else {
        setSelectedVerses([...selectedVerses, num].sort((a, b) => a - b));
      }
    };

    return (
      <View style={{ gap: 16 }}>
        <View
          style={{
            padding: 12,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 8,
          }}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>Selected Verses</Text>
          <Text style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 14, marginTop: 4 }}>
            {selectedVerses.length > 0 ? selectedVerses.join(', ') : 'None'}
          </Text>
        </View>
        <NumberGrid
          count={31}
          startNumber={1}
          columns={5}
          selectedNumbers={selectedVerses}
          onNumberPress={handlePress}
        />
      </View>
    );
  },
};
