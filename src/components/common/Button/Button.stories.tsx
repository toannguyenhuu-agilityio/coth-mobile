import type { Meta, StoryObj } from '@storybook/react';

import { View, Text } from 'react-native';
import { fn } from 'storybook/test';

import { Button } from '.';
import { Icon } from '../Icon';

const meta = {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: 'flex-start', padding: 16, backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: { onPress: fn() },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'link'],
      description: 'Button variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color',
    },
    label: {
      control: 'text',
      description: 'Button label',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    showIconLeft: {
      control: 'boolean',
      description: 'Show left icon',
    },
    showIconRight: {
      control: 'boolean',
      description: 'Show right icon',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// Simple icon components for stories
const PlusIcon = () => (
  <Icon size={20}>
    <Text style={{ color: '#FFFFFF', fontSize: 20 }}>+</Text>
  </Icon>
);

const ArrowIcon = () => (
  <Icon size={20}>
    <Text style={{ color: '#FFFFFF', fontSize: 20 }}>→</Text>
  </Icon>
);

// Variant Stories
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    label: 'Link Button',
  },
};

// Size Stories
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    label: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    label: 'Large Button',
  },
};

// Icon Stories
export const WithLeftIcon: Story = {
  args: {
    variant: 'primary',
    label: 'With Left Icon',
    iconLeft: <PlusIcon />,
    showIconLeft: true,
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: 'primary',
    label: 'With Right Icon',
    iconRight: <ArrowIcon />,
    showIconRight: true,
  },
};

export const WithBothIcons: Story = {
  args: {
    variant: 'primary',
    label: 'With Both Icons',
    iconLeft: <PlusIcon />,
    iconRight: <ArrowIcon />,
    showIconLeft: true,
    showIconRight: true,
  },
};

// Disabled Stories
export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    label: 'Disabled Button',
    disabled: true,
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: 'secondary',
    label: 'Disabled Button',
    disabled: true,
  },
};

export const WithIconsDisabled: Story = {
  args: {
    variant: 'primary',
    label: 'Disabled with Icons',
    iconLeft: <PlusIcon />,
    iconRight: <ArrowIcon />,
    showIconLeft: true,
    showIconRight: true,
    disabled: true,
  },
};

// Custom Background Color Stories
export const CustomBackgroundColor: Story = {
  args: {
    variant: 'primary',
    label: 'Custom Color',
    backgroundColor: '#FF6B6B',
  },
};

export const CustomBackgroundColorSecondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Custom Color Secondary',
    backgroundColor: '#4ECDC4',
  },
};
