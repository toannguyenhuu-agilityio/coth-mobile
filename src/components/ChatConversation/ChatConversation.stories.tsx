import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { ChatConversation, ConversationMessage, Source } from './index';

const meta = {
  title: 'Components/ChatConversation',
  component: ChatConversation,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    sourcesExpanded: {
      control: 'boolean',
    },
    showSources: {
      control: 'boolean',
    },
    onToggleSources: { action: 'toggle sources' },
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: '#000000', height: 700 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ChatConversation>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockMessages: ConversationMessage[] = [
  {
    id: '1',
    type: 'user',
    content: 'I am struggling with lust. How can I tackle this problem?',
  },
  {
    id: '2',
    type: 'assistant',
    content:
      "Let's get real—lust isn't just a physical urge, it's a spiritual battle. It's like a fire: controlled, it can be good, but left unchecked, it'll burn your whole house down. Lust is sneaky because it promises to fill you up, but it leaves you emptier every time. It's not just about what you do, it's about what's going on in your heart and mind.",
  },
  {
    id: '3',
    type: 'assistant',
    content:
      "First thing: don't try to fight lust by just focusing on your behavior. You have to cut it off at the source—your thoughts. Lustful thoughts lead to feelings, which lead to actions. So when those thoughts come, don't trust them, don't entertain them, and don't take ownership of them. Bring them to God and to the truth. The Bible says, \"If anyone is in Christ, he is a new creature\" (2 Corinthians 5:17 KJV). Those old thoughts aren't who you are anymore!",
  },
  {
    id: '4',
    type: 'assistant',
    content:
      "Second, run from temptation. Don't play with fire! If your phone or computer is a stumbling block, set boundaries. Don't bring your phone to bed, don't scroll aimlessly, clean up your social feeds, and use your devices only for what's necessary. The less you feed lust, the weaker it gets.",
  },
  {
    id: '5',
    type: 'assistant',
    content:
      "Third, confess it to God and bring it into the light with trusted people. Lust grows in darkness and secrecy. When you open up to someone who can keep you accountable, you're breaking its power. Don't let shame keep you isolated—everyone struggles with this at some level.",
  },
  {
    id: '6',
    type: 'assistant',
    content:
      'Fourth, ask God to replace lust with love. Lust is selfish, love is selfless. Pray, "God, take this cup of lust from me and fill me with your love."',
  },
  {
    id: '7',
    type: 'assistant',
    content:
      "Finally, don't beat yourself up. Condemnation is not from God. If you fall, get back up and keep walking with Him. The key isn't perfection, it's surrender. The more you walk in the Spirit, the less you'll fulfill the lust of the flesh. (Galatians 5:16 KJV).\n\nThis I say then, Walk in the Spirit, and ye shall not fulfil the lust of the flesh. (Galatians 5:16 KJV)",
  },
];

const mockSources: Source[] = [
  {
    id: '1',
    title: 'Bible Q & A',
    subtitle: 'Youtube',
  },
  {
    id: '2',
    title: 'Overcoming Resentment an...',
    subtitle: 'coreoftheheart.com',
  },
];

export const Default: Story = {
  args: {
    messages: mockMessages,
    sources: mockSources,
    sourcesExpanded: false,
  },
};

export const SourcesExpanded: Story = {
  args: {
    messages: mockMessages,
    sources: mockSources,
    sourcesExpanded: true,
  },
};

export const WithoutSources: Story = {
  args: {
    messages: mockMessages,
    showSources: false,
  },
};

export const ShortConversation: Story = {
  args: {
    messages: [
      {
        id: '1',
        type: 'user',
        content: 'How do I pray effectively?',
      },
      {
        id: '2',
        type: 'assistant',
        content:
          'Prayer is a conversation with God. Be honest, be humble, and be consistent. God hears every word.',
      },
    ],
    sources: mockSources,
    sourcesExpanded: false,
  },
};

export const UserOnly: Story = {
  args: {
    messages: [
      {
        id: '1',
        type: 'user',
        content: 'I am struggling with lust. How can I tackle this problem?',
      },
    ],
    showSources: false,
  },
};

export const AssistantOnly: Story = {
  args: {
    messages: [
      {
        id: '1',
        type: 'assistant',
        content:
          "Let's get real—lust isn't just a physical urge, it's a spiritual battle. It's like a fire: controlled, it can be good, but left unchecked, it'll burn your whole house down.",
      },
    ],
    sources: mockSources,
    sourcesExpanded: true,
  },
};

export const ManySources: Story = {
  args: {
    messages: mockMessages.slice(0, 3),
    sources: [
      ...mockSources,
      {
        id: '3',
        title: 'Understanding Grace',
        subtitle: 'biblehub.com',
      },
      {
        id: '4',
        title: 'Fighting Temptation',
        subtitle: 'youtube.com',
      },
      {
        id: '5',
        title: 'Spiritual Warfare Guide',
        subtitle: 'gotquestions.org',
      },
    ],
    sourcesExpanded: true,
  },
};

export const MultipleUserMessages: Story = {
  args: {
    messages: [
      {
        id: '1',
        type: 'user',
        content: 'I am struggling with lust. How can I tackle this problem?',
      },
      {
        id: '2',
        type: 'assistant',
        content:
          "Let's get real—lust isn't just a physical urge, it's a spiritual battle. It's like a fire: controlled, it can be good, but left unchecked, it'll burn your whole house down.",
      },
      {
        id: '3',
        type: 'user',
        content: "That makes sense. But what if I've been struggling for years?",
      },
      {
        id: '4',
        type: 'assistant',
        content:
          "Don't let the length of time discourage you. Every day is a new opportunity to walk in victory. God's mercies are new every morning.",
      },
      {
        id: '5',
        type: 'user',
        content: 'How do I stay accountable?',
      },
      {
        id: '6',
        type: 'assistant',
        content:
          'Find a trusted friend or mentor who can check in with you regularly. Accountability works best when combined with prayer and honest communication.',
      },
      {
        id: '7',
        type: 'user',
        content: 'Thank you. This really helps.',
      },
    ],
    sources: mockSources,
    sourcesExpanded: false,
  },
};

export const BackAndForthConversation: Story = {
  args: {
    messages: [
      {
        id: '1',
        type: 'user',
        content: 'Why does God allow suffering?',
      },
      {
        id: '2',
        type: 'assistant',
        content:
          'This is one of the most difficult questions in faith. Suffering often serves to refine us, draw us closer to God, and develop our character.',
      },
      {
        id: '3',
        type: 'user',
        content: "But what about innocent people who suffer? That doesn't seem fair.",
      },
      {
        id: '4',
        type: 'assistant',
        content:
          "You're right to feel that tension. We live in a fallen world where sin has consequences. But God promises to work all things for good for those who love Him (Romans 8:28).",
      },
      {
        id: '5',
        type: 'user',
        content: 'So how should I respond when I face suffering?',
      },
      {
        id: '6',
        type: 'assistant',
        content:
          'Bring it to God in prayer, lean on your community, and trust that He is with you in the midst of it. Suffering can be a doorway to deeper faith.',
      },
    ],
    sources: mockSources,
    sourcesExpanded: true,
  },
};
