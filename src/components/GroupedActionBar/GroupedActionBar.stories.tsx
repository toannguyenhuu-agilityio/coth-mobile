import type { Meta, StoryObj } from '@storybook/react';

import { View, Text } from 'react-native';
import { fn } from 'storybook/test';

import { GroupedActionBar } from '.';

const meta = {
  title: 'Components/GroupedActionBar',
  component: GroupedActionBar,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16, backgroundColor: '#000', justifyContent: 'center' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: {
    backButton: {
      icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>←</Text>,
      onPress: fn(),
    },
    forwardButton: {
      icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>→</Text>,
      onPress: fn(),
    },
  },
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Background color',
    },
    navigationButtonBackground: {
      control: 'color',
      description: 'Navigation button background',
    },
    actionGroupBackground: {
      control: 'color',
      description: 'Action group background',
    },
    showBackButton: {
      control: 'boolean',
      description: 'Show back button',
    },
    showForwardButton: {
      control: 'boolean',
      description: 'Show forward button',
    },
  },
} satisfies Meta<typeof GroupedActionBar>;

export default meta;

type Story = StoryObj<typeof meta>;

// Example from Image - Full Action Bar
export const FullActionBar: Story = {
  args: {
    backButton: {
      icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>←</Text>,
      onPress: fn(),
      testID: 'back-button',
    },
    actionButtons: [
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>✏️</Text>,
        onPress: fn(),
        testID: 'edit-button',
      },
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>💬</Text>,
        onPress: fn(),
        testID: 'comment-button',
      },
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>↗️</Text>,
        onPress: fn(),
        testID: 'share-button',
      },
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>🎁</Text>,
        onPress: fn(),
        testID: 'gift-button',
      },
    ],
    forwardButton: {
      icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>→</Text>,
      onPress: fn(),
      testID: 'forward-button',
    },
  },
};

// Only Navigation Buttons
export const NavigationOnly: Story = {
  args: {
    backButton: {
      icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>←</Text>,
      onPress: fn(),
    },
    forwardButton: {
      icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>→</Text>,
      onPress: fn(),
    },
    actionButtons: [],
  },
};

// Only Action Buttons
export const ActionsOnly: Story = {
  args: {
    showBackButton: false,
    showForwardButton: false,
    actionButtons: [
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>✏️</Text>,
        onPress: fn(),
      },
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>💬</Text>,
        onPress: fn(),
      },
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>↗️</Text>,
        onPress: fn(),
      },
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>🎁</Text>,
        onPress: fn(),
      },
    ],
  },
};

// With Back Button Only
export const BackButtonOnly: Story = {
  args: {
    backButton: {
      icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>←</Text>,
      onPress: fn(),
    },
    showForwardButton: false,
    actionButtons: [
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>✏️</Text>,
        onPress: fn(),
      },
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>💬</Text>,
        onPress: fn(),
      },
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>↗️</Text>,
        onPress: fn(),
      },
    ],
  },
};

// Social Media Actions
export const SocialMediaActions: Story = {
  args: {
    backButton: {
      icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>←</Text>,
      onPress: fn(),
    },
    actionButtons: [
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>❤️</Text>,
        onPress: fn(),
      },
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>💬</Text>,
        onPress: fn(),
      },
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>🔖</Text>,
        onPress: fn(),
      },
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>↗️</Text>,
        onPress: fn(),
      },
    ],
    forwardButton: {
      icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>→</Text>,
      onPress: fn(),
    },
  },
};

// Media Controls
export const MediaControls: Story = {
  args: {
    backButton: {
      icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>⏮</Text>,
      onPress: fn(),
    },
    actionButtons: [
      {
        icon: <Text style={{ fontSize: 28, color: '#FFFFFF' }}>⏸</Text>,
        onPress: fn(),
      },
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>🔀</Text>,
        onPress: fn(),
      },
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>🔁</Text>,
        onPress: fn(),
      },
    ],
    forwardButton: {
      icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>⏭</Text>,
      onPress: fn(),
    },
  },
};

// Few Actions
export const FewActions: Story = {
  args: {
    backButton: {
      icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>←</Text>,
      onPress: fn(),
    },
    actionButtons: [
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>✏️</Text>,
        onPress: fn(),
      },
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>🗑️</Text>,
        onPress: fn(),
      },
    ],
    forwardButton: {
      icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>→</Text>,
      onPress: fn(),
    },
  },
};

// Many Actions
export const ManyActions: Story = {
  args: {
    backButton: {
      icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>←</Text>,
      onPress: fn(),
    },
    actionButtons: [
      { icon: <Text style={{ fontSize: 20, color: '#FFFFFF' }}>📖</Text>, onPress: fn() },
      { icon: <Text style={{ fontSize: 20, color: '#FFFFFF' }}>✏️</Text>, onPress: fn() },
      { icon: <Text style={{ fontSize: 20, color: '#FFFFFF' }}>💬</Text>, onPress: fn() },
      { icon: <Text style={{ fontSize: 20, color: '#FFFFFF' }}>↗️</Text>, onPress: fn() },
      { icon: <Text style={{ fontSize: 20, color: '#FFFFFF' }}>🎁</Text>, onPress: fn() },
      { icon: <Text style={{ fontSize: 20, color: '#FFFFFF' }}>⚙️</Text>, onPress: fn() },
    ],
    forwardButton: {
      icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>→</Text>,
      onPress: fn(),
    },
  },
};

