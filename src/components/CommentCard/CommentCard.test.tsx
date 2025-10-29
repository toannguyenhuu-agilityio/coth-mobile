import React from 'react';
import { Text } from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';

import { CommentCard } from './index';

describe('CommentCard', () => {
  const defaultProps = {
    name: 'John Doe',
    comment: 'This is a test comment',
  };

  it('renders correctly with required props', () => {
    const { getByTestId } = render(<CommentCard {...defaultProps} />);

    expect(getByTestId('comment-card')).toBeTruthy();
    expect(getByTestId('comment-card-name')).toBeTruthy();
    expect(getByTestId('comment-card-comment')).toBeTruthy();
  });

  it('displays correct name', () => {
    const { getByTestId } = render(<CommentCard {...defaultProps} />);

    const name = getByTestId('comment-card-name');
    expect(name.props.children).toBe('John Doe');
  });

  it('displays correct comment', () => {
    const { getByTestId } = render(<CommentCard {...defaultProps} />);

    const comment = getByTestId('comment-card-comment');
    expect(comment.props.children).toBe('This is a test comment');
  });

  it('displays time ago when provided', () => {
    const { getByTestId } = render(<CommentCard {...defaultProps} timeAgo="Just now" />);

    const time = getByTestId('comment-card-time');
    expect(time.props.children).toBe('Just now');
  });

  it('does not display time when not provided', () => {
    const { queryByTestId } = render(<CommentCard {...defaultProps} />);

    expect(queryByTestId('comment-card-time')).toBeNull();
  });

  it('displays reaction count when provided', () => {
    const { getByTestId } = render(<CommentCard {...defaultProps} reactionCount={123} />);

    const reactionCount = getByTestId('comment-card-reaction-count');
    expect(reactionCount.props.children).toBe('123');
  });

  it('formats large reaction count with comma', () => {
    const { getByTestId } = render(<CommentCard {...defaultProps} reactionCount={1673} />);

    const reactionCount = getByTestId('comment-card-reaction-count');
    expect(reactionCount.props.children).toBe('1,673');
  });

  it('does not display reaction count when not provided', () => {
    const { queryByTestId } = render(<CommentCard {...defaultProps} />);

    expect(queryByTestId('comment-card-reaction-count')).toBeNull();
  });

  it('hides reaction button when showReaction is false', () => {
    const { queryByTestId } = render(<CommentCard {...defaultProps} showReaction={false} />);

    expect(queryByTestId('comment-card-reaction-button')).toBeNull();
  });

  it('shows reaction button by default', () => {
    const { getByTestId } = render(<CommentCard {...defaultProps} />);

    expect(getByTestId('comment-card-reaction-button')).toBeTruthy();
  });

  it('calls onReactionPress when reaction button is pressed', () => {
    const onReactionPress = jest.fn();
    const { getByTestId } = render(
      <CommentCard {...defaultProps} onReactionPress={onReactionPress} />,
    );

    fireEvent.press(getByTestId('comment-card-reaction-button'));
    expect(onReactionPress).toHaveBeenCalledTimes(1);
  });

  it('renders default avatar when no avatar provided', () => {
    const { getByTestId } = render(<CommentCard {...defaultProps} />);

    const avatar = getByTestId('comment-card-avatar');
    expect(avatar).toBeTruthy();
  });

  it('renders avatar image when provided', () => {
    const avatarSource = { uri: 'https://example.com/avatar.jpg' };
    const { getByTestId } = render(<CommentCard {...defaultProps} avatar={avatarSource} />);

    const avatar = getByTestId('comment-card-avatar');
    expect(avatar.props.source).toEqual(avatarSource);
  });

  it('calls onAvatarPress when avatar is pressed', () => {
    const onAvatarPress = jest.fn();
    const avatarSource = { uri: 'https://example.com/avatar.jpg' };
    const { getByTestId } = render(
      <CommentCard {...defaultProps} avatar={avatarSource} onAvatarPress={onAvatarPress} />,
    );

    fireEvent.press(getByTestId('comment-card-avatar-button'));
    expect(onAvatarPress).toHaveBeenCalledTimes(1);
  });

  it('wraps card in TouchableOpacity when onPress is provided', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<CommentCard {...defaultProps} onPress={onPress} />);

    expect(getByTestId('comment-card-touchable')).toBeTruthy();
  });

  it('calls onPress when card is pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<CommentCard {...defaultProps} onPress={onPress} />);

    fireEvent.press(getByTestId('comment-card-touchable'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('does not wrap card in TouchableOpacity when onPress is not provided', () => {
    const { queryByTestId } = render(<CommentCard {...defaultProps} />);

    expect(queryByTestId('comment-card-touchable')).toBeNull();
  });

  it('renders custom avatar component when provided', () => {
    const CustomAvatar = () => <Text>Custom Avatar</Text>;
    const { queryByTestId } = render(
      <CommentCard {...defaultProps} avatarComponent={<CustomAvatar />} />,
    );

    expect(queryByTestId('comment-card-avatar')).toBeNull();
  });

  it('renders custom reaction icon when provided', () => {
    const customIcon = <Text testID="custom-reaction">❤️</Text>;
    const { getByTestId } = render(
      <CommentCard {...defaultProps} reactionIcon={customIcon} reactionCount={10} />,
    );

    expect(getByTestId('custom-reaction')).toBeTruthy();
  });

  it('applies custom testID', () => {
    const { getByTestId } = render(<CommentCard {...defaultProps} testID="custom-comment" />);

    expect(getByTestId('custom-comment')).toBeTruthy();
    expect(getByTestId('custom-comment-name')).toBeTruthy();
    expect(getByTestId('custom-comment-comment')).toBeTruthy();
  });

  it('handles zero reaction count', () => {
    const { getByTestId } = render(<CommentCard {...defaultProps} reactionCount={0} />);

    const reactionCount = getByTestId('comment-card-reaction-count');
    expect(reactionCount.props.children).toBe('0');
  });

  it('handles very long comments', () => {
    const longComment = 'A'.repeat(500);
    const { getByTestId } = render(<CommentCard {...defaultProps} comment={longComment} />);

    const comment = getByTestId('comment-card-comment');
    expect(comment.props.children).toBe(longComment);
  });

  it('handles very long names', () => {
    const longName = 'Very Long Name That Might Overflow';
    const { getByTestId } = render(<CommentCard {...defaultProps} name={longName} />);

    const name = getByTestId('comment-card-name');
    expect(name.props.children).toBe(longName);
  });

  it('handles special characters in name', () => {
    const specialName = "O'Brien-Smith";
    const { getByTestId } = render(<CommentCard {...defaultProps} name={specialName} />);

    const name = getByTestId('comment-card-name');
    expect(name.props.children).toBe(specialName);
  });

  it('handles special characters in comment', () => {
    const specialComment = 'Test with emoji 🙏 and symbols @#$%';
    const { getByTestId } = render(<CommentCard {...defaultProps} comment={specialComment} />);

    const comment = getByTestId('comment-card-comment');
    expect(comment.props.children).toBe(specialComment);
  });

  it('applies custom styles', () => {
    const customContainerStyle = { padding: 24 };
    const { getByTestId } = render(
      <CommentCard {...defaultProps} containerStyle={customContainerStyle} />,
    );

    const container = getByTestId('comment-card');
    expect(container.props.style).toMatchObject(expect.arrayContaining([customContainerStyle]));
  });

  it('displays first letter of name in default avatar', () => {
    const { getByTestId } = render(<CommentCard {...defaultProps} name="Alice" />);

    expect(getByTestId('comment-card-avatar')).toBeTruthy();
  });
});
