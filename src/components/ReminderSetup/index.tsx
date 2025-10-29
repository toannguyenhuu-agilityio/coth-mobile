import { memo, ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle, Text, TouchableOpacity } from 'react-native';

export interface ReminderSetupProps {
  /** Title text */
  title?: string;
  /** Description text */
  description?: string;
  /** Time picker component */
  timePicker?: ReactNode;
  /** Save button text */
  saveButtonText?: string;
  /** Cancel button text */
  cancelButtonText?: string;
  /** On save handler */
  onSave?: () => void;
  /** On cancel handler */
  onCancel?: () => void;
  /** Background color */
  backgroundColor?: string;
  /** Title color */
  titleColor?: string;
  /** Description color */
  descriptionColor?: string;
  /** Description background color */
  descriptionBackgroundColor?: string;
  /** Description border radius */
  descriptionBorderRadius?: number;
  /** Save button background color */
  saveButtonBackgroundColor?: string;
  /** Save button text color */
  saveButtonTextColor?: string;
  /** Cancel button background color */
  cancelButtonBackgroundColor?: string;
  /** Cancel button text color */
  cancelButtonTextColor?: string;
  /** Button border radius */
  buttonBorderRadius?: number;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** Reminder setup component with time picker and action buttons */
export const ReminderSetup = memo<ReminderSetupProps>(
  ({
    title = 'Never miss a day of devotion',
    description = 'Set a reminder so you never miss the Daily Devotion and lose your streak.',
    timePicker,
    saveButtonText = 'Save',
    cancelButtonText = 'Cancel',
    onSave,
    onCancel,
    backgroundColor = '#1E1E1E',
    titleColor = '#FFFFFF',
    descriptionColor = 'rgba(255, 255, 255, 0.8)',
    descriptionBackgroundColor = 'rgba(255, 255, 255, 0.1)',
    descriptionBorderRadius = 12,
    saveButtonBackgroundColor = 'rgba(255, 255, 255, 0.1)',
    saveButtonTextColor = '#FFFFFF',
    cancelButtonBackgroundColor = 'rgba(255, 255, 255, 0.05)',
    cancelButtonTextColor = '#FFFFFF',
    buttonBorderRadius = 12,
    style,
    testID = 'reminder-setup',
  }) => {
    return (
      <View style={[styles.container, { backgroundColor }, style]} testID={testID}>
        {/* Title */}
        {title && (
          <Text style={[styles.title, { color: titleColor }]} testID={`${testID}-title`}>
            {title}
          </Text>
        )}

        {/* Description */}
        {description && (
          <View
            style={[
              styles.descriptionContainer,
              {
                backgroundColor: descriptionBackgroundColor,
                borderRadius: descriptionBorderRadius,
              },
            ]}
            testID={`${testID}-description-container`}
          >
            <Text
              style={[styles.description, { color: descriptionColor }]}
              testID={`${testID}-description`}
            >
              {description}
            </Text>
          </View>
        )}

        {/* Time Picker */}
        {timePicker && (
          <View style={styles.timePickerContainer} testID={`${testID}-time-picker`}>
            {timePicker}
          </View>
        )}

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          {/* Save Button */}
          <TouchableOpacity
            onPress={onSave}
            activeOpacity={0.8}
            style={[
              styles.button,
              {
                backgroundColor: saveButtonBackgroundColor,
                borderRadius: buttonBorderRadius,
              },
            ]}
            testID={`${testID}-save-button`}
          >
            <Text style={[styles.buttonText, { color: saveButtonTextColor }]}>
              {saveButtonText}
            </Text>
          </TouchableOpacity>

          {/* Cancel Button */}
          <TouchableOpacity
            onPress={onCancel}
            activeOpacity={0.8}
            style={[
              styles.button,
              {
                backgroundColor: cancelButtonBackgroundColor,
                borderRadius: buttonBorderRadius,
              },
            ]}
            testID={`${testID}-cancel-button`}
          >
            <Text style={[styles.buttonText, { color: cancelButtonTextColor }]}>
              {cancelButtonText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  },
);

ReminderSetup.displayName = 'ReminderSetup';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 24,
  },
  title: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 36,
  },
  descriptionContainer: {
    padding: 16,
  },
  description: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  timePickerContainer: {
    marginVertical: 8,
  },
  buttonContainer: {
    gap: 12,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
  },
});
