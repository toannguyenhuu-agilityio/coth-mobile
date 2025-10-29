import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import { View } from 'react-native';
import { fn } from 'storybook/test';

import { RadioButtonList } from '.';

const meta = {
  title: 'Components/RadioButtonList',
  component: RadioButtonList,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16, backgroundColor: '#1A1A1A' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: { onValueChange: fn() },
  argTypes: {
    options: {
      control: 'object',
      description: 'List of radio button options',
    },
    selectedValue: {
      control: 'text',
      description: 'Currently selected value',
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
      description: 'Radio button size',
    },
    selectedColor: {
      control: 'color',
      description: 'Selected radio button color',
    },
  },
} satisfies Meta<typeof RadioButtonList>;

export default meta;

type Story = StoryObj<typeof meta>;

// Faith Status Example
export const FaithStatusList: Story = {
  args: {
    selectedValue: 'other',
    options: [
      { label: 'Unbeliever', value: 'unbeliever' },
      { label: 'Baby Christian', value: 'baby-christian' },
      { label: 'Lukewarm', value: 'lukewarm' },
      { label: 'Coming back to faith', value: 'coming-back' },
      { label: 'Longtime Believer', value: 'longtime-believer' },
      { label: 'Other', value: 'other' },
    ],
  },
};

// Basic Example
export const Basic: Story = {
  args: {
    selectedValue: 'option2',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};

// No Selection
export const NoSelection: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};

// First Item Selected
export const FirstSelected: Story = {
  args: {
    selectedValue: 'option1',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};

// Last Item Selected
export const LastSelected: Story = {
  args: {
    selectedValue: 'option3',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};

// With Disabled Items
export const WithDisabled: Story = {
  args: {
    selectedValue: 'option1',
    options: [
      { label: 'Active Option 1', value: 'option1' },
      { label: 'Disabled Option', value: 'option2', disabled: true },
      { label: 'Active Option 2', value: 'option3' },
      { label: 'Disabled Selected', value: 'option4', disabled: true },
    ],
  },
};

// Without Dividers
export const NoDividers: Story = {
  args: {
    showDivider: false,
    selectedValue: 'option2',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};

// Small Size
export const SmallSize: Story = {
  args: {
    size: 'small',
    selectedValue: 'option2',
    options: [
      { label: 'Small Option 1', value: 'option1' },
      { label: 'Small Option 2', value: 'option2' },
      { label: 'Small Option 3', value: 'option3' },
    ],
  },
};

// Large Size
export const LargeSize: Story = {
  args: {
    size: 'large',
    selectedValue: 'option2',
    options: [
      { label: 'Large Option 1', value: 'option1' },
      { label: 'Large Option 2', value: 'option2' },
      { label: 'Large Option 3', value: 'option3' },
    ],
  },
};

// Custom Colors
export const CustomColors: Story = {
  args: {
    selectedValue: 'option2',
    selectedColor: '#4CAF50',
    unselectedColor: 'rgba(76, 175, 80, 0.3)',
    borderColor: 'rgba(76, 175, 80, 0.5)',
    dividerColor: 'rgba(76, 175, 80, 0.3)',
    options: [
      { label: 'Green Theme 1', value: 'option1' },
      { label: 'Green Theme 2', value: 'option2' },
      { label: 'Green Theme 3', value: 'option3' },
    ],
  },
};

// Gender Selection
export const GenderSelection: Story = {
  args: {
    selectedValue: 'female',
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' },
      { label: 'Prefer not to say', value: 'prefer-not' },
    ],
  },
};

// Priority Level
export const PriorityLevel: Story = {
  args: {
    selectedValue: 'high',
    options: [
      { label: 'Low Priority', value: 'low' },
      { label: 'Medium Priority', value: 'medium' },
      { label: 'High Priority', value: 'high' },
      { label: 'Urgent', value: 'urgent' },
    ],
  },
};

// Long Labels
export const LongLabels: Story = {
  args: {
    selectedValue: 'option2',
    options: [
      {
        label:
          'This is a very long label that demonstrates how the component handles text wrapping',
        value: 'option1',
      },
      {
        label: 'Another long label with multiple words to show text behavior',
        value: 'option2',
      },
      { label: 'Short label', value: 'option3' },
    ],
  },
};

// Payment Method
export const PaymentMethod: Story = {
  args: {
    selectedValue: 'card',
    options: [
      { label: 'Credit Card', value: 'card' },
      { label: 'PayPal', value: 'paypal' },
      { label: 'Bank Transfer', value: 'bank' },
      { label: 'Cash on Delivery', value: 'cod' },
    ],
  },
};

// Many Options
export const ManyOptions: Story = {
  args: {
    selectedValue: 'option5',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
      { label: 'Option 4', value: 'option4' },
      { label: 'Option 5', value: 'option5' },
      { label: 'Option 6', value: 'option6' },
      { label: 'Option 7', value: 'option7' },
      { label: 'Option 8', value: 'option8' },
    ],
  },
};

// Interactive Examples with State Management

// Interactive - Faith Status
export const InteractiveFaithStatus = () => {
  const [selectedValue, setSelectedValue] = useState('other');

  return (
    <RadioButtonList
      selectedValue={selectedValue}
      options={[
        { label: 'Unbeliever', value: 'unbeliever' },
        { label: 'Baby Christian', value: 'baby-christian' },
        { label: 'Lukewarm', value: 'lukewarm' },
        { label: 'Coming back to faith', value: 'coming-back' },
        { label: 'Longtime Believer', value: 'longtime-believer' },
        { label: 'Other', value: 'other' },
      ]}
      onValueChange={(value) => setSelectedValue(value)}
    />
  );
};

// Interactive - Basic
export const InteractiveBasic = () => {
  const [selectedValue, setSelectedValue] = useState('option2');

  return (
    <RadioButtonList
      selectedValue={selectedValue}
      options={[
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ]}
      onValueChange={(value, label) => {
        console.log(`Selected: ${label} (${value})`);
        setSelectedValue(value);
      }}
    />
  );
};

// Interactive - Gender Selection
export const InteractiveGenderSelection = () => {
  const [selectedValue, setSelectedValue] = useState('female');

  return (
    <RadioButtonList
      selectedValue={selectedValue}
      options={[
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
        { label: 'Prefer not to say', value: 'prefer-not' },
      ]}
      onValueChange={(value) => setSelectedValue(value)}
    />
  );
};

// Interactive - Priority Level
export const InteractivePriorityLevel = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);

  return (
    <RadioButtonList
      selectedValue={selectedValue}
      options={[
        { label: 'Low Priority', value: 'low' },
        { label: 'Medium Priority', value: 'medium' },
        { label: 'High Priority', value: 'high' },
        { label: 'Urgent', value: 'urgent' },
      ]}
      onValueChange={(value) => setSelectedValue(value)}
    />
  );
};

// Interactive - Payment Method
export const InteractivePaymentMethod = () => {
  const [selectedValue, setSelectedValue] = useState('card');

  return (
    <RadioButtonList
      selectedValue={selectedValue}
      options={[
        { label: 'Credit Card', value: 'card' },
        { label: 'PayPal', value: 'paypal' },
        { label: 'Bank Transfer', value: 'bank' },
        { label: 'Cash on Delivery', value: 'cod' },
      ]}
      onValueChange={(value) => setSelectedValue(value)}
    />
  );
};
