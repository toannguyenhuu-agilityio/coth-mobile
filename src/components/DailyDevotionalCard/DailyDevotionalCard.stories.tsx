import type { Meta, StoryObj } from '@storybook/react';

import { View, Text } from 'react-native';
import { fn } from 'storybook/test';

import { DailyDevotionalCard } from '.';

const meta = {
  title: 'Components/DailyDevotionalCard',
  component: DailyDevotionalCard,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16, backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: { onButtonPress: fn() },
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
    },
    quote: {
      control: 'text',
      description: 'Devotional quote or verse',
    },
    reference: {
      control: 'text',
      description: 'Scripture reference',
    },
    buttonText: {
      control: 'text',
      description: 'Button text',
    },
    showButtonArrow: {
      control: 'boolean',
      description: 'Show button arrow',
    },
  },
} satisfies Meta<typeof DailyDevotionalCard>;

export default meta;

type Story = StoryObj<typeof meta>;

// Example from Image - Matthew 11:28
export const MatthewVerse: Story = {
  args: {
    title: 'Daily Devotional',
    quote: 'Come to me, all who are weary and burdened, and I will give you rest.',
    reference: 'Matthew 11:28',
    buttonText: 'Read Full Devotional',
  },
};

// With Custom Icon
export const WithCustomIcon: Story = {
  args: {
    title: 'Daily Devotional',
    titleIcon: <Text style={{ fontSize: 24 }}>✝️</Text>,
    quote: 'Come to me, all who are weary and burdened, and I will give you rest.',
    reference: 'Matthew 11:28',
    buttonText: 'Read Full Devotional',
  },
};

// John 3:16
export const JohnVerse: Story = {
  args: {
    title: 'Daily Devotional',
    quote:
      'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.',
    reference: 'John 3:16',
    buttonText: 'Read Full Devotional',
  },
};

// Psalm 23
export const PsalmVerse: Story = {
  args: {
    title: 'Daily Devotional',
    quote:
      'The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.',
    reference: 'Psalm 23:1-3',
    buttonText: 'Read More',
  },
};

// Philippians
export const PhilippiansVerse: Story = {
  args: {
    title: 'Daily Devotional',
    quote: 'I can do all things through Christ who strengthens me.',
    reference: 'Philippians 4:13',
    buttonText: 'Continue Reading',
  },
};

// Proverbs
export const ProverbsVerse: Story = {
  args: {
    title: 'Daily Devotional',
    quote:
      'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.',
    reference: 'Proverbs 3:5-6',
    buttonText: 'Read Full Devotional',
  },
};

// Short Quote
export const ShortQuote: Story = {
  args: {
    title: 'Daily Devotional',
    quote: 'Be still, and know that I am God.',
    reference: 'Psalm 46:10',
    buttonText: 'Read Full Devotional',
  },
};

// Without Reference
export const WithoutReference: Story = {
  args: {
    title: 'Daily Devotional',
    quote: 'Come to me, all who are weary and burdened, and I will give you rest.',
    buttonText: 'Read Full Devotional',
  },
};

// Without Arrow
export const WithoutArrow: Story = {
  args: {
    title: 'Daily Devotional',
    quote: 'Come to me, all who are weary and burdened, and I will give you rest.',
    reference: 'Matthew 11:28',
    buttonText: 'Read Full Devotional',
    showButtonArrow: false,
  },
};

// Custom Title
export const CustomTitle: Story = {
  args: {
    title: "Today's Scripture",
    quote: 'Come to me, all who are weary and burdened, and I will give you rest.',
    reference: 'Matthew 11:28',
    buttonText: 'Read Full Devotional',
  },
};

// Morning Devotional
export const MorningDevotional: Story = {
  args: {
    title: 'Morning Devotional',
    titleIcon: <Text style={{ fontSize: 24 }}>☀️</Text>,
    quote: 'This is the day the Lord has made; let us rejoice and be glad in it.',
    reference: 'Psalm 118:24',
    buttonText: 'Start Your Day',
  },
};

// Evening Reflection
export const EveningReflection: Story = {
  args: {
    title: 'Evening Reflection',
    titleIcon: <Text style={{ fontSize: 24 }}>🌙</Text>,
    quote: 'In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety.',
    reference: 'Psalm 4:8',
    buttonText: 'End Your Day',
  },
};

// Romans
export const RomansVerse: Story = {
  args: {
    title: 'Daily Devotional',
    quote:
      'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.',
    reference: 'Romans 8:28',
    buttonText: 'Read Full Devotional',
  },
};

// Isaiah
export const IsaiahVerse: Story = {
  args: {
    title: 'Daily Devotional',
    quote:
      'Do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.',
    reference: 'Isaiah 41:10',
    buttonText: 'Read Full Devotional',
  },
};

// Jeremiah
export const JeremiahVerse: Story = {
  args: {
    title: 'Daily Devotional',
    quote:
      'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.',
    reference: 'Jeremiah 29:11',
    buttonText: 'Read Full Devotional',
  },
};
