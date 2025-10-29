import type { Meta, StoryObj } from '@storybook/react';

import { View } from 'react-native';
import { fn } from 'storybook/test';

import { BookChapterAccordion } from '.';

const meta = {
  title: 'Components/BookChapterAccordion',
  component: BookChapterAccordion,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16, backgroundColor: '#1A1A1A', gap: 8 }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: {
    onChapterPress: fn(),
    onExpandedChange: fn(),
  },
  argTypes: {
    bookName: {
      control: 'text',
      description: 'Book name',
    },
    chapterCount: {
      control: 'number',
      description: 'Number of chapters',
    },
    columns: {
      control: 'number',
      description: 'Number of columns in grid',
    },
    defaultExpanded: {
      control: 'boolean',
      description: 'Initially expanded state',
    },
  },
} satisfies Meta<typeof BookChapterAccordion>;

export default meta;

type Story = StoryObj<typeof meta>;

// Example from Image - Genesis with 50 chapters
export const Genesis: Story = {
  args: {
    bookName: 'Genesis',
    chapterCount: 50,
    defaultExpanded: true,
  },
};

// Multiple Genesis Accordions (like in image)
export const MultipleGenesisBooks = () => (
  <>
    <BookChapterAccordion bookName="Genesis" chapterCount={50} defaultExpanded={false} />
    <BookChapterAccordion bookName="Genesis" chapterCount={50} defaultExpanded={false} />
    <BookChapterAccordion bookName="Genesis" chapterCount={50} defaultExpanded={true} />
    <BookChapterAccordion bookName="Genesis" chapterCount={50} defaultExpanded={false} />
  </>
);

// Exodus - 40 chapters
export const Exodus: Story = {
  args: {
    bookName: 'Exodus',
    chapterCount: 40,
    defaultExpanded: true,
  },
};

// Psalms - 150 chapters
export const Psalms: Story = {
  args: {
    bookName: 'Psalms',
    chapterCount: 150,
    defaultExpanded: true,
  },
};

// Short book - Obadiah (1 chapter)
export const Obadiah: Story = {
  args: {
    bookName: 'Obadiah',
    chapterCount: 1,
    defaultExpanded: true,
  },
};

// Short book - Philemon (1 chapter)
export const Philemon: Story = {
  args: {
    bookName: 'Philemon',
    chapterCount: 1,
    defaultExpanded: true,
  },
};

// Medium book - Romans (16 chapters)
export const Romans: Story = {
  args: {
    bookName: 'Romans',
    chapterCount: 16,
    defaultExpanded: true,
  },
};

// Matthew - 28 chapters
export const Matthew: Story = {
  args: {
    bookName: 'Matthew',
    chapterCount: 28,
    defaultExpanded: true,
  },
};

// Collapsed State
export const Collapsed: Story = {
  args: {
    bookName: 'Genesis',
    chapterCount: 50,
    defaultExpanded: false,
  },
};

// Expanded State
export const Expanded: Story = {
  args: {
    bookName: 'Genesis',
    chapterCount: 50,
    defaultExpanded: true,
  },
};

// Different Column Counts
export const ThreeColumns: Story = {
  args: {
    bookName: 'Genesis',
    chapterCount: 50,
    columns: 3,
    defaultExpanded: true,
  },
};

export const FourColumns: Story = {
  args: {
    bookName: 'Genesis',
    chapterCount: 50,
    columns: 4,
    defaultExpanded: true,
  },
};

export const SixColumns: Story = {
  args: {
    bookName: 'Genesis',
    chapterCount: 50,
    columns: 6,
    defaultExpanded: true,
  },
};

// Old Testament Books
export const Leviticus: Story = {
  args: {
    bookName: 'Leviticus',
    chapterCount: 27,
    defaultExpanded: true,
  },
};

export const Numbers: Story = {
  args: {
    bookName: 'Numbers',
    chapterCount: 36,
    defaultExpanded: true,
  },
};

export const Deuteronomy: Story = {
  args: {
    bookName: 'Deuteronomy',
    chapterCount: 34,
    defaultExpanded: true,
  },
};

// New Testament Books
export const Mark: Story = {
  args: {
    bookName: 'Mark',
    chapterCount: 16,
    defaultExpanded: true,
  },
};

export const Luke: Story = {
  args: {
    bookName: 'Luke',
    chapterCount: 24,
    defaultExpanded: true,
  },
};

export const John: Story = {
  args: {
    bookName: 'John',
    chapterCount: 21,
    defaultExpanded: true,
  },
};

export const Acts: Story = {
  args: {
    bookName: 'Acts',
    chapterCount: 28,
    defaultExpanded: true,
  },
};

export const Revelation: Story = {
  args: {
    bookName: 'Revelation',
    chapterCount: 22,
    defaultExpanded: true,
  },
};

// Multiple Different Books
export const MultipleBibleBooks = () => (
  <>
    <BookChapterAccordion bookName="Genesis" chapterCount={50} defaultExpanded={false} />
    <BookChapterAccordion bookName="Exodus" chapterCount={40} defaultExpanded={false} />
    <BookChapterAccordion bookName="Leviticus" chapterCount={27} defaultExpanded={false} />
    <BookChapterAccordion bookName="Numbers" chapterCount={36} defaultExpanded={true} />
    <BookChapterAccordion bookName="Deuteronomy" chapterCount={34} defaultExpanded={false} />
  </>
);

// New Testament List
export const NewTestamentBooks = () => (
  <>
    <BookChapterAccordion bookName="Matthew" chapterCount={28} defaultExpanded={false} />
    <BookChapterAccordion bookName="Mark" chapterCount={16} defaultExpanded={false} />
    <BookChapterAccordion bookName="Luke" chapterCount={24} defaultExpanded={true} />
    <BookChapterAccordion bookName="John" chapterCount={21} defaultExpanded={false} />
    <BookChapterAccordion bookName="Acts" chapterCount={28} defaultExpanded={false} />
  </>
);

// Very Long Book
export const VeryLongBook: Story = {
  args: {
    bookName: 'Psalms',
    chapterCount: 150,
    columns: 5,
    defaultExpanded: true,
  },
};

// Custom Styling Example
export const CustomStyling: Story = {
  args: {
    bookName: 'Genesis',
    chapterCount: 50,
    defaultExpanded: true,
    chapterButtonStyle: {
      backgroundColor: 'rgba(138, 43, 226, 0.2)',
      borderColor: 'rgba(138, 43, 226, 0.5)',
    },
  },
};

// Single Chapter Book
export const SingleChapterBook: Story = {
  args: {
    bookName: '2 John',
    chapterCount: 1,
    defaultExpanded: true,
  },
};

// Few Chapters
export const FewChapters: Story = {
  args: {
    bookName: 'Galatians',
    chapterCount: 6,
    defaultExpanded: true,
  },
};
