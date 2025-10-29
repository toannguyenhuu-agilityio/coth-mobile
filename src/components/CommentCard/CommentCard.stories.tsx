import type { Meta, StoryObj } from '@storybook/react';

import { View, Text } from 'react-native';
import { fn } from 'storybook/test';

import { CommentCard } from '.';

const meta = {
  title: 'Components/CommentCard',
  component: CommentCard,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: '#1A1A1A' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: {
    onReactionPress: fn(),
    onPress: fn(),
    onAvatarPress: fn(),
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'User name',
    },
    comment: {
      control: 'text',
      description: 'Comment text',
    },
    timeAgo: {
      control: 'text',
      description: 'Time ago text',
    },
    reactionCount: {
      control: 'number',
      description: 'Reaction count',
    },
    showReaction: {
      control: 'boolean',
      description: 'Show reaction button',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color',
    },
  },
} satisfies Meta<typeof CommentCard>;

export default meta;

type Story = StoryObj<typeof meta>;

// Bethany Blue - High Engagement
export const BethanyBlue: Story = {
  args: {
    name: 'Bethany Blue',
    comment: 'I loved this devotion so much! Exactly what I needed today',
    timeAgo: 'Just now',
    reactionCount: 1673,
  },
};

// Adam Willson - Short Comment
export const AdamWillson: Story = {
  args: {
    name: 'Adam Willson',
    comment: 'thank you',
    timeAgo: '3min ago',
    reactionCount: 12,
  },
};

// Kate Brinx - Long Comment
export const KateBrinx: Story = {
  args: {
    name: 'Kate Brinx',
    comment:
      'I thank yee every single day and read the scripture every single day and always watch your videos every single day',
    timeAgo: '1h ago',
    reactionCount: 12,
  },
};

// Megan Goodwill - Low Engagement
export const MeganGoodwill: Story = {
  args: {
    name: 'Megan Goodwill',
    comment: 'Thank you!',
    timeAgo: '1h ago',
    reactionCount: 2,
  },
};

// All Comments List
export const CommentsList = () => (
  <>
    <CommentCard
      name="Bethany Blue"
      comment="I loved this devotion so much! Exactly what I needed today"
      timeAgo="Just now"
      reactionCount={1673}
    />
    <CommentCard name="Adam Willson" comment="thank you" timeAgo="3min ago" reactionCount={12} />
    <CommentCard
      name="Kate Brinx"
      comment="I thank yee every single day and read the scripture every single day and always watch your videos every single day"
      timeAgo="1h ago"
      reactionCount={12}
    />
    <CommentCard name="Megan Goodwill" comment="Thank you!" timeAgo="1h ago" reactionCount={2} />
  </>
);

// Without Time
export const WithoutTime: Story = {
  args: {
    name: 'Sarah Johnson',
    comment: 'This really touched my heart today',
    reactionCount: 45,
  },
};

// Without Reaction Count
export const WithoutReactionCount: Story = {
  args: {
    name: 'John Smith',
    comment: 'Amen! Praise the Lord',
    timeAgo: '2h ago',
  },
};

// Without Reaction Button
export const WithoutReaction: Story = {
  args: {
    name: 'Emily Davis',
    comment: 'Thank you for sharing this message',
    timeAgo: '30min ago',
    showReaction: false,
  },
};

// With Custom Reaction Icon - Heart
export const CustomReactionHeart: Story = {
  args: {
    name: 'Lisa Anderson',
    comment: 'Love this so much!',
    timeAgo: '5min ago',
    reactionCount: 234,
    reactionIcon: <Text style={{ fontSize: 18 }}>❤️</Text>,
  },
};

// With Custom Reaction Icon - Star
export const CustomReactionStar: Story = {
  args: {
    name: 'Michael Brown',
    comment: 'This is amazing content',
    timeAgo: '15min ago',
    reactionCount: 89,
    reactionIcon: <Text style={{ fontSize: 18 }}>⭐</Text>,
  },
};

// With Custom Reaction Icon - Like
export const CustomReactionLike: Story = {
  args: {
    name: 'Rachel Green',
    comment: 'I really appreciate this',
    timeAgo: '1h ago',
    reactionCount: 156,
    reactionIcon: <Text style={{ fontSize: 18 }}>👍</Text>,
  },
};

