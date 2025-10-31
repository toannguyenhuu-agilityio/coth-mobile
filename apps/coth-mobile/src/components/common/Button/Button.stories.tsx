import type { Meta, StoryObj } from '@storybook/react';

import { View } from 'react-native';
import { fn } from 'storybook/test';

import { Button } from '.';
import { ArrowRight, GoogleIcon } from '@/components/common/icons';

const meta = {
  title: 'Common/Button',
  component: Button,
  decorators: [
    (Story) => (
      <View
        style={{ flex: 1, alignItems: 'flex-start', padding: 16, backgroundColor: '#1a1919ff' }}
      >
        <View style={{ width: '100%' }}>
          <Story />
        </View>
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
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

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
    iconRight: <ArrowRight />,
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
    label: 'Continue with Google',
    iconLeft: <GoogleIcon />,
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: 'primary',
    label: 'Get Started',
    iconRight: <ArrowRight />,
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

export const LinkDisabled: Story = {
  args: {
    variant: 'link',
    label: 'Disabled Link Button',
    disabled: true,
  },
};

export const Rounded: Story = {
  args: {
    variant: 'rounded',
    iconRight: <ArrowRight />,
  },
};

export const OnlyIcon: Story = {
  args: {
    variant: 'primary',
    iconRight: <ArrowRight />,
    style: {
      width: 40,
      height: 40,
    },
  },
};
