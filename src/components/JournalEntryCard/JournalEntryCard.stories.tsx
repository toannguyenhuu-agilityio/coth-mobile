import type { Meta, StoryObj } from '@storybook/react';

import { View, Text } from 'react-native';
import { fn } from 'storybook/test';

import { JournalEntryCard } from '.';

const meta = {
  title: 'Components/JournalEntryCard',
  component: JournalEntryCard,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: '#1A1A1A' }}>
        {/* Month Header */}
        <Text style={{ fontSize: 24, fontWeight: '700', color: '#FFFFFF', padding: 16 }}>May</Text>
        <View style={{ padding: 16, paddingTop: 0 }}>
          <Story />
        </View>
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: {
    onPress: fn(),
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Entry title',
    },
    date: {
      control: 'text',
      description: 'Entry date',
    },
    preview: {
      control: 'text',
      description: 'Entry preview text',
    },
    showTitleLabel: {
      control: 'boolean',
      description: 'Show title label',
    },
    titleLabel: {
      control: 'text',
      description: 'Title label text',
    },
    previewNumberOfLines: {
      control: 'number',
      description: 'Number of lines for preview',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color',
    },
  },
} satisfies Meta<typeof JournalEntryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

// Example from Image
export const MayEntry: Story = {
  args: {
    title: 'Title',
    date: '5/28/25',
    preview: 'I like this devotion a lot. I can appl...',
  },
};

// Full Entry Text
export const FullEntryText: Story = {
  args: {
    title: 'Morning Devotional',
    date: '5/28/25',
    preview: 'I like this devotion a lot. I can apply these teachings to my daily life.',
  },
};

// Long Preview - Single Line
export const LongPreviewSingleLine: Story = {
  args: {
    title: 'Bible Study Notes',
    date: '5/29/25',
    preview:
      'This passage really spoke to me today. The message about faith and perseverance was exactly what I needed to hear.',
  },
};

// Long Preview - Multiple Lines
export const LongPreviewMultipleLines: Story = {
  args: {
    title: 'Prayer Journal',
    date: '5/30/25',
    preview:
      'This passage really spoke to me today. The message about faith and perseverance was exactly what I needed to hear. I will remember these words as I face challenges this week.',
    previewNumberOfLines: 3,
  },
};

// Short Preview
export const ShortPreview: Story = {
  args: {
    title: 'Quick Note',
    date: '5/27/25',
    preview: 'Grateful for today.',
  },
};

// Without Title Label
export const WithoutTitleLabel: Story = {
  args: {
    title: 'Entry Without Label',
    date: '5/26/25',
    preview: 'This entry does not show the title label at the top.',
    showTitleLabel: false,
  },
};

// Custom Title Label
export const CustomTitleLabel: Story = {
  args: {
    title: 'Custom Entry',
    date: '5/25/25',
    preview: 'This entry has a custom title label.',
    titleLabel: 'Journal Entry',
  },
};

// Different Date Formats
export const FullDateFormat: Story = {
  args: {
    title: 'Full Date',
    date: 'May 28, 2025',
    preview: 'Entry with full date format.',
  },
};

export const ShortDateFormat: Story = {
  args: {
    title: 'Short Date',
    date: '5/28',
    preview: 'Entry with short date format.',
  },
};

// Different Entry Types
export const PrayerEntry: Story = {
  args: {
    title: 'Prayer Request',
    titleLabel: 'Prayer',
    date: '5/28/25',
    preview: 'Lord, please guide me through this difficult time and give me strength.',
  },
};

export const GratitudeEntry: Story = {
  args: {
    title: 'Gratitude List',
    titleLabel: 'Gratitude',
    date: '5/28/25',
    preview: 'Thankful for my family, my health, and the beautiful weather today.',
  },
};

export const ReflectionEntry: Story = {
  args: {
    title: 'Daily Reflection',
    titleLabel: 'Reflection',
    date: '5/28/25',
    preview: "Today I learned the importance of patience and trusting in God's timing.",
  },
};

// Multiple Entries List
export const MultipleEntries = () => (
  <View style={{ gap: 12 }}>
    <JournalEntryCard
      title="Morning Prayer"
      date="5/28/25"
      preview="Thank you Lord for this beautiful morning and new opportunities."
    />
    <JournalEntryCard
      title="Bible Study"
      date="5/27/25"
      preview="Reading through Psalms today. Chapter 23 brings me so much peace."
    />
    <JournalEntryCard
      title="Evening Reflection"
      date="5/26/25"
      preview="Today was challenging but I felt God's presence throughout."
    />
  </View>
);

// Light Theme
export const LightTheme: Story = {
  args: {
    title: 'Light Entry',
    date: '5/28/25',
    preview: 'This entry uses a light color scheme.',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    titleLabelColor: '#000000',
    dateColor: '#666666',
    previewColor: '#333333',
  },
};

// Custom Colors
export const CustomColors: Story = {
  args: {
    title: 'Custom Colors',
    date: '5/28/25',
    preview: 'This entry uses custom colors for a unique look.',
    backgroundColor: 'rgba(138, 43, 226, 0.1)',
    titleLabelColor: '#DA70D6',
    dateColor: '#DDA0DD',
    previewColor: '#E6E6FA',
  },
};

// Clickable Entry
export const ClickableEntry: Story = {
  args: {
    title: 'Click Me',
    date: '5/28/25',
    preview: 'Click this entry to open it.',
    onPress: fn(),
  },
};
