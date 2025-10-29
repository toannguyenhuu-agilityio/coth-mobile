import type { Meta, StoryObj } from '@storybook/react';

import { View, Text } from 'react-native';
import { fn } from 'storybook/test';

import { EventCard } from '.';

const meta = {
  title: 'Components/EventCard',
  component: EventCard,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16, backgroundColor: '#000', gap: 16 }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: {
    onCalendarPress: fn(),
    onPlayPress: fn(),
    onPress: fn(),
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Event title',
    },
    time: {
      control: 'text',
      description: 'Event time',
    },
    isLocked: {
      control: 'boolean',
      description: 'Show lock icon',
    },
    isHighlighted: {
      control: 'boolean',
      description: 'Highlight with golden border',
    },
    showCalendarButton: {
      control: 'boolean',
      description: 'Show calendar button',
    },
    showPlayButton: {
      control: 'boolean',
      description: 'Show play button',
    },
  },
} satisfies Meta<typeof EventCard>;

export default meta;

type Story = StoryObj<typeof meta>;

// Bible Class Example
export const BibleClass: Story = {
  args: {
    title: 'Bible Class',
    time: '10 PM',
    logo: (
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 48, color: '#FFFFFF' }}>📖</Text>
        <Text style={{ fontSize: 10, color: '#FFFFFF', fontWeight: '600' }}>BIBLE CLASS</Text>
      </View>
    ),
  },
};

// Live Mentor - Locked & Highlighted (Exact match from image)
export const LiveMentorLocked: Story = {
  args: {
    title: 'Live Mentor...',
    time: '12 PM',
    isLocked: true,
    isHighlighted: true,
    logo: (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 12, color: '#FFFFFF', fontWeight: '700', marginBottom: 4 }}>
          LIVESTREAMS
        </Text>
        <Text style={{ fontSize: 32, color: '#FFFFFF' }}>〰️</Text>
      </View>
    ),
  },
};

// Alternative: Live Mentor with video icon
export const LiveMentor: Story = {
  args: {
    title: 'Live Mentor...',
    time: '12 PM',
    isLocked: true,
    isHighlighted: true,
    logo: (
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 36, color: '#FFFFFF' }}>🎥</Text>
        <Text style={{ fontSize: 10, color: '#FFFFFF', fontWeight: '600' }}>LIVESTREAMS</Text>
      </View>
    ),
  },
};

// Basic Event
export const BasicEvent: Story = {
  args: {
    title: 'Morning Prayer',
    time: '8 AM',
  },
};

// With Custom Logo
export const WithCustomLogo: Story = {
  args: {
    title: 'Worship Service',
    time: '11 AM',
    logo: <Text style={{ fontSize: 48 }}>🎵</Text>,
  },
};

// Locked Event
export const LockedEvent: Story = {
  args: {
    title: 'Premium Workshop',
    time: '3 PM',
    isLocked: true,
    logo: <Text style={{ fontSize: 48 }}>⭐</Text>,
  },
};

// Highlighted Event
export const HighlightedEvent: Story = {
  args: {
    title: 'Special Event',
    time: '7 PM',
    isHighlighted: true,
    logo: <Text style={{ fontSize: 48 }}>✨</Text>,
  },
};

// Without Buttons
export const WithoutButtons: Story = {
  args: {
    title: 'Info Only Event',
    time: '2 PM',
    showCalendarButton: false,
    showPlayButton: false,
  },
};

// Calendar Only
export const CalendarOnly: Story = {
  args: {
    title: 'Schedule Event',
    time: '4 PM',
    showPlayButton: false,
  },
};

// Play Only
export const PlayOnly: Story = {
  args: {
    title: 'Live Stream',
    time: '9 PM',
    showCalendarButton: false,
  },
};

// Long Title
export const LongTitle: Story = {
  args: {
    title: 'Advanced Biblical Studies and Theological Discussion Group',
    time: '6 PM',
  },
};

