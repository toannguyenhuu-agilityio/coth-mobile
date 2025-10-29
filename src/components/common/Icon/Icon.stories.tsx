import type { Meta, StoryObj } from '@storybook/react';
import { View, Text, StyleSheet } from 'react-native';

import { Icon, IconName } from './index';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16, backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: [
        'check',
        'close',
        'plus',
        'minus',
        'arrow-up',
        'arrow-down',
        'arrow-left',
        'arrow-right',
        'chevron-up',
        'chevron-down',
        'chevron-left',
        'chevron-right',
        'heart',
        'star',
        'info',
        'warning',
        'error',
        'success',
        'play',
        'pause',
        'refresh',
        'search',
        'menu',
        'home',
        'user',
        'settings',
      ],
      description: 'Built-in icon name',
    },
    size: {
      control: 'number',
      description: 'Icon size',
    },
    color: {
      control: 'color',
      description: 'Icon color',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color',
    },
    borderRadius: {
      control: 'number',
      description: 'Border radius',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

// Basic Icons
export const Check: Story = {
  args: {
    name: 'check',
    size: 24,
  },
};

export const Close: Story = {
  args: {
    name: 'close',
    size: 24,
  },
};

export const Plus: Story = {
  args: {
    name: 'plus',
    size: 24,
  },
};

export const Minus: Story = {
  args: {
    name: 'minus',
    size: 24,
  },
};

// Arrow Icons
export const ArrowUp: Story = {
  args: {
    name: 'arrow-up',
    size: 24,
  },
};

export const ArrowDown: Story = {
  args: {
    name: 'arrow-down',
    size: 24,
  },
};

export const ArrowLeft: Story = {
  args: {
    name: 'arrow-left',
    size: 24,
  },
};

export const ArrowRight: Story = {
  args: {
    name: 'arrow-right',
    size: 24,
  },
};

// Chevron Icons
export const ChevronUp: Story = {
  args: {
    name: 'chevron-up',
    size: 24,
  },
};

export const ChevronDown: Story = {
  args: {
    name: 'chevron-down',
    size: 24,
  },
};

// Status Icons
export const Success: Story = {
  args: {
    name: 'success',
    size: 24,
    color: '#4CAF50',
  },
};

export const Error: Story = {
  args: {
    name: 'error',
    size: 24,
    color: '#E94057',
  },
};

export const Warning: Story = {
  args: {
    name: 'warning',
    size: 24,
    color: '#FF9800',
  },
};

export const Info: Story = {
  args: {
    name: 'info',
    size: 24,
    color: '#2196F3',
  },
};

// Special Icons
export const Heart: Story = {
  args: {
    name: 'heart',
    size: 24,
    color: '#E94057',
  },
};

export const Star: Story = {
  args: {
    name: 'star',
    size: 24,
    color: '#FFC107',
  },
};

export const Play: Story = {
  args: {
    name: 'play',
    size: 24,
  },
};

export const Pause: Story = {
  args: {
    name: 'pause',
    size: 24,
  },
};

// Different Sizes
export const SmallIcon: Story = {
  args: {
    name: 'check',
    size: 16,
  },
};

export const MediumIcon: Story = {
  args: {
    name: 'check',
    size: 24,
  },
};

export const LargeIcon: Story = {
  args: {
    name: 'check',
    size: 32,
  },
};

export const ExtraLargeIcon: Story = {
  args: {
    name: 'check',
    size: 48,
  },
};

// With Background
export const WithBackground: Story = {
  args: {
    name: 'check',
    size: 24,
    backgroundColor: '#7099A7',
    borderRadius: 12,
  },
};

export const CircularBackground: Story = {
  args: {
    name: 'check',
    size: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: '#7099A7',
    borderRadius: 24,
  },
};

export const SquareBackground: Story = {
  args: {
    name: 'settings',
    size: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
  },
};

// Custom Colors
export const RedIcon: Story = {
  args: {
    name: 'heart',
    size: 24,
    color: '#E94057',
  },
};

export const GreenIcon: Story = {
  args: {
    name: 'check',
    size: 24,
    color: '#4CAF50',
  },
};

export const BlueIcon: Story = {
  args: {
    name: 'info',
    size: 24,
    color: '#2196F3',
  },
};

// All Icons Showcase
export const AllIcons: Story = {
  render: () => {
    const iconNames: IconName[] = [
      'check',
      'close',
      'plus',
      'minus',
      'arrow-up',
      'arrow-down',
      'arrow-left',
      'arrow-right',
      'chevron-up',
      'chevron-down',
      'chevron-left',
      'chevron-right',
      'heart',
      'star',
      'info',
      'warning',
      'error',
      'success',
      'play',
      'pause',
      'refresh',
      'search',
      'menu',
      'home',
      'user',
      'settings',
    ];

    return (
      <View style={styles.grid}>
        {iconNames.map((iconName) => (
          <View key={iconName} style={styles.iconItem}>
            <Icon name={iconName} size={32} />
            <Text style={styles.iconLabel}>{iconName}</Text>
          </View>
        ))}
      </View>
    );
  },
};

// Size Comparison
export const SizeComparison: Story = {
  render: () => {
    const sizes = [12, 16, 20, 24, 32, 40, 48, 64];

    return (
      <View style={styles.sizeContainer}>
        {sizes.map((size) => (
          <View key={size} style={styles.sizeItem}>
            <Icon name="check" size={size} />
            <Text style={styles.sizeLabel}>{size}px</Text>
          </View>
        ))}
      </View>
    );
  },
};

// Status Icons with Background
export const StatusIcons: Story = {
  render: () => {
    const statuses = [
      { name: 'success' as IconName, color: '#4CAF50', label: 'Success' },
      { name: 'error' as IconName, color: '#E94057', label: 'Error' },
      { name: 'warning' as IconName, color: '#FF9800', label: 'Warning' },
      { name: 'info' as IconName, color: '#2196F3', label: 'Info' },
    ];

    return (
      <View style={styles.statusContainer}>
        {statuses.map((status) => (
          <View key={status.name} style={styles.statusItem}>
            <Icon
              name={status.name}
              size={32}
              color={status.color}
              backgroundColor={`${status.color}33`}
              borderRadius={20}
            />
            <Text style={styles.statusLabel}>{status.label}</Text>
          </View>
        ))}
      </View>
    );
  },
};

// Custom Icon
export const CustomIcon: Story = {
  render: () => {
    return <Icon size={32}>{<Text style={{ fontSize: 32 }}>🚀</Text>}</Icon>;
  },
};

// Icon with Progress (like ProgressBar)
export const ProgressIcon: Story = {
  render: () => {
    return (
      <View style={styles.progressIconContainer}>
        <Icon
          name="check"
          size={16}
          color="#7099A7"
          backgroundColor="rgba(255, 255, 255, 0.9)"
          borderRadius={16}
        />
      </View>
    );
  },
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  iconItem: {
    alignItems: 'center',
    gap: 8,
    width: 80,
  },
  iconLabel: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 11,
    textAlign: 'center',
  },
  sizeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
    alignItems: 'flex-end',
  },
  sizeItem: {
    alignItems: 'center',
    gap: 8,
  },
  sizeLabel: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
  },
  statusContainer: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-around',
  },
  statusItem: {
    alignItems: 'center',
    gap: 8,
  },
  statusLabel: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  progressIconContainer: {
    padding: 20,
  },
});
