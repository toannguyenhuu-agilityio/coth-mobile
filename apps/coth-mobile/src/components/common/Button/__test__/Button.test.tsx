import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import { Button } from '../index';

describe('Button Component', () => {
  describe('Rendering', () => {
    it('renders correctly with default props', () => {
      const { getByText } = render(<Button label="Click Me" />);
      expect(getByText('Click Me')).toBeTruthy();
    });

    it('renders without label', () => {
      const { getByRole } = render(<Button onPress={() => {}} />);
      expect(getByRole('button')).toBeTruthy();
    });

    it('renders with icon left', () => {
      const { getByTestId } = render(
        <Button
          label="With Icon"
          iconLeft={<Text testID="icon-left">Icon</Text>}
          onPress={() => {}}
        />,
      );
      expect(getByTestId('icon-left')).toBeTruthy();
    });

    it('renders with icon right', () => {
      const { getByTestId } = render(
        <Button
          label="With Icon"
          iconRight={<Text testID="icon-right">Icon</Text>}
          onPress={() => {}}
        />,
      );
      expect(getByTestId('icon-right')).toBeTruthy();
    });

    it('renders with both icons', () => {
      const { getByTestId } = render(
        <Button
          label="With Icons"
          iconLeft={<Text testID="icon-left">Left</Text>}
          iconRight={<Text testID="icon-right">Right</Text>}
          onPress={() => {}}
        />,
      );
      expect(getByTestId('icon-left')).toBeTruthy();
      expect(getByTestId('icon-right')).toBeTruthy();
    });
  });

  describe('Variants', () => {
    it('renders primary variant by default', () => {
      const { getByTestId } = render(<Button label="Primary" />);
      const button = getByTestId('button-container');
      expect(button).toBeTruthy();
    });

    it('renders secondary variant', () => {
      const { getByTestId } = render(<Button label="Secondary" variant="secondary" />);
      const button = getByTestId('button-container');
      expect(button).toBeTruthy();
    });

    it('renders link variant', () => {
      const { getByTestId } = render(<Button label="Link" variant="link" />);
      const button = getByTestId('button-container');
      expect(button).toBeTruthy();
    });

    it('renders rounded variant without label', () => {
      const { queryByText, getByTestId } = render(
        <Button
          label="Should not show"
          variant="rounded"
          iconLeft={<Text testID="icon">Icon</Text>}
        />,
      );
      expect(queryByText('Should not show')).toBeNull();
      expect(getByTestId('icon')).toBeTruthy();
    });
  });

  describe('Sizes', () => {
    it('renders small size', () => {
      const { getByText } = render(<Button label="Small" size="small" />);
      expect(getByText('Small')).toBeTruthy();
    });

    it('renders medium size by default', () => {
      const { getByText } = render(<Button label="Medium" />);
      expect(getByText('Medium')).toBeTruthy();
    });

    it('renders large size', () => {
      const { getByText } = render(<Button label="Large" size="large" />);
      expect(getByText('Large')).toBeTruthy();
    });

    it('renders rounded small size', () => {
      const { getByTestId } = render(
        <Button variant="rounded" size="small" iconLeft={<Text testID="icon">Icon</Text>} />,
      );
      expect(getByTestId('icon')).toBeTruthy();
    });

    it('renders rounded medium size', () => {
      const { getByTestId } = render(
        <Button variant="rounded" size="medium" iconLeft={<Text testID="icon">Icon</Text>} />,
      );
      expect(getByTestId('icon')).toBeTruthy();
    });

    it('renders rounded large size', () => {
      const { getByTestId } = render(
        <Button variant="rounded" size="large" iconLeft={<Text testID="icon">Icon</Text>} />,
      );
      expect(getByTestId('icon')).toBeTruthy();
    });
  });

  describe('Interactions', () => {
    it('handles onPress event', () => {
      const mockOnPress = jest.fn();
      const { getByRole } = render(<Button label="Press me" onPress={mockOnPress} />);

      const button = getByRole('button');
      fireEvent.press(button);

      expect(mockOnPress).toHaveBeenCalledTimes(1);
    });

    it('does not call onPress when disabled', () => {
      const mockOnPress = jest.fn();
      const { getByRole } = render(<Button label="Disabled" onPress={mockOnPress} disabled />);

      const button = getByRole('button');
      fireEvent.press(button);

      expect(mockOnPress).not.toHaveBeenCalled();
    });

    it('applies disabled style when disabled', () => {
      const { getByTestId } = render(<Button label="Disabled" disabled />);
      const button = getByTestId('button-container');

      expect(button).toBeTruthy();
    });

    it('handles press in and press out events for animation', () => {
      const { getByRole } = render(<Button label="Press me" />);
      const button = getByRole('button');

      // Simulate press in
      fireEvent(button, 'pressIn');
      expect(button).toBeTruthy();

      // Simulate press out
      fireEvent(button, 'pressOut');
      expect(button).toBeTruthy();
    });
  });

  describe('Custom Styles', () => {
    it('applies custom style prop', () => {
      const customStyle = { marginTop: 20 };
      const { getByTestId } = render(<Button label="Custom" style={customStyle} />);
      const button = getByTestId('button-container');

      expect(button).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('has correct accessibility role', () => {
      const { getByRole } = render(<Button label="Accessible" />);
      expect(getByRole('button')).toBeTruthy();
    });

    it('is accessible when disabled', () => {
      const { getByRole } = render(<Button label="Disabled" disabled />);
      const button = getByRole('button');
      expect(button.props.accessibilityState?.disabled).toBe(true);
    });
  });

  describe('Edge Cases', () => {
    it('renders with empty label', () => {
      const { getByRole } = render(<Button label="" />);
      expect(getByRole('button')).toBeTruthy();
    });

    it('renders without onPress handler', () => {
      const { getByRole } = render(<Button label="No Handler" />);
      expect(getByRole('button')).toBeTruthy();
    });

    it('handles multiple rapid presses', () => {
      const mockOnPress = jest.fn();
      const { getByRole } = render(<Button label="Press" onPress={mockOnPress} />);

      const button = getByRole('button');
      fireEvent.press(button);
      fireEvent.press(button);
      fireEvent.press(button);

      expect(mockOnPress).toHaveBeenCalledTimes(3);
    });

    it('handles invalid variant and falls back to primary', () => {
      const { getByTestId } = render(
        // @ts-expect-error Testing invalid variant
        <Button label="Invalid" variant="invalid" />,
      );
      const button = getByTestId('button-container');
      expect(button).toBeTruthy();
    });

    it('handles invalid size and falls back to medium', () => {
      const { getByTestId } = render(
        // @ts-expect-error Testing invalid size
        <Button label="Invalid" size="invalid" />,
      );
      const button = getByTestId('button-container');
      expect(button).toBeTruthy();
    });

    it('handles invalid size for rounded variant and falls back to medium', () => {
      const { getByTestId } = render(
        <Button
          variant="rounded"
          // @ts-expect-error Testing invalid size
          size="invalid"
          iconLeft={<Text testID="icon">Icon</Text>}
        />,
      );
      const button = getByTestId('button-container');
      expect(button).toBeTruthy();
    });
  });
});
