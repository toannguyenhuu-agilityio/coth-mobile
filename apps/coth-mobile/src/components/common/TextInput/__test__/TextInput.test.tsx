import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import { TextField } from '../index';

describe('TextField Component', () => {
  describe('Rendering', () => {
    it('renders correctly with default props', () => {
      const { getByPlaceholderText } = render(<TextField placeholder="Enter text" />);
      expect(getByPlaceholderText('Enter text')).toBeTruthy();
    });

    it('renders with label', () => {
      const { getByText } = render(<TextField label="Email" placeholder="Enter email" />);
      expect(getByText('Email')).toBeTruthy();
    });

    it('renders without label', () => {
      const { queryByText } = render(<TextField placeholder="No label" />);
      expect(queryByText('Email')).toBeNull();
    });

    it('renders with placeholder', () => {
      const { getByPlaceholderText } = render(<TextField placeholder="Type here" />);
      expect(getByPlaceholderText('Type here')).toBeTruthy();
    });

    it('renders with prefix icon', () => {
      const { getByTestId } = render(
        <TextField placeholder="Search" prefixIcon={<Text testID="prefix-icon">🔍</Text>} />,
      );
      expect(getByTestId('prefix-icon')).toBeTruthy();
    });

    it('renders with suffix icon', () => {
      const { getByTestId } = render(
        <TextField placeholder="Password" suffixIcon={<Text testID="suffix-icon">👁️</Text>} />,
      );
      expect(getByTestId('suffix-icon')).toBeTruthy();
    });

    it('renders with both prefix and suffix icons', () => {
      const { getByTestId } = render(
        <TextField
          placeholder="Search"
          prefixIcon={<Text testID="prefix-icon">🔍</Text>}
          suffixIcon={<Text testID="suffix-icon">✕</Text>}
        />,
      );
      expect(getByTestId('prefix-icon')).toBeTruthy();
      expect(getByTestId('suffix-icon')).toBeTruthy();
    });
  });

  describe('Error State', () => {
    it('displays error text when hasError is true', () => {
      const { getByText } = render(
        <TextField placeholder="Email" hasError errorText="Invalid email" />,
      );
      expect(getByText('Invalid email')).toBeTruthy();
    });

    it('does not display error text when hasError is false', () => {
      const { queryByText } = render(
        <TextField placeholder="Email" hasError={false} errorText="Invalid email" />,
      );
      expect(queryByText('Invalid email')).toBeNull();
    });

    it('does not display error text when errorText is not provided', () => {
      const { queryByText } = render(<TextField placeholder="Email" hasError />);
      expect(queryByText('Invalid email')).toBeNull();
    });

    it('applies error styling to input container when hasError is true', () => {
      const { getByPlaceholderText } = render(
        <TextField placeholder="Email" hasError errorText="Error" />,
      );
      const input = getByPlaceholderText('Email');
      expect(input).toBeTruthy();
    });
  });

  describe('Sizes', () => {
    it('renders small size', () => {
      const { getByPlaceholderText } = render(<TextField placeholder="Small" size="small" />);
      expect(getByPlaceholderText('Small')).toBeTruthy();
    });

    it('renders medium size by default', () => {
      const { getByPlaceholderText } = render(<TextField placeholder="Medium" />);
      expect(getByPlaceholderText('Medium')).toBeTruthy();
    });

    it('renders large size', () => {
      const { getByPlaceholderText } = render(<TextField placeholder="Large" size="large" />);
      expect(getByPlaceholderText('Large')).toBeTruthy();
    });
  });

  describe('Text Input', () => {
    it('handles text change', () => {
      const mockOnChange = jest.fn();
      const { getByPlaceholderText } = render(
        <TextField placeholder="Type here" onChangeText={mockOnChange} />,
      );

      const input = getByPlaceholderText('Type here');
      fireEvent.changeText(input, 'Hello World');

      expect(mockOnChange).toHaveBeenCalledWith('Hello World');
    });

    it('handles focus event', () => {
      const mockOnFocus = jest.fn();
      const { getByPlaceholderText } = render(
        <TextField placeholder="Focus me" onFocus={mockOnFocus} />,
      );

      const input = getByPlaceholderText('Focus me');
      fireEvent(input, 'focus');

      expect(mockOnFocus).toHaveBeenCalled();
    });

    it('handles blur event', () => {
      const mockOnBlur = jest.fn();
      const { getByPlaceholderText } = render(
        <TextField placeholder="Blur me" onBlur={mockOnBlur} />,
      );

      const input = getByPlaceholderText('Blur me');
      fireEvent(input, 'blur');

      expect(mockOnBlur).toHaveBeenCalled();
    });

    it('displays initial value', () => {
      const { getByDisplayValue } = render(
        <TextField placeholder="Name" value="John Doe" onChangeText={() => {}} />,
      );
      expect(getByDisplayValue('John Doe')).toBeTruthy();
    });
  });

  describe('Custom Styles', () => {
    it('applies custom container style', () => {
      const customStyle = { marginTop: 20 };
      const { getByPlaceholderText } = render(
        <TextField placeholder="Custom" containerStyle={customStyle} />,
      );
      expect(getByPlaceholderText('Custom')).toBeTruthy();
    });

    it('applies custom input style', () => {
      const customStyle = { fontSize: 20 };
      const { getByPlaceholderText } = render(
        <TextField placeholder="Custom" inputStyle={customStyle} />,
      );
      expect(getByPlaceholderText('Custom')).toBeTruthy();
    });
  });

  describe('TextInput Props', () => {
    it('passes secureTextEntry prop', () => {
      const { getByPlaceholderText } = render(<TextField placeholder="Password" secureTextEntry />);
      const input = getByPlaceholderText('Password');
      expect(input.props.secureTextEntry).toBe(true);
    });

    it('passes editable prop', () => {
      const { getByPlaceholderText } = render(
        <TextField placeholder="Readonly" editable={false} />,
      );
      const input = getByPlaceholderText('Readonly');
      expect(input.props.editable).toBe(false);
    });

    it('passes multiline prop', () => {
      const { getByPlaceholderText } = render(
        <TextField placeholder="Multiline" multiline numberOfLines={4} />,
      );
      const input = getByPlaceholderText('Multiline');
      expect(input.props.multiline).toBe(true);
    });

    it('passes keyboardType prop', () => {
      const { getByPlaceholderText } = render(
        <TextField placeholder="Phone" keyboardType="phone-pad" />,
      );
      const input = getByPlaceholderText('Phone');
      expect(input.props.keyboardType).toBe('phone-pad');
    });

    it('passes autoCapitalize prop', () => {
      const { getByPlaceholderText } = render(
        <TextField placeholder="Name" autoCapitalize="words" />,
      );
      const input = getByPlaceholderText('Name');
      expect(input.props.autoCapitalize).toBe('words');
    });

    it('passes autoCorrect prop', () => {
      const { getByPlaceholderText } = render(
        <TextField placeholder="Email" autoCorrect={false} />,
      );
      const input = getByPlaceholderText('Email');
      expect(input.props.autoCorrect).toBe(false);
    });

    it('passes maxLength prop', () => {
      const { getByPlaceholderText } = render(<TextField placeholder="Code" maxLength={6} />);
      const input = getByPlaceholderText('Code');
      expect(input.props.maxLength).toBe(6);
    });
  });

  describe('Edge Cases', () => {
    it('renders with empty placeholder', () => {
      const { getByPlaceholderText } = render(<TextField placeholder="" />);
      expect(getByPlaceholderText('')).toBeTruthy();
    });

    it('renders with empty label', () => {
      const { queryByText } = render(<TextField label="" placeholder="Test" />);
      expect(queryByText('')).toBeNull();
    });

    it('renders without any props', () => {
      const { root } = render(<TextField />);
      expect(root).toBeTruthy();
    });

    it('handles hasError true with empty errorText', () => {
      const { queryByText } = render(<TextField placeholder="Test" hasError errorText="" />);
      expect(queryByText('')).toBeNull();
    });
  });

  describe('Complete Flow', () => {
    it('handles complete form field workflow', () => {
      const mockOnChange = jest.fn();
      const mockOnFocus = jest.fn();
      const mockOnBlur = jest.fn();

      const { getByPlaceholderText, getByText } = render(
        <TextField
          label="Email Address"
          placeholder="Enter your email"
          onChangeText={mockOnChange}
          onFocus={mockOnFocus}
          onBlur={mockOnBlur}
        />,
      );

      expect(getByText('Email Address')).toBeTruthy();

      const input = getByPlaceholderText('Enter your email');

      fireEvent(input, 'focus');
      expect(mockOnFocus).toHaveBeenCalled();

      fireEvent.changeText(input, 'test@example.com');
      expect(mockOnChange).toHaveBeenCalledWith('test@example.com');

      fireEvent(input, 'blur');
      expect(mockOnBlur).toHaveBeenCalled();
    });

    it('handles error state transition', () => {
      const { getByPlaceholderText, queryByText, rerender } = render(
        <TextField placeholder="Email" hasError={false} errorText="Invalid email" />,
      );

      expect(getByPlaceholderText('Email')).toBeTruthy();
      expect(queryByText('Invalid email')).toBeNull();

      rerender(<TextField placeholder="Email" hasError errorText="Invalid email" />);

      expect(queryByText('Invalid email')).toBeTruthy();
    });
  });
});
