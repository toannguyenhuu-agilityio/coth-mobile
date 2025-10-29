import type { Meta, StoryObj } from '@storybook/react';
import { View, Text, StyleSheet } from 'react-native';
import { fn } from 'storybook/test';

import { Card } from './index';
import { CheckIcon } from '../common/Icon/CheckIcon';

const meta = {
  title: 'Components/CardSummary',
  component: Card,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16, backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: { onActionPress: fn() },
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
    },
    actionText: {
      control: 'text',
      description: 'Action text (e.g., Edit)',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color',
    },
    borderColor: {
      control: 'color',
      description: 'Border color',
    },
    borderWidth: {
      control: 'number',
      description: 'Border width',
    },
    borderRadius: {
      control: 'number',
      description: 'Border radius',
    },
    padding: {
      control: 'number',
      description: 'Padding',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

// Styles defined before stories to avoid hoisting issues
const styles = StyleSheet.create({
  listContainer: {
    gap: 8,
  },
  listItem: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 14,
    lineHeight: 20,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    lineHeight: 20,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 14,
    flex: 1,
  },
  eventItem: {
    gap: 4,
  },
  eventTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  eventTime: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    gap: 4,
  },
  statValue: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
  },
  statLabel: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12,
  },
  achievementsContainer: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
  },
  achievementBadge: {
    fontSize: 32,
  },
});

// Basic Card
export const Default: Story = {
  args: {
    title: 'Your spiritual goals',
    actionText: 'Edit',
    children: (
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>• Unbeliever</Text>
        <Text style={styles.listItem}>• Baby Christian</Text>
      </View>
    ),
  },
};

export const WithoutAction: Story = {
  args: {
    title: 'Card Title',
    children: <Text style={styles.text}>This is a simple card without an action button.</Text>,
  },
};

export const WithoutTitle: Story = {
  args: {
    children: <Text style={styles.text}>This is a card without a title.</Text>,
  },
};

export const OnlyContent: Story = {
  args: {
    children: <Text style={styles.text}>Just content, no header.</Text>,
  },
};

// Different Content Types
export const WithList: Story = {
  args: {
    title: 'My List',
    actionText: 'Edit',
    children: (
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>• Item 1</Text>
        <Text style={styles.listItem}>• Item 2</Text>
        <Text style={styles.listItem}>• Item 3</Text>
        <Text style={styles.listItem}>• Item 4</Text>
      </View>
    ),
  },
};

export const WithNumberedList: Story = {
  args: {
    title: 'Steps',
    actionText: 'View All',
    children: (
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>1. First step</Text>
        <Text style={styles.listItem}>2. Second step</Text>
        <Text style={styles.listItem}>3. Third step</Text>
      </View>
    ),
  },
};

export const WithCheckList: Story = {
  args: {
    title: 'Completed Tasks',
    actionText: 'View',
    children: (
      <View style={styles.listContainer}>
        <View style={styles.checkItem}>
          <CheckIcon size={16} backgroundColor="#4CAF50" checkColor="#FFFFFF" />
          <Text style={styles.checkText}>Task 1 completed</Text>
        </View>
        <View style={styles.checkItem}>
          <CheckIcon size={16} backgroundColor="#4CAF50" checkColor="#FFFFFF" />
          <Text style={styles.checkText}>Task 2 completed</Text>
        </View>
      </View>
    ),
  },
};

// Custom Styling
export const CustomColors: Story = {
  args: {
    title: 'Custom Card',
    actionText: 'Edit',
    backgroundColor: 'rgba(112, 153, 167, 0.1)',
    borderColor: '#7099A7',
    borderWidth: 2,
    children: <Text style={styles.text}>Card with custom colors.</Text>,
  },
};

export const DarkCard: Story = {
  args: {
    title: 'Dark Card',
    actionText: 'Edit',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    children: <Text style={styles.text}>Darker background card.</Text>,
  },
};

export const LightBorder: Story = {
  args: {
    title: 'Light Border',
    actionText: 'Edit',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
    children: <Text style={styles.text}>Card with lighter border.</Text>,
  },
};

// Different Sizes
export const SmallPadding: Story = {
  args: {
    title: 'Compact Card',
    actionText: 'Edit',
    padding: 8,
    children: <Text style={styles.text}>Card with smaller padding.</Text>,
  },
};

export const LargePadding: Story = {
  args: {
    title: 'Spacious Card',
    actionText: 'Edit',
    padding: 24,
    children: <Text style={styles.text}>Card with larger padding.</Text>,
  },
};

export const RoundedCorners: Story = {
  args: {
    title: 'Rounded Card',
    actionText: 'Edit',
    borderRadius: 20,
    children: <Text style={styles.text}>Card with more rounded corners.</Text>,
  },
};

export const SharpCorners: Story = {
  args: {
    title: 'Sharp Card',
    actionText: 'Edit',
    borderRadius: 4,
    children: <Text style={styles.text}>Card with sharp corners.</Text>,
  },
};

// Real World Examples
export const SpiritualGoals: Story = {
  args: {
    title: 'Your spiritual goals',
    actionText: 'Edit',
    children: (
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>• Unbeliever</Text>
        <Text style={styles.listItem}>• Baby Christian</Text>
      </View>
    ),
  },
};

export const PrayerRequests: Story = {
  args: {
    title: 'Prayer Requests',
    actionText: 'Add',
    children: (
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>• Health and healing</Text>
        <Text style={styles.listItem}>• Family relationships</Text>
        <Text style={styles.listItem}>• Work situation</Text>
      </View>
    ),
  },
};

export const UpcomingEvents: Story = {
  args: {
    title: 'Upcoming Events',
    actionText: 'View All',
    children: (
      <View style={styles.listContainer}>
        <View style={styles.eventItem}>
          <Text style={styles.eventTitle}>Sunday Service</Text>
          <Text style={styles.eventTime}>Tomorrow, 10:00 AM</Text>
        </View>
        <View style={styles.eventItem}>
          <Text style={styles.eventTitle}>Bible Study</Text>
          <Text style={styles.eventTime}>Wednesday, 7:00 PM</Text>
        </View>
      </View>
    ),
  },
};

export const Statistics: Story = {
  args: {
    title: 'Your Progress',
    actionText: 'Details',
    children: (
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>24</Text>
          <Text style={styles.statLabel}>Days</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>15</Text>
          <Text style={styles.statLabel}>Chapters</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>5</Text>
          <Text style={styles.statLabel}>Hours</Text>
        </View>
      </View>
    ),
  },
};

export const MultipleCards: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Card
        title="Your spiritual goals"
        actionText="Edit"
        children={
          <View style={styles.listContainer}>
            <Text style={styles.listItem}>• Unbeliever</Text>
            <Text style={styles.listItem}>• Baby Christian</Text>
          </View>
        }
      />
      <Card
        title="Reading Progress"
        actionText="View"
        children={
          <View style={styles.listContainer}>
            <Text style={styles.text}>Genesis: 25% complete</Text>
            <Text style={styles.text}>Exodus: Not started</Text>
          </View>
        }
      />
      <Card
        title="Achievements"
        actionText="All"
        children={
          <View style={styles.achievementsContainer}>
            <Text style={styles.achievementBadge}>🏆</Text>
            <Text style={styles.achievementBadge}>⭐</Text>
            <Text style={styles.achievementBadge}>🎯</Text>
          </View>
        }
      />
    </View>
  ),
};
