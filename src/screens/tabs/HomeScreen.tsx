import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Sentry from '@sentry/react-native';

// Components
import { CameraExample, ImagePickerExample, VideoPlayer } from '@/components';

// Env
import { Button } from 'src/components/common/Button';
import { typography } from '@/theme/typography';

export const HomeScreen = () => {
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
      <Text style={styles.regularText}>Regular Font - Akzidenz Grotesk Pro</Text>
      <Text style={styles.lightText}>Light Font - Akzidenz Grotesk Pro Light</Text>
      <Text style={styles.mediumText}>Medium Font - Akzidenz Grotesk Pro Medium</Text>
      <Text style={styles.boldText}>Bold Font - Akzidenz Grotesk Pro Bold</Text>
      <Text style={styles.robotoText}>Roboto Font - Sample Text</Text>
      <Text style={styles.frankGothicText}>Welcome to Core of the Heart Daily</Text>
      <Button label="Try!" onPress={testSentry} />
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
    gap: 16,
  },
  regularText: {
    fontSize: 18,
    fontFamily: typography.fontWeight.regular,
  },
  lightText: {
    fontSize: 18,
    fontFamily: typography.fontWeight.light,
  },
  mediumText: {
    fontSize: 18,
    fontFamily: typography.fontWeight.medium,
  },
  boldText: {
    fontSize: 18,
    fontFamily: typography.fontWeight.bold,
  },
  robotoText: {
    fontSize: 18,
    fontFamily: typography.fontFamily.robotoMono,
  },
  frankGothicText: {
    fontSize: 18,
    fontFamily: typography.fontFamily.frankGothic,
    textTransform: 'uppercase',
  },
});
