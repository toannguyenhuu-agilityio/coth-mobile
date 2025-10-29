import React from 'react';
import { View } from 'react-native';
import { NotificationCard } from './index';

export default {
  title: 'Components/NotificationCard',
  component: NotificationCard,
  argTypes: {
    message: { control: 'text' },
    timestamp: { control: 'text' },
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    borderWidth: { control: 'number' },
    borderRadius: { control: 'number' },
  },
  args: {
    message:
      'New Merch is dropping next week! Take a look at the collection: https://www.instagram.com',
    timestamp: 'Nov 28, 2025',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderRadius: 16,
  },
};

export const Default = (props: any) => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <NotificationCard {...props} onPress={() => console.log('Notification pressed')} />
  </View>
);

export const WithMerchAnnouncement = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <NotificationCard
      message="New Merch is dropping next week! Take a look at the collection: https://www.instagram.com"
      timestamp="Nov 28, 2025"
      onPress={() => console.log('Notification pressed')}
    />
  </View>
);

export const WithEventReminder = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <NotificationCard
      message="Don't forget! Your prayer group meeting starts in 30 minutes."
      timestamp="Today, 2:30 PM"
      onPress={() => console.log('Notification pressed')}
    />
  </View>
);

export const WithLongMessage = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <NotificationCard
      message="We're excited to announce our new community initiative launching next month. Join us for a special gathering where we'll share more details about how you can get involved and make a difference in our community."
      timestamp="Nov 25, 2025"
      onPress={() => console.log('Notification pressed')}
    />
  </View>
);

export const WithShortMessage = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <NotificationCard
      message="Welcome to the community!"
      timestamp="Today"
      onPress={() => console.log('Notification pressed')}
    />
  </View>
);

export const WithLink = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <NotificationCard
      message="Check out our latest podcast episode: https://www.example.com/podcast/ep123"
      timestamp="Nov 27, 2025"
      onPress={() => console.log('Notification pressed')}
    />
  </View>
);

export const NonInteractive = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <NotificationCard
      message="New Merch is dropping next week! Take a look at the collection: https://www.instagram.com"
      timestamp="Nov 28, 2025"
    />
  </View>
);

export const MultipleNotifications = () => (
  <View style={{ padding: 20, backgroundColor: '#000', gap: 16 }}>
    <NotificationCard
      message="New Merch is dropping next week! Take a look at the collection: https://www.instagram.com"
      timestamp="Nov 28, 2025"
      onPress={() => console.log('First notification pressed')}
    />
    <NotificationCard
      message="Your daily devotional is ready for today."
      timestamp="Today, 8:00 AM"
      onPress={() => console.log('Second notification pressed')}
    />
    <NotificationCard
      message="3 new prayer requests from your group."
      timestamp="Yesterday"
      onPress={() => console.log('Third notification pressed')}
    />
  </View>
);

export const CustomBorderRadius = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <NotificationCard
      message="New Merch is dropping next week! Take a look at the collection: https://www.instagram.com"
      timestamp="Nov 28, 2025"
      borderRadius={24}
      onPress={() => console.log('Notification pressed')}
    />
  </View>
);

export const CustomColors = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <NotificationCard
      message="New Merch is dropping next week! Take a look at the collection: https://www.instagram.com"
      timestamp="Nov 28, 2025"
      backgroundColor="rgba(37, 135, 160, 0.1)"
      borderColor="#2587A0"
      onPress={() => console.log('Notification pressed')}
    />
  </View>
);
