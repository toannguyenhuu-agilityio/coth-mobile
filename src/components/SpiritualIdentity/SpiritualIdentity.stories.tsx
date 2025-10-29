import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import { View } from 'react-native';
import { fn } from 'storybook/test';

import { SpiritualIdentity } from '.';

const meta = {
  title: 'Components/SpiritualIdentity',
  component: SpiritualIdentity,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16, backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: {
    onValueChange: fn(),
    onInputChange: fn(),
  },
  argTypes: {
    options: {
      control: 'object',
      description: 'List of radio button options',
    },
    selectedValue: {
      control: 'text',
      description: 'Currently selected value',
    },
    inputTriggerValue: {
      control: 'text',
      description: 'Value that triggers input display',
    },
    showInput: {
      control: 'boolean',
      description: 'Show text input field when trigger value selected',
    },
    inputPlaceholder: {
      control: 'text',
      description: 'Input placeholder text',
    },
    showDivider: {
      control: 'boolean',
      description: 'Show divider between items',
    },
    containerBorderRadius: {
      control: 'number',
      description: 'Container border radius',
    },
  },
} satisfies Meta<typeof SpiritualIdentity>;

export default meta;

type Story = StoryObj<typeof meta>;

// Faith Status with Input (Other selected)
export const FaithStatusWithOther: Story = {
  args: {
    selectedValue: 'other',
    inputTriggerValue: 'other',
    options: [
      { label: 'Unbeliever', value: 'unbeliever' },
      { label: 'Baby Christian', value: 'baby-christian' },
      { label: 'Lukewarm', value: 'lukewarm' },
      { label: 'Coming back to faith', value: 'coming-back' },
      { label: 'Longtime Believer', value: 'longtime-believer' },
      { label: 'Other', value: 'other' },
    ],
    showInput: true,
    inputPlaceholder: 'Placeholder text',
  },
};

// Faith Status without Other selected (no input shown)
export const FaithStatusNoInput: Story = {
  args: {
    selectedValue: 'baby-christian',
    inputTriggerValue: 'other',
    options: [
      { label: 'Unbeliever', value: 'unbeliever' },
      { label: 'Baby Christian', value: 'baby-christian' },
      { label: 'Lukewarm', value: 'lukewarm' },
      { label: 'Coming back to faith', value: 'coming-back' },
      { label: 'Longtime Believer', value: 'longtime-believer' },
      { label: 'Other', value: 'other' },
    ],
    showInput: true,
    inputPlaceholder: 'Placeholder text',
  },
};

// Basic Example with Other
export const BasicWithOther: Story = {
  args: {
    selectedValue: 'other',
    inputTriggerValue: 'other',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Other', value: 'other' },
    ],
    showInput: true,
    inputPlaceholder: 'Please specify...',
  },
};

// Gender with Other Option
export const GenderWithOther: Story = {
  args: {
    selectedValue: 'other',
    inputTriggerValue: 'other',
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' },
    ],
    showInput: true,
    inputPlaceholder: 'Please describe...',
  },
};

// Custom Trigger Value
export const CustomTriggerValue: Story = {
  args: {
    selectedValue: 'custom',
    inputTriggerValue: 'custom',
    options: [
      { label: 'Predefined 1', value: 'predefined1' },
      { label: 'Predefined 2', value: 'predefined2' },
      { label: 'Custom option', value: 'custom' },
    ],
    showInput: true,
    inputPlaceholder: 'Enter custom value...',
  },
};

// No Input Shown
export const NoInputShown: Story = {
  args: {
    selectedValue: 'option1',
    inputTriggerValue: 'other',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Other', value: 'other' },
    ],
    showInput: true,
    inputPlaceholder: 'Placeholder text',
  },
};

// Custom Colors with Input
export const CustomColorsWithInput: Story = {
  args: {
    selectedValue: 'other',
    inputTriggerValue: 'other',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Other', value: 'other' },
    ],
    showInput: true,
    inputPlaceholder: 'Custom colors',
    selectedColor: '#4CAF50',
    unselectedColor: 'rgba(76, 175, 80, 0.3)',
    borderColor: 'rgba(76, 175, 80, 0.5)',
    containerBorderColor: 'rgba(76, 175, 80, 0.5)',
  },
};

// Interactive - Faith Status
export const InteractiveFaithStatus = () => {
  const [selectedValue, setSelectedValue] = useState('other');
  const [inputValue, setInputValue] = useState('');

  return (
    <SpiritualIdentity
      selectedValue={selectedValue}
      inputValue={inputValue}
      inputTriggerValue="other"
      options={[
        { label: 'Unbeliever', value: 'unbeliever' },
        { label: 'Baby Christian', value: 'baby-christian' },
        { label: 'Lukewarm', value: 'lukewarm' },
        { label: 'Coming back to faith', value: 'coming-back' },
        { label: 'Longtime Believer', value: 'longtime-believer' },
        { label: 'Other', value: 'other' },
      ]}
      inputPlaceholder="Placeholder text"
      onValueChange={(value, label) => {
        console.log(`Selected: ${label} (${value})`);
        setSelectedValue(value);
      }}
      onInputChange={(text) => {
        console.log(`Input: ${text}`);
        setInputValue(text);
      }}
    />
  );
};

// Interactive - Gender Selection
export const InteractiveGenderSelection = () => {
  const [selectedValue, setSelectedValue] = useState('male');
  const [inputValue, setInputValue] = useState('');

  return (
    <SpiritualIdentity
      selectedValue={selectedValue}
      inputValue={inputValue}
      inputTriggerValue="other"
      options={[
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
        { label: 'Prefer not to say', value: 'prefer-not' },
      ]}
      inputPlaceholder="Please describe..."
      onValueChange={(value) => setSelectedValue(value)}
      onInputChange={(text) => setInputValue(text)}
    />
  );
};

// Interactive - Reason Selection
export const InteractiveReasonSelection = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);
  const [inputValue, setInputValue] = useState('');

  return (
    <SpiritualIdentity
      selectedValue={selectedValue}
      inputValue={inputValue}
      inputTriggerValue="other"
      options={[
        { label: 'Price', value: 'price' },
        { label: 'Quality', value: 'quality' },
        { label: 'Service', value: 'service' },
        { label: 'Location', value: 'location' },
        { label: 'Other reason', value: 'other' },
      ]}
      inputPlaceholder="Please specify your reason..."
      onValueChange={(value, label) => {
        console.log(`Selected: ${label}`);
        setSelectedValue(value);
      }}
      onInputChange={(text) => setInputValue(text)}
    />
  );
};
