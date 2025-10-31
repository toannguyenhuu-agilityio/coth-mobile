import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './index';
import { View } from 'react-native';

const TextFieldMeta: Meta<typeof TextField> = {
  title: 'Common/TextField',
  component: TextField,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },

    hasError: {
      control: { type: 'boolean' },
    },
  },
  args: {
    placeholder: 'Enter text',
    size: 'large',
    hasError: false,
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, backgroundColor: 'rgba(83, 85, 85, 1)' }}>
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
