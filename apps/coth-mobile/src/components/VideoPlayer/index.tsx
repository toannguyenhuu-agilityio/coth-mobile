import React from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

export const VideoPlayer = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        style={styles.video}
        controls
        resizeMode="contain"
        paused={false}
        onError={(error) => {
          console.error('Video error:', error);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 320,
    height: 250,
  },
});
