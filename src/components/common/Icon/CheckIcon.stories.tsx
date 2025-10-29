import type { Meta, StoryObj } from '@storybook/react';
import { View, Text, StyleSheet } from 'react-native';

import { CheckIcon } from './CheckIcon';

const meta = {
  title: 'Components/CheckIcon',
  component: CheckIcon,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16, backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'number',
      description: 'Icon size',
    },
    checkColor: {
      control: 'color',
      description: 'Check mark color',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color',
    },
    borderColor: {
      control: 'color',
      description: 'Border color',
    },
    borderWidth: {
      control: 'number',
      description: 'Border width',
    },
  },
} satisfies Meta<typeof CheckIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default (like ProgressBar completion icon)
export const Default: Story = {
  args: {},
};

// Different Sizes
export const Small: Story = {
  args: {
    size: 16,
  },
};

export const Medium: Story = {
  args: {
    size: 24,
  },
};

export const Large: Story = {
  args: {
    size: 32,
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 48,
  },
};

// Custom Colors
export const GreenCheck: Story = {
  args: {
    size: 24,
    checkColor: '#FFFFFF',
    backgroundColor: '#4CAF50',
  },
};

export const BlueCheck: Story = {
  args: {
    size: 24,
    checkColor: '#FFFFFF',
    backgroundColor: '#2196F3',
  },
};

export const RedCheck: Story = {
  args: {
    size: 24,
    checkColor: '#FFFFFF',
    backgroundColor: '#E94057',
  },
};

export const TealCheck: Story = {
  args: {
    size: 24,
    checkColor: '#7099A7',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
};

// With Border
export const WithBorder: Story = {
  args: {
    size: 24,
    backgroundColor: '#FFFFFF',
    checkColor: '#4CAF50',
    borderColor: '#4CAF50',
    borderWidth: 2,
  },
};

export const WithDarkBorder: Story = {
  args: {
    size: 24,
    backgroundColor: 'transparent',
    checkColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 2,
  },
};

// Transparent Background
export const TransparentBackground: Story = {
  args: {
    size: 24,
    backgroundColor: 'transparent',
    checkColor: '#4CAF50',
  },
};

// Size Comparison
export const SizeComparison: Story = {
  render: () => {
    const sizes = [12, 16, 20, 24, 32, 40, 48];

    return (
      <View style={styles.sizeContainer}>
        {sizes.map((size) => (
          <View key={size} style={styles.sizeItem}>
            <CheckIcon size={size} />
            <Text style={styles.sizeLabel}>{size}px</Text>
          </View>
        ))}
      </View>
    );
  },
};

// Color Variations
export const ColorVariations: Story = {
  render: () => {
    const variations = [
      { bg: '#4CAF50', check: '#FFFFFF', label: 'Green' },
      { bg: '#2196F3', check: '#FFFFFF', label: 'Blue' },
      { bg: '#E94057', check: '#FFFFFF', label: 'Red' },
      { bg: '#FF9800', check: '#FFFFFF', label: 'Orange' },
      { bg: '#7099A7', check: '#FFFFFF', label: 'Teal' },
      { bg: 'rgba(255, 255, 255, 0.9)', check: '#7099A7', label: 'Default' },
    ];

    return (
      <View style={styles.colorContainer}>
        {variations.map((v, idx) => (
          <View key={idx} style={styles.colorItem}>
            <CheckIcon size={32} backgroundColor={v.bg} checkColor={v.check} />
            <Text style={styles.colorLabel}>{v.label}</Text>
          </View>
        ))}
      </View>
    );
  },
};

// In Context Examples
export const InProgressBarContext: Story = {
  render: () => {
    return (
      <View style={styles.contextContainer}>
        <Text style={styles.contextTitle}>Progress Bar with Completion Icon</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill}>
            <CheckIcon size={16} />
          </View>
        </View>
      </View>
    );
  },
};

export const InTaskList: Story = {
  render: () => {
    const tasks = [
      { text: 'Complete profile setup', done: true },
      { text: 'Verify email address', done: true },
      { text: 'Add payment method', done: false },
      { text: 'Invite team members', done: false },
    ];

    return (
      <View style={styles.taskContainer}>
        <Text style={styles.taskTitle}>Task List</Text>
        {tasks.map((task, idx) => (
          <View key={idx} style={styles.taskItem}>
            <View style={styles.checkContainer}>
              {task.done ? (
                <CheckIcon size={20} backgroundColor="#4CAF50" checkColor="#FFFFFF" />
              ) : (
                <View style={styles.uncheckedBox} />
              )}
            </View>
            <Text style={[styles.taskText, task.done && styles.taskTextDone]}>{task.text}</Text>
          </View>
        ))}
      </View>
    );
  },
};

export const InNotifications: Story = {
  render: () => {
    const notifications = [
      { text: 'Profile updated successfully', type: 'success' },
      { text: 'Payment processed', type: 'success' },
      { text: 'Email verified', type: 'success' },
    ];

    return (
      <View style={styles.notifContainer}>
        <Text style={styles.notifTitle}>Success Notifications</Text>
        {notifications.map((notif, idx) => (
          <View key={idx} style={styles.notifItem}>
            <CheckIcon size={24} backgroundColor="#4CAF50" checkColor="#FFFFFF" />
            <Text style={styles.notifText}>{notif.text}</Text>
          </View>
        ))}
      </View>
    );
  },
};

const styles = StyleSheet.create({
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
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  colorItem: {
    alignItems: 'center',
    gap: 8,
  },
  colorLabel: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
  },
  contextContainer: {
    gap: 12,
  },
  contextTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    overflow: 'hidden',
  },
  progressFill: {
    width: '100%',
    height: '100%',
    backgroundColor: '#7099A7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 4,
  },
  taskContainer: {
    gap: 12,
  },
  taskTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 8,
  },
  checkContainer: {
    width: 20,
    height: 20,
  },
  uncheckedBox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  taskText: {
    color: '#FFFFFF',
    fontSize: 14,
    flex: 1,
  },
  taskTextDone: {
    textDecorationLine: 'line-through',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  notifContainer: {
    gap: 12,
  },
  notifTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  notifItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#4CAF50',
  },
  notifText: {
    color: '#FFFFFF',
    fontSize: 14,
    flex: 1,
  },
});