// Custom Colors - Light Theme
export const LightTheme: Story = {
  args: {
    backgroundColor: '#F5F5F5',
    navigationButtonBackground: 'rgba(0, 0, 0, 0.1)',
    actionGroupBackground: 'rgba(0, 0, 0, 0.1)',
    backButton: {
      icon: <Text style={{ fontSize: 24, color: '#000000' }}>←</Text>,
      onPress: fn(),
    },
    actionButtons: [
      {
        icon: <Text style={{ fontSize: 24, color: '#000000' }}>✏️</Text>,
        onPress: fn(),
      },
      {
        icon: <Text style={{ fontSize: 24, color: '#000000' }}>💬</Text>,
        onPress: fn(),
      },
      {
        icon: <Text style={{ fontSize: 24, color: '#000000' }}>↗️</Text>,
        onPress: fn(),
      },
    ],
    forwardButton: {
      icon: <Text style={{ fontSize: 24, color: '#000000' }}>→</Text>,
      onPress: fn(),
    },
  },
};

// Custom Colors - Purple Theme
export const PurpleTheme: Story = {
  args: {
    navigationButtonBackground: 'rgba(138, 43, 226, 0.3)',
    actionGroupBackground: 'rgba(138, 43, 226, 0.3)',
    backButton: {
      icon: <Text style={{ fontSize: 24, color: '#DA70D6' }}>←</Text>,
      onPress: fn(),
    },
    actionButtons: [
      {
        icon: <Text style={{ fontSize: 24, color: '#DA70D6' }}>✏️</Text>,
        onPress: fn(),
      },
      {
        icon: <Text style={{ fontSize: 24, color: '#DA70D6' }}>💬</Text>,
        onPress: fn(),
      },
      {
        icon: <Text style={{ fontSize: 24, color: '#DA70D6' }}>↗️</Text>,
        onPress: fn(),
      },
      {
        icon: <Text style={{ fontSize: 24, color: '#DA70D6' }}>🎁</Text>,
        onPress: fn(),
      },
    ],
    forwardButton: {
      icon: <Text style={{ fontSize: 24, color: '#DA70D6' }}>→</Text>,
      onPress: fn(),
    },
  },
};

// Solid Background
export const SolidBackground: Story = {
  args: {
    navigationButtonBackground: '#333333',
    actionGroupBackground: '#333333',
    backButton: {
      icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>←</Text>,
      onPress: fn(),
    },
    actionButtons: [
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>✏️</Text>,
        onPress: fn(),
      },
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>💬</Text>,
        onPress: fn(),
      },
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>↗️</Text>,
        onPress: fn(),
      },
    ],
    forwardButton: {
      icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>→</Text>,
      onPress: fn(),
    },
  },
};

// With Disabled Button
export const WithDisabledButton: Story = {
  args: {
    backButton: {
      icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>←</Text>,
      onPress: fn(),
    },
    actionButtons: [
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>✏️</Text>,
        onPress: fn(),
      },
      {
        icon: <Text style={{ fontSize: 24, color: '#666666' }}>💬</Text>,
        onPress: fn(),
        disabled: true,
      },
      {
        icon: <Text style={{ fontSize: 24, color: '#FFFFFF' }}>↗️</Text>,
        onPress: fn(),
      },
    ],
    forwardButton: {
      icon: <Text style={{ fontSize: 24, color: '#666666' }}>→</Text>,
      onPress: fn(),
      disabled: true,
    },
  },
};

// Compact Size
export const CompactSize: Story = {
  args: {
    backButton: {
      icon: <Text style={{ fontSize: 20, color: '#FFFFFF' }}>←</Text>,
      onPress: fn(),
    },
    actionButtons: [
      {
        icon: <Text style={{ fontSize: 20, color: '#FFFFFF' }}>✏️</Text>,
        onPress: fn(),
      },
      {
        icon: <Text style={{ fontSize: 20, color: '#FFFFFF' }}>💬</Text>,
        onPress: fn(),
      },
      {
        icon: <Text style={{ fontSize: 20, color: '#FFFFFF' }}>↗️</Text>,
        onPress: fn(),
      },
    ],
    forwardButton: {
      icon: <Text style={{ fontSize: 20, color: '#FFFFFF' }}>→</Text>,
      onPress: fn(),
    },
    navigationButtonStyle: {
      width: 44,
      height: 44,
      borderRadius: 12,
    },
    actionButtonStyle: {
      width: 36,
      height: 36,
    },
  },
};

// Large Size
export const LargeSize: Story = {
  args: {
    backButton: {
      icon: <Text style={{ fontSize: 32, color: '#FFFFFF' }}>←</Text>,
      onPress: fn(),
    },
    actionButtons: [
      {
        icon: <Text style={{ fontSize: 28, color: '#FFFFFF' }}>✏️</Text>,
        onPress: fn(),
      },
      {
        icon: <Text style={{ fontSize: 28, color: '#FFFFFF' }}>💬</Text>,
        onPress: fn(),
      },
      {
        icon: <Text style={{ fontSize: 28, color: '#FFFFFF' }}>↗️</Text>,
        onPress: fn(),
      },
    ],
    forwardButton: {
      icon: <Text style={{ fontSize: 32, color: '#FFFFFF' }}>→</Text>,
      onPress: fn(),
    },
    navigationButtonStyle: {
      width: 64,
      height: 64,
      borderRadius: 20,
    },
    actionButtonStyle: {
      width: 52,
      height: 52,
    },
  },
};
