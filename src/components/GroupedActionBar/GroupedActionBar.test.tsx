import React from 'react';
import { Text } from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';

import { GroupedActionBar } from './index';

describe('GroupedActionBar', () => {
  const mockBackButton = {
    icon: <Text>Back</Text>,
    onPress: jest.fn(),
    testID: 'back',
  };

  const mockForwardButton = {
    icon: <Text>Forward</Text>,
    onPress: jest.fn(),
    testID: 'forward',
  };

  const mockActionButtons = [
    { icon: <Text>Action1</Text>, onPress: jest.fn(), testID: 'action-1' },
    { icon: <Text>Action2</Text>, onPress: jest.fn(), testID: 'action-2' },
    { icon: <Text>Action3</Text>, onPress: jest.fn(), testID: 'action-3' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with all buttons', () => {
    const { getByTestId } = render(
      <GroupedActionBar
        backButton={mockBackButton}
        forwardButton={mockForwardButton}
        actionButtons={mockActionButtons}
      />,
    );

    expect(getByTestId('grouped-action-bar')).toBeTruthy();
    expect(getByTestId('back')).toBeTruthy();
    expect(getByTestId('forward')).toBeTruthy();
    expect(getByTestId('grouped-action-bar-action-group')).toBeTruthy();
  });

  it('calls onPress when back button is pressed', () => {
    const { getByTestId } = render(
      <GroupedActionBar
        backButton={mockBackButton}
        forwardButton={mockForwardButton}
        actionButtons={mockActionButtons}
      />,
    );

    fireEvent.press(getByTestId('back'));
    expect(mockBackButton.onPress).toHaveBeenCalledTimes(1);
  });

  it('calls onPress when forward button is pressed', () => {
    const { getByTestId } = render(
      <GroupedActionBar
        backButton={mockBackButton}
        forwardButton={mockForwardButton}
        actionButtons={mockActionButtons}
      />,
    );

    fireEvent.press(getByTestId('forward'));
    expect(mockForwardButton.onPress).toHaveBeenCalledTimes(1);
  });

  it('calls onPress when action button is pressed', () => {
    const { getByTestId } = render(
      <GroupedActionBar
        backButton={mockBackButton}
        forwardButton={mockForwardButton}
        actionButtons={mockActionButtons}
      />,
    );

    fireEvent.press(getByTestId('action-1'));
    expect(mockActionButtons[0].onPress).toHaveBeenCalledTimes(1);
  });

  it('hides back button when showBackButton is false', () => {
    const { queryByTestId } = render(
      <GroupedActionBar
        backButton={mockBackButton}
        forwardButton={mockForwardButton}
        actionButtons={mockActionButtons}
        showBackButton={false}
      />,
    );

    expect(queryByTestId('back')).toBeNull();
  });

  it('hides forward button when showForwardButton is false', () => {
    const { queryByTestId } = render(
      <GroupedActionBar
        backButton={mockBackButton}
        forwardButton={mockForwardButton}
        actionButtons={mockActionButtons}
        showForwardButton={false}
      />,
    );

    expect(queryByTestId('forward')).toBeNull();
  });

  it('does not render back button when not provided', () => {
    const { queryByTestId } = render(
      <GroupedActionBar forwardButton={mockForwardButton} actionButtons={mockActionButtons} />,
    );

    expect(queryByTestId('back')).toBeNull();
  });

  it('does not render forward button when not provided', () => {
    const { queryByTestId } = render(
      <GroupedActionBar backButton={mockBackButton} actionButtons={mockActionButtons} />,
    );

    expect(queryByTestId('forward')).toBeNull();
  });

  it('does not render action group when no action buttons provided', () => {
    const { queryByTestId } = render(
      <GroupedActionBar
        backButton={mockBackButton}
        forwardButton={mockForwardButton}
        actionButtons={[]}
      />,
    );

    expect(queryByTestId('grouped-action-bar-action-group')).toBeNull();
  });

  it('renders all action buttons', () => {
    const { getByTestId } = render(
      <GroupedActionBar
        backButton={mockBackButton}
        forwardButton={mockForwardButton}
        actionButtons={mockActionButtons}
      />,
    );

    mockActionButtons.forEach((button) => {
      expect(getByTestId(button.testID!)).toBeTruthy();
    });
  });

  it('generates default testID for buttons without testID', () => {
    const buttonsWithoutTestID = [
      { icon: <Text>Action1</Text>, onPress: jest.fn() },
      { icon: <Text>Action2</Text>, onPress: jest.fn() },
    ];

    const { getByTestId } = render(
      <GroupedActionBar
        backButton={{ icon: <Text>Back</Text>, onPress: jest.fn() }}
        forwardButton={{ icon: <Text>Forward</Text>, onPress: jest.fn() }}
        actionButtons={buttonsWithoutTestID}
      />,
    );

    expect(getByTestId('grouped-action-bar-back-button')).toBeTruthy();
    expect(getByTestId('grouped-action-bar-forward-button')).toBeTruthy();
    expect(getByTestId('grouped-action-bar-action-0')).toBeTruthy();
    expect(getByTestId('grouped-action-bar-action-1')).toBeTruthy();
  });

  it('applies custom testID', () => {
    const { getByTestId } = render(
      <GroupedActionBar
        backButton={mockBackButton}
        forwardButton={mockForwardButton}
        actionButtons={mockActionButtons}
        testID="custom-bar"
      />,
    );

    expect(getByTestId('custom-bar')).toBeTruthy();
  });

  it('disables back button when disabled prop is true', () => {
    const disabledBackButton = { ...mockBackButton, disabled: true };
    const { getByTestId } = render(
      <GroupedActionBar
        backButton={disabledBackButton}
        forwardButton={mockForwardButton}
        actionButtons={mockActionButtons}
      />,
    );

    const button = getByTestId('back');
    expect(button.props.accessibilityState?.disabled).toBe(true);
  });

  it('disables forward button when disabled prop is true', () => {
    const disabledForwardButton = { ...mockForwardButton, disabled: true };
    const { getByTestId } = render(
      <GroupedActionBar
        backButton={mockBackButton}
        forwardButton={disabledForwardButton}
        actionButtons={mockActionButtons}
      />,
    );

    const button = getByTestId('forward');
    expect(button.props.accessibilityState?.disabled).toBe(true);
  });

  it('disables action button when disabled prop is true', () => {
    const disabledActionButtons = [
      { ...mockActionButtons[0], disabled: true },
      mockActionButtons[1],
    ];

    const { getByTestId } = render(
      <GroupedActionBar
        backButton={mockBackButton}
        forwardButton={mockForwardButton}
        actionButtons={disabledActionButtons}
      />,
    );

    const button = getByTestId('action-1');
    expect(button.props.accessibilityState?.disabled).toBe(true);
  });

  it('handles single action button', () => {
    const singleAction = [mockActionButtons[0]];
    const { getByTestId } = render(
      <GroupedActionBar
        backButton={mockBackButton}
        forwardButton={mockForwardButton}
        actionButtons={singleAction}
      />,
    );

    expect(getByTestId('grouped-action-bar-action-group')).toBeTruthy();
    expect(getByTestId('action-1')).toBeTruthy();
  });

  it('handles many action buttons', () => {
    const manyActions = Array.from({ length: 8 }, (_, i) => ({
      icon: <Text>Action{i}</Text>,
      onPress: jest.fn(),
      testID: `action-${i}`,
    }));

    const { getByTestId } = render(
      <GroupedActionBar
        backButton={mockBackButton}
        forwardButton={mockForwardButton}
        actionButtons={manyActions}
      />,
    );

    manyActions.forEach((action) => {
      expect(getByTestId(action.testID!)).toBeTruthy();
    });
  });

  it('applies custom styles', () => {
    const customContainerStyle = { padding: 24 };
    const { getByTestId } = render(
      <GroupedActionBar
        backButton={mockBackButton}
        forwardButton={mockForwardButton}
        actionButtons={mockActionButtons}
        containerStyle={customContainerStyle}
      />,
    );

    const container = getByTestId('grouped-action-bar');
    expect(container.props.style).toMatchObject(expect.arrayContaining([customContainerStyle]));
  });

  it('handles buttons without onPress handler', () => {
    const buttonsWithoutHandler = [{ icon: <Text>Action</Text>, testID: 'no-handler' }];

    const { getByTestId } = render(
      <GroupedActionBar
        backButton={{ icon: <Text>Back</Text> }}
        forwardButton={{ icon: <Text>Forward</Text> }}
        actionButtons={buttonsWithoutHandler}
      />,
    );

    expect(() => {
      fireEvent.press(getByTestId('grouped-action-bar-back-button'));
      fireEvent.press(getByTestId('grouped-action-bar-forward-button'));
      fireEvent.press(getByTestId('no-handler'));
    }).not.toThrow();
  });

  it('renders only navigation buttons without action group', () => {
    const { getByTestId, queryByTestId } = render(
      <GroupedActionBar backButton={mockBackButton} forwardButton={mockForwardButton} />,
    );

    expect(getByTestId('back')).toBeTruthy();
    expect(getByTestId('forward')).toBeTruthy();
    expect(queryByTestId('grouped-action-bar-action-group')).toBeNull();
  });
});
