import React, { useState } from 'react';
import { View } from 'react-native';
import { HighlightSheet, HighlightColor } from './index';

export default {
  title: 'Components/HighlightSheet',
  component: HighlightSheet,
  argTypes: {
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    borderWidth: { control: 'number' },
    borderRadius: { control: 'number' },
    shadowColor: { control: 'color' },
    colorSize: { control: 'number' },
  },
  args: {
    backgroundColor: '#1E1E1E',
    borderColor: '#9B9B9B',
    borderWidth: 1,
    borderRadius: 16,
    shadowColor: 'rgba(255, 255, 255, 0.3)',
    colorSize: 48,
  },
};

export const Default = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <View style={{ padding: 20, backgroundColor: '#000', alignItems: 'center' }}>
      <HighlightSheet
        selectedIndex={selectedIndex ?? undefined}
        onColorSelect={(color, index) => {
          console.log('Color selected:', color, index);
          setSelectedIndex(index);
        }}
      />
    </View>
  );
};

export const WithDefaultSelection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(2);

  return (
    <View style={{ padding: 20, backgroundColor: '#000', alignItems: 'center' }}>
      <HighlightSheet
        selectedIndex={selectedIndex}
        onColorSelect={(color, index) => {
          console.log('Color selected:', color, index);
          setSelectedIndex(index);
        }}
      />
    </View>
  );
};

export const MaroonSelected = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <View style={{ padding: 20, backgroundColor: '#000', alignItems: 'center' }}>
      <HighlightSheet
        selectedIndex={selectedIndex}
        onColorSelect={(color, index) => {
          console.log('Color selected:', color, index);
          setSelectedIndex(index);
        }}
      />
    </View>
  );
};

export const OliveSelected = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(2);

  return (
    <View style={{ padding: 20, backgroundColor: '#000', alignItems: 'center' }}>
      <HighlightSheet
        selectedIndex={selectedIndex}
        onColorSelect={(color, index) => {
          console.log('Color selected:', color, index);
          setSelectedIndex(index);
        }}
      />
    </View>
  );
};

export const CustomColors = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const customColors: HighlightColor[] = [
    { color: '#FF6B6B', label: 'Red' },
    { color: '#4ECDC4', label: 'Cyan' },
    { color: '#45B7D1', label: 'Blue' },
    { color: '#FFA07A', label: 'Orange' },
    { color: '#98D8C8', label: 'Mint' },
    { color: '#F7DC6F', label: 'Yellow' },
    { color: '#BB8FCE', label: 'Purple' },
    { color: '#85C1E2', label: 'Sky' },
  ];

  return (
    <View style={{ padding: 20, backgroundColor: '#000', alignItems: 'center' }}>
      <HighlightSheet
        colors={customColors}
        selectedIndex={selectedIndex ?? undefined}
        onColorSelect={(color, index) => {
          console.log('Color selected:', color, index);
          setSelectedIndex(index);
        }}
      />
    </View>
  );
};

export const SmallColors = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <View style={{ padding: 20, backgroundColor: '#000', alignItems: 'center' }}>
      <HighlightSheet
        selectedIndex={selectedIndex ?? undefined}
        onColorSelect={(color, index) => {
          console.log('Color selected:', color, index);
          setSelectedIndex(index);
        }}
        colorSize={36}
      />
    </View>
  );
};

export const LargeColors = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <View style={{ padding: 20, backgroundColor: '#000', alignItems: 'center' }}>
      <HighlightSheet
        selectedIndex={selectedIndex ?? undefined}
        onColorSelect={(color, index) => {
          console.log('Color selected:', color, index);
          setSelectedIndex(index);
        }}
        colorSize={60}
      />
    </View>
  );
};

export const CustomBorderRadius = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <View style={{ padding: 20, backgroundColor: '#000', alignItems: 'center' }}>
      <HighlightSheet
        selectedIndex={selectedIndex ?? undefined}
        onColorSelect={(color, index) => {
          console.log('Color selected:', color, index);
          setSelectedIndex(index);
        }}
        borderRadius={24}
      />
    </View>
  );
};

export const CustomBackgroundColor = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <View style={{ padding: 20, backgroundColor: '#000', alignItems: 'center' }}>
      <HighlightSheet
        selectedIndex={selectedIndex ?? undefined}
        onColorSelect={(color, index) => {
          console.log('Color selected:', color, index);
          setSelectedIndex(index);
        }}
        backgroundColor="#2C2C2C"
        borderColor="#CCCCCC"
      />
    </View>
  );
};

export const NoBorder = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <View style={{ padding: 20, backgroundColor: '#000', alignItems: 'center' }}>
      <HighlightSheet
        selectedIndex={selectedIndex ?? undefined}
        onColorSelect={(color, index) => {
          console.log('Color selected:', color, index);
          setSelectedIndex(index);
        }}
        borderWidth={0}
      />
    </View>
  );
};

export const FewColors = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const fewColors: HighlightColor[] = [
    { color: '#562C30', label: 'Maroon' },
    { color: '#6F513B', label: 'Brown' },
    { color: '#544D01', label: 'Olive' },
    { color: '#4E5641', label: 'Sage' },
  ];

  return (
    <View style={{ padding: 20, backgroundColor: '#000', alignItems: 'center' }}>
      <HighlightSheet
        colors={fewColors}
        selectedIndex={selectedIndex ?? undefined}
        onColorSelect={(color, index) => {
          console.log('Color selected:', color, index);
          setSelectedIndex(index);
        }}
      />
    </View>
  );
};

export const InteractiveDemo = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <View style={{ padding: 20, backgroundColor: '#000', alignItems: 'center', gap: 20 }}>
      <HighlightSheet
        selectedIndex={selectedIndex ?? undefined}
        onColorSelect={(color, index) => {
          console.log('Color selected:', color, index);
          setSelectedIndex(index);
        }}
      />
      {selectedIndex !== null && (
        <View
          style={{
            padding: 16,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 8,
          }}
        >
          <View style={{ fontSize: 14, color: '#FFFFFF' }}>
            Selected: Color {selectedIndex + 1}
          </View>
        </View>
      )}
    </View>
  );
};
