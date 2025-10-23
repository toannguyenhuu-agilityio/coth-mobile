import * as ImagePicker from 'expo-image-picker';
import { Button, Image, View } from 'react-native';
import React, { useState } from 'react';

export const CameraExample = () => {
  const [image, setImage] = useState<string | null>(null);

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Camera permission is required!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ padding: 10 }}>
      <Button title="Take a photo" onPress={openCamera} />
      {image && (
        <Image
          testID="picked-image"
          source={{ uri: image }}
          style={{ width: 300, height: 300, marginTop: 20, borderRadius: 10 }}
        />
      )}
    </View>
  );
};
