import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { ProgressBar } from './index';
import { Button } from '../Button';

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16, backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value (0-100)',
    },
    height: {
      control: 'number',
      description: 'Progress bar height',
    },
    progressColor: {
      control: 'color',
      description: 'Filled/progress color',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background/track color',
    },
    borderRadius: {
      control: 'number',
      description: 'Border radius',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show completion icon',
    },
    showProgressText: {
      control: 'boolean',
      description: 'Show progress text',
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

// Basic Progress States
export const Empty: Story = {
  args: {
    progress: 0,
  },
};

export const Quarter: Story = {
  args: {
    progress: 25,
  },
};

export const Half: Story = {
  args: {
    progress: 50,
  },
};

export const ThreeQuarters: Story = {
  args: {
    progress: 75,
  },
};

export const AlmostComplete: Story = {
  args: {
    progress: 95,
  },
};

export const Complete: Story = {
  args: {
    progress: 100,
  },
};

export const CompleteWithIcon: Story = {
  args: {
    progress: 100,
    showIcon: true,
  },
};

export const CompleteWithIconLarge: Story = {
  args: {
    progress: 100,
    showIcon: true,
    iconSize: 24,
  },
};

export const CompleteWithCustomGap: Story = {
  args: {
    progress: 100,
    showIcon: true,
    iconSize: 20,
    iconGap: 12,
  },
};

export const CompleteNoGap: Story = {
  args: {
    progress: 100,
    showIcon: true,
    iconSize: 16,
    iconGap: 0,
  },
};

// Different Heights
export const Thin: Story = {
  args: {
    progress: 60,
    height: 4,
  },
};

export const Medium: Story = {
  args: {
    progress: 60,
    height: 8,
  },
};

export const Thick: Story = {
  args: {
    progress: 60,
    height: 16,
  },
};

// Custom Colors
export const GreenProgress: Story = {
  args: {
    progress: 70,
    progressColor: '#4CAF50',
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
  },
};

export const RedProgress: Story = {
  args: {
    progress: 40,
    progressColor: '#E94057',
    backgroundColor: 'rgba(233, 64, 87, 0.2)',
  },
};

export const BlueProgress: Story = {
  args: {
    progress: 85,
    progressColor: '#2196F3',
    backgroundColor: 'rgba(33, 150, 243, 0.2)',
  },
};

// With Progress Text
export const WithProgressText: Story = {
  args: {
    progress: 65,
    showProgressText: true,
  },
};

export const CompleteWithText: Story = {
  args: {
    progress: 100,
    showProgressText: true,
    showIcon: true,
  },
};

// Without Icon
export const CompleteWithoutIcon: Story = {
  args: {
    progress: 100,
    showIcon: false,
  },
};

// Different Border Radius
export const SharpCorners: Story = {
  args: {
    progress: 60,
    borderRadius: 0,
  },
};

export const SmallRadius: Story = {
  args: {
    progress: 60,
    borderRadius: 4,
  },
};

export const LargeRadius: Story = {
  args: {
    progress: 60,
    borderRadius: 50,
  },
};

// Interactive Example
export const Interactive: Story = {
  render: () => {
    const [progress, setProgress] = useState(50);

    const handleIncrease = () => {
      setProgress(Math.min(100, progress + 10));
    };

    const handleDecrease = () => {
      setProgress(Math.max(0, progress - 10));
    };

    const handleReset = () => {
      setProgress(0);
    };

    return (
      <View style={styles.interactiveContainer}>
        <Text style={styles.progressValue}>Progress: {progress}%</Text>
        <ProgressBar progress={progress} showIcon={true} />
        <View style={styles.buttonContainer}>
          <Button
            label="-10%"
            onPress={handleDecrease}
            disabled={progress === 0}
            size="small"
            variant="secondary"
          />
          <Button
            label="+10%"
            onPress={handleIncrease}
            disabled={progress === 100}
            size="small"
            variant="primary"
          />
          <Button label="Reset" onPress={handleReset} size="small" variant="link" />
        </View>
      </View>
    );
  },
};

// Animated Progress
export const AnimatedProgress: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 1;
        });
      }, 50);

      return () => clearInterval(interval);
    }, []);

    return (
      <View style={styles.animatedContainer}>
        <Text style={styles.progressValue}>Progress: {progress}%</Text>
        <ProgressBar progress={progress} showIcon={true} />
      </View>
    );
  },
};

