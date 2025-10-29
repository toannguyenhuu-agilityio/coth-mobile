import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import GuidedChatInput from '../GuidedChatInput'; // adjust path if needed

const meta: Meta<typeof GuidedChatInput> = {
  title: 'Components/GuidedChatInput',
  component: GuidedChatInput,
  args: {},
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'center' }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof GuidedChatInput>;

export const Default: Story = {
  args: {},
};
