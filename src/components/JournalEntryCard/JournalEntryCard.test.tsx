import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import { JournalEntryCard } from './index';

describe('JournalEntryCard', () => {
  const defaultProps = {
    title: 'Test Title',
    date: '5/28/25',
    preview: 'Test preview text',
  };

  it('renders correctly with required props', () => {
    const { getByTestId } = render(<JournalEntryCard {...defaultProps} />);

    expect(getByTestId('journal-entry-card')).toBeTruthy();
    expect(getByTestId('journal-entry-card-title-label')).toBeTruthy();
    expect(getByTestId('journal-entry-card-date')).toBeTruthy();
    expect(getByTestId('journal-entry-card-preview')).toBeTruthy();
  });

  it('displays default title label', () => {
    const { getByTestId } = render(<JournalEntryCard {...defaultProps} />);

    const titleLabel = getByTestId('journal-entry-card-title-label');
    expect(titleLabel.props.children).toBe('Title');
  });

  it('displays custom title label', () => {
    const { getByTestId } = render(
      <JournalEntryCard {...defaultProps} titleLabel="Custom Label" />,
    );

    const titleLabel = getByTestId('journal-entry-card-title-label');
    expect(titleLabel.props.children).toBe('Custom Label');
  });

  it('hides title label when showTitleLabel is false', () => {
    const { queryByTestId } = render(<JournalEntryCard {...defaultProps} showTitleLabel={false} />);

    expect(queryByTestId('journal-entry-card-title-label')).toBeNull();
  });

  it('displays date correctly', () => {
    const { getByTestId } = render(<JournalEntryCard {...defaultProps} />);

    const date = getByTestId('journal-entry-card-date');
    expect(date.props.children).toBe('5/28/25');
  });

  it('displays preview text correctly', () => {
    const { getByTestId } = render(<JournalEntryCard {...defaultProps} />);

    const preview = getByTestId('journal-entry-card-preview');
    expect(preview.props.children).toBe('Test preview text');
  });

  it('displays different date formats', () => {
    const { getByTestId } = render(<JournalEntryCard {...defaultProps} date="May 28, 2025" />);

    const date = getByTestId('journal-entry-card-date');
    expect(date.props.children).toBe('May 28, 2025');
  });

  it('handles long preview text', () => {
    const longPreview = 'A'.repeat(200);
    const { getByTestId } = render(<JournalEntryCard {...defaultProps} preview={longPreview} />);

    const preview = getByTestId('journal-entry-card-preview');
    expect(preview.props.children).toBe(longPreview);
  });

  it('applies default numberOfLines to preview', () => {
    const { getByTestId } = render(<JournalEntryCard {...defaultProps} />);

    const preview = getByTestId('journal-entry-card-preview');
    expect(preview.props.numberOfLines).toBe(1);
  });

  it('applies custom numberOfLines to preview', () => {
    const { getByTestId } = render(<JournalEntryCard {...defaultProps} previewNumberOfLines={3} />);

    const preview = getByTestId('journal-entry-card-preview');
    expect(preview.props.numberOfLines).toBe(3);
  });

  it('wraps card in TouchableOpacity when onPress is provided', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<JournalEntryCard {...defaultProps} onPress={onPress} />);

    expect(getByTestId('journal-entry-card-touchable')).toBeTruthy();
  });

  it('calls onPress when card is pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<JournalEntryCard {...defaultProps} onPress={onPress} />);

    fireEvent.press(getByTestId('journal-entry-card-touchable'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('does not wrap card in TouchableOpacity when onPress is not provided', () => {
    const { queryByTestId } = render(<JournalEntryCard {...defaultProps} />);

    expect(queryByTestId('journal-entry-card-touchable')).toBeNull();
  });

  it('applies custom testID', () => {
    const { getByTestId } = render(
      <JournalEntryCard {...defaultProps} testID="custom-journal-card" />,
    );

    expect(getByTestId('custom-journal-card')).toBeTruthy();
    expect(getByTestId('custom-journal-card-title-label')).toBeTruthy();
    expect(getByTestId('custom-journal-card-date')).toBeTruthy();
    expect(getByTestId('custom-journal-card-preview')).toBeTruthy();
  });

  it('applies custom styles', () => {
    const customContainerStyle = { padding: 24 };
    const { getByTestId } = render(
      <JournalEntryCard {...defaultProps} containerStyle={customContainerStyle} />,
    );

    const container = getByTestId('journal-entry-card');
    expect(container.props.style).toMatchObject(expect.arrayContaining([customContainerStyle]));
  });

  it('handles empty preview', () => {
    const { getByTestId } = render(<JournalEntryCard {...defaultProps} preview="" />);

    const preview = getByTestId('journal-entry-card-preview');
    expect(preview.props.children).toBe('');
  });

  it('handles special characters in preview', () => {
    const specialPreview = 'Test @#$%&*() and emojis 🙏✝️📖';
    const { getByTestId } = render(<JournalEntryCard {...defaultProps} preview={specialPreview} />);

    const preview = getByTestId('journal-entry-card-preview');
    expect(preview.props.children).toBe(specialPreview);
  });

  it('handles different title values', () => {
    const { rerender, getByTestId } = render(<JournalEntryCard {...defaultProps} title="First" />);

    expect(getByTestId('journal-entry-card')).toBeTruthy();

    rerender(<JournalEntryCard {...defaultProps} title="Second" />);
    expect(getByTestId('journal-entry-card')).toBeTruthy();
  });

  it('applies ellipsizeMode to preview', () => {
    const { getByTestId } = render(<JournalEntryCard {...defaultProps} />);

    const preview = getByTestId('journal-entry-card-preview');
    expect(preview.props.ellipsizeMode).toBe('tail');
  });

  it('handles very long title', () => {
    const longTitle = 'A'.repeat(100);
    const { getByTestId } = render(<JournalEntryCard {...defaultProps} title={longTitle} />);

    expect(getByTestId('journal-entry-card')).toBeTruthy();
  });

  it('handles very long date', () => {
    const longDate = 'December 31, 2025 at 11:59:59 PM';
    const { getByTestId } = render(<JournalEntryCard {...defaultProps} date={longDate} />);

    const date = getByTestId('journal-entry-card-date');
    expect(date.props.children).toBe(longDate);
  });
});
