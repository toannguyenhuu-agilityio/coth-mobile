import type { Meta, StoryObj } from '@storybook/react';

import { View, Text } from 'react-native';
import { fn } from 'storybook/test';

import { DayStreakCard } from '.';

const meta = {
  title: 'Components/DayStreakCard',
  component: DayStreakCard,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16, backgroundColor: '#1A1A1A' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: { onCalendarPress: fn() },
  argTypes: {
    streakCount: {
      control: 'number',
      description: 'Current streak count',
    },
    streakLabel: {
      control: 'text',
      description: 'Streak label text',
    },
    message: {
      control: 'text',
      description: 'Encouragement message',
    },
    showCalendarIcon: {
      control: 'boolean',
      description: 'Show calendar icon',
    },
  },
} satisfies Meta<typeof DayStreakCard>;

export default meta;

type Story = StoryObj<typeof meta>;

// Example from Image - 1 Day Streak
export const OneDayStreak: Story = {
  args: {
    streakCount: 1,
    streakLabel: 'Day Streak',
    days: [
      { day: 'Su', status: 'completed' },
      { day: 'Mo', status: 'completed' },
      { day: 'Tu', status: 'completed' },
      { day: 'We', status: 'missed' },
      { day: 'Th', status: 'completed' },
      { day: 'Fr', status: 'upcoming', dayNumber: 13 },
      { day: 'Sa', status: 'future', dayNumber: 14 },
    ],
    message: "Keep going, you're doing great!",
  },
};

// Perfect Week - 7 Day Streak
export const PerfectWeek: Story = {
  args: {
    streakCount: 7,
    streakLabel: 'Day Streak',
    days: [
      { day: 'Su', status: 'completed' },
      { day: 'Mo', status: 'completed' },
      { day: 'Tu', status: 'completed' },
      { day: 'We', status: 'completed' },
      { day: 'Th', status: 'completed' },
      { day: 'Fr', status: 'completed' },
      { day: 'Sa', status: 'completed' },
    ],
    message: 'Amazing! You completed the whole week! 🎉',
  },
};

// New Week Start
export const NewWeekStart: Story = {
  args: {
    streakCount: 0,
    streakLabel: 'Day Streak',
    days: [
      { day: 'Su', status: 'upcoming', dayNumber: 1 },
      { day: 'Mo', status: 'future', dayNumber: 2 },
      { day: 'Tu', status: 'future', dayNumber: 3 },
      { day: 'We', status: 'future', dayNumber: 4 },
      { day: 'Th', status: 'future', dayNumber: 5 },
      { day: 'Fr', status: 'future', dayNumber: 6 },
      { day: 'Sa', status: 'future', dayNumber: 7 },
    ],
    message: 'Start your streak today!',
  },
};

// Long Streak - 30 Days
export const LongStreak: Story = {
  args: {
    streakCount: 30,
    streakLabel: 'Day Streak',
    days: [
      { day: 'Su', status: 'completed' },
      { day: 'Mo', status: 'completed' },
      { day: 'Tu', status: 'completed' },
      { day: 'We', status: 'completed' },
      { day: 'Th', status: 'completed' },
      { day: 'Fr', status: 'completed' },
      { day: 'Sa', status: 'upcoming', dayNumber: 8 },
    ],
    message: "Incredible! You're on fire! 🔥",
  },
};

// Mid-Week Progress
export const MidWeekProgress: Story = {
  args: {
    streakCount: 3,
    streakLabel: 'Day Streak',
    days: [
      { day: 'Su', status: 'completed' },
      { day: 'Mo', status: 'completed' },
      { day: 'Tu', status: 'completed' },
      { day: 'We', status: 'upcoming', dayNumber: 4 },
      { day: 'Th', status: 'future', dayNumber: 5 },
      { day: 'Fr', status: 'future', dayNumber: 6 },
      { day: 'Sa', status: 'future', dayNumber: 7 },
    ],
    message: "You're halfway there!",
  },
};

// Missed Days
export const MissedDays: Story = {
  args: {
    streakCount: 2,
    streakLabel: 'Day Streak',
    days: [
      { day: 'Su', status: 'completed' },
      { day: 'Mo', status: 'missed' },
      { day: 'Tu', status: 'completed' },
      { day: 'We', status: 'missed' },
      { day: 'Th', status: 'completed' },
      { day: 'Fr', status: 'upcoming', dayNumber: 6 },
      { day: 'Sa', status: 'future', dayNumber: 7 },
    ],
    message: "Don't give up! Get back on track!",
  },
};

// Almost Perfect
export const AlmostPerfect: Story = {
  args: {
    streakCount: 6,
    streakLabel: 'Day Streak',
    days: [
      { day: 'Su', status: 'completed' },
      { day: 'Mo', status: 'completed' },
      { day: 'Tu', status: 'missed' },
      { day: 'We', status: 'completed' },
      { day: 'Th', status: 'completed' },
      { day: 'Fr', status: 'completed' },
      { day: 'Sa', status: 'completed' },
    ],
    message: 'Great week! Only one missed day.',
  },
};

// Without Calendar Icon
export const WithoutCalendar: Story = {
  args: {
    streakCount: 5,
    streakLabel: 'Day Streak',
    showCalendarIcon: false,
    days: [
      { day: 'Su', status: 'completed' },
      { day: 'Mo', status: 'completed' },
      { day: 'Tu', status: 'completed' },
      { day: 'We', status: 'completed' },
      { day: 'Th', status: 'completed' },
      { day: 'Fr', status: 'upcoming', dayNumber: 6 },
      { day: 'Sa', status: 'future', dayNumber: 7 },
    ],
    message: 'Almost a perfect week!',
  },
};

// Custom Message
export const CustomMessage: Story = {
  args: {
    streakCount: 14,
    streakLabel: 'Day Streak',
    days: [
      { day: 'Su', status: 'completed' },
      { day: 'Mo', status: 'completed' },
      { day: 'Tu', status: 'completed' },
      { day: 'We', status: 'completed' },
      { day: 'Th', status: 'completed' },
      { day: 'Fr', status: 'completed' },
      { day: 'Sa', status: 'completed' },
    ],
    message: 'Two weeks strong! Your dedication is inspiring! ✨',
  },
};

// Custom Icons
export const CustomIcons: Story = {
  args: {
    streakCount: 4,
    streakLabel: 'Day Streak',
    days: [
      { day: 'Su', status: 'completed' },
      { day: 'Mo', status: 'completed' },
      { day: 'Tu', status: 'completed' },
      { day: 'We', status: 'missed' },
      { day: 'Th', status: 'completed' },
      { day: 'Fr', status: 'upcoming', dayNumber: 6 },
      { day: 'Sa', status: 'future', dayNumber: 7 },
    ],
    completedIcon: <Text style={{ fontSize: 32 }}>✓</Text>,
    missedIcon: <Text style={{ fontSize: 32, color: '#FF5555' }}>✗</Text>,
    message: 'Custom icons for completed and missed days',
  },
};

// Short Label
export const ShortLabel: Story = {
  args: {
    streakCount: 100,
    streakLabel: 'Days',
    days: [
      { day: 'Su', status: 'completed' },
      { day: 'Mo', status: 'completed' },
      { day: 'Tu', status: 'completed' },
      { day: 'We', status: 'completed' },
      { day: 'Th', status: 'completed' },
      { day: 'Fr', status: 'completed' },
      { day: 'Sa', status: 'upcoming', dayNumber: 101 },
    ],
    message: 'Century club! 💯',
  },
};
