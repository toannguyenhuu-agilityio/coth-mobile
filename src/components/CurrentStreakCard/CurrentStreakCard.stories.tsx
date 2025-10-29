import type { Meta, StoryObj } from '@storybook/react';

import { View, Text } from 'react-native';

import { CurrentStreakCard } from '.';

const meta = {
  title: 'Components/CurrentStreakCard',
  component: CurrentStreakCard,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16, backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    streakCount: {
      control: 'number',
      description: 'Current streak count',
    },
    streakTitle: {
      control: 'text',
      description: 'Streak title text',
    },
    streakCardBackground: {
      control: 'color',
      description: 'Streak card background color',
    },
    weekCardBackground: {
      control: 'color',
      description: 'Week card background color',
    },
  },
} satisfies Meta<typeof CurrentStreakCard>;

export default meta;

type Story = StoryObj<typeof meta>;

// Example from Image - 0 Streak
export const ZeroStreak: Story = {
  args: {
    streakCount: 0,
    streakTitle: 'Your Current Streak',
    weekDays: [
      { day: 'Su', dayNumber: 8 },
      { day: 'Mo', dayNumber: 9 },
      { day: 'Tu', dayNumber: 10 },
      { day: 'We', dayNumber: 11 },
      { day: 'Th', dayNumber: 12 },
      { day: 'Fr', dayNumber: 13 },
      { day: 'Sa', dayNumber: 14 },
    ],
  },
};

// Active Streak - 33 Days with Completed Days
export const ActiveStreakWithCompletedDays: Story = {
  args: {
    streakCount: 33,
    streakTitle: 'Your Current Streak',
    weekDays: [
      { day: 'Su', dayNumber: 8, isCompleted: true },
      { day: 'Mo', dayNumber: 9, isCompleted: true },
      { day: 'Tu', dayNumber: 10, isCompleted: true },
      { day: 'We', dayNumber: 11, isCompleted: true },
      { day: 'Th', dayNumber: 12, isCompleted: true },
      { day: 'Fr', dayNumber: 13, isCompleted: true },
      { day: 'Sa', dayNumber: 14 },
    ],
  },
};

// 1 Day Streak
export const OneDayStreak: Story = {
  args: {
    streakCount: 1,
    streakTitle: 'Your Current Streak',
    weekDays: [
      { day: 'Su', dayNumber: 1, isHighlighted: true },
      { day: 'Mo', dayNumber: 2 },
      { day: 'Tu', dayNumber: 3 },
      { day: 'We', dayNumber: 4 },
      { day: 'Th', dayNumber: 5 },
      { day: 'Fr', dayNumber: 6 },
      { day: 'Sa', dayNumber: 7 },
    ],
  },
};

// 7 Day Streak - Perfect Week with Completed Days
export const PerfectWeek: Story = {
  args: {
    streakCount: 7,
    streakTitle: 'Your Current Streak',
    weekDays: [
      { day: 'Su', dayNumber: 1, isCompleted: true },
      { day: 'Mo', dayNumber: 2, isCompleted: true },
      { day: 'Tu', dayNumber: 3, isCompleted: true },
      { day: 'We', dayNumber: 4, isCompleted: true },
      { day: 'Th', dayNumber: 5, isCompleted: true },
      { day: 'Fr', dayNumber: 6, isCompleted: true },
      { day: 'Sa', dayNumber: 7, isCompleted: true },
    ],
  },
};

// 30 Day Streak with Completed Days
export const ThirtyDayStreak: Story = {
  args: {
    streakCount: 30,
    streakTitle: 'Your Current Streak',
    weekDays: [
      { day: 'Su', dayNumber: 1, isCompleted: true },
      { day: 'Mo', dayNumber: 2, isCompleted: true },
      { day: 'Tu', dayNumber: 3, isCompleted: true },
      { day: 'We', dayNumber: 4, isCompleted: true },
      { day: 'Th', dayNumber: 5, isCompleted: true },
      { day: 'Fr', dayNumber: 6, isCompleted: true },
      { day: 'Sa', dayNumber: 7 },
    ],
  },
};

