import type { Meta, StoryObj } from '@storybook/react';
import { View, Alert } from 'react-native';
import { useState } from 'react';
import { SettingsMenu, SettingsItem } from '.';
import { UserProfileIcon, BellIcon, ClockIcon, ShoppingBagIcon } from './SettingsIcons';

const meta = {
  title: 'Components/SettingsMenu',
  component: SettingsMenu,
  decorators: [
    (Story) => (
      <View
        style={{
          flex: 1,
          backgroundColor: '#000000',
          justifyContent: 'center',
          padding: 20,
        }}
      >
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof SettingsMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

// Main example - exactly like the image
export const Default: Story = {
  render: () => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    const items: SettingsItem[] = [
      {
        id: 'edit-profile',
        type: 'navigation',
        icon: <UserProfileIcon size={24} color="#FFFFFF" />,
        label: 'Edit Profile',
        onPress: () => Alert.alert('Edit Profile', 'Navigate to profile editing'),
      },
      {
        id: 'push-notifications',
        type: 'toggle',
        icon: <BellIcon size={24} color="#FFFFFF" />,
        label: 'Push Notifications',
        isEnabled: notificationsEnabled,
        onToggle: setNotificationsEnabled,
      },
      {
        id: 'daily-reminder',
        type: 'info',
        icon: <ClockIcon size={24} color="#FFFFFF" />,
        label: 'Daily Reminder',
        value: 'N/A',
        onPress: () => Alert.alert('Daily Reminder', 'Set up daily reminder'),
      },
      {
        id: 'subscription',
        type: 'navigation',
        icon: <ShoppingBagIcon size={24} color="#FFFFFF" />,
        label: 'Your Subscription',
        onPress: () => Alert.alert('Subscription', 'View subscription details'),
      },
    ];

    return <SettingsMenu items={items} />;
  },
};

// With more options
export const ExtendedMenu: Story = {
  render: () => {
    const [darkMode, setDarkMode] = useState(true);
    const [autoPlay, setAutoPlay] = useState(false);
    const [notifications, setNotifications] = useState(true);

    const items: SettingsItem[] = [
      {
        id: 'profile',
        type: 'navigation',
        icon: <UserProfileIcon size={24} color="#FFFFFF" />,
        label: 'Edit Profile',
        onPress: () => console.log('Edit Profile'),
      },
      {
        id: 'notifications',
        type: 'toggle',
        icon: <BellIcon size={24} color="#FFFFFF" />,
        label: 'Push Notifications',
        isEnabled: notifications,
        onToggle: setNotifications,
      },
      {
        id: 'dark-mode',
        type: 'toggle',
        icon: <ClockIcon size={24} color="#FFFFFF" />,
        label: 'Dark Mode',
        isEnabled: darkMode,
        onToggle: setDarkMode,
      },
      {
        id: 'auto-play',
        type: 'toggle',
        icon: <ShoppingBagIcon size={24} color="#FFFFFF" />,
        label: 'Auto Play Videos',
        isEnabled: autoPlay,
        onToggle: setAutoPlay,
      },
      {
        id: 'reminder',
        type: 'info',
        icon: <ClockIcon size={24} color="#FFFFFF" />,
        label: 'Daily Reminder',
        value: '9:00 AM',
        onPress: () => console.log('Set reminder'),
      },
      {
        id: 'subscription',
        type: 'navigation',
        icon: <ShoppingBagIcon size={24} color="#FFFFFF" />,
        label: 'Subscription',
        onPress: () => console.log('Subscription'),
      },
      {
        id: 'language',
        type: 'info',
        icon: <UserProfileIcon size={24} color="#FFFFFF" />,
        label: 'Language',
        value: 'English',
        onPress: () => console.log('Change language'),
      },
    ];

    return <SettingsMenu items={items} />;
  },
};

// Custom styling
export const CustomStyle: Story = {
  render: () => {
    const items: SettingsItem[] = [
      {
        id: 'profile',
        type: 'navigation',
        icon: <UserProfileIcon size={24} color="#FFD60A" />,
        label: 'Edit Profile',
        onPress: () => console.log('Profile'),
      },
      {
        id: 'settings',
        type: 'navigation',
        icon: <ClockIcon size={24} color="#FF9F0A" />,
        label: 'Settings',
        onPress: () => console.log('Settings'),
      },
      {
        id: 'help',
        type: 'navigation',
        icon: <BellIcon size={24} color="#30D158" />,
        label: 'Help & Support',
        onPress: () => console.log('Help'),
      },
    ];

    return (
      <SettingsMenu
        items={items}
        backgroundColor="#1C1C1E"
        borderColor="#FFD60A"
        borderWidth={2}
        borderRadius={20}
        itemHeight={72}
      />
    );
  },
};

// Without dividers
export const NoDividers: Story = {
  render: () => {
    const items: SettingsItem[] = [
      {
        id: 'profile',
        type: 'navigation',
        icon: <UserProfileIcon size={24} color="#FFFFFF" />,
        label: 'Edit Profile',
        onPress: () => console.log('Profile'),
      },
      {
        id: 'notifications',
        type: 'toggle',
        icon: <BellIcon size={24} color="#FFFFFF" />,
        label: 'Notifications',
        isEnabled: true,
        onToggle: () => {},
      },
      {
        id: 'subscription',
        type: 'navigation',
        icon: <ShoppingBagIcon size={24} color="#FFFFFF" />,
        label: 'Subscription',
        onPress: () => console.log('Subscription'),
      },
    ];

    return <SettingsMenu items={items} showDividers={false} />;
  },
};

// Account Settings
export const AccountSettings: Story = {
  render: () => {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [smsNotifications, setSmsNotifications] = useState(false);
    const [twoFactor, setTwoFactor] = useState(true);

    const items: SettingsItem[] = [
      {
        id: 'account',
        type: 'navigation',
        icon: <UserProfileIcon size={24} color="#FFFFFF" />,
        label: 'Account Information',
        onPress: () => console.log('Account info'),
      },
      {
        id: 'email-notif',
        type: 'toggle',
        icon: <BellIcon size={24} color="#FFFFFF" />,
        label: 'Email Notifications',
        isEnabled: emailNotifications,
        onToggle: setEmailNotifications,
      },
      {
        id: 'sms-notif',
        type: 'toggle',
        icon: <BellIcon size={24} color="#FFFFFF" />,
        label: 'SMS Notifications',
        isEnabled: smsNotifications,
        onToggle: setSmsNotifications,
      },
      {
        id: '2fa',
        type: 'toggle',
        icon: <ShoppingBagIcon size={24} color="#FFFFFF" />,
        label: 'Two-Factor Authentication',
        isEnabled: twoFactor,
        onToggle: setTwoFactor,
      },
      {
        id: 'password',
        type: 'navigation',
        icon: <ClockIcon size={24} color="#FFFFFF" />,
        label: 'Change Password',
        onPress: () => console.log('Change password'),
      },
    ];

    return <SettingsMenu items={items} />;
  },
};

// App Preferences
export const AppPreferences: Story = {
  render: () => {
    const items: SettingsItem[] = [
      {
        id: 'theme',
        type: 'info',
        icon: <UserProfileIcon size={24} color="#FFFFFF" />,
        label: 'Theme',
        value: 'Dark',
        onPress: () => console.log('Change theme'),
      },
      {
        id: 'language',
        type: 'info',
        icon: <UserProfileIcon size={24} color="#FFFFFF" />,
        label: 'Language',
        value: 'English',
        onPress: () => console.log('Change language'),
      },
      {
        id: 'region',
        type: 'info',
        icon: <ClockIcon size={24} color="#FFFFFF" />,
        label: 'Region',
        value: 'United States',
        onPress: () => console.log('Change region'),
      },
      {
        id: 'timezone',
        type: 'info',
        icon: <ClockIcon size={24} color="#FFFFFF" />,
        label: 'Time Zone',
        value: 'PST',
        onPress: () => console.log('Change timezone'),
      },
    ];

    return <SettingsMenu items={items} />;
  },
};

// Compact Size
export const CompactSize: Story = {
  render: () => {
    const items: SettingsItem[] = [
      {
        id: 'profile',
        type: 'navigation',
        icon: <UserProfileIcon size={20} color="#FFFFFF" />,
        label: 'Edit Profile',
        onPress: () => console.log('Profile'),
      },
      {
        id: 'notifications',
        type: 'toggle',
        icon: <BellIcon size={20} color="#FFFFFF" />,
        label: 'Notifications',
        isEnabled: true,
        onToggle: () => {},
      },
      {
        id: 'subscription',
        type: 'navigation',
        icon: <ShoppingBagIcon size={20} color="#FFFFFF" />,
        label: 'Subscription',
        onPress: () => console.log('Subscription'),
      },
    ];

    return <SettingsMenu items={items} itemHeight={52} />;
  },
};

// Disabled State
export const DisabledItems: Story = {
  render: () => {
    const items: SettingsItem[] = [
      {
        id: 'profile',
        type: 'navigation',
        icon: <UserProfileIcon size={24} color="#FFFFFF" />,
        label: 'Edit Profile',
        onPress: () => console.log('Profile'),
      },
      {
        id: 'notifications',
        type: 'toggle',
        icon: <BellIcon size={24} color="#FFFFFF" />,
        label: 'Push Notifications',
        isEnabled: false,
        onToggle: () => {},
        disabled: true,
      },
      {
        id: 'premium',
        type: 'navigation',
        icon: <ShoppingBagIcon size={24} color="#FFFFFF" />,
        label: 'Premium Features',
        onPress: () => console.log('Premium'),
        disabled: true,
      },
    ];

    return <SettingsMenu items={items} />;
  },
};
