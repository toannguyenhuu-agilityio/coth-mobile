import React from 'react';
import { render } from '@testing-library/react-native';

import { CurrentStreakCard } from './index';

describe('CurrentStreakCard', () => {
  const mockWeekDays = [
    { day: 'Su', dayNumber: 8 },
    { day: 'Mo', dayNumber: 9 },
    { day: 'Tu', dayNumber: 10 },
    { day: 'We', dayNumber: 11 },
    { day: 'Th', dayNumber: 12 },
    { day: 'Fr', dayNumber: 13 },
    { day: 'Sa', dayNumber: 14 },
  ];

  it('renders correctly with default props', () => {
    const { getByTestId } = render(<CurrentStreakCard streakCount={0} weekDays={mockWeekDays} />);

    expect(getByTestId('current-streak-card')).toBeTruthy();
    expect(getByTestId('current-streak-card-streak-card')).toBeTruthy();
    expect(getByTestId('current-streak-card-week-card')).toBeTruthy();
  });

  it('displays streak count', () => {
    const { getByTestId } = render(<CurrentStreakCard streakCount={5} weekDays={mockWeekDays} />);

    const streakCount = getByTestId('current-streak-card-streak-count');
    expect(streakCount.props.children).toBe(5);
  });

  it('displays streak title', () => {
    const { getByTestId } = render(
      <CurrentStreakCard streakCount={0} streakTitle="My Custom Streak" weekDays={mockWeekDays} />,
    );

    const streakTitle = getByTestId('current-streak-card-streak-title');
    expect(streakTitle.props.children).toBe('My Custom Streak');
  });

  it('displays default streak title when not provided', () => {
    const { getByTestId } = render(<CurrentStreakCard streakCount={0} weekDays={mockWeekDays} />);

    const streakTitle = getByTestId('current-streak-card-streak-title');
    expect(streakTitle.props.children).toBe('Your Current Streak');
  });

  it('renders all week days', () => {
    const { getByTestId } = render(<CurrentStreakCard streakCount={0} weekDays={mockWeekDays} />);

    mockWeekDays.forEach((day) => {
      expect(getByTestId(`current-streak-card-day-label-${day.day}`)).toBeTruthy();
      expect(getByTestId(`current-streak-card-day-number-${day.dayNumber}`)).toBeTruthy();
    });
  });

  it('displays correct day labels', () => {
    const { getByTestId } = render(<CurrentStreakCard streakCount={0} weekDays={mockWeekDays} />);

    mockWeekDays.forEach((day) => {
      const dayLabel = getByTestId(`current-streak-card-day-label-${day.day}`);
      expect(dayLabel.props.children).toBe(day.day);
    });
  });

  it('displays correct day numbers', () => {
    const { getByTestId } = render(<CurrentStreakCard streakCount={0} weekDays={mockWeekDays} />);

    mockWeekDays.forEach((day) => {
      const dayNumber = getByTestId(`current-streak-card-day-number-${day.dayNumber}`);
      expect(dayNumber.props.children).toBe(day.dayNumber);
    });
  });

  it('renders custom streak icon when provided', () => {
    const CustomIcon = () => <></>;
    const { queryByTestId } = render(
      <CurrentStreakCard streakCount={0} weekDays={mockWeekDays} streakIcon={<CustomIcon />} />,
    );

    expect(queryByTestId('current-streak-card-streak-count')).toBeNull();
  });

  it('renders week days with highlighted state', () => {
    const highlightedWeekDays = [
      { day: 'Su', dayNumber: 1, isHighlighted: true },
      { day: 'Mo', dayNumber: 2, isHighlighted: true },
      { day: 'Tu', dayNumber: 3, isHighlighted: false },
      { day: 'We', dayNumber: 4, isHighlighted: false },
      { day: 'Th', dayNumber: 5, isHighlighted: false },
      { day: 'Fr', dayNumber: 6, isHighlighted: false },
      { day: 'Sa', dayNumber: 7, isHighlighted: false },
    ];

    const { getByTestId } = render(
      <CurrentStreakCard streakCount={2} weekDays={highlightedWeekDays} />,
    );

    highlightedWeekDays.forEach((day) => {
      expect(getByTestId(`current-streak-card-day-box-${day.dayNumber}`)).toBeTruthy();
    });
  });

  it('renders with large streak number', () => {
    const { getByTestId } = render(<CurrentStreakCard streakCount={365} weekDays={mockWeekDays} />);

    const streakCount = getByTestId('current-streak-card-streak-count');
    expect(streakCount.props.children).toBe(365);
  });

  it('applies custom testID', () => {
    const { getByTestId } = render(
      <CurrentStreakCard streakCount={0} weekDays={mockWeekDays} testID="custom-streak-card" />,
    );

    expect(getByTestId('custom-streak-card')).toBeTruthy();
    expect(getByTestId('custom-streak-card-streak-card')).toBeTruthy();
    expect(getByTestId('custom-streak-card-week-card')).toBeTruthy();
  });

  it('handles zero streak count', () => {
    const { getByTestId } = render(<CurrentStreakCard streakCount={0} weekDays={mockWeekDays} />);

    const streakCount = getByTestId('current-streak-card-streak-count');
    expect(streakCount.props.children).toBe(0);
  });

  it('handles empty week days array', () => {
    const { getByTestId } = render(<CurrentStreakCard streakCount={0} weekDays={[]} />);

    expect(getByTestId('current-streak-card')).toBeTruthy();
    expect(getByTestId('current-streak-card-day-labels')).toBeTruthy();
    expect(getByTestId('current-streak-card-day-numbers')).toBeTruthy();
  });

  it('renders completed days with default icon', () => {
    const completedWeekDays = [
      { day: 'Su', dayNumber: 1, isCompleted: true },
      { day: 'Mo', dayNumber: 2, isCompleted: true },
      { day: 'Tu', dayNumber: 3, isCompleted: false },
      { day: 'We', dayNumber: 4, isCompleted: false },
      { day: 'Th', dayNumber: 5, isCompleted: false },
      { day: 'Fr', dayNumber: 6, isCompleted: false },
      { day: 'Sa', dayNumber: 7, isCompleted: false },
    ];

    const { getByTestId, queryByTestId } = render(
      <CurrentStreakCard streakCount={2} weekDays={completedWeekDays} />,
    );

    expect(getByTestId('current-streak-card-day-box-1')).toBeTruthy();
    expect(queryByTestId('current-streak-card-day-number-1')).toBeNull();
    expect(getByTestId('current-streak-card-day-number-3')).toBeTruthy();
  });

  it('renders completed days with custom icon', () => {
    const completedWeekDays = [
      { day: 'Su', dayNumber: 1, isCompleted: true },
      { day: 'Mo', dayNumber: 2, isCompleted: false },
      { day: 'Tu', dayNumber: 3, isCompleted: false },
      { day: 'We', dayNumber: 4, isCompleted: false },
      { day: 'Th', dayNumber: 5, isCompleted: false },
      { day: 'Fr', dayNumber: 6, isCompleted: false },
      { day: 'Sa', dayNumber: 7, isCompleted: false },
    ];

    const CustomCompletedIcon = () => <></>;
    const { queryByTestId } = render(
      <CurrentStreakCard
        streakCount={1}
        weekDays={completedWeekDays}
        completedDayIcon={<CustomCompletedIcon />}
      />,
    );

    expect(queryByTestId('current-streak-card-day-number-1')).toBeNull();
  });
});
