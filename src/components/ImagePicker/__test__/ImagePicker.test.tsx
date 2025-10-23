import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { ImagePickerExample } from '@/components';

// Mock the expo-image-picker module
jest.mock('expo-image-picker', () => ({
  requestMediaLibraryPermissionsAsync: jest.fn(),
  launchImageLibraryAsync: jest.fn(),
}));

import * as ImagePicker from 'expo-image-picker';

describe('ImagePickerExample', () => {
  beforeEach(() => {
    global.alert = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should request permissions and pick an image successfully', async () => {
    // Mock permission granted
    (ImagePicker.requestMediaLibraryPermissionsAsync as jest.Mock).mockResolvedValueOnce({
      status: 'granted',
    });

    // Mock image picker result (not canceled)
    (ImagePicker.launchImageLibraryAsync as jest.Mock).mockResolvedValueOnce({
      canceled: false,
      assets: [{ uri: 'mock://image.jpg' }],
    });

    const { getByText, queryByTestId } = render(<ImagePickerExample />);

    // Press the button
    fireEvent.press(getByText('Pick an image from gallery'));

    // Wait for async updates (state change)
    await waitFor(() => {
      const img = queryByTestId('picked-image');
      expect(img).toBeTruthy();
    });
  });

  it('should show alert if permission denied', async () => {
    // Mock permission denied
    (ImagePicker.requestMediaLibraryPermissionsAsync as jest.Mock).mockResolvedValueOnce({
      status: 'denied',
    });

    // Mock alert
    const alertSpy = jest.spyOn(globalThis, 'alert').mockImplementation(() => {});

    const { getByText } = render(<ImagePickerExample />);

    fireEvent.press(getByText('Pick an image from gallery'));

    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith(
        'Sorry, we need media library permissions to make this work!',
      );
    });

    alertSpy.mockRestore();
  });

  it('should do nothing if user cancels image picking', async () => {
    // Mock permission granted
    (ImagePicker.requestMediaLibraryPermissionsAsync as jest.Mock).mockResolvedValueOnce({
      status: 'granted',
    });

    // Mock canceled picking
    (ImagePicker.launchImageLibraryAsync as jest.Mock).mockResolvedValueOnce({
      canceled: true,
    });

    const { getByText, queryByRole } = render(<ImagePickerExample />);

    fireEvent.press(getByText('Pick an image from gallery'));

    await waitFor(() => {
      expect(queryByRole('image')).toBeNull();
    });
  });
});
