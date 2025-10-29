import React from 'react';
import { View } from 'react-native';
import { HorizontalContentList, HorizontalContentListItem } from './index';

export default {
  title: 'Components/HorizontalContentList',
  component: HorizontalContentList,
  argTypes: {
    backgroundColor: { control: 'color' },
    cardBackgroundColor: { control: 'color' },
    borderRadius: { control: 'number' },
    thumbnailWidth: { control: 'number' },
    thumbnailHeight: { control: 'number' },
    spacing: { control: 'number' },
    horizontalPadding: { control: 'number' },
    useScrollView: { control: 'boolean' },
  },
  args: {
    backgroundColor: 'transparent',
    cardBackgroundColor: 'rgba(30, 30, 30, 0.95)',
    borderRadius: 12,
    thumbnailWidth: 120,
    thumbnailHeight: 80,
    spacing: 12,
    horizontalPadding: 0,
    useScrollView: false,
  },
};

const mockItems: HorizontalContentListItem[] = [
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

const longListItems: HorizontalContentListItem[] = [
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
  {
    id: '3',
    title: 'Finding Peace in Chaos',
    subtitle: 'Wednesday Service',
    imageUrl: 'https://picsum.photos/200/200?random=3',
    onPress: () => console.log('Item 3 pressed'),
  },
  {
    id: '4',
    title: 'The Power of Prayer',
    subtitle: 'Prayer Meeting',
    imageUrl: 'https://picsum.photos/200/200?random=4',
    onPress: () => console.log('Item 4 pressed'),
  },
  {
    id: '5',
    title: 'Walking with God Daily',
    subtitle: 'Morning Devotional',
    imageUrl: 'https://picsum.photos/200/200?random=5',
    onPress: () => console.log('Item 5 pressed'),
  },
];

const mockItemsWithPlaceholder: HorizontalContentListItem[] = [
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

export const Default = (props: any) => (
  <View style={{ height: 400, backgroundColor: '#000' }}>
    <HorizontalContentList {...props} items={mockItems} />
  </View>
);

export const WithPlaceholderImages = (props: any) => (
  <View style={{ height: 400, backgroundColor: '#000' }}>
    <HorizontalContentList {...props} items={mockItemsWithPlaceholder} />
  </View>
);

export const LongList = (props: any) => (
  <View style={{ height: 400, backgroundColor: '#000' }}>
    <HorizontalContentList {...props} items={longListItems} />
  </View>
);

export const WithScrollView = (props: any) => (
  <View style={{ height: 400, backgroundColor: '#000' }}>
    <HorizontalContentList {...props} items={longListItems} useScrollView={true} />
  </View>
);

export const CustomSpacing = (props: any) => (
  <View style={{ height: 400, backgroundColor: '#000' }}>
    <HorizontalContentList {...props} items={mockItems} spacing={20} />
  </View>
);

export const NoSpacing = (props: any) => (
  <View style={{ height: 400, backgroundColor: '#000' }}>
    <HorizontalContentList {...props} items={mockItems} spacing={0} />
  </View>
);

export const WithPadding = (props: any) => (
  <View style={{ height: 400, backgroundColor: '#000' }}>
    <HorizontalContentList {...props} items={mockItems} horizontalPadding={16} />
  </View>
);

export const CustomThumbnailSize = (props: any) => (
  <View style={{ height: 400, backgroundColor: '#000' }}>
    <HorizontalContentList
      {...props}
      items={mockItems}
      thumbnailWidth={100}
      thumbnailHeight={100}
    />
  </View>
);

export const LargeThumbnails = (props: any) => (
  <View style={{ height: 400, backgroundColor: '#000' }}>
    <HorizontalContentList
      {...props}
      items={mockItems}
      thumbnailWidth={150}
      thumbnailHeight={100}
    />
  </View>
);

export const CustomCardBackground = (props: any) => (
  <View style={{ height: 400, backgroundColor: '#000' }}>
    <HorizontalContentList
      {...props}
      items={mockItems}
      cardBackgroundColor="rgba(37, 135, 160, 0.2)"
    />
  </View>
);

export const CustomBorderRadius = (props: any) => (
  <View style={{ height: 400, backgroundColor: '#000' }}>
    <HorizontalContentList {...props} items={mockItems} borderRadius={20} />
  </View>
);

export const SingleItem = (props: any) => (
  <View style={{ height: 400, backgroundColor: '#000' }}>
    <HorizontalContentList {...props} items={[mockItems[0]]} />
  </View>
);

export const NonInteractive = (props: any) => (
  <View style={{ height: 400, backgroundColor: '#000' }}>
    <HorizontalContentList
      {...props}
      items={mockItems.map((item) => ({ ...item, onPress: undefined }))}
    />
  </View>
);
