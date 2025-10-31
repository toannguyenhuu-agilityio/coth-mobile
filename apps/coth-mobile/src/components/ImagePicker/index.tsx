import React, { useState } from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export const ImagePickerExample = () => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // Ask for permission
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need media library permissions to make this work!');
      return;
    }

    // Launch image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'], // new syntax: use string instead of enum
      allowsEditing: true, // enable cropping
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View>
      <Button title="Pick an image from gallery" onPress={pickImage} />
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
