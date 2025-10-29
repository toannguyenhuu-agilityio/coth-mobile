import type { Meta, StoryObj } from '@storybook/react';

import { View } from 'react-native';

import { Avatar } from '.';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: 'flex-start', padding: 16, backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Avatar size',
    },
    initials: {
      control: 'text',
      description: 'Fallback initials when no image is provided',
    },
    borderWidth: {
      control: 'number',
      description: 'Border width',
    },
    borderColor: {
      control: 'color',
      description: 'Border color',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color for initials',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

// Size Stories with Image
export const SmallWithImage: Story = {
  args: {
    size: 'small',
    source: { uri: 'https://i.pravatar.cc/150?img=1' },
  },
};

export const MediumWithImage: Story = {
  args: {
    size: 'medium',
    source: { uri: 'https://i.pravatar.cc/150?img=2' },
  },
};

export const LargeWithImage: Story = {
  args: {
    size: 'large',
    source: { uri: 'https://i.pravatar.cc/150?img=3' },
  },
};

// Size Stories with Initials
export const SmallWithInitials: Story = {
  args: {
    size: 'small',
    initials: 'BB',
  },
};

export const MediumWithInitials: Story = {
  args: {
    size: 'medium',
    initials: 'BB',
  },
};

export const LargeWithInitials: Story = {
  args: {
    size: 'large',
    initials: 'BB',
  },
};

// Default (no props)
export const Default: Story = {
  args: {},
};

// Custom Border
export const CustomBorder: Story = {
  args: {
    size: 'medium',
    initials: 'BB',
    borderWidth: 4,
    borderColor: '#FF6B6B',
  },
};

// Custom Background
export const CustomBackground: Story = {
  args: {
    size: 'medium',
    initials: 'BB',
    backgroundColor: '#4ECDC4',
  },
};

// Single Initial
export const SingleInitial: Story = {
  args: {
    size: 'medium',
    initials: 'B',
  },
};

// Long Initials (will be truncated visually)
export const LongInitials: Story = {
  args: {
    size: 'medium',
    initials: 'ABC',
  },
};

// Different Images
export const DifferentImages: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
      <Avatar size="small" source={{ uri: 'https://i.pravatar.cc/150?img=4' }} />
      <Avatar size="medium" source={{ uri: 'https://i.pravatar.cc/150?img=5' }} />
      <Avatar size="large" source={{ uri: 'https://i.pravatar.cc/150?img=6' }} />
    </View>
  ),
};

// Different Initials
export const DifferentInitials: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
      <Avatar size="small" initials="AA" />
      <Avatar size="medium" initials="BB" />
      <Avatar size="large" initials="CC" />
    </View>
  ),
};

// Mixed Sizes and Types
export const MixedSizesAndTypes: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Avatar size="small" source={{ uri: 'https://i.pravatar.cc/150?img=7' }} />
      <Avatar size="small" initials="AB" />
      <Avatar size="medium" source={{ uri: 'https://i.pravatar.cc/150?img=8' }} />
      <Avatar size="medium" initials="CD" />
      <Avatar size="large" source={{ uri: 'https://i.pravatar.cc/150?img=9' }} />
      <Avatar size="large" initials="EF" />
    </View>
  ),
};
