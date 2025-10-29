import React from 'react';
import { View, Text } from 'react-native';
import { TextActionButtons } from './index';

export default {
  title: 'Components/TextActionButtons',
  component: TextActionButtons,
  argTypes: {
    buttonBackgroundColor: { control: 'color' },
    buttonTextColor: { control: 'color' },
    borderRadius: { control: 'number' },
    gap: { control: 'number' },
  },
  args: {
    buttonBackgroundColor: 'rgba(58, 58, 60, 1)',
    buttonTextColor: '#FFFFFF',
    borderRadius: 12,
    gap: 8,
  },
};

// Mock icons
const HighlighterIcon = () => (
  <View style={{ width: 24, height: 24, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 18, color: '#FFFFFF' }}>🖍</Text>
  </View>
);

const NoteIcon = () => (
  <View style={{ width: 24, height: 24, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 18, color: '#FFFFFF' }}>✏️</Text>
  </View>
);

export const Default = (props: any) => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <TextActionButtons
      {...props}
      actions={[
        {
          label: 'Highlight',
          icon: <HighlighterIcon />,
          badgeText: 'A',
          onPress: () => console.log('Highlight pressed'),
        },
        {
          label: 'Note',
          icon: <NoteIcon />,
          onPress: () => console.log('Note pressed'),
        },
      ]}
    />
  </View>
);

export const HighlightAndNote = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <TextActionButtons
      actions={[
        {
          label: 'Highlight',
          icon: <HighlighterIcon />,
          badgeText: 'A',
          onPress: () => console.log('Highlight pressed'),
        },
        {
          label: 'Note',
          icon: <NoteIcon />,
          onPress: () => console.log('Note pressed'),
        },
      ]}
    />
  </View>
);

export const OnlyHighlight = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <TextActionButtons
      actions={[
        {
          label: 'Highlight',
          icon: <HighlighterIcon />,
          badgeText: 'A',
          onPress: () => console.log('Highlight pressed'),
        },
      ]}
    />
  </View>
);

export const OnlyNote = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <TextActionButtons
      actions={[
        {
          label: 'Note',
          icon: <NoteIcon />,
          onPress: () => console.log('Note pressed'),
        },
      ]}
    />
  </View>
);

export const WithoutIcons = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <TextActionButtons
      actions={[
        {
          label: 'Highlight',
          badgeText: 'A',
          onPress: () => console.log('Highlight pressed'),
        },
        {
          label: 'Note',
          onPress: () => console.log('Note pressed'),
        },
      ]}
    />
  </View>
);

export const WithoutBadge = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <TextActionButtons
      actions={[
        {
          label: 'Highlight',
          icon: <HighlighterIcon />,
          onPress: () => console.log('Highlight pressed'),
        },
        {
          label: 'Note',
          icon: <NoteIcon />,
          onPress: () => console.log('Note pressed'),
        },
      ]}
    />
  </View>
);

export const ThreeActions = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <TextActionButtons
      actions={[
        {
          label: 'Highlight',
          icon: <HighlighterIcon />,
          badgeText: 'A',
          onPress: () => console.log('Highlight pressed'),
        },
        {
          label: 'Note',
          icon: <NoteIcon />,
          onPress: () => console.log('Note pressed'),
        },
        {
          label: 'Share',
          icon: <Text style={{ fontSize: 18, color: '#FFFFFF' }}>📤</Text>,
          onPress: () => console.log('Share pressed'),
        },
      ]}
    />
  </View>
);

export const CustomBadgeColors = () => (
  <View style={{ padding: 20, backgroundColor: '#000', gap: 16 }}>
    <TextActionButtons
      actions={[
        {
          label: 'Highlight',
          icon: <HighlighterIcon />,
          badgeText: 'A',
          badgeBackgroundColor: '#FF6B6B',
          onPress: () => console.log('Red highlight pressed'),
        },
        {
          label: 'Note',
          icon: <NoteIcon />,
          onPress: () => console.log('Note pressed'),
        },
      ]}
    />
    <TextActionButtons
      actions={[
        {
          label: 'Highlight',
          icon: <HighlighterIcon />,
          badgeText: 'B',
          badgeBackgroundColor: '#4ECDC4',
          badgeTextColor: '#000000',
          onPress: () => console.log('Cyan highlight pressed'),
        },
        {
          label: 'Note',
          icon: <NoteIcon />,
          onPress: () => console.log('Note pressed'),
        },
      ]}
    />
  </View>
);

