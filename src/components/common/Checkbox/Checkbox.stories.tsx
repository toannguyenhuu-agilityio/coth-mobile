import type { Meta, StoryObj } from '@storybook/react';

import { View } from 'react-native';
import { fn } from 'storybook/test';

import { SimpleCheckbox } from '.';

const meta = {
  title: 'Components/Checkbox',
  component: SimpleCheckbox,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: 'flex-start', padding: 16, backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: { onCheckedChange: fn() },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Checked state',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Label position',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Checkbox size',
    },
    checkedColor: {
      control: 'color',
      description: 'Background color when checked',
    },
    uncheckedColor: {
      control: 'color',
      description: 'Background color when unchecked',
    },
    checkmarkColor: {
      control: 'color',
      description: 'Checkmark color',
    },
    borderColor: {
      control: 'color',
      description: 'Border color when unchecked',
    },
  },
} satisfies Meta<typeof SimpleCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

// Basic States
export const Unchecked: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

// Size Variants
export const Small: Story = {
  args: {
    checked: true,
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    checked: true,
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    checked: true,
    size: 'large',
  },
};

// Disabled States
export const DisabledUnchecked: Story = {
  args: {
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

// Custom Colors
export const GreenTheme: Story = {
  args: {
    checked: true,
    checkedColor: '#4CAF50',
    checkmarkColor: '#FFFFFF',
  },
};

export const RedTheme: Story = {
  args: {
    checked: true,
    checkedColor: '#F44336',
    checkmarkColor: '#FFFFFF',
  },
};

export const PurpleTheme: Story = {
  args: {
    checked: true,
    checkedColor: '#9C27B0',
    checkmarkColor: '#FFFFFF',
  },
};

export const OrangeTheme: Story = {
  args: {
    checked: true,
    checkedColor: '#FF9800',
    checkmarkColor: '#FFFFFF',
  },
};

export const DefaultTealTheme: Story = {
  args: {
    checked: true,
    checkedColor: '#2587A0',
    checkmarkColor: '#FFFFFF',
  },
};

// Custom Checkmark Colors
export const BlackCheckmark: Story = {
  args: {
    checked: true,
    checkedColor: '#FFFFFF',
    checkmarkColor: '#000000',
  },
};

export const ColoredCheckmark: Story = {
  args: {
    checked: true,
    checkedColor: '#1A1A1A',
    checkmarkColor: '#FFD700',
  },
};

// Unchecked with Custom Border
export const CustomBorderUnchecked: Story = {
  args: {
    checked: false,
    borderColor: '#FF6B6B',
    uncheckedColor: 'rgba(255, 107, 107, 0.1)',
  },
};

// Size Comparison
export const AllSizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <SimpleCheckbox checked={true} size="small" />
      <SimpleCheckbox checked={true} size="medium" />
      <SimpleCheckbox checked={true} size="large" />
    </View>
  ),
};

// State Comparison
export const AllStates: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <SimpleCheckbox checked={false} />
      <SimpleCheckbox checked={true} />
      <SimpleCheckbox checked={false} disabled={true} />
      <SimpleCheckbox checked={true} disabled={true} />
    </View>
  ),
};

// Multiple Checkboxes
export const MultipleOptions: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <SimpleCheckbox checked={true} />
      <SimpleCheckbox checked={false} />
      <SimpleCheckbox checked={true} />
      <SimpleCheckbox checked={true} />
      <SimpleCheckbox checked={false} />
    </View>
  ),
};

// Different Themes Side by Side
export const ColorPalette: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16, flexWrap: 'wrap' }}>
      <SimpleCheckbox checked={true} checkedColor="#2587A0" />
      <SimpleCheckbox checked={true} checkedColor="#4CAF50" />
      <SimpleCheckbox checked={true} checkedColor="#F44336" />
      <SimpleCheckbox checked={true} checkedColor="#9C27B0" />
      <SimpleCheckbox checked={true} checkedColor="#FF9800" />
      <SimpleCheckbox checked={true} checkedColor="#2196F3" />
    </View>
  ),
};

// With Labels
export const WithLabelRight: Story = {
  args: {
    checked: true,
    label: 'Accept terms and conditions',
    labelPosition: 'right',
  },
};

export const WithLabelLeft: Story = {
  args: {
    checked: true,
    label: 'Enable notifications',
    labelPosition: 'left',
  },
};

export const LabelUnchecked: Story = {
  args: {
    checked: false,
    label: 'Subscribe to newsletter',
    labelPosition: 'right',
  },
};

export const LabelDisabled: Story = {
  args: {
    checked: true,
    label: 'Disabled option',
    labelPosition: 'right',
    disabled: true,
  },
};

// Multiple Checkboxes with Labels
export const CheckboxList: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <SimpleCheckbox checked={true} label="Receive email notifications" labelPosition="right" />
      <SimpleCheckbox checked={false} label="Receive SMS notifications" labelPosition="right" />
      <SimpleCheckbox checked={true} label="Receive push notifications" labelPosition="right" />
      <SimpleCheckbox checked={false} label="Weekly newsletter" labelPosition="right" />
    </View>
  ),
};

// Different Sizes with Labels
export const LabelSizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <SimpleCheckbox checked={true} label="Small checkbox" size="small" labelPosition="right" />
      <SimpleCheckbox checked={true} label="Medium checkbox" size="medium" labelPosition="right" />
      <SimpleCheckbox checked={true} label="Large checkbox" size="large" labelPosition="right" />
    </View>
  ),
};
