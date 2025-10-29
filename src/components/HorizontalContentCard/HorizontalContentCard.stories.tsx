import React from 'react';
import { View } from 'react-native';
import { HorizontalContentCard } from './index';

export default {
  title: 'Components/HorizontalContentCard',
  component: HorizontalContentCard,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    backgroundColor: { control: 'color' },
    borderRadius: { control: 'number' },
    thumbnailWidth: { control: 'number' },
    thumbnailHeight: { control: 'number' },
  },
  args: {
    title: "Why is God ignoring me? Unanswered prayers and God's will",
    subtitle: 'Bible Class',
    backgroundColor: 'rgba(40, 50, 55, 0.95)',
    borderRadius: 12,
    thumbnailWidth: 190,
    thumbnailHeight: 120,
  },
};

export const Default = (props: any) => (
  <View style={{ padding: 16, backgroundColor: '#000' }}>
    <HorizontalContentCard
      {...props}
      imageUrl="https://picsum.photos/400/300?random=1"
      onPress={() => console.log('Card pressed')}
    />
  </View>
);

export const WithPlaceholderImage = (props: any) => (
  <View style={{ padding: 16, backgroundColor: '#000' }}>
    <HorizontalContentCard {...props} onPress={() => console.log('Card pressed')} />
  </View>
);

export const WithoutSubtitle = (props: any) => (
  <View style={{ padding: 16, backgroundColor: '#000' }}>
    <HorizontalContentCard
      {...props}
      title="Understanding Faith in Difficult Times"
      imageUrl="https://picsum.photos/400/300?random=2"
      onPress={() => console.log('Card pressed')}
    />
  </View>
);

export const LongTitle = (props: any) => (
  <View style={{ padding: 16, backgroundColor: '#000' }}>
    <HorizontalContentCard
      {...props}
      title="Why is God ignoring me? Unanswered prayers and understanding God's will in our lives during difficult times"
      subtitle="Extended Bible Study Session"
      imageUrl="https://picsum.photos/400/300?random=3"
      onPress={() => console.log('Card pressed')}
    />
  </View>
);

export const CustomBackgroundColor = (props: any) => (
  <View style={{ padding: 16, backgroundColor: '#000' }}>
    <HorizontalContentCard
      {...props}
      backgroundColor="rgba(37, 135, 160, 0.2)"
      imageUrl="https://picsum.photos/400/300?random=4"
      onPress={() => console.log('Card pressed')}
    />
  </View>
);

export const CustomBorderRadius = (props: any) => (
  <View style={{ padding: 16, backgroundColor: '#000' }}>
    <HorizontalContentCard
      {...props}
      borderRadius={20}
      imageUrl="https://picsum.photos/400/300?random=5"
      onPress={() => console.log('Card pressed')}
    />
  </View>
);

export const LargeThumbnail = (props: any) => (
  <View style={{ padding: 16, backgroundColor: '#000' }}>
    <HorizontalContentCard
      {...props}
      thumbnailWidth={240}
      thumbnailHeight={150}
      imageUrl="https://picsum.photos/400/300?random=6"
      onPress={() => console.log('Card pressed')}
    />
  </View>
);

export const SmallThumbnail = (props: any) => (
  <View style={{ padding: 16, backgroundColor: '#000' }}>
    <HorizontalContentCard
      {...props}
      thumbnailWidth={140}
      thumbnailHeight={90}
      imageUrl="https://picsum.photos/400/300?random=7"
      onPress={() => console.log('Card pressed')}
    />
  </View>
);

export const NonInteractive = (props: any) => (
  <View style={{ padding: 16, backgroundColor: '#000' }}>
    <HorizontalContentCard {...props} imageUrl="https://picsum.photos/400/300?random=8" />
  </View>
);

export const MultipleCards = (props: any) => (
  <View style={{ gap: 16, padding: 16, backgroundColor: '#000' }}>
    <HorizontalContentCard
      title="Why is God ignoring me? Unanswered prayers"
      subtitle="Bible Class"
      imageUrl="https://picsum.photos/400/300?random=9"
      onPress={() => console.log('Card 1 pressed')}
    />
    <HorizontalContentCard
      title="Finding Peace in Chaos"
      subtitle="Wednesday Service"
      imageUrl="https://picsum.photos/400/300?random=10"
      onPress={() => console.log('Card 2 pressed')}
    />
    <HorizontalContentCard
      title="The Power of Prayer"
      subtitle="Prayer Meeting"
      imageUrl="https://picsum.photos/400/300?random=11"
      onPress={() => console.log('Card 3 pressed')}
    />
  </View>
);

export const DarkTheme = (props: any) => (
  <View style={{ padding: 16, backgroundColor: '#000' }}>
    <HorizontalContentCard
      {...props}
      backgroundColor="rgba(20, 20, 20, 0.98)"
      imageUrl="https://picsum.photos/400/300?random=12"
      onPress={() => console.log('Card pressed')}
    />
  </View>
);

export const LightTheme = (props: any) => (
  <View style={{ padding: 16, backgroundColor: '#f0f0f0' }}>
    <HorizontalContentCard
      {...props}
      backgroundColor="rgba(255, 255, 255, 0.95)"
      imageUrl="https://picsum.photos/400/300?random=13"
      onPress={() => console.log('Card pressed')}
    />
  </View>
);
