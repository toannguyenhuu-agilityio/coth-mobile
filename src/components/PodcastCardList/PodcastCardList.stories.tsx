import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { PodcastCardList, PodcastCardListItem } from './index';

const meta = {
  title: 'Components/PodcastCardList',
  component: PodcastCardList,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    spacing: {
      control: { type: 'range', min: 0, max: 32, step: 4 },
    },
    horizontalPadding: {
      control: { type: 'range', min: 0, max: 32, step: 4 },
    },
    useScrollView: {
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: 'rgba(255, 255, 255, 1)', height: 700 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof PodcastCardList>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockPodcasts: PodcastCardListItem[] = [
  {
    id: '1',
    title: 'Why is God ignoring me? Unlearned Wisdom Podcast',
    episodeInfo: 'Episode 17 • 3 days ago',
    imageUrl: 'https://picsum.photos/seed/podcast1/800/600',
  },
  {
    id: '2',
    title: 'Why is God ignoring me? Unlearned Wisdom Podcast',
    episodeInfo: 'Episode 16 • 10 days ago',
    imageUrl: 'https://picsum.photos/seed/podcast2/800/600',
  },
  {
    id: '3',
    title: 'Understanding Grace and Mercy',
    episodeInfo: 'Episode 15 • 2 weeks ago',
    imageUrl: 'https://picsum.photos/seed/podcast3/800/600',
  },
  {
    id: '4',
    title: 'Prayer in Times of Trouble',
    episodeInfo: 'Episode 14 • 3 weeks ago',
    imageUrl: 'https://picsum.photos/seed/podcast4/800/600',
  },
];

const manyPodcasts: PodcastCardListItem[] = [
  ...mockPodcasts,
  {
    id: '5',
    title: 'Finding Peace in Chaos',
    episodeInfo: 'Episode 13 • 1 month ago',
    imageUrl: 'https://picsum.photos/seed/podcast5/800/600',
  },
  {
    id: '6',
    title: 'Walking by Faith',
    episodeInfo: 'Episode 12 • 1 month ago',
    imageUrl: 'https://picsum.photos/seed/podcast6/800/600',
  },
  {
    id: '7',
    title: 'The Power of Forgiveness',
    episodeInfo: 'Episode 11 • 2 months ago',
    imageUrl: 'https://picsum.photos/seed/podcast7/800/600',
  },
  {
    id: '8',
    title: "Trusting God's Timing",
    episodeInfo: 'Episode 10 • 2 months ago',
    imageUrl: 'https://picsum.photos/seed/podcast8/800/600',
  },
];

export const Default: Story = {
  args: {
    items: mockPodcasts,
  },
};

export const WithInteractions: Story = {
  args: {
    items: mockPodcasts.map((item) => ({
      ...item,
      onPress: () => console.log(`Podcast ${item.id} pressed`),
    })),
  },
};

export const ManyItems: Story = {
  args: {
    items: manyPodcasts,
  },
};

export const CustomSpacing: Story = {
  args: {
    items: mockPodcasts,
    spacing: 24,
  },
};

export const CustomPadding: Story = {
  args: {
    items: mockPodcasts,
    horizontalPadding: 24,
  },
};

export const TightSpacing: Story = {
  args: {
    items: mockPodcasts,
    spacing: 8,
    horizontalPadding: 8,
  },
};

export const WithScrollView: Story = {
  args: {
    items: manyPodcasts,
    useScrollView: true,
  },
};

export const TwoItems: Story = {
  args: {
    items: mockPodcasts.slice(0, 2),
  },
};

export const SingleItem: Story = {
  args: {
    items: [mockPodcasts[0]],
  },
};

export const WithoutImages: Story = {
  args: {
    items: mockPodcasts.map(({ imageUrl, ...item }) => item),
  },
};
