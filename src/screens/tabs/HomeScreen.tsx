import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Sentry from '@sentry/react-native';

// Components
import { CameraExample, ImagePickerExample, VideoPlayer } from '@/components';

// Env
import Constants from 'expo-constants';
import { Button } from 'src/components/common/Button';

export const HomeScreen = () => {
  const { extra } = Constants.expoConfig ?? {};
  const apiUrl = extra?.apiUrl;
  const env = extra?.env;

  const testSentry = () => {
    console.log('testSentry');
    try {
      throw new Error('Test Sentry Error from HomeScreen');
    } catch (error) {
      Sentry.captureException(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text>API URL: {apiUrl}</Text>
      <Text>Environment: {env}</Text>
      <Button label="Try!" onPress={testSentry} />
      ;
      <ImagePickerExample />
      <CameraExample />
      <VideoPlayer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
