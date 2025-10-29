import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

export interface StepperProps {
  /** Total number of steps */
  steps: number;
  /** Current active step (0-indexed) */
  currentStep: number;
  /** Completed step color */
  completedColor?: string;
  /** Current step color */
  currentColor?: string;
  /** Incomplete step color */
  incompleteColor?: string;
  /** Step height */
  stepHeight?: number;
  /** Gap between steps */
  gap?: number;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** Stepper component for displaying progress through multiple steps */
export const Stepper = ({
  steps,
  currentStep,
  completedColor = '#E94057',
  currentColor = '#7099A7',
  incompleteColor = 'rgba(255, 255, 255, 0.2)',
  stepHeight = 4,
  gap = 4,
  style,
  testID = 'stepper',
}: StepperProps) => {
  const getStepColor = (index: number) => {
    if (index < currentStep) {
      return completedColor;
    } else if (index === currentStep) {
      return currentColor;
    } else {
      return incompleteColor;
    }
  };

  return (
    <View style={[styles.container, { gap }, style]} testID={testID}>
      {Array.from({ length: steps }, (_, index) => (
        <View
          key={index}
          style={[
            styles.step,
            {
              backgroundColor: getStepColor(index),
              height: stepHeight,
              flex: 1,
            },
          ]}
          testID={`${testID}-step-${index}`}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  step: {
    borderRadius: 2,
  },
});
