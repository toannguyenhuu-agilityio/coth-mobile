import type { StyleProp, TextInputProps, ViewStyle } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { ReactNode } from 'react';

export interface TextFieldProps extends Omit<TextInputProps, 'style'> {
  /** Label text */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Helper text */
  helperText?: string;
  /** Error text */
  errorText?: string;
  /** Show error state */
  hasError?: boolean;
  /** Size variant */
  size?: 'small' | 'medium' | 'large';
  /** Leading icon component */
  prefixIcon?: ReactNode;
  /** Trailing icon component */
  suffixIcon?: ReactNode;
  /** Container style */
  containerStyle?: StyleProp<ViewStyle>;
  /** Input style */
  inputStyle?: StyleProp<ViewStyle>;
}

/** TextField component for user input */
export const TextField = ({
  label,
  placeholder,
  helperText,
  errorText,
  hasError = false,
  size = 'large',
  prefixIcon,
  suffixIcon,
  containerStyle,
  inputStyle,
  ...textInputProps
}: TextFieldProps) => {
  const sizeStyle = sizeStyles[size];

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={[styles.inputContainer, sizeStyle, hasError && styles.inputContainerError]}>
        {prefixIcon && <View style={styles.iconContainer}>{prefixIcon}</View>}

        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor="#9B9B9B"
          {...textInputProps}
        />

        {suffixIcon && <View style={styles.iconContainer}>{suffixIcon}</View>}
      </View>

      {helperText && !hasError && <Text style={styles.helperText}>{helperText}</Text>}

      {hasError && errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#0000004D',
  },
  inputContainerError: {
    borderColor: '#FF4444',
  },
  input: {
    flex: 1,
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
    color: '#FFFFFF',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  helperText: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    color: '#9B9B9B',
    marginTop: 4,
  },
  errorText: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    color: '#FF4444',
    marginTop: 4,
  },
});

const sizeStyles = StyleSheet.create({
  small: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    gap: 12,
  },
  medium: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    gap: 14,
  },
  large: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 16,
  },
});