// Very Long Comment
export const VeryLongComment: Story = {
  args: {
    name: 'David Martinez',
    comment:
      'This devotional really spoke to me today. I have been struggling with faith and trust in God, and this message reminded me that He is always there for us, even in the darkest times. Thank you for your ministry and for sharing these powerful words of encouragement with us every day.',
    timeAgo: '2h ago',
    reactionCount: 567,
  },
};

// High Reaction Count
export const HighReactionCount: Story = {
  args: {
    name: 'Popular User',
    comment: 'This changed my life!',
    timeAgo: '1 day ago',
    reactionCount: 12543,
  },
};

// Zero Reactions
export const ZeroReactions: Story = {
  args: {
    name: 'New User',
    comment: 'First time commenting here',
    timeAgo: 'Just now',
    reactionCount: 0,
  },
};

// With Default Avatar (No Image)
export const WithDefaultAvatar: Story = {
  args: {
    name: 'Jennifer Lopez',
    comment: 'Beautiful message today',
    timeAgo: '45min ago',
    reactionCount: 23,
  },
};

// With Custom Avatar Component
export const WithCustomAvatar: Story = {
  args: {
    name: 'Custom User',
    comment: 'Custom avatar example',
    timeAgo: '1h ago',
    reactionCount: 15,
    avatarComponent: (
      <View
        style={{
          width: 48,
          height: 48,
          borderRadius: 24,
          backgroundColor: '#D4AF37',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 24 }}>⭐</Text>
      </View>
    ),
  },
};

// Light Background
export const LightBackground: Story = {
  args: {
    name: 'Light Theme User',
    comment: 'Testing light background',
    timeAgo: '30min ago',
    reactionCount: 78,
    backgroundColor: '#F5F5F5',
    nameColor: '#000000',
    commentColor: '#333333',
    timeColor: '#666666',
    reactionCountColor: '#000000',
  },
};

// Custom Colors - Purple Theme
export const PurpleTheme: Story = {
  args: {
    name: 'Purple User',
    comment: 'Custom purple color theme',
    timeAgo: '1h ago',
    reactionCount: 42,
    backgroundColor: 'rgba(138, 43, 226, 0.1)',
    nameColor: '#DA70D6',
    commentColor: '#E6E6FA',
    timeColor: '#DDA0DD',
    reactionCountColor: '#DA70D6',
  },
};

// With Card Background
export const WithCardBackground: Story = {
  args: {
    name: 'Card User',
    comment: 'Comment with card-like background',
    timeAgo: '2h ago',
    reactionCount: 91,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
};

// Multiple Time Formats
export const RecentComment: Story = {
  args: {
    name: 'Recent User',
    comment: 'Just posted this',
    timeAgo: 'Just now',
    reactionCount: 1,
  },
};

export const MinutesAgo: Story = {
  args: {
    name: 'Minutes User',
    comment: 'Posted a few minutes ago',
    timeAgo: '3min ago',
    reactionCount: 5,
  },
};

export const HoursAgo: Story = {
  args: {
    name: 'Hours User',
    comment: 'Posted hours ago',
    timeAgo: '5h ago',
    reactionCount: 34,
  },
};

export const DaysAgo: Story = {
  args: {
    name: 'Days User',
    comment: 'Posted days ago',
    timeAgo: '3 days ago',
    reactionCount: 128,
  },
};

export const WeeksAgo: Story = {
  args: {
    name: 'Weeks User',
    comment: 'Posted weeks ago',
    timeAgo: '2 weeks ago',
    reactionCount: 256,
  },
};

// Interactive Examples
export const ClickableCard: Story = {
  args: {
    name: 'Clickable User',
    comment: 'Click anywhere on this card',
    timeAgo: '1h ago',
    reactionCount: 45,
    onPress: fn(),
  },
};

export const ClickableAvatar: Story = {
  args: {
    name: 'Avatar User',
    comment: 'Click on the avatar',
    timeAgo: '30min ago',
    reactionCount: 23,
    onAvatarPress: fn(),
  },
};
