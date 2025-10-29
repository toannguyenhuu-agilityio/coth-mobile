import React from 'react';
import { View } from 'react-native';
import { ContentListCard, ContentListCardItem } from './index';

export default {
  title: 'Components/ContentListCard',
  component: ContentListCard,
  argTypes: {
    backgroundColor: { control: 'color' },
    borderRadius: { control: 'number' },
    thumbnailSize: { control: 'number' },
    itemSpacing: { control: 'number' },
  },
  args: {
    backgroundColor: 'rgba(30, 30, 30, 0.95)',
    borderRadius: 16,
    thumbnailSize: 88,
    itemSpacing: 0,
  },
};

const mockItems: ContentListCardItem[] = [
  {
    id: '1',
    title: "Why is God ignoring me? Unanswered prayers and God's will",
    subtitle: 'Bible Class',
    imageUrl: 'https://picsum.photos/200/200?random=1',
    onPress: () => console.log('Item 1 pressed'),
  },
  {
    id: '2',
    title: 'Why is God ignoring me? Unanswered prayers and what to do',
    subtitle: 'After Service',
    imageUrl: 'https://picsum.photos/200/200?random=2',
    onPress: () => console.log('Item 2 pressed'),
  },
];

const mockItemsWithPlaceholder: ContentListCardItem[] = [
  {
    id: '1',
    title: 'Understanding Faith in Difficult Times',
    subtitle: 'Bible Study',
    onPress: () => console.log('Item 1 pressed'),
  },
  {
    id: '2',
    title: 'Walking with God Daily',
    subtitle: 'Morning Devotional',
    onPress: () => console.log('Item 2 pressed'),
  },
];

const longListItems: ContentListCardItem[] = [
  {
    id: '1',
    title: "Why is God ignoring me? Unanswered prayers and God's will",
    subtitle: 'Bible Class',
    imageUrl: 'https://picsum.photos/200/200?random=1',
  },
  {
    id: '2',
    title: 'Why is God ignoring me? Unanswered prayers and what to do',
    subtitle: 'After Service',
    imageUrl: 'https://picsum.photos/200/200?random=2',
  },
  {
    id: '3',
    title: 'Finding Peace in Chaos',
    subtitle: 'Wednesday Service',
    imageUrl: 'https://picsum.photos/200/200?random=3',
  },
  {
    id: '4',
    title: 'The Power of Prayer',
    subtitle: 'Prayer Meeting',
    imageUrl: 'https://picsum.photos/200/200?random=4',
  },
];

export const Default = (props: any) => (
  <View style={{ padding: 16, backgroundColor: '#000' }}>
    <ContentListCard {...props} items={mockItems} />
  </View>
);

export const WithPlaceholderImages = (props: any) => (
  <View style={{ padding: 16, backgroundColor: '#000' }}>
    <ContentListCard {...props} items={mockItemsWithPlaceholder} />
  </View>
);

export const LongList = (props: any) => (
  <View style={{ padding: 16, backgroundColor: '#000' }}>
    <ContentListCard {...props} items={longListItems} />
  </View>
);

export const CustomStyling = (props: any) => (
  <View style={{ padding: 16, backgroundColor: '#000' }}>
    <ContentListCard
      {...props}
      items={mockItems}
      backgroundColor="rgba(37, 135, 160, 0.1)"
      borderRadius={20}
      thumbnailSize={100}
    />
  </View>
);

export const SmallThumbnails = (props: any) => (
  <View style={{ padding: 16, backgroundColor: '#000' }}>
    <ContentListCard {...props} items={mockItems} thumbnailSize={64} />
  </View>
);

export const LargeThumbnails = (props: any) => (
  <View style={{ padding: 16, backgroundColor: '#000' }}>
    <ContentListCard {...props} items={mockItems} thumbnailSize={120} />
  </View>
);

export const WithItemSpacing = (props: any) => (
  <View style={{ padding: 16, backgroundColor: '#000' }}>
    <ContentListCard {...props} items={mockItems} itemSpacing={8} />
  </View>
);

export const SingleItem = (props: any) => (
  <View style={{ padding: 16, backgroundColor: '#000' }}>
    <ContentListCard {...props} items={[mockItems[0]]} />
  </View>
);