// 100 Day Streak
export const HundredDayStreak: Story = {
  args: {
    streakCount: 100,
    streakTitle: 'Your Current Streak',
    weekDays: [
      { day: 'Su', dayNumber: 8, isHighlighted: true },
      { day: 'Mo', dayNumber: 9, isHighlighted: true },
      { day: 'Tu', dayNumber: 10, isHighlighted: true },
      { day: 'We', dayNumber: 11, isHighlighted: true },
      { day: 'Th', dayNumber: 12, isHighlighted: true },
      { day: 'Fr', dayNumber: 13, isHighlighted: true },
      { day: 'Sa', dayNumber: 14, isHighlighted: true },
    ],
  },
};

// Mid-Week Progress
export const MidWeekProgress: Story = {
  args: {
    streakCount: 3,
    streakTitle: 'Your Current Streak',
    weekDays: [
      { day: 'Su', dayNumber: 15, isHighlighted: true },
      { day: 'Mo', dayNumber: 16, isHighlighted: true },
      { day: 'Tu', dayNumber: 17, isHighlighted: true },
      { day: 'We', dayNumber: 18 },
      { day: 'Th', dayNumber: 19 },
      { day: 'Fr', dayNumber: 20 },
      { day: 'Sa', dayNumber: 21 },
    ],
  },
};

// Custom Title
export const CustomTitle: Story = {
  args: {
    streakCount: 14,
    streakTitle: 'Days in a Row',
    weekDays: [
      { day: 'Su', dayNumber: 1, isHighlighted: true },
      { day: 'Mo', dayNumber: 2, isHighlighted: true },
      { day: 'Tu', dayNumber: 3, isHighlighted: true },
      { day: 'We', dayNumber: 4, isHighlighted: true },
      { day: 'Th', dayNumber: 5, isHighlighted: true },
      { day: 'Fr', dayNumber: 6, isHighlighted: true },
      { day: 'Sa', dayNumber: 7, isHighlighted: true },
    ],
  },
};

// Custom Colors - Purple Theme
export const PurpleTheme: Story = {
  args: {
    streakCount: 5,
    streakTitle: 'Your Current Streak',
    streakCardBackground: '#9B59B6',
    weekCardBackground: '#2C1B47',
    highlightedDayBackground: '#6C3483',
    weekDays: [
      { day: 'Su', dayNumber: 1, isHighlighted: true },
      { day: 'Mo', dayNumber: 2, isHighlighted: true },
      { day: 'Tu', dayNumber: 3, isHighlighted: true },
      { day: 'We', dayNumber: 4, isHighlighted: true },
      { day: 'Th', dayNumber: 5, isHighlighted: true },
      { day: 'Fr', dayNumber: 6 },
      { day: 'Sa', dayNumber: 7 },
    ],
  },
};

// Custom Colors - Green Theme
export const GreenTheme: Story = {
  args: {
    streakCount: 21,
    streakTitle: 'Your Current Streak',
    streakCardBackground: '#27AE60',
    weekCardBackground: '#1B3A2F',
    highlightedDayBackground: '#229954',
    weekDays: [
      { day: 'Su', dayNumber: 15, isHighlighted: true },
      { day: 'Mo', dayNumber: 16, isHighlighted: true },
      { day: 'Tu', dayNumber: 17, isHighlighted: true },
      { day: 'We', dayNumber: 18, isHighlighted: true },
      { day: 'Th', dayNumber: 19, isHighlighted: true },
      { day: 'Fr', dayNumber: 20, isHighlighted: true },
      { day: 'Sa', dayNumber: 21, isHighlighted: true },
    ],
  },
};

// Custom Colors - Gold Theme
export const GoldTheme: Story = {
  args: {
    streakCount: 50,
    streakTitle: 'Your Current Streak',
    streakCardBackground: '#D4AF37',
    weekCardBackground: '#3A3A2F',
    highlightedDayBackground: '#C9A12C',
    streakTextColor: '#1A1A1A',
    weekDayTextColor: '#D4AF37',
    dayNumberTextColor: '#FFFFFF',
    weekDays: [
      { day: 'Su', dayNumber: 22, isHighlighted: true },
      { day: 'Mo', dayNumber: 23, isHighlighted: true },
      { day: 'Tu', dayNumber: 24, isHighlighted: true },
      { day: 'We', dayNumber: 25, isHighlighted: true },
      { day: 'Th', dayNumber: 26, isHighlighted: true },
      { day: 'Fr', dayNumber: 27, isHighlighted: true },
      { day: 'Sa', dayNumber: 28, isHighlighted: true },
    ],
  },
};

