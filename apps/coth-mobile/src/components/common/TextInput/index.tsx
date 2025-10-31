import type { StyleProp, TextInputProps, ViewStyle } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { ReactNode } from 'react';

// Themes
import { colors, typography } from 'src/theme';

export interface TextFieldProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  placeholder?: string;
  errorText?: string;
  hasError?: boolean;
  size?: 'small' | 'medium' | 'large';
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
}

export const TextField = ({
  label,
  placeholder,
  errorText,
  hasError = false,
  size = 'medium',
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
          placeholderTextColor="rgba(186, 186, 186, 1)"
          {...textInputProps}
        />

        {suffixIcon && <View style={styles.iconContainer}>{suffixIcon}</View>}
      </View>

      {hasError && errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: '#0000004D',
  },
  label: {
    fontFamily: typography.fontFamily.primary,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: colors.white[100],
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f4f4f483',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  inputContainerError: {
    borderColor: '#FF4444',
  },
  input: {
    flex: 1,
    fontFamily: typography.fontFamily.primary,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
    color: colors.white[100],
    height: 48,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontFamily: typography.fontFamily.primary,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    color: '#FF4444',
    marginTop: 4,
  },
});

const sizeStyles = {
  small: {
    height: 40,
  },
  medium: {
    height: 48,
  },
  large: {
    height: 56,
  },
};
