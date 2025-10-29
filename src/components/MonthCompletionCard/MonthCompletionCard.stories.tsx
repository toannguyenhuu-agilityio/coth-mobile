import type { Meta, StoryObj } from '@storybook/react';

import { View, Text } from 'react-native';

import { MonthCompletionCard } from '.';

const meta = {
  title: 'Components/MonthCompletionCard',
  component: MonthCompletionCard,
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
      description: 'Title text',
    },
    current: {
      control: 'number',
      description: 'Current progress value',
    },
    total: {
      control: 'number',
      description: 'Total/target value',
    },
    showPercentage: {
      control: 'boolean',
      description: 'Show percentage',
    },
    progressColor: {
      control: 'color',
      description: 'Progress bar color',
    },
    progressBackgroundColor: {
      control: 'color',
      description: 'Progress bar background color',
    },
    backgroundColor: {
      control: 'color',
      description: 'Card background color',
    },
  },
} satisfies Meta<typeof MonthCompletionCard>;

export default meta;

type Story = StoryObj<typeof meta>;

// Example from Image - 27/31 (92%)
export const NearlyComplete: Story = {
  args: {
    title: 'Month Completion',
    current: 27,
    total: 31,
  },
};

// Just Started
export const JustStarted: Story = {
  args: {
    title: 'Month Completion',
    current: 3,
    total: 31,
  },
};

// Mid-Month
export const MidMonth: Story = {
  args: {
    title: 'Month Completion',
    current: 15,
    total: 31,
  },
};

// Almost Done
export const AlmostDone: Story = {
  args: {
    title: 'Month Completion',
    current: 30,
    total: 31,
  },
};

// Complete
export const Complete: Story = {
  args: {
    title: 'Month Completion',
    current: 31,
    total: 31,
  },
};

// Zero Progress
export const ZeroProgress: Story = {
  args: {
    title: 'Month Completion',
    current: 0,
    total: 31,
  },
};

// Without Percentage
export const WithoutPercentage: Story = {
  args: {
    title: 'Month Completion',
    current: 20,
    total: 31,
    showPercentage: false,
  },
};

// Custom Title
export const CustomTitle: Story = {
  args: {
    title: 'Daily Devotional Progress',
    current: 15,
    total: 30,
  },
};

// Week Progress
export const WeekProgress: Story = {
  args: {
    title: 'Week Completion',
    current: 5,
    total: 7,
  },
};

// Year Progress
export const YearProgress: Story = {
  args: {
    title: 'Year Completion',
    current: 180,
    total: 365,
  },
};

// Reading Progress
export const ReadingProgress: Story = {
  args: {
    title: 'Bible Reading',
    current: 450,
    total: 1189,
  },
};

// Prayer Streak
export const PrayerStreak: Story = {
  args: {
    title: 'Prayer Streak',
    current: 14,
    total: 30,
  },
};

// Custom Colors - Green
export const GreenTheme: Story = {
  args: {
    title: 'Month Completion',
    current: 25,
    total: 31,
    progressColor: '#27AE60',
    progressBackgroundColor: 'rgba(39, 174, 96, 0.2)',
  },
};

// Custom Colors - Purple
export const PurpleTheme: Story = {
  args: {
    title: 'Month Completion',
    current: 20,
    total: 31,
    progressColor: '#9B59B6',
    progressBackgroundColor: 'rgba(155, 89, 182, 0.2)',
  },
};

// Custom Colors - Gold
export const GoldTheme: Story = {
  args: {
    title: 'Month Completion',
    current: 28,
    total: 31,
    progressColor: '#D4AF37',
    progressBackgroundColor: 'rgba(212, 175, 55, 0.2)',
  },
};

// Custom Colors - Red
export const RedTheme: Story = {
  args: {
    title: 'Month Completion',
    current: 10,
    total: 31,
    progressColor: '#E74C3C',
    progressBackgroundColor: 'rgba(231, 76, 60, 0.2)',
  },
};

// Light Background
export const LightBackground: Story = {
  args: {
    title: 'Month Completion',
    current: 22,
    total: 31,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    titleColor: '#000000',
    statsColor: '#333333',
    progressColor: '#3498DB',
    progressBackgroundColor: 'rgba(52, 152, 219, 0.2)',
  },
};

// Transparent Background
export const TransparentBackground: Story = {
  args: {
    title: 'Month Completion',
    current: 18,
    total: 31,
    backgroundColor: 'transparent',
  },
};

// Dark Solid Background
export const DarkSolidBackground: Story = {
  args: {
    title: 'Month Completion',
    current: 23,
    total: 31,
    backgroundColor: '#1A1A1A',
  },
};

// Custom Title Component
export const CustomTitleComponent: Story = {
  args: {
    current: 27,
    total: 31,
    titleComponent: (
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 20 }}>📅</Text>
        <Text style={{ fontSize: 18, fontWeight: '600', color: '#FFFFFF' }}>Month Completion</Text>
      </View>
    ),
  },
};

// Custom Stats Component
export const CustomStatsComponent: Story = {
  args: {
    title: 'Month Completion',
    current: 27,
    total: 31,
    statsComponent: (
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#27AE60' }}>27/31</Text>
        <Text style={{ fontSize: 14, fontWeight: '400', color: '#999999' }}>days</Text>
      </View>
    ),
  },
};

// Short Month (28 days)
export const ShortMonth: Story = {
  args: {
    title: 'February Progress',
    current: 25,
    total: 28,
  },
};

// Long Month (31 days)
export const LongMonth: Story = {
  args: {
    title: 'January Progress',
    current: 29,
    total: 31,
  },
};

// Low Progress
export const LowProgress: Story = {
  args: {
    title: 'Month Completion',
    current: 2,
    total: 31,
  },
};

// High Progress
export const HighProgress: Story = {
  args: {
    title: 'Month Completion',
    current: 29,
    total: 31,
  },
};

// Perfect Halfway
export const PerfectHalfway: Story = {
  args: {
    title: 'Month Completion',
    current: 15.5,
    total: 31,
  },
};

// Hundred Days Goal
export const HundredDaysGoal: Story = {
  args: {
    title: '100 Days Challenge',
    current: 73,
    total: 100,
  },
};

// Large Numbers
export const LargeNumbers: Story = {
  args: {
    title: 'Verses Read',
    current: 15234,
    total: 31102,
  },
};

// Small Total
export const SmallTotal: Story = {
  args: {
    title: 'Week Progress',
    current: 4,
    total: 7,
  },
};
