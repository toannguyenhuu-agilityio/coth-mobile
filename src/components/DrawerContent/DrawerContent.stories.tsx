import type { Meta, StoryObj } from '@storybook/react';
import { View, Dimensions } from 'react-native';
import { DrawerContent } from './index';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const meta = {
  title: 'Components/DrawerContent',
  component: DrawerContent,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    onClose: { action: 'close pressed' },
    onNewChat: { action: 'new chat pressed' },
    onSearchChat: { action: 'search chat pressed' },
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: '#000000', height: SCREEN_HEIGHT }}>
        <View style={{ width: 320, height: '100%' }}>
          <Story />
        </View>
      </View>
    ),
  ],
} satisfies Meta<typeof DrawerContent>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockChatItems = [
  {
    id: '1',
    title: 'Why is god ignoring me?',
  },
  {
    id: '2',
    title: 'Chat Name Semper Vel Lorem Ipsum Dolor Sit Amet...',
  },
  {
    id: '3',
    title: 'Chat Name Semper Vel Lorem Ipsum Dolor Sit Amet...',
  },
  {
    id: '4',
    title: 'Chat Name Semper Vel Lorem Ipsum Dolor Sit Amet...',
  },
  {
    id: '5',
    title: 'Chat Name Semper Vel Lorem Ipsum Dolor Sit Amet...',
  },
  {
    id: '6',
    title: 'Chat Name Semper Vel Lorem Ipsum Dolor Sit Amet...',
  },
  {
    id: '7',
    title: 'Chat Name Semper Vel Lorem Ipsum Dolor Sit Amet...',
  },
  {
    id: '8',
    title: 'Chat Name Semper Vel Lorem Ipsum Dolor Sit Amet...',
  },
  {
    id: '9',
    title: 'Chat Name Semper Vel Lorem Ipsum Dolor Sit Amet...',
  },
  {
    id: '10',
    title: 'Chat Name Semper Vel Lorem Ipsum Dolor Sit Amet...',
  },
  {
    id: '11',
    title: 'Chat Name Semper Vel Lorem Ipsum Dolor Sit Amet...',
  },
];

export const Default: Story = {
  args: {
    logoText: 'LORD OF THE HEART',
    chatItems: mockChatItems,
  },
};

export const WithFewChats: Story = {
  args: {
    logoText: 'LORD OF THE HEART',
    chatItems: [
      {
        id: '1',
        title: 'Why is god ignoring me?',
      },
      {
        id: '2',
        title: 'How to pray effectively?',
      },
      {
        id: '3',
        title: 'Daily devotional questions',
      },
    ],
  },
};

export const EmptyChatList: Story = {
  args: {
    logoText: 'LORD OF THE HEART',
    chatItems: [],
  },
};

export const CustomBackgroundColor: Story = {
  args: {
    logoText: 'LORD OF THE HEART',
    chatItems: mockChatItems,
    backgroundColor: '#2C2C2E',
  },
};

export const WithInteractions: Story = {
  args: {
    logoText: 'LORD OF THE HEART',
    chatItems: mockChatItems.map((item) => ({
      ...item,
      onPress: () => console.log(`Chat ${item.id} pressed`),
      onMenuPress: () => console.log(`Menu for chat ${item.id} pressed`),
    })),
  },
};
