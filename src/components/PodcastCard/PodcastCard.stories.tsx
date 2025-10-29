import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { PodcastCard } from './index';

const meta = {
  title: 'Components/PodcastCard',
  component: PodcastCard,
  argTypes: {
    overlayColor: {
      control: 'color',
    },
    onPress: { action: 'card pressed' },
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: '#ffffffff', padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof PodcastCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Why is God ignoring me? Unlearned Wisdom Podcast',
    episodeInfo: 'Episode 17 • 3 days ago',
    imageUrl: 'https://picsum.photos/800/600',
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'Why is God ignoring me? Unlearned Wisdom Podcast',
    episodeInfo: 'Episode 17 • 3 days ago',
  },
};

export const LongTitle: Story = {
  args: {
    title:
      'Understanding the Deeper Meaning of Prayer and How God Responds to Our Spiritual Journey in Times of Hardship',
    episodeInfo: 'Episode 42 • 1 week ago',
    imageUrl: 'https://picsum.photos/seed/prayer/800/600',
  },
};

export const ShortTitle: Story = {
  args: {
    title: 'Prayer Guide',
    episodeInfo: 'Episode 5 • Yesterday',
    imageUrl: 'https://picsum.photos/seed/guide/800/600',
  },
};

export const CustomOverlay: Story = {
  args: {
    title: 'Why is God ignoring me? Unlearned Wisdom Podcast',
    episodeInfo: 'Episode 17 • 3 days ago',
    overlayColor: 'rgba(0, 0, 0, 0.7)',
    imageUrl: 'https://picsum.photos/seed/wisdom/800/600',
  },
};

export const WithInteraction: Story = {
  args: {
    title: 'Why is God ignoring me? Unlearned Wisdom Podcast',
    episodeInfo: 'Episode 17 • 3 days ago',
    imageUrl: 'https://picsum.photos/seed/podcast/800/600',
    onPress: () => console.log('Podcast card pressed'),
  },
};

export const WithoutEpisodeInfo: Story = {
  args: {
    title: 'Why is God ignoring me? Unlearned Wisdom Podcast',
    imageUrl: 'https://picsum.photos/seed/episode/800/600',
  },
};

export const DarkImage: Story = {
  args: {
    title: 'Understanding Scripture',
    episodeInfo: 'Episode 8 • 2 days ago',
    overlayColor: 'rgba(0, 0, 0, 0.6)',
    imageUrl: 'https://picsum.photos/seed/scripture/800/600',
  },
};
