import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Stepper } from './index';
import { Button } from '../Button';

const meta = {
  title: 'Components/Stepper',
  component: Stepper,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16, backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    steps: {
      control: 'number',
      description: 'Total number of steps',
    },
    currentStep: {
      control: 'number',
      description: 'Current active step (0-indexed)',
    },
    completedColor: {
      control: 'color',
      description: 'Completed step color',
    },
    currentColor: {
      control: 'color',
      description: 'Current step color',
    },
    incompleteColor: {
      control: 'color',
      description: 'Incomplete step color',
    },
    stepHeight: {
      control: 'number',
      description: 'Step height',
    },
    gap: {
      control: 'number',
      description: 'Gap between steps',
    },
  },
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

// Basic States
export const FirstStep: Story = {
  args: {
    steps: 5,
    currentStep: 0,
  },
};

export const SecondStep: Story = {
  args: {
    steps: 5,
    currentStep: 1,
  },
};

export const MiddleStep: Story = {
  args: {
    steps: 5,
    currentStep: 2,
  },
};

export const LastStep: Story = {
  args: {
    steps: 5,
    currentStep: 4,
  },
};

export const Completed: Story = {
  args: {
    steps: 5,
    currentStep: 5,
  },
};

// Different Step Counts
export const ThreeSteps: Story = {
  args: {
    steps: 3,
    currentStep: 1,
  },
};

export const SevenSteps: Story = {
  args: {
    steps: 7,
    currentStep: 3,
  },
};

export const TenSteps: Story = {
  args: {
    steps: 10,
    currentStep: 5,
  },
};

// Custom Heights
export const ThinStepper: Story = {
  args: {
    steps: 5,
    currentStep: 2,
    stepHeight: 2,
  },
};

export const ThickStepper: Story = {
  args: {
    steps: 5,
    currentStep: 2,
    stepHeight: 8,
  },
};

// Custom Gaps
export const NoGap: Story = {
  args: {
    steps: 5,
    currentStep: 2,
    gap: 0,
  },
};

export const LargeGap: Story = {
  args: {
    steps: 5,
    currentStep: 2,
    gap: 12,
  },
};

// Custom Colors
export const CustomColors: Story = {
  args: {
    steps: 5,
    currentStep: 2,
    completedColor: '#4CAF50',
    currentColor: '#FFC107',
    incompleteColor: 'rgba(255, 255, 255, 0.1)',
  },
};

export const BlueTheme: Story = {
  args: {
    steps: 5,
    currentStep: 2,
    completedColor: '#2196F3',
    currentColor: '#03A9F4',
    incompleteColor: 'rgba(33, 150, 243, 0.2)',
  },
};

// Interactive Example
export const Interactive: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = 5;

    const handleNext = () => {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      }
    };

    const handlePrevious = () => {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
    };

    const handleReset = () => {
      setCurrentStep(0);
    };

    return (
      <View style={styles.interactiveContainer}>
        <Text style={styles.stepText}>
          Step {currentStep + 1} of {totalSteps}
        </Text>
        <Stepper steps={totalSteps} currentStep={currentStep} />
        <View style={styles.buttonContainer}>
          <Button
            label="Previous"
            onPress={handlePrevious}
            disabled={currentStep === 0}
            size="small"
            variant="secondary"
          />
          <Button
            label="Next"
            onPress={handleNext}
            disabled={currentStep >= totalSteps}
            size="small"
            variant="primary"
          />
          <Button label="Reset" onPress={handleReset} size="small" variant="link" />
        </View>
      </View>
    );
  },
};

// Multi-Step Form Example
export const MultiStepForm: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = ['Personal Info', 'Address', 'Payment', 'Review', 'Complete'];

    return (
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Registration Form</Text>

        <Stepper steps={steps.length} currentStep={currentStep} />

        <View style={styles.stepInfoContainer}>
          <Text style={styles.currentStepTitle}>{steps[currentStep]}</Text>
          <Text style={styles.stepCounter}>
            Step {currentStep + 1} of {steps.length}
          </Text>
        </View>

        <View style={styles.formContent}>
          <Text style={styles.formContentText}>
            {currentStep === 0 && 'Enter your personal information'}
            {currentStep === 1 && 'Enter your address details'}
            {currentStep === 2 && 'Enter payment information'}
            {currentStep === 3 && 'Review your information'}
            {currentStep === 4 && 'Registration complete!'}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          {currentStep > 0 && currentStep < steps.length && (
            <Button
              label="Back"
              onPress={() => setCurrentStep(currentStep - 1)}
              variant="secondary"
            />
          )}
          {currentStep < steps.length - 1 && (
            <Button
              label="Continue"
              onPress={() => setCurrentStep(currentStep + 1)}
              variant="primary"
            />
          )}
          {currentStep === steps.length - 1 && (
            <Button label="Start Over" onPress={() => setCurrentStep(0)} variant="primary" />
          )}
        </View>
      </View>
    );
  },
};

// Onboarding Example
export const OnboardingExample: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = 4;

    const content = [
      { title: 'Welcome', description: 'Welcome to our app!' },
      { title: 'Features', description: 'Discover amazing features' },
      { title: 'Setup', description: 'Set up your preferences' },
      { title: 'Ready', description: "You're all set!" },
    ];

    return (
      <View style={styles.onboardingContainer}>
        <Stepper steps={totalSteps} currentStep={currentStep} stepHeight={6} />

        <View style={styles.onboardingContent}>
          <Text style={styles.onboardingTitle}>{content[currentStep].title}</Text>
          <Text style={styles.onboardingDescription}>{content[currentStep].description}</Text>
        </View>

        <View style={styles.buttonContainer}>
          {currentStep < totalSteps - 1 ? (
            <Button
              label={currentStep === 0 ? 'Get Started' : 'Next'}
              onPress={() => setCurrentStep(currentStep + 1)}
              variant="primary"
            />
          ) : (
            <Button label="Finish" onPress={() => setCurrentStep(0)} variant="primary" />
          )}
          {currentStep > 0 && currentStep < totalSteps - 1 && (
            <Button label="Skip" onPress={() => setCurrentStep(totalSteps - 1)} variant="link" />
          )}
        </View>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  interactiveContainer: {
    gap: 16,
  },
  stepText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  formContainer: {
    gap: 20,
  },
  formTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  stepInfoContainer: {
    alignItems: 'center',
    gap: 4,
  },
  currentStepTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  stepCounter: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
  },
  formContent: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 8,
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContentText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
    textAlign: 'center',
  },
  onboardingContainer: {
    gap: 32,
  },
  onboardingContent: {
    alignItems: 'center',
    gap: 12,
    paddingVertical: 40,
  },
  onboardingTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
  },
  onboardingDescription: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center',
  },
});
