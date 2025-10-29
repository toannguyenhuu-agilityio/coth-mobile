import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './index';
import { View } from 'react-native';
import { useState } from 'react';

const meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    selected: {
      control: 'boolean',
      description: 'Selected state',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
    helperText: {
      control: 'text',
      description: 'Helper text below radio button',
    },
    errorText: {
      control: 'text',
      description: 'Error text',
    },
    hasError: {
      control: 'boolean',
      description: 'Error state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant',
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Label position',
    },
  },
  args: {
    selected: false,
    label: 'Radio Button Label',
    disabled: false,
    hasError: false,
    size: 'medium',
    labelPosition: 'right',
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 24, backgroundColor: '#000000' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Radio button option',
  },
};

export const Selected: Story = {
  args: {
    label: 'Selected option',
    selected: true,
  },
};

export const Unselected: Story = {
  args: {
    label: 'Unselected option',
    selected: false,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Payment method',
    helperText: 'This option is recommended',
  },
};

export const WithError: Story = {
  args: {
    label: 'Invalid option',
    hasError: true,
    errorText: 'This option is not available',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
  },
};

export const DisabledSelected: Story = {
  args: {
    label: 'Disabled selected',
    selected: true,
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small radio button',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium radio button',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    label: 'Large radio button',
    size: 'large',
  },
};

export const LabelLeft: Story = {
  args: {
    label: 'Label on the left',
    labelPosition: 'left',
  },
};

export const LabelRight: Story = {
  args: {
    label: 'Label on the right',
    labelPosition: 'right',
  },
};

export const InteractiveGroup: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState('option1');

    return (
      <View style={{ gap: 16 }}>
        <RadioButton
          label="Option 1"
          value="option1"
          selected={selectedValue === 'option1'}
          onSelect={(value) => setSelectedValue(value as string)}
        />
        <RadioButton
          label="Option 2"
          value="option2"
          selected={selectedValue === 'option2'}
          onSelect={(value) => setSelectedValue(value as string)}
        />
        <RadioButton
          label="Option 3"
          value="option3"
          selected={selectedValue === 'option3'}
          onSelect={(value) => setSelectedValue(value as string)}
        />
        <RadioButton
          label="Option 4 (Disabled)"
          value="option4"
          disabled
          selected={selectedValue === 'option4'}
          onSelect={(value) => setSelectedValue(value as string)}
        />
      </View>
    );
  },
};
