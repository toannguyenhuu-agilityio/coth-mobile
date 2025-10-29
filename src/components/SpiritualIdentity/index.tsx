import { useState } from 'react';
import { StyleProp, StyleSheet, TextInputProps, TextStyle, View, ViewStyle } from 'react-native';
import { RadioButtonList } from '../common/RadioButtonGroup';
import { TextField } from '../common/TextField';

export interface RadioButtonOption {
  /** Option label */
  label: string;
  /** Option value/identifier */
  value: string;
  /** Disabled state */
  disabled?: boolean;
}

export interface SpiritualIdentityProps {
  /** List of radio button options */
  options: RadioButtonOption[];
  /** Selected value */
  selectedValue?: string;
  /** Value that triggers input display (e.g., 'other') */
  inputTriggerValue?: string;
  /** Show text input field when trigger value is selected */
  showInput?: boolean;
  /** Input placeholder text */
  inputPlaceholder?: string;
  /** Input value */
  inputValue?: string;
  /** Input change handler */
  onInputChange?: (text: string) => void;
  /** Show divider between items */
  showDivider?: boolean;
  /** Divider color */
  dividerColor?: string;
  /** Radio button size */
  size?: 'small' | 'medium' | 'large';
  /** Selected radio button color */
  selectedColor?: string;
  /** Unselected radio button color */
  unselectedColor?: string;
  /** Radio button border color */
  borderColor?: string;
  /** Container border color */
  containerBorderColor?: string;
  /** Container border width */
  containerBorderWidth?: number;
  /** Container border radius */
  containerBorderRadius?: number;
  /** Container style */
  containerStyle?: StyleProp<ViewStyle>;
  /** List container style */
  listStyle?: StyleProp<ViewStyle>;
  /** Input container style */
  inputContainerStyle?: StyleProp<ViewStyle>;
  /** Input text style */
  inputTextStyle?: StyleProp<TextStyle>;
  /** Additional TextInput props */
  inputProps?: Omit<TextInputProps, 'style' | 'value' | 'onChangeText' | 'placeholder'>;
  /** Change handler - receives selected value and label */
  onValueChange?: (value: string, label: string) => void;
  /** Test ID */
  testID?: string;
}

export const SpiritualIdentity = ({
  options,
  selectedValue,
  inputTriggerValue = 'other',
  showInput = true,
  inputPlaceholder = 'Placeholder text',
  inputValue,
  onInputChange,
  showDivider = true,
  dividerColor = 'rgba(255, 255, 255, 0.1)',
  size = 'medium',
  selectedColor = '#2587A0',
  unselectedColor = 'rgba(255, 255, 255, 0.3)',
  borderColor = 'rgba(255, 255, 255, 0.3)',
  containerBorderColor = 'rgba(255, 255, 255, 0.2)',
  containerBorderWidth = 1,
  containerBorderRadius = 12,
  containerStyle,
  listStyle,
  inputContainerStyle,
  inputProps,
  onValueChange,
  testID = 'radio-button-list-with-input',
}: SpiritualIdentityProps) => {
  const [internalInputValue, setInternalInputValue] = useState('');

  const handleInputChange = (text: string) => {
    if (onInputChange) {
      onInputChange(text);
    } else {
      setInternalInputValue(text);
    }
  };

  const currentInputValue = inputValue !== undefined ? inputValue : internalInputValue;
  const shouldShowInput = showInput && selectedValue === inputTriggerValue;

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: containerBorderColor,
          borderWidth: containerBorderWidth,
          borderRadius: containerBorderRadius,
        },
        containerStyle,
      ]}
      testID={testID}
    >
      <RadioButtonList
        options={options}
        selectedValue={selectedValue}
        showDivider={showDivider}
        dividerColor={dividerColor}
        size={size}
        selectedColor={selectedColor}
        unselectedColor={unselectedColor}
        borderColor={borderColor}
        onValueChange={onValueChange}
        containerStyle={listStyle}
        testID={`${testID}-list`}
      />

      {shouldShowInput && (
        <>
          {options.length > 0 && (
            <View
              style={[styles.divider, { backgroundColor: dividerColor }]}
              testID={`${testID}-input-divider`}
            />
          )}
          <View
            style={[styles.inputContainer, inputContainerStyle]}
            testID={`${testID}-input-container`}
          >
            <TextField
              placeholder={inputPlaceholder}
              placeholderTextColor="rgba(255, 255, 255, 0.4)"
              value={currentInputValue}
              onChangeText={handleInputChange}
              testID={`${testID}-input`}
              {...inputProps}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    overflow: 'hidden',
  },
  divider: {
    height: 1,
    width: '100%',
  },
  inputContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
