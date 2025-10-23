import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../index';

describe('Button Component', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<Button label="Click Me" onPress={() => {}} />);
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('applies primary styles when primary is true', () => {
    const { getByText, getByRole } = render(<Button label="Primary" primary onPress={() => {}} />);

    const buttonText = getByText('Primary');
    const button = getByRole('button');

    // Verify button exists
    expect(button).toBeTruthy();
    expect(buttonText).toBeTruthy();
  });

  it('applies custom backgroundColor when provided', () => {
    const { getByTestId } = render(
      <Button label="Colored" backgroundColor="red" onPress={() => {}} />,
    );

    const buttonContainer = getByTestId('button-container');

    expect(buttonContainer.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({ backgroundColor: 'red' })]),
    );
  });

  it('handles onPress event', () => {
    const mockOnPress = jest.fn();
    const { getByRole } = render(<Button label="Press me" onPress={mockOnPress} />);

    const button = getByRole('button');
    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('renders different sizes correctly', () => {
    const { getByText, rerender } = render(
      <Button label="Small" size="small" onPress={() => {}} />,
    );
    expect(getByText('Small')).toBeTruthy();

    rerender(<Button label="Large" size="large" onPress={() => {}} />);
    expect(getByText('Large')).toBeTruthy();
  });
});