// Spiritual Blockers Example (from image)
export const SpiritualBlockersExample: Story = {
  render: () => {
    const progress1 = 100;
    const progress2 = 60;

    return (
      <View style={styles.spiritualContainer}>
        <View style={styles.progressSection}>
          <Text style={styles.label}>Your spiritual blockers</Text>
          <ProgressBar progress={progress1} showIcon={true} />
        </View>

        <View style={styles.progressSection}>
          <Text style={styles.label}>Your spiritual identity</Text>
          <ProgressBar progress={progress2} showIcon={true} />
        </View>
      </View>
    );
  },
};

// Multiple Progress Bars
export const MultipleProgressBars: Story = {
  render: () => {
    const tasks = [
      { name: 'Profile Setup', progress: 100 },
      { name: 'Email Verification', progress: 100 },
      { name: 'Add Friends', progress: 60 },
      { name: 'Complete First Activity', progress: 30 },
      { name: 'Enable Notifications', progress: 0 },
    ];

    return (
      <View style={styles.multipleContainer}>
        <Text style={styles.sectionTitle}>Onboarding Tasks</Text>
        {tasks.map((task) => (
          <View key={task.name} style={styles.taskItem}>
            <Text style={styles.taskName}>{task.name}</Text>
            <ProgressBar progress={task.progress} showIcon={true} height={6} />
            <Text style={styles.taskProgress}>{task.progress}%</Text>
          </View>
        ))}
      </View>
    );
  },
};

// Loading States
export const LoadingStates: Story = {
  render: () => {
    return (
      <View style={styles.loadingContainer}>
        <View style={styles.loadingSection}>
          <Text style={styles.loadingLabel}>Downloading...</Text>
          <ProgressBar progress={45} showProgressText={true} progressColor="#2196F3" />
        </View>

        <View style={styles.loadingSection}>
          <Text style={styles.loadingLabel}>Uploading...</Text>
          <ProgressBar progress={75} showProgressText={true} progressColor="#4CAF50" />
        </View>

        <View style={styles.loadingSection}>
          <Text style={styles.loadingLabel}>Processing...</Text>
          <ProgressBar progress={100} showIcon={true} progressColor="#7099A7" />
        </View>
      </View>
    );
  },
};

// Skill Level Example
export const SkillLevelExample: Story = {
  render: () => {
    const skills = [
      { name: 'Prayer', level: 90, color: '#7099A7' },
      { name: 'Scripture Reading', level: 75, color: '#E94057' },
      { name: 'Fellowship', level: 60, color: '#4CAF50' },
      { name: 'Service', level: 40, color: '#FF9800' },
      { name: 'Evangelism', level: 25, color: '#2196F3' },
    ];

    return (
      <View style={styles.skillContainer}>
        <Text style={styles.sectionTitle}>Spiritual Skills</Text>
        {skills.map((skill) => (
          <View key={skill.name} style={styles.skillItem}>
            <View style={styles.skillHeader}>
              <Text style={styles.skillName}>{skill.name}</Text>
              <Text style={styles.skillLevel}>{skill.level}%</Text>
            </View>
            <ProgressBar
              progress={skill.level}
              showIcon={skill.level === 100}
              progressColor={skill.color}
              backgroundColor={`${skill.color}33`}
            />
          </View>
        ))}
      </View>
    );
  },
};

const styles = StyleSheet.create({
  interactiveContainer: {
    gap: 16,
  },
  progressValue: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
  },
  animatedContainer: {
    gap: 16,
  },
  spiritualContainer: {
    gap: 24,
  },
  progressSection: {
    gap: 8,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  multipleContainer: {
    gap: 16,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  taskItem: {
    gap: 8,
  },
  taskName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  taskProgress: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12,
    textAlign: 'right',
  },
  loadingContainer: {
    gap: 20,
  },
  loadingSection: {
    gap: 8,
  },
  loadingLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  skillContainer: {
    gap: 16,
  },
  skillItem: {
    gap: 8,
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skillName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  skillLevel: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
    fontWeight: '600',
  },
});
