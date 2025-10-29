import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { ChatHistoryList, ChatHistoryItem } from './index';

const meta = {
  title: 'Components/ChatHistoryList',
  component: ChatHistoryList,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    sectionBackgroundColor: {
      control: 'color',
    },
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: '#000000', height: 600 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ChatHistoryList>;

export default meta;

type Story = StoryObj<typeof meta>;

const today = new Date();
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

const lastWeek = new Date();
lastWeek.setDate(lastWeek.getDate() - 7);

const lastMonth = new Date();
lastMonth.setMonth(lastMonth.getMonth() - 1);

const mockChatItems: ChatHistoryItem[] = [
  {
    id: '1',
    title: 'Chat Name Semper Vel',
    date: today,
  },
  {
    id: '2',
    title: 'How to pray effectively?',
    date: today,
  },
  {
    id: '3',
    title: 'Chat Name Semper Vel',
    date: yesterday,
  },
  {
    id: '4',
    title: 'Daily devotional questions',
    date: yesterday,
  },
  {
    id: '5',
    title: 'Chat Name Semper Vel',
    date: yesterday,
  },
  {
    id: '6',
    title: 'Chat Name Semper Vel',
    date: yesterday,
  },
  {
    id: '7',
    title: 'Understanding grace',
    date: lastWeek,
  },
  {
    id: '8',
    title: 'Chat Name Semper Vel',
    date: lastWeek,
  },
  {
    id: '9',
    title: 'Why is god ignoring me?',
    date: lastMonth,
  },
  {
    id: '10',
    title: 'Chat Name Semper Vel',
    date: lastMonth,
  },
];

export const Default: Story = {
  args: {
    items: mockChatItems,
  },
};

export const TodayOnly: Story = {
  args: {
    items: mockChatItems.filter((item) => {
      const itemDate = new Date(item.date);
      itemDate.setHours(0, 0, 0, 0);
      const todayDate = new Date();
      todayDate.setHours(0, 0, 0, 0);
      return itemDate.getTime() === todayDate.getTime();
    }),
  },
};

export const YesterdayOnly: Story = {
  args: {
    items: mockChatItems.filter((item) => {
      const itemDate = new Date(item.date);
      itemDate.setHours(0, 0, 0, 0);
      const yesterdayDate = new Date();
      yesterdayDate.setDate(yesterdayDate.getDate() - 1);
      yesterdayDate.setHours(0, 0, 0, 0);
      return itemDate.getTime() === yesterdayDate.getTime();
    }),
  },
};

export const WithInteractions: Story = {
  args: {
    items: mockChatItems.map((item) => ({
      ...item,
      onPress: () => console.log(`Chat ${item.id} pressed`),
      onMenuPress: () => console.log(`Menu for chat ${item.id} pressed`),
    })),
  },
};

export const CustomColors: Story = {
  args: {
    items: mockChatItems,
    backgroundColor: '#000000',
    sectionBackgroundColor: 'rgba(70, 80, 90, 0.5)',
  },
};

export const PreGroupedItems: Story = {
  args: {
    groupedItems: [
      {
        title: 'Today',
        data: [
          {
            id: '1',
            title: 'Chat Name Semper Vel',
            date: today,
          },
        ],
      },
      {
        title: 'Yesterday',
        data: [
          {
            id: '2',
            title: 'Chat Name Semper Vel',
            date: yesterday,
          },
          {
            id: '3',
            title: 'Chat Name Semper Vel',
            date: yesterday,
          },
          {
            id: '4',
            title: 'Chat Name Semper Vel',
            date: yesterday,
          },
        ],
      },
      {
        title: 'May 28, 2025',
        data: [
          {
            id: '5',
            title: 'Chat Name Semper Vel',
            date: new Date('2025-05-28'),
          },
        ],
      },
    ],
  },
};

export const EmptyHistory: Story = {
  args: {
    items: [],
  },
};

export const ManyChats: Story = {
  args: {
    items: [
      ...mockChatItems,
      {
        id: '11',
        title: 'How to maintain faith?',
        date: today,
      },
      {
        id: '12',
        title: 'Understanding forgiveness',
        date: today,
      },
      {
        id: '13',
        title: 'Prayer request guidance',
        date: yesterday,
      },
      {
        id: '14',
        title: 'Bible study questions',
        date: lastWeek,
      },
      {
        id: '15',
        title: 'Spiritual growth tips',
        date: lastWeek,
      },
    ],
  },
};
