import React from 'react';
import { render } from '@testing-library/react-native';
import { VideoPlayer } from '@/components';

jest.mock('react-native-video', () => {
  const { View } = require('react-native');
  return function MockVideo(props: any) {
    return <View {...props} testID="mock-video" />;
  };
});

describe('VideoPlayer', () => {
  it('renders video with correct source', () => {
    const { getByTestId } = render(<VideoPlayer />);
    const video = getByTestId('mock-video');

    expect(video).toBeTruthy();
    expect(video.props.source.uri).toBe(
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    );
  });

  it('calls onError when video error occurs', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const { getByTestId } = render(<VideoPlayer />);
    const video = getByTestId('mock-video');

    // Simulate onError
    video.props.onError({ message: 'Playback failed' });

    expect(consoleErrorSpy).toHaveBeenCalledWith('Video error:', { message: 'Playback failed' });

    consoleErrorSpy.mockRestore();
  });
});
