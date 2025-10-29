import React from 'react';
import { View } from 'react-native';
import { ImagePlaceholder } from './index';

export default {
  title: 'Components/ImagePlaceholder',
  component: ImagePlaceholder,
  argTypes: {
    label: { control: 'text' },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    backgroundColor: { control: 'color' },
    iconColor: { control: 'color' },
    labelColor: { control: 'color' },
  },
  args: {
    label: 'PNG',
    size: 'medium',
  },
};

export const Default = (props: any) => <ImagePlaceholder {...props} />;

export const Small = (props: any) => <ImagePlaceholder {...props} size="small" />;

export const Medium = (props: any) => <ImagePlaceholder {...props} size="medium" />;

export const Large = (props: any) => <ImagePlaceholder {...props} size="large" />;

export const DifferentLabels = () => (
  <View style={{ gap: 16, padding: 16, backgroundColor: '#1a1a1a' }}>
    <ImagePlaceholder label="PNG" />
    <ImagePlaceholder label="JPG" />
    <ImagePlaceholder label="GIF" />
    <ImagePlaceholder label="PDF" />
  </View>
);

export const DifferentSizes = () => (
  <View style={{ gap: 16, padding: 16, backgroundColor: '#1a1a1a' }}>
    <ImagePlaceholder size="small" />
    <ImagePlaceholder size="medium" />
    <ImagePlaceholder size="large" />
  </View>
);

export const CustomColors = () => (
  <View style={{ gap: 16, padding: 16, backgroundColor: '#1a1a1a' }}>
    <ImagePlaceholder
      label="PNG"
      backgroundColor="rgba(37, 135, 160, 0.1)"
      iconColor="#2587A0"
      labelColor="#2587A0"
    />
    <ImagePlaceholder
      label="JPG"
      backgroundColor="rgba(112, 153, 167, 0.1)"
      iconColor="#7099A7"
      labelColor="#7099A7"
    />
  </View>
);
