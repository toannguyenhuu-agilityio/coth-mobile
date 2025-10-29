import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Switch } from '../index';

describe('Switch Component', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(<Switch />);
    expect(getByTestId('switch')).toBeTruthy();
  });

  it('renders in off state by default', () => {
    const { getByRole } = render(<Switch />);
    const switchElement = getByRole('switch');

    expect(switchElement.props.accessibilityState.checked).toBe(false);
  });

  it('renders in on state when value is true', () => {
    const { getByRole } = render(<Switch value={true} />);
    const switchElement = getByRole('switch');

    expect(switchElement.props.accessibilityState.checked).toBe(true);
  });

  it('handles onValueChange event', () => {
    const mockOnValueChange = jest.fn();
    const { getByTestId } = render(<Switch value={false} onValueChange={mockOnValueChange} />);

    const switchElement = getByTestId('switch');
    fireEvent.press(switchElement);

    expect(mockOnValueChange).toHaveBeenCalledTimes(1);
    expect(mockOnValueChange).toHaveBeenCalledWith(true);
  });

  it('handles onPress event', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(<Switch value={false} onPress={mockOnPress} />);

    const switchElement = getByTestId('switch');
    fireEvent.press(switchElement);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('does not trigger events when disabled', () => {
    const mockOnValueChange = jest.fn();
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <Switch
        value={false}
        disabled={true}
        onValueChange={mockOnValueChange}
        onPress={mockOnPress}
      />,
    );

    const switchElement = getByTestId('switch');
    fireEvent.press(switchElement);

    expect(mockOnValueChange).not.toHaveBeenCalled();
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it('applies disabled state correctly', () => {
    const { getByRole } = render(<Switch disabled={true} />);
    const switchElement = getByRole('switch');

    expect(switchElement.props.accessibilityState.disabled).toBe(true);
  });

  it('renders different sizes correctly', () => {
    const { getByTestId, rerender } = render(<Switch size="small" />);
    expect(getByTestId('switch')).toBeTruthy();

    rerender(<Switch size="medium" />);
    expect(getByTestId('switch')).toBeTruthy();

    rerender(<Switch size="large" />);
    expect(getByTestId('switch')).toBeTruthy();
  });

  it('applies custom track colors', () => {
    const { getByTestId } = render(
      <Switch value={true} activeTrackColor="#00FF00" inactiveTrackColor="#FF0000" />,
    );

    const switchElement = getByTestId('switch');

    expect(switchElement.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({ backgroundColor: '#00FF00' })]),
    );
  });

  it('renders thumb element', () => {
    const { getByTestId } = render(<Switch />);

    const thumb = getByTestId('switch-thumb');
    expect(thumb).toBeTruthy();
  });

  it('applies custom accessibility label', () => {
    const { getByRole } = render(<Switch accessibilityLabel="Toggle feature" />);
    const switchElement = getByRole('switch');

    expect(switchElement.props.accessibilityLabel).toBe('Toggle feature');
  });

  it('toggles value from false to true', () => {
    const mockOnValueChange = jest.fn();
    const { getByTestId } = render(<Switch value={false} onValueChange={mockOnValueChange} />);

    const switchElement = getByTestId('switch');
    fireEvent.press(switchElement);

    expect(mockOnValueChange).toHaveBeenCalledWith(true);
  });

  it('toggles value from true to false', () => {
    const mockOnValueChange = jest.fn();
    const { getByTestId } = render(<Switch value={true} onValueChange={mockOnValueChange} />);

    const switchElement = getByTestId('switch');
    fireEvent.press(switchElement);

    expect(mockOnValueChange).toHaveBeenCalledWith(false);
  });

  it('applies custom testID', () => {
    const { getByTestId } = render(<Switch testID="custom-switch" />);

    expect(getByTestId('custom-switch')).toBeTruthy();
    expect(getByTestId('custom-switch-thumb')).toBeTruthy();
  });
});