// Multiple Events List
export const MultipleEvents = () => (
  <>
    <EventCard
      title="Bible Class"
      time="10 PM"
      logo={
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 48, color: '#FFFFFF' }}>📖</Text>
          <Text style={{ fontSize: 10, color: '#FFFFFF', fontWeight: '600' }}>BIBLE CLASS</Text>
        </View>
      }
    />
    <EventCard
      title="Live Mentor..."
      time="12 PM"
      isLocked={true}
      isHighlighted={true}
      logo={
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 36, color: '#FFFFFF' }}>🎥</Text>
          <Text style={{ fontSize: 10, color: '#FFFFFF', fontWeight: '600' }}>LIVESTREAMS</Text>
        </View>
      }
    />
    <EventCard title="Prayer Group" time="6 AM" logo={<Text style={{ fontSize: 48 }}>🙏</Text>} />
  </>
);

// Morning Schedule
export const MorningSchedule = () => (
  <>
    <EventCard
      title="Morning Devotional"
      time="6 AM"
      logo={<Text style={{ fontSize: 48 }}>☀️</Text>}
    />
    <EventCard
      title="Breakfast Fellowship"
      time="7 AM"
      logo={<Text style={{ fontSize: 48 }}>☕</Text>}
    />
    <EventCard title="Bible Study" time="8 AM" logo={<Text style={{ fontSize: 48 }}>📖</Text>} />
  </>
);

// Evening Schedule
export const EveningSchedule = () => (
  <>
    <EventCard title="Evening Prayer" time="6 PM" logo={<Text style={{ fontSize: 48 }}>🌙</Text>} />
    <EventCard
      title="Youth Group"
      time="7 PM"
      logo={<Text style={{ fontSize: 48 }}>🎉</Text>}
      isHighlighted={true}
    />
    <EventCard title="Night Worship" time="9 PM" logo={<Text style={{ fontSize: 48 }}>🎵</Text>} />
  </>
);

// All Day Events
export const AllDayEvents = () => (
  <>
    <EventCard title="Morning Service" time="9 AM" />
    <EventCard title="Lunch & Fellowship" time="12 PM" />
    <EventCard title="Afternoon Workshop" time="2 PM" isLocked={true} />
    <EventCard title="Evening Service" time="6 PM" isHighlighted={true} />
  </>
);

// Locked/Blocked Events Examples
export const LockedEventsShowcase = () => (
  <>
    <EventCard
      title="Premium Bible Study"
      time="2 PM"
      isLocked={true}
      logo={<Text style={{ fontSize: 48 }}>📖</Text>}
    />
    <EventCard
      title="Live Mentor Session"
      time="12 PM"
      isLocked={true}
      isHighlighted={true}
      logo={
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 12, color: '#FFFFFF', fontWeight: '700' }}>LIVESTREAMS</Text>
          <Text style={{ fontSize: 32 }}>〰️</Text>
        </View>
      }
    />
    <EventCard
      title="Exclusive Workshop"
      time="5 PM"
      isLocked={true}
      logo={<Text style={{ fontSize: 48 }}>⭐</Text>}
    />
  </>
);

// Mixed: Locked and Unlocked
export const MixedAccessEvents = () => (
  <>
    <EventCard
      title="Free Morning Prayer"
      time="6 AM"
      logo={<Text style={{ fontSize: 48 }}>🙏</Text>}
    />
    <EventCard
      title="Premium Masterclass"
      time="10 AM"
      isLocked={true}
      isHighlighted={true}
      logo={<Text style={{ fontSize: 48 }}>🎓</Text>}
    />
    <EventCard
      title="Community Lunch"
      time="12 PM"
      logo={<Text style={{ fontSize: 48 }}>🍽️</Text>}
    />
    <EventCard
      title="VIP Q&A Session"
      time="3 PM"
      isLocked={true}
      logo={<Text style={{ fontSize: 48 }}>💎</Text>}
    />
  </>
);
