import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { TextField } from '../index';

describe('TextField', () => {
  it('renders correctly with placeholder', () => {
    render(<TextField placeholder="Enter email" />);
    expect(screen.getByPlaceholderText('Enter email')).toBeTruthy();
  });

  it('renders label when showLabel is true', () => {
    render(<TextField label="Email" showLabel={true} placeholder="Enter email" />);
    expect(screen.getByText('Email')).toBeTruthy();
  });

  it('does not render label when showLabel is false', () => {
    render(<TextField label="Email" showLabel={false} placeholder="Enter email" />);
    expect(screen.queryByText('Email')).toBeNull();
  });

  it('renders helper text when showHelperText is true', () => {
    render(
      <TextField
        placeholder="Enter email"
        helperText="Enter a valid email address"
        showHelperText={true}
      />,
    );
    expect(screen.getByText('Enter a valid email address')).toBeTruthy();
  });

  it('renders error text when hasError is true', () => {
    render(<TextField placeholder="Enter email" errorText="Email is required" hasError={true} />);
    expect(screen.getByText('Email is required')).toBeTruthy();
  });

  it('renders with leading icon', () => {
    const LeadingIcon = () => <></>;
    render(<TextField placeholder="Enter email" leadingIcon={<LeadingIcon />} />);
    expect(screen.getByPlaceholderText('Enter email')).toBeTruthy();
  });

  it('renders with trailing icon', () => {
    const TrailingIcon = () => <></>;
    render(<TextField placeholder="Enter email" trailingIcon={<TrailingIcon />} />);
    expect(screen.getByPlaceholderText('Enter email')).toBeTruthy();
  });
});
