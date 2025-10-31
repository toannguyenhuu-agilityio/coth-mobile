import type { Meta, StoryObj } from '@storybook/react';

import { View } from 'react-native';

import { Badge } from '.';

const meta = {
  title: 'Common/Badge',
  component: Badge,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: 'flex-start', padding: 16, backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['live', 'countdown', 'highlight'],
      description: 'Badge variant - live, countdown, or highlight',
    },
    label: {
      control: 'text',
      description: 'Badge label text (defaults based on variant)',
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color',
    },
    textColor: {
      control: 'color',
      description: 'Custom text color',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

// Main Variants
export const Live: Story = {
  args: {
    variant: 'live',
  },
};

export const Countdown: Story = {
  args: {
    variant: 'countdown',
  },
};

export const Highlight: Story = {
  args: {
    variant: 'highlight',
    label: 'Best Value',
  },
};

// Custom Labels
export const LiveCustomLabel: Story = {
  args: {
    variant: 'live',
    label: '• NOW',
  },
};

export const CountdownCustomLabel: Story = {
  args: {
    variant: 'countdown',
    label: '2h 30m',
  },
};

export const CountdownLongFormat: Story = {
  args: {
    variant: 'countdown',
    label: '5d 12h 45m 30s',
  },
};

// Custom Colors
export const CustomBackgroundColor: Story = {
  args: {
    variant: 'live',
    backgroundColor: '#FFD700',
  },
};

// Both Variants Side by Side
export const AllVariants: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
      <Badge variant="live" />
      <Badge variant="countdown" label="2h 30m" />
      <Badge variant="highlight" label="Best Value" />
    </View>
  ),
};

// Multiple Countdown Examples
export const MultipleCountdowns: Story = {
  render: () => (
    <View style={{ flexDirection: 'column', gap: 12 }}>
      <Badge variant="countdown" label="5d 06h 12m" />
      <Badge variant="countdown" label="2d 14h 30m" />
      <Badge variant="countdown" label="12h 45m" />
      <Badge variant="countdown" label="3h 20m" />
      <Badge variant="countdown" label="45m 15s" />
    </View>
  ),
};

// Different Live Labels
export const DifferentLiveLabels: Story = {
  render: () => (
    <View style={{ flexDirection: 'column', gap: 12 }}>
      <Badge variant="live" label="• LIVE" />
      <Badge variant="live" label="• ON AIR" />
      <Badge variant="live" label="• STREAMING" />
      <Badge variant="live" label="• NOW" />
    </View>
  ),
};

// Different Highlight Labels
export const DifferentHighlightLabels: Story = {
  render: () => (
    <View style={{ flexDirection: 'column', gap: 12 }}>
      <Badge variant="highlight" label="Best Value" />
      <Badge variant="highlight" label="Popular" />
      <Badge variant="highlight" label="New" />
      <Badge variant="highlight" label="Featured" />
    </View>
  ),
};

// Real-world Usage Example
export const RealWorldUsage: Story = {
  render: () => (
    <View
      style={{
        flexDirection: 'column',
        gap: 16,
        backgroundColor: '#1a1a1a',
        padding: 16,
        borderRadius: 12,
      }}
    >
      {/* Active stream */}
      <View
        style={{
          backgroundColor: '#7099A7',
          padding: 12,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.9)',
        }}
      >
        <Badge variant="live" />
      </View>

      {/* Upcoming streams */}
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          padding: 12,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.5)',
        }}
      >
        <Badge variant="countdown" label="3d 06h 12m" />
      </View>

      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          padding: 12,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.5)',
        }}
      >
        <Badge variant="countdown" label="5d 04h 30m" />
      </View>
    </View>
  ),
};
