import type { Meta, StoryObj } from '@storybook/react';
import { View, Text } from 'react-native';
import { Header } from './index';
import { Icon } from '@/components/common/Icon';

const meta = {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    onLeftPress: { action: 'left pressed' },
    onRightPress: { action: 'right pressed' },
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: '#1C1C1E' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    leftIcon: <Icon name="menu" size={24} color="#FFFFFF" />,
    centerContent: (
      <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>LORD OF THE HOURS</Text>
    ),
    rightIcons: [
      <Icon name="menu" size={24} color="#FFFFFF" />,
      <Icon name="info" size={24} color="#FFFFFF" />,
    ],
  },
};

export const WithLogo: Story = {
  args: {
    leftIcon: <Icon name="menu" size={24} color="#FFFFFF" />,
    centerContent: (
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 14,
          fontWeight: '600',
          letterSpacing: 2,
          fontFamily: 'serif',
        }}
      >
        LORD OF THE HOURS
      </Text>
    ),
    rightIcons: [
      <Icon name="menu" size={24} color="#FFFFFF" />,
      <Icon name="info" size={24} color="#FFFFFF" />,
    ],
    backgroundColor: '#2C2C2E',
  },
};

export const WithBackButton: Story = {
  args: {
    leftIcon: <Icon name="arrow-left" size={24} color="#FFFFFF" />,
    centerContent: (
      <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>Settings</Text>
    ),
    rightIcons: [<Icon name="settings" size={24} color="#FFFFFF" />],
  },
};

export const MinimalHeader: Story = {
  args: {
    leftIcon: <Icon name="arrow-left" size={24} color="#FFFFFF" />,
    centerContent: (
      <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>Details</Text>
    ),
  },
};

export const CustomBackground: Story = {
  args: {
    leftIcon: <Icon name="menu" size={24} color="#FFFFFF" />,
    centerContent: (
      <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>Custom Header</Text>
    ),
    rightIcons: [<Icon name="search" size={24} color="#FFFFFF" />],
    backgroundColor: '#1A1A2E',
  },
};

export const MultipleRightIcons: Story = {
  args: {
    leftIcon: <Icon name="menu" size={24} color="#FFFFFF" />,
    centerContent: (
      <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>Dashboard</Text>
    ),
    rightIcons: [
      <Icon name="search" size={24} color="#FFFFFF" />,
      <Icon name="settings" size={24} color="#FFFFFF" />,
      <Icon name="user" size={24} color="#FFFFFF" />,
    ],
  },
};
