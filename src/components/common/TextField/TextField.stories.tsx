import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './index';
import { View } from 'react-native';

const TextFieldMeta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    showLabel: {
      control: { type: 'boolean' },
    },
    showHelperText: {
      control: { type: 'boolean' },
    },
    hasError: {
      control: { type: 'boolean' },
    },
  },
  args: {
    placeholder: 'Enter text',
    size: 'large',
    showLabel: true,
    showHelperText: false,
    hasError: false,
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
};

export default TextFieldMeta;

export const Default: StoryObj<typeof TextField> = {
  args: {
    placeholder: 'Email',
  },
};

export const WithLabel: StoryObj<typeof TextField> = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    showLabel: true,
  },
};

export const WithHelperText: StoryObj<typeof TextField> = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    helperText: 'We will never share your email',
    showHelperText: true,
  },
};

export const WithError: StoryObj<typeof TextField> = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    errorText: 'Email is required',
    hasError: true,
  },
};

export const Small: StoryObj<typeof TextField> = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    size: 'small',
  },
};

export const Medium: StoryObj<typeof TextField> = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    size: 'medium',
  },
};

export const Large: StoryObj<typeof TextField> = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    size: 'large',
  },
};
