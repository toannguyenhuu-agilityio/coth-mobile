import type { Meta, StoryObj } from '@storybook/react';

import { View } from 'react-native';
import { fn } from 'storybook/test';

import { Switch } from '.';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: 'flex-start', padding: 16, backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: { onValueChange: fn() },
  argTypes: {
    value: {
      control: 'boolean',
      description: 'Switch enabled state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Switch size',
    },
    activeTrackColor: {
      control: 'color',
      description: 'Active track color',
    },
    inactiveTrackColor: {
      control: 'color',
      description: 'Inactive track color',
    },
    activeThumbColor: {
      control: 'color',
      description: 'Active thumb color',
    },
    inactiveThumbColor: {
      control: 'color',
      description: 'Inactive thumb color',
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

// Basic States
export const Off: Story = {
  args: {
    value: false,
  },
};

export const On: Story = {
  args: {
    value: true,
  },
};

// Size Variants
export const Small: Story = {
  args: {
    value: true,
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    value: true,
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    value: true,
    size: 'large',
  },
};

// Disabled States
export const DisabledOff: Story = {
  args: {
    value: false,
    disabled: true,
  },
};

export const DisabledOn: Story = {
  args: {
    value: true,
    disabled: true,
  },
};

// Custom Colors
export const CustomColorsOn: Story = {
  args: {
    value: true,
    activeTrackColor: '#4CAF50',
    inactiveTrackColor: '#CCCCCC',
    activeThumbColor: '#FFFFFF',
    inactiveThumbColor: '#FFFFFF',
  },
};

export const CustomColorsOff: Story = {
  args: {
    value: false,
    activeTrackColor: '#4CAF50',
    inactiveTrackColor: '#CCCCCC',
    activeThumbColor: '#FFFFFF',
    inactiveThumbColor: '#FFFFFF',
  },
};

// Different Color Combinations
export const RedTheme: Story = {
  args: {
    value: true,
    activeTrackColor: '#FF5252',
    inactiveTrackColor: '#424242',
    activeThumbColor: '#FFFFFF',
    inactiveThumbColor: '#B0B0B0',
  },
};

export const BlueTheme: Story = {
  args: {
    value: true,
    activeTrackColor: '#2196F3',
    inactiveTrackColor: '#546E7A',
    activeThumbColor: '#FFFFFF',
    inactiveThumbColor: '#CFD8DC',
  },
};

export const PurpleTheme: Story = {
  args: {
    value: true,
    activeTrackColor: '#9C27B0',
    inactiveTrackColor: '#4A148C',
    activeThumbColor: '#F3E5F5',
    inactiveThumbColor: '#BDBDBD',
  },
};

// Size Comparison
export const AllSizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Switch value={true} size="small" />
      <Switch value={true} size="medium" />
      <Switch value={true} size="large" />
    </View>
  ),
};
