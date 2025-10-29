import React from 'react';
import { View } from 'react-native';
import { GroupedContentList, GroupedContentSection } from './index';

export default {
  title: 'Components/GroupedContentList',
  component: GroupedContentList,
  argTypes: {
    backgroundColor: { control: 'color' },
    cardBackgroundColor: { control: 'color' },
    sectionHeaderBackgroundColor: { control: 'color' },
    cardBorderRadius: { control: 'number' },
    thumbnailWidth: { control: 'number' },
    thumbnailHeight: { control: 'number' },
    cardSpacing: { control: 'number' },
    sectionSpacing: { control: 'number' },
    horizontalPadding: { control: 'number' },
    useScrollView: { control: 'boolean' },
  },
  args: {
    backgroundColor: 'transparent',
    cardBackgroundColor: 'rgba(30, 30, 30, 0.95)',
    sectionHeaderBackgroundColor: 'transparent',
    cardBorderRadius: 16,
    thumbnailWidth: 110,
    thumbnailHeight: 80,
    cardSpacing: 12,
    sectionSpacing: 24,
    horizontalPadding: 16,
    useScrollView: false,
  },
};

const mockSections: GroupedContentSection[] = [
  {
    title: 'Aug 21',
    data: [
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
    ],
  },
  {
    title: 'Aug 14',
    data: [
      {
        id: '3',
        title: "Why is God ignoring me? Unanswered prayers and God's will",
        subtitle: 'Bible Class',
        imageUrl: 'https://picsum.photos/200/200?random=3',
        onPress: () => console.log('Item 3 pressed'),
      },
    ],
  },
];

const longListSections: GroupedContentSection[] = [
  {
    title: 'Aug 21',
    data: [
      {
        id: '1',
        title: 'Why is God ignoring me? Unanswered prayers',
        subtitle: 'Bible Class',
        imageUrl: 'https://picsum.photos/200/200?random=1',
        onPress: () => console.log('Item 1 pressed'),
      },
      {
        id: '2',
        title: 'Finding Peace in Chaos',
        subtitle: 'After Service',
        imageUrl: 'https://picsum.photos/200/200?random=2',
        onPress: () => console.log('Item 2 pressed'),
      },
      {
        id: '3',
        title: 'The Power of Prayer',
        subtitle: 'Evening Prayer',
        imageUrl: 'https://picsum.photos/200/200?random=3',
        onPress: () => console.log('Item 3 pressed'),
      },
    ],
  },
  {
    title: 'Aug 14',
    data: [
      {
        id: '4',
        title: 'Walking with God Daily',
        subtitle: 'Bible Class',
        imageUrl: 'https://picsum.photos/200/200?random=4',
        onPress: () => console.log('Item 4 pressed'),
      },
      {
        id: '5',
        title: 'Understanding Faith',
        subtitle: 'Morning Service',
        imageUrl: 'https://picsum.photos/200/200?random=5',
        onPress: () => console.log('Item 5 pressed'),
      },
    ],
  },
  {
    title: 'Aug 7',
    data: [
      {
        id: '6',
        title: "God's Promise",
        subtitle: 'Sunday Service',
        imageUrl: 'https://picsum.photos/200/200?random=6',
        onPress: () => console.log('Item 6 pressed'),
      },
    ],
  },
];

const sectionsWithPlaceholder: GroupedContentSection[] = [
  {
    title: 'Aug 21',
    data: [
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
    ],
  },
];

export const Default = (props: any) => (
  <View style={{ height: 600, backgroundColor: '#0a0a0a' }}>
    <GroupedContentList {...props} sections={mockSections} />
  </View>
);

export const WithPlaceholderImages = (props: any) => (
  <View style={{ height: 600, backgroundColor: '#0a0a0a' }}>
    <GroupedContentList {...props} sections={sectionsWithPlaceholder} />
  </View>
);

export const LongList = (props: any) => (
  <View style={{ height: 600, backgroundColor: '#0a0a0a' }}>
    <GroupedContentList {...props} sections={longListSections} />
  </View>
);

export const WithScrollView = (props: any) => (
  <View style={{ height: 600, backgroundColor: '#0a0a0a' }}>
    <GroupedContentList {...props} sections={mockSections} useScrollView={true} />
  </View>
);

export const CustomCardSpacing = (props: any) => (
  <View style={{ height: 600, backgroundColor: '#0a0a0a' }}>
    <GroupedContentList {...props} sections={mockSections} cardSpacing={20} />
  </View>
);

export const CustomSectionSpacing = (props: any) => (
  <View style={{ height: 600, backgroundColor: '#0a0a0a' }}>
    <GroupedContentList {...props} sections={mockSections} sectionSpacing={40} />
  </View>
);

export const NoSpacing = (props: any) => (
  <View style={{ height: 600, backgroundColor: '#0a0a0a' }}>
    <GroupedContentList {...props} sections={mockSections} cardSpacing={0} sectionSpacing={16} />
  </View>
);

export const CustomThumbnailSize = (props: any) => (
  <View style={{ height: 600, backgroundColor: '#0a0a0a' }}>
    <GroupedContentList
      {...props}
      sections={mockSections}
      thumbnailWidth={90}
      thumbnailHeight={90}
    />
  </View>
);

export const LargeThumbnails = (props: any) => (
  <View style={{ height: 600, backgroundColor: '#0a0a0a' }}>
    <GroupedContentList
      {...props}
      sections={mockSections}
      thumbnailWidth={130}
      thumbnailHeight={100}
    />
  </View>
);

export const CustomCardBackground = (props: any) => (
  <View style={{ height: 600, backgroundColor: '#0a0a0a' }}>
    <GroupedContentList
      {...props}
      sections={mockSections}
      cardBackgroundColor="rgba(37, 135, 160, 0.15)"
    />
  </View>
);

export const CustomBorderRadius = (props: any) => (
  <View style={{ height: 600, backgroundColor: '#0a0a0a' }}>
    <GroupedContentList {...props} sections={mockSections} cardBorderRadius={24} />
  </View>
);

export const NoPadding = (props: any) => (
  <View style={{ height: 600, backgroundColor: '#0a0a0a' }}>
    <GroupedContentList {...props} sections={mockSections} horizontalPadding={0} />
  </View>
);

export const SingleSection = (props: any) => (
  <View style={{ height: 600, backgroundColor: '#0a0a0a' }}>
    <GroupedContentList {...props} sections={[mockSections[0]]} />
  </View>
);

export const SingleItemPerSection = (props: any) => (
  <View style={{ height: 600, backgroundColor: '#0a0a0a' }}>
    <GroupedContentList
      {...props}
      sections={[
        { title: 'Aug 21', data: [mockSections[0].data[0]] },
        { title: 'Aug 14', data: [mockSections[1].data[0]] },
      ]}
    />
  </View>
);

export const NonInteractive = (props: any) => (
  <View style={{ height: 600, backgroundColor: '#0a0a0a' }}>
    <GroupedContentList
      {...props}
      sections={mockSections.map((section) => ({
        ...section,
        data: section.data.map((item) => ({ ...item, onPress: undefined })),
      }))}
    />
  </View>
);
