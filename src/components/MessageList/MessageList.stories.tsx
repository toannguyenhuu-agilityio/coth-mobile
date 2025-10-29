import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { MessageList, Message } from './index';

const meta = {
  title: 'Components/MessageList',
  component: MessageList,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    userMessageColor: {
      control: 'color',
    },
    assistantMessageColor: {
      control: 'color',
    },
    autoScrollToBottom: {
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
} satisfies Meta<typeof MessageList>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockMessages: Message[] = [
  {
    id: '1',
    type: 'system',
    content: 'Conversation started',
    timestamp: new Date('2025-10-28T08:00:00'),
  },
  {
    id: '2',
    type: 'assistant',
    content: "Hello! I'm here to help you with your spiritual journey. How can I assist you today?",
    senderName: 'LORD OF THE HOURS',
    timestamp: new Date('2025-10-28T08:00:05'),
  },
  {
    id: '3',
    type: 'user',
    content: 'Why is god ignoring me?',
    timestamp: new Date('2025-10-28T08:01:00'),
  },
  {
    id: '4',
    type: 'assistant',
    content:
      "It can feel painful when prayers seem unanswered. Remember that God's timing is not always our timing. Sometimes silence is part of a larger plan we cannot yet see. Have you considered that God might be listening, but asking you to grow in patience and trust?",
    senderName: 'LORD OF THE HOURS',
    timestamp: new Date('2025-10-28T08:01:30'),
  },
  {
    id: '5',
    type: 'user',
    content: "I've been praying for months but nothing has changed.",
    timestamp: new Date('2025-10-28T08:02:00'),
  },
  {
    id: '6',
    type: 'assistant',
    content:
      "Persistence in prayer is itself a form of faithfulness. Even when circumstances don't change immediately, prayer transforms us internally. What specific area of your life are you hoping to see change in?",
    senderName: 'LORD OF THE HOURS',
    timestamp: new Date('2025-10-28T08:02:45'),
  },
];

const shortConversation: Message[] = [
  {
    id: '1',
    type: 'assistant',
    content: 'Welcome! How can I guide you today?',
    senderName: 'LORD OF THE HOURS',
    timestamp: new Date('2025-10-28T09:00:00'),
  },
  {
    id: '2',
    type: 'user',
    content: 'I need help understanding forgiveness.',
    timestamp: new Date('2025-10-28T09:00:30'),
  },
  {
    id: '3',
    type: 'assistant',
    content:
      "Forgiveness is one of the most powerful gifts we can give ourselves and others. It doesn't mean forgetting or excusing harm, but rather releasing the burden of resentment.",
    senderName: 'LORD OF THE HOURS',
    timestamp: new Date('2025-10-28T09:01:00'),
  },
];

const longMessages: Message[] = [
  {
    id: '1',
    type: 'user',
    content: 'Can you explain the concept of grace in Christianity?',
    timestamp: new Date('2025-10-28T10:00:00'),
  },
  {
    id: '2',
    type: 'assistant',
    content:
      "Grace is the unmerited favor of God - a gift that cannot be earned through works or good deeds. It's the foundation of Christian theology, representing God's unconditional love and mercy towards humanity. Through grace, we receive forgiveness and salvation not because we deserve it, but because of God's infinite compassion. This concept is beautifully expressed in Ephesians 2:8-9: \"For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.\"",
    senderName: 'LORD OF THE HOURS',
    timestamp: new Date('2025-10-28T10:00:45'),
  },
  {
    id: '3',
    type: 'user',
    content: "That's profound. So we don't have to earn God's love?",
    timestamp: new Date('2025-10-28T10:01:30'),
  },
  {
    id: '4',
    type: 'assistant',
    content:
      "Exactly. God's love is freely given and cannot be earned. However, grace doesn't mean we can live carelessly - it should inspire us to live righteously out of gratitude, not obligation.",
    senderName: 'LORD OF THE HOURS',
    timestamp: new Date('2025-10-28T10:02:00'),
  },
];

export const Default: Story = {
  args: {
    messages: mockMessages,
  },
};

export const ShortConversation: Story = {
  args: {
    messages: shortConversation,
  },
};

export const LongMessages: Story = {
  args: {
    messages: longMessages,
  },
};

export const EmptyMessages: Story = {
  args: {
    messages: [],
  },
};

export const SystemMessagesOnly: Story = {
  args: {
    messages: [
      {
        id: '1',
        type: 'system',
        content: 'Conversation started',
      },
      {
        id: '2',
        type: 'system',
        content: 'New day streak achieved!',
      },
      {
        id: '3',
        type: 'system',
        content: 'Reminder: Take time for prayer',
      },
    ],
  },
};

export const CustomColors: Story = {
  args: {
    messages: mockMessages,
    userMessageColor: '#4A5568',
    assistantMessageColor: '#2D3748',
    backgroundColor: '#1A202C',
  },
};

export const NoAutoScroll: Story = {
  args: {
    messages: mockMessages,
    autoScrollToBottom: false,
  },
};

export const ManyMessages: Story = {
  args: {
    messages: [
      ...mockMessages,
      {
        id: '7',
        type: 'user',
        content: 'How do I maintain my faith during difficult times?',
        timestamp: new Date('2025-10-28T08:03:00'),
      },
      {
        id: '8',
        type: 'assistant',
        content:
          'Faith during trials is built through: prayer, community support, scripture reading, and remembering past faithfulness of God.',
        senderName: 'LORD OF THE HOURS',
        timestamp: new Date('2025-10-28T08:03:30'),
      },
      {
        id: '9',
        type: 'user',
        content: 'Thank you for the guidance.',
        timestamp: new Date('2025-10-28T08:04:00'),
      },
      {
        id: '10',
        type: 'assistant',
        content: "You're welcome. Remember, I'm always here to help you on your spiritual journey.",
        senderName: 'LORD OF THE HOURS',
        timestamp: new Date('2025-10-28T08:04:15'),
      },
    ],
  },
};