export const CustomButtonColors = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <TextActionButtons
      actions={[
        {
          label: 'Highlight',
          icon: <HighlighterIcon />,
          badgeText: 'A',
          onPress: () => console.log('Highlight pressed'),
        },
        {
          label: 'Note',
          icon: <NoteIcon />,
          onPress: () => console.log('Note pressed'),
        },
      ]}
      buttonBackgroundColor="rgba(37, 135, 160, 0.3)"
      buttonTextColor="#2587A0"
    />
  </View>
);

export const CustomBorderRadius = () => (
  <View style={{ padding: 20, backgroundColor: '#000', gap: 16 }}>
    <TextActionButtons
      actions={[
        {
          label: 'Highlight',
          icon: <HighlighterIcon />,
          badgeText: 'A',
          onPress: () => console.log('Highlight pressed'),
        },
        {
          label: 'Note',
          icon: <NoteIcon />,
          onPress: () => console.log('Note pressed'),
        },
      ]}
      borderRadius={4}
    />
    <TextActionButtons
      actions={[
        {
          label: 'Highlight',
          icon: <HighlighterIcon />,
          badgeText: 'A',
          onPress: () => console.log('Highlight pressed'),
        },
        {
          label: 'Note',
          icon: <NoteIcon />,
          onPress: () => console.log('Note pressed'),
        },
      ]}
      borderRadius={20}
    />
  </View>
);

export const CustomGap = () => (
  <View style={{ padding: 20, backgroundColor: '#000', gap: 16 }}>
    <TextActionButtons
      actions={[
        {
          label: 'Highlight',
          icon: <HighlighterIcon />,
          badgeText: 'A',
          onPress: () => console.log('Highlight pressed'),
        },
        {
          label: 'Note',
          icon: <NoteIcon />,
          onPress: () => console.log('Note pressed'),
        },
      ]}
      gap={4}
    />
    <TextActionButtons
      actions={[
        {
          label: 'Highlight',
          icon: <HighlighterIcon />,
          badgeText: 'A',
          onPress: () => console.log('Highlight pressed'),
        },
        {
          label: 'Note',
          icon: <NoteIcon />,
          onPress: () => console.log('Note pressed'),
        },
      ]}
      gap={16}
    />
  </View>
);

export const Disabled = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <TextActionButtons
      actions={[
        {
          label: 'Highlight',
          icon: <HighlighterIcon />,
          badgeText: 'A',
          disabled: true,
          onPress: () => console.log('Should not fire'),
        },
        {
          label: 'Note',
          icon: <NoteIcon />,
          disabled: true,
          onPress: () => console.log('Should not fire'),
        },
      ]}
    />
  </View>
);

export const CustomLabels = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <TextActionButtons
      actions={[
        {
          label: 'Mark',
          icon: <HighlighterIcon />,
          badgeText: 'M',
          onPress: () => console.log('Mark pressed'),
        },
        {
          label: 'Annotate',
          icon: <NoteIcon />,
          onPress: () => console.log('Annotate pressed'),
        },
      ]}
    />
  </View>
);

export const DifferentBadgeLetters = () => (
  <View style={{ padding: 20, backgroundColor: '#000', gap: 16 }}>
    <TextActionButtons
      actions={[
        {
          label: 'Highlight',
          icon: <HighlighterIcon />,
          badgeText: 'A',
          onPress: () => console.log('A pressed'),
        },
        {
          label: 'Note',
          icon: <NoteIcon />,
          onPress: () => console.log('Note pressed'),
        },
      ]}
    />
    <TextActionButtons
      actions={[
        {
          label: 'Highlight',
          icon: <HighlighterIcon />,
          badgeText: 'B',
          onPress: () => console.log('B pressed'),
        },
        {
          label: 'Note',
          icon: <NoteIcon />,
          onPress: () => console.log('Note pressed'),
        },
      ]}
    />
    <TextActionButtons
      actions={[
        {
          label: 'Highlight',
          icon: <HighlighterIcon />,
          badgeText: 'C',
          onPress: () => console.log('C pressed'),
        },
        {
          label: 'Note',
          icon: <NoteIcon />,
          onPress: () => console.log('Note pressed'),
        },
      ]}
    />
  </View>
);
