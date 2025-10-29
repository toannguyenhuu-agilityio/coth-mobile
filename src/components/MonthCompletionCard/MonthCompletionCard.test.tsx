import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';

import { MonthCompletionCard } from './index';

describe('MonthCompletionCard', () => {
  it('renders correctly with required props', () => {
    const { getByTestId } = render(<MonthCompletionCard current={15} total={31} />);

    expect(getByTestId('month-completion-card')).toBeTruthy();
    expect(getByTestId('month-completion-card-title')).toBeTruthy();
    expect(getByTestId('month-completion-card-stats')).toBeTruthy();
    expect(getByTestId('month-completion-card-progress-background')).toBeTruthy();
    expect(getByTestId('month-completion-card-progress-fill')).toBeTruthy();
  });

  it('displays default title', () => {
    const { getByTestId } = render(<MonthCompletionCard current={15} total={31} />);

    const title = getByTestId('month-completion-card-title');
    expect(title.props.children).toBe('Month Completion');
  });

  it('displays custom title', () => {
    const { getByTestId } = render(
      <MonthCompletionCard current={15} total={31} title="Custom Title" />,
    );

    const title = getByTestId('month-completion-card-title');
    expect(title.props.children).toBe('Custom Title');
  });

  it('displays current and total values', () => {
    const { getByTestId } = render(<MonthCompletionCard current={27} total={31} />);

    const stats = getByTestId('month-completion-card-stats');
    expect(stats.props.children).toContain('27');
    expect(stats.props.children).toContain('31');
  });

  it('calculates and displays percentage correctly', () => {
    const { getByTestId } = render(<MonthCompletionCard current={27} total={31} />);

    const stats = getByTestId('month-completion-card-stats');
    const statsText = stats.props.children.join('');
    expect(statsText).toContain('87%'); // 27/31 = 87.09... rounds to 87%
  });

  it('hides percentage when showPercentage is false', () => {
    const { getByTestId } = render(
      <MonthCompletionCard current={15} total={31} showPercentage={false} />,
    );

    const stats = getByTestId('month-completion-card-stats');
    const statsText = stats.props.children.join('');
    expect(statsText).not.toContain('%');
  });

  it('calculates 50% correctly', () => {
    const { getByTestId } = render(<MonthCompletionCard current={15.5} total={31} />);

    const stats = getByTestId('month-completion-card-stats');
    const statsText = stats.props.children.join('');
    expect(statsText).toContain('50%');
  });

  it('calculates 100% correctly', () => {
    const { getByTestId } = render(<MonthCompletionCard current={31} total={31} />);

    const stats = getByTestId('month-completion-card-stats');
    const statsText = stats.props.children.join('');
    expect(statsText).toContain('100%');
  });

  it('calculates 0% correctly', () => {
    const { getByTestId } = render(<MonthCompletionCard current={0} total={31} />);

    const stats = getByTestId('month-completion-card-stats');
    const statsText = stats.props.children.join('');
    expect(statsText).toContain('0%');
  });

  it('handles zero total gracefully', () => {
    const { getByTestId } = render(<MonthCompletionCard current={5} total={0} />);

    const stats = getByTestId('month-completion-card-stats');
    const statsText = stats.props.children.join('');
    expect(statsText).toContain('0%');
  });

  it('sets progress bar width based on percentage', () => {
    const { getByTestId } = render(<MonthCompletionCard current={27} total={31} />);

    const progressFill = getByTestId('month-completion-card-progress-fill');
    expect(progressFill.props.style).toMatchObject(
      expect.arrayContaining([expect.objectContaining({ width: '87%' })]),
    );
  });

  it('sets progress bar width to 0% when current is 0', () => {
    const { getByTestId } = render(<MonthCompletionCard current={0} total={31} />);

    const progressFill = getByTestId('month-completion-card-progress-fill');
    expect(progressFill.props.style).toMatchObject(
      expect.arrayContaining([expect.objectContaining({ width: '0%' })]),
    );
  });

  it('sets progress bar width to 100% when complete', () => {
    const { getByTestId } = render(<MonthCompletionCard current={31} total={31} />);

    const progressFill = getByTestId('month-completion-card-progress-fill');
    expect(progressFill.props.style).toMatchObject(
      expect.arrayContaining([expect.objectContaining({ width: '100%' })]),
    );
  });

  it('renders custom title component when provided', () => {
    const CustomTitle = () => <Text testID="custom-title">Custom</Text>;
    const { getByTestId, queryByTestId } = render(
      <MonthCompletionCard current={15} total={31} titleComponent={<CustomTitle />} />,
    );

    expect(getByTestId('custom-title')).toBeTruthy();
    expect(queryByTestId('month-completion-card-title')).toBeNull();
  });

  it('renders custom stats component when provided', () => {
    const CustomStats = () => <Text testID="custom-stats">Stats</Text>;
    const { getByTestId, queryByTestId } = render(
      <MonthCompletionCard current={15} total={31} statsComponent={<CustomStats />} />,
    );

    expect(getByTestId('custom-stats')).toBeTruthy();
    expect(queryByTestId('month-completion-card-stats')).toBeNull();
  });

  it('applies custom testID', () => {
    const { getByTestId } = render(
      <MonthCompletionCard current={15} total={31} testID="custom-completion" />,
    );

    expect(getByTestId('custom-completion')).toBeTruthy();
    expect(getByTestId('custom-completion-title')).toBeTruthy();
    expect(getByTestId('custom-completion-stats')).toBeTruthy();
  });

  it('applies custom styles', () => {
    const customContainerStyle = { padding: 24 };
    const { getByTestId } = render(
      <MonthCompletionCard current={15} total={31} containerStyle={customContainerStyle} />,
    );

    const container = getByTestId('month-completion-card');
    expect(container.props.style).toMatchObject(expect.arrayContaining([customContainerStyle]));
  });

  it('handles decimal current values', () => {
    const { getByTestId } = render(<MonthCompletionCard current={15.7} total={31} />);

    const stats = getByTestId('month-completion-card-stats');
    expect(stats.props.children).toContain('15.7');
  });

  it('handles large numbers', () => {
    const { getByTestId } = render(<MonthCompletionCard current={15234} total={31102} />);

    const stats = getByTestId('month-completion-card-stats');
    expect(stats.props.children).toContain('15234');
    expect(stats.props.children).toContain('31102');
  });

  it('calculates percentage with large numbers', () => {
    const { getByTestId } = render(<MonthCompletionCard current={15234} total={31102} />);

    const stats = getByTestId('month-completion-card-stats');
    const statsText = stats.props.children.join('');
    expect(statsText).toContain('49%'); // 15234/31102 = 48.98... rounds to 49%
  });

  it('handles current greater than total', () => {
    const { getByTestId } = render(<MonthCompletionCard current={35} total={31} />);

    const stats = getByTestId('month-completion-card-stats');
    const statsText = stats.props.children.join('');
    expect(statsText).toContain('113%'); // 35/31 = 112.9... rounds to 113%
  });

  it('handles negative values gracefully', () => {
    const { getByTestId } = render(<MonthCompletionCard current={-5} total={31} />);

    expect(getByTestId('month-completion-card')).toBeTruthy();
  });

  it('rounds percentage to nearest integer', () => {
    const { getByTestId } = render(<MonthCompletionCard current={10} total={31} />);

    const stats = getByTestId('month-completion-card-stats');
    const statsText = stats.props.children.join('');
    expect(statsText).toContain('32%'); // 10/31 = 32.25... rounds to 32%
  });
});
