import type { Meta, StoryObj } from '@storybook/react';

import { View } from 'react-native';
import { fn } from 'storybook/test';

import { CheckboxList } from '.';

const meta = {
  title: 'Components/CheckboxList',
  component: CheckboxList,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16, backgroundColor: '#1A1A1A' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: { onCheckedChange: fn() },
  argTypes: {
    options: {
      control: 'object',
      description: 'List of checkbox options',
    },
    showDivider: {
      control: 'boolean',
      description: 'Show divider between items',
    },
    dividerColor: {
      control: 'color',
      description: 'Divider color',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Checkbox size',
    },
    checkedColor: {
      control: 'color',
      description: 'Checked checkbox color',
    },
    uncheckedColor: {
      control: 'color',
      description: 'Unchecked checkbox color',
    },
  },
} satisfies Meta<typeof CheckboxList>;

export default meta;

type Story = StoryObj<typeof meta>;

// Example from Image 1 - Issues List
export const IssuesList: Story = {
  args: {
    options: [
      { label: 'Addiction', value: 'addiction', checked: true },
      { label: 'Depression and/or Anxiety', value: 'depression', checked: false },
      { label: 'Loneliness', value: 'loneliness', checked: false },
      { label: 'Lack of Biblical Understanding', value: 'biblical', checked: true },
      { label: 'Inconsistency', value: 'inconsistency', checked: false },
      { label: 'Fear', value: 'fear', checked: false },
    ],
  },
};

// Example from Image 2 - Faith Status List
export const FaithStatusList: Story = {
  args: {
    options: [
      { label: 'Unbeliever', value: 'unbeliever', checked: false },
      { label: 'Baby Christian', value: 'baby-christian', checked: false },
      { label: 'Lukewarm', value: 'lukewarm', checked: false },
      { label: 'Coming back to faith', value: 'coming-back', checked: false },
      { label: 'Longtime Believer', value: 'longtime-believer', checked: false },
      { label: 'Other', value: 'other', checked: true },
    ],
  },
};

// Basic Example
export const Basic: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1', checked: true },
      { label: 'Option 2', value: 'option2', checked: false },
      { label: 'Option 3', value: 'option3', checked: false },
    ],
  },
};

// Without Dividers
export const NoDividers: Story = {
  args: {
    showDivider: false,
    options: [
      { label: 'Option 1', value: 'option1', checked: true },
      { label: 'Option 2', value: 'option2', checked: false },
      { label: 'Option 3', value: 'option3', checked: true },
    ],
  },
};

// With Disabled Items
export const WithDisabled: Story = {
  args: {
    options: [
      { label: 'Active Option 1', value: 'option1', checked: true },
      { label: 'Disabled Option', value: 'option2', checked: false, disabled: true },
      { label: 'Active Option 2', value: 'option3', checked: false },
      { label: 'Disabled Checked', value: 'option4', checked: true, disabled: true },
    ],
  },
};

// Small Size
export const SmallSize: Story = {
  args: {
    size: 'small',
    options: [
      { label: 'Small Option 1', value: 'option1', checked: true },
      { label: 'Small Option 2', value: 'option2', checked: false },
      { label: 'Small Option 3', value: 'option3', checked: true },
    ],
  },
};

// Large Size
export const LargeSize: Story = {
  args: {
    size: 'large',
    options: [
      { label: 'Large Option 1', value: 'option1', checked: true },
      { label: 'Large Option 2', value: 'option2', checked: false },
      { label: 'Large Option 3', value: 'option3', checked: false },
    ],
  },
};

// Custom Colors
export const CustomColors: Story = {
  args: {
    checkedColor: '#4CAF50',
    uncheckedColor: 'rgba(76, 175, 80, 0.2)',
    dividerColor: 'rgba(76, 175, 80, 0.3)',
    options: [
      { label: 'Green Theme 1', value: 'option1', checked: true },
      { label: 'Green Theme 2', value: 'option2', checked: false },
      { label: 'Green Theme 3', value: 'option3', checked: true },
    ],
  },
};

// All Checked
export const AllChecked: Story = {
  args: {
    options: [
      { label: 'All Selected 1', value: 'option1', checked: true },
      { label: 'All Selected 2', value: 'option2', checked: true },
      { label: 'All Selected 3', value: 'option3', checked: true },
      { label: 'All Selected 4', value: 'option4', checked: true },
    ],
  },
};

// All Unchecked
export const AllUnchecked: Story = {
  args: {
    options: [
      { label: 'None Selected 1', value: 'option1', checked: false },
      { label: 'None Selected 2', value: 'option2', checked: false },
      { label: 'None Selected 3', value: 'option3', checked: false },
      { label: 'None Selected 4', value: 'option4', checked: false },
    ],
  },
};

// Long Labels
export const LongLabels: Story = {
  args: {
    options: [
      {
        label:
          'This is a very long label that demonstrates how the component handles text wrapping',
        value: 'option1',
        checked: true,
      },
      {
        label: 'Another long label with multiple words to show text behavior',
        value: 'option2',
        checked: false,
      },
      { label: 'Short label', value: 'option3', checked: true },
    ],
  },
};

// Settings List Example
export const SettingsList: Story = {
  args: {
    options: [
      { label: 'Enable notifications', value: 'notifications', checked: true },
      { label: 'Auto-sync data', value: 'auto-sync', checked: true },
      { label: 'Dark mode', value: 'dark-mode', checked: false },
      { label: 'Show tips', value: 'tips', checked: true },
      { label: 'Analytics', value: 'analytics', checked: false },
    ],
  },
};
