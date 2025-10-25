import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Components
import { CameraExample, ImagePickerExample, VideoPlayer } from '@/components';

// Env
import Constants from 'expo-constants';

export const HomeScreen = () => {
  const { extra } = Constants.expoConfig ?? {};
  const apiUrl = extra?.apiUrl;
  const env = extra?.env;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text>API URL: {apiUrl}</Text>
      <Text>Environment: {env}</Text>

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
