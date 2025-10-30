import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { CameraExample } from '@/components/';
import * as ImagePicker from 'expo-image-picker';

// Mock expo-image-picker module
jest.mock('expo-image-picker', () => ({
  requestCameraPermissionsAsync: jest.fn(),
  launchCameraAsync: jest.fn(),
}));

describe('CameraExample', () => {
  beforeEach(() => {
    global.alert = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('alerts if camera permission is not granted', async () => {
    // Mock permission denied
    (ImagePicker.requestCameraPermissionsAsync as jest.Mock).mockResolvedValueOnce({
      status: 'denied',
    });

    const alertSpy = jest.spyOn(global, 'alert').mockImplementation(() => {});

    const { getByText } = render(<CameraExample />);
    fireEvent.press(getByText('Take a photo'));

    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith('Camera permission is required!');
    });

    alertSpy.mockRestore();
  });

  it('sets image when camera returns result', async () => {
    // Mock permission granted
    (ImagePicker.requestCameraPermissionsAsync as jest.Mock).mockResolvedValueOnce({
      status: 'granted',
    });

    // Mock successful photo capture
    (ImagePicker.launchCameraAsync as jest.Mock).mockResolvedValueOnce({
      canceled: false,
      assets: [{ uri: 'file://test-photo.jpg' }],
    });

    const { getByText, getByTestId } = render(<CameraExample />);
    fireEvent.press(getByText('Take a photo'));

    // Wait for the image to appear
    await waitFor(() => {
      const image = getByTestId('picked-image');
      expect(image.props.source.uri).toBe('file://test-photo.jpg');
    });
  });

  it('does nothing if camera action is canceled', async () => {
    (ImagePicker.requestCameraPermissionsAsync as jest.Mock).mockResolvedValueOnce({
      status: 'granted',
    });

    (ImagePicker.launchCameraAsync as jest.Mock).mockResolvedValueOnce({
      canceled: true,
    });

    const { getByText, queryByRole } = render(<CameraExample />);
    fireEvent.press(getByText('Take a photo'));

    await waitFor(() => {
      expect(queryByRole('image')).toBeNull();
    });
  });
});
