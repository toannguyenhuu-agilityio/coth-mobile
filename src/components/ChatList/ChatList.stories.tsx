import type { Meta, StoryObj } from '@storybook/react';
import { View, Text } from 'react-native';
import { ChatList, ChatListItem } from './index';

const meta = {
  title: 'Components/ChatList',
  component: ChatList,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    showIcons: {
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: '#000000', height: 600 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ChatList>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockChatItems: ChatListItem[] = [
  {
    id: '1',
    title: 'Chat Name Semper Vel',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adi...',
  },
  {
    id: '2',
    title: 'Chat Name Semper Vel',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adi...',
  },
  {
    id: '3',
    title: 'Chat Name Semper Vel',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adi...',
  },
  {
    id: '4',
    title: 'Chat Name Semper Vel',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adi...',
  },
  {
    id: '5',
    title: 'Chat Name Semper Vel',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adi...',
  },
  {
    id: '6',
    title: 'Chat Name Semper Vel',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adi...',
  },
  {
    id: '7',
    title: 'Chat Name Semper Vel',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adi...',
  },
  {
    id: '8',
    title: 'Chat Name Semper Vel',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adi...',
  },
];

const realChatItems: ChatListItem[] = [
  {
    id: '1',
    title: 'Why is god ignoring me?',
    subtitle: 'It can feel painful when prayers seem...',
  },
  {
    id: '2',
    title: 'How to pray effectively?',
    subtitle: 'Prayer is a conversation with God...',
  },
  {
    id: '3',
    title: 'Understanding grace',
    subtitle: 'Grace is the unmerited favor of God...',
  },
  {
    id: '4',
    title: 'Daily devotional questions',
    subtitle: 'What scripture spoke to you today?',
  },
  {
    id: '5',
    title: 'Faith during difficult times',
    subtitle: 'Faith is built through trials and...',
  },
];

export const Default: Story = {
  args: {
    items: mockChatItems,
    showCard: true,
  },
};

export const WithoutCard: Story = {
  args: {
    items: [],
    showCard: false,
  },
};

export const RealContent: Story = {
  args: {
    items: realChatItems,
  },
};

export const WithoutIcons: Story = {
  args: {
    items: mockChatItems,
    showIcons: false,
  },
};

export const WithoutSubtitles: Story = {
  args: {
    items: mockChatItems.map((item) => ({
      id: item.id,
      title: item.title,
    })),
  },
};

export const CustomIcons: Story = {
  args: {
    items: mockChatItems.map((item, index) => ({
      ...item,
      icon: (
        <View
          style={{
            width: 32,
            height: 32,
            borderRadius: 16,
            backgroundColor: 'rgba(116, 139, 145, 0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>{index + 1}</Text>
        </View>
      ),
    })),
  },
};

export const WithInteractions: Story = {
  args: {
    items: mockChatItems.map((item) => ({
      ...item,
      onPress: () => console.log(`Chat ${item.id} pressed`),
      onLongPress: () => console.log(`Chat ${item.id} long pressed`),
    })),
  },
};

export const FewItems: Story = {
  args: {
    items: mockChatItems.slice(0, 3),
  },
};

export const EmptyList: Story = {
  args: {
    items: [],
  },
};

export const CustomBackgroundColor: Story = {
  args: {
    items: mockChatItems,
    backgroundColor: '#000000',
    cardBackgroundColor: 'rgba(70, 80, 90, 0.5)',
  },
};

export const ManyItems: Story = {
  args: {
    items: [
      ...mockChatItems,
      ...mockChatItems.map((item, index) => ({
        ...item,
        id: `${item.id}-duplicate-${index}`,
      })),
    ],
  },
};