// Custom Streak Icon
export const CustomStreakIcon: Story = {
  args: {
    streakCount: 0,
    streakTitle: 'Your Current Streak',
    streakIcon: (
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 100 }}>🔥</Text>
        <Text style={{ fontSize: 40, color: '#FFFFFF', fontWeight: '700', marginTop: 8 }}>0</Text>
      </View>
    ),
    weekDays: [
      { day: 'Su', dayNumber: 1 },
      { day: 'Mo', dayNumber: 2 },
      { day: 'Tu', dayNumber: 3 },
      { day: 'We', dayNumber: 4 },
      { day: 'Th', dayNumber: 5 },
      { day: 'Fr', dayNumber: 6 },
      { day: 'Sa', dayNumber: 7 },
    ],
  },
};

// Fire Icon for Streak
export const FireStreak: Story = {
  args: {
    streakCount: 0,
    streakTitle: 'Your Current Streak',
    streakIcon: (
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 100 }}>🔥</Text>
        <Text style={{ fontSize: 48, color: '#FFFFFF', fontWeight: '700', marginTop: 8 }}>15</Text>
      </View>
    ),
    weekDays: [
      { day: 'Su', dayNumber: 8, isHighlighted: true },
      { day: 'Mo', dayNumber: 9, isHighlighted: true },
      { day: 'Tu', dayNumber: 10, isHighlighted: true },
      { day: 'We', dayNumber: 11, isHighlighted: true },
      { day: 'Th', dayNumber: 12, isHighlighted: true },
      { day: 'Fr', dayNumber: 13, isHighlighted: true },
      { day: 'Sa', dayNumber: 14, isHighlighted: true },
    ],
  },
};

// Start of Month
export const StartOfMonth: Story = {
  args: {
    streakCount: 0,
    streakTitle: 'Your Current Streak',
    weekDays: [
      { day: 'Su', dayNumber: 1 },
      { day: 'Mo', dayNumber: 2 },
      { day: 'Tu', dayNumber: 3 },
      { day: 'We', dayNumber: 4 },
      { day: 'Th', dayNumber: 5 },
      { day: 'Fr', dayNumber: 6 },
      { day: 'Sa', dayNumber: 7 },
    ],
  },
};

// End of Month
export const EndOfMonth: Story = {
  args: {
    streakCount: 28,
    streakTitle: 'Your Current Streak',
    weekDays: [
      { day: 'Su', dayNumber: 25, isCompleted: true },
      { day: 'Mo', dayNumber: 26, isCompleted: true },
      { day: 'Tu', dayNumber: 27, isCompleted: true },
      { day: 'We', dayNumber: 28, isCompleted: true },
      { day: 'Th', dayNumber: 29, isCompleted: true },
      { day: 'Fr', dayNumber: 30, isCompleted: true },
      { day: 'Sa', dayNumber: 31, isCompleted: true },
    ],
  },
};

// Custom Completed Icon - Checkmarks
export const CustomCompletedIcon: Story = {
  args: {
    streakCount: 15,
    streakTitle: 'Your Current Streak',
    completedDayIcon: <Text style={{ fontSize: 28 }}>✓</Text>,
    weekDays: [
      { day: 'Su', dayNumber: 1, isCompleted: true },
      { day: 'Mo', dayNumber: 2, isCompleted: true },
      { day: 'Tu', dayNumber: 3, isCompleted: true },
      { day: 'We', dayNumber: 4, isCompleted: true },
      { day: 'Th', dayNumber: 5, isCompleted: true },
      { day: 'Fr', dayNumber: 6, isCompleted: true },
      { day: 'Sa', dayNumber: 7 },
    ],
  },
};

// Custom Completed Icon - Prayer Hands
export const PrayerHandsIcon: Story = {
  args: {
    streakCount: 21,
    streakTitle: 'Your Current Streak',
    completedDayIcon: <Text style={{ fontSize: 28 }}>🙏</Text>,
    weekDays: [
      { day: 'Su', dayNumber: 15, isCompleted: true },
      { day: 'Mo', dayNumber: 16, isCompleted: true },
      { day: 'Tu', dayNumber: 17, isCompleted: true },
      { day: 'We', dayNumber: 18, isCompleted: true },
      { day: 'Th', dayNumber: 19, isCompleted: true },
      { day: 'Fr', dayNumber: 20, isCompleted: true },
      { day: 'Sa', dayNumber: 21 },
    ],
  },
};
