import React from 'react';
import { View, Text } from 'react-native';
import { ReminderSetup } from './index';

export default {
  title: 'Components/ReminderSetup',
  component: ReminderSetup,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    saveButtonText: { control: 'text' },
    cancelButtonText: { control: 'text' },
    backgroundColor: { control: 'color' },
    titleColor: { control: 'color' },
    descriptionColor: { control: 'color' },
    descriptionBackgroundColor: { control: 'color' },
    descriptionBorderRadius: { control: 'number' },
    saveButtonBackgroundColor: { control: 'color' },
    saveButtonTextColor: { control: 'color' },
    cancelButtonBackgroundColor: { control: 'color' },
    cancelButtonTextColor: { control: 'color' },
    buttonBorderRadius: { control: 'number' },
  },
  args: {
    title: 'Never miss a day of devotion',
    description: 'Set a reminder so you never miss the Daily Devotion and lose your streak.',
    saveButtonText: 'Save',
    cancelButtonText: 'Cancel',
    backgroundColor: '#1E1E1E',
    titleColor: '#FFFFFF',
    descriptionColor: 'rgba(255, 255, 255, 0.8)',
    descriptionBackgroundColor: 'rgba(255, 255, 255, 0.1)',
    descriptionBorderRadius: 12,
    saveButtonBackgroundColor: 'rgba(255, 255, 255, 0.1)',
    saveButtonTextColor: '#FFFFFF',
    cancelButtonBackgroundColor: 'rgba(255, 255, 255, 0.05)',
    cancelButtonTextColor: '#FFFFFF',
    buttonBorderRadius: 12,
  },
};

// Mock Time Picker
const MockTimePicker = () => (
  <View
    style={{
      height: 200,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 20,
    }}
  >
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 48, color: '#FFFFFF', fontWeight: '300' }}>8</Text>
      <Text style={{ fontSize: 24, color: 'rgba(255, 255, 255, 0.5)' }}>7</Text>
    </View>
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 48, color: '#FFFFFF', fontWeight: '300' }}>15</Text>
      <Text style={{ fontSize: 24, color: 'rgba(255, 255, 255, 0.5)' }}>14</Text>
    </View>
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 32, color: '#FFFFFF', fontWeight: '300' }}>AM</Text>
      <Text style={{ fontSize: 20, color: 'rgba(255, 255, 255, 0.5)' }}>PM</Text>
    </View>
  </View>
);

export const Default = (props: any) => (
  <View style={{ backgroundColor: '#000' }}>
    <ReminderSetup
      {...props}
      timePicker={<MockTimePicker />}
      onSave={() => console.log('Save pressed')}
      onCancel={() => console.log('Cancel pressed')}
    />
  </View>
);

export const WithTimePicker = () => (
  <View style={{ backgroundColor: '#000' }}>
    <ReminderSetup
      title="Never miss a day of devotion"
      description="Set a reminder so you never miss the Daily Devotion and lose your streak."
      timePicker={<MockTimePicker />}
      onSave={() => console.log('Save pressed')}
      onCancel={() => console.log('Cancel pressed')}
    />
  </View>
);

export const WithoutDescription = () => (
  <View style={{ backgroundColor: '#000' }}>
    <ReminderSetup
      title="Never miss a day of devotion"
      description=""
      timePicker={<MockTimePicker />}
      onSave={() => console.log('Save pressed')}
      onCancel={() => console.log('Cancel pressed')}
    />
  </View>
);

export const WithoutTitle = () => (
  <View style={{ backgroundColor: '#000' }}>
    <ReminderSetup
      title=""
      description="Set a reminder so you never miss the Daily Devotion and lose your streak."
      timePicker={<MockTimePicker />}
      onSave={() => console.log('Save pressed')}
      onCancel={() => console.log('Cancel pressed')}
    />
  </View>
);

export const CustomButtonText = () => (
  <View style={{ backgroundColor: '#000' }}>
    <ReminderSetup
      title="Never miss a day of devotion"
      description="Set a reminder so you never miss the Daily Devotion and lose your streak."
      timePicker={<MockTimePicker />}
      saveButtonText="Confirm"
      cancelButtonText="Dismiss"
      onSave={() => console.log('Confirm pressed')}
      onCancel={() => console.log('Dismiss pressed')}
    />
  </View>
);

export const CustomColors = () => (
  <View style={{ backgroundColor: '#000' }}>
    <ReminderSetup
      title="Never miss a day of devotion"
      description="Set a reminder so you never miss the Daily Devotion and lose your streak."
      timePicker={<MockTimePicker />}
      backgroundColor="#2C2C2C"
      descriptionBackgroundColor="rgba(37, 135, 160, 0.2)"
      saveButtonBackgroundColor="#2587A0"
      cancelButtonBackgroundColor="rgba(255, 255, 255, 0.1)"
      onSave={() => console.log('Save pressed')}
      onCancel={() => console.log('Cancel pressed')}
    />
  </View>
);

export const LongDescription = () => (
  <View style={{ backgroundColor: '#000' }}>
    <ReminderSetup
      title="Never miss a day of devotion"
      description="Set a reminder so you never miss the Daily Devotion and lose your streak. Daily devotions are an important part of your spiritual journey and help you stay connected with your faith. By setting a reminder, you'll be notified each day to complete your devotional reading."
      timePicker={<MockTimePicker />}
      onSave={() => console.log('Save pressed')}
      onCancel={() => console.log('Cancel pressed')}
    />
  </View>
);

export const ShortTitle = () => (
  <View style={{ backgroundColor: '#000' }}>
    <ReminderSetup
      title="Set Reminder"
      description="Set a reminder so you never miss the Daily Devotion and lose your streak."
      timePicker={<MockTimePicker />}
      onSave={() => console.log('Save pressed')}
      onCancel={() => console.log('Cancel pressed')}
    />
  </View>
);

export const CustomBorderRadius = () => (
  <View style={{ backgroundColor: '#000' }}>
    <ReminderSetup
      title="Never miss a day of devotion"
      description="Set a reminder so you never miss the Daily Devotion and lose your streak."
      timePicker={<MockTimePicker />}
      descriptionBorderRadius={20}
      buttonBorderRadius={20}
      onSave={() => console.log('Save pressed')}
      onCancel={() => console.log('Cancel pressed')}
    />
  </View>
);

export const WithoutTimePicker = () => (
  <View style={{ backgroundColor: '#000' }}>
    <ReminderSetup
      title="Never miss a day of devotion"
      description="Set a reminder so you never miss the Daily Devotion and lose your streak."
      onSave={() => console.log('Save pressed')}
      onCancel={() => console.log('Cancel pressed')}
    />
  </View>
);

export const MinimalSetup = () => (
  <View style={{ backgroundColor: '#000' }}>
    <ReminderSetup
      title="Set Reminder"
      timePicker={<MockTimePicker />}
      saveButtonText="OK"
      cancelButtonText="Cancel"
      onSave={() => console.log('OK pressed')}
      onCancel={() => console.log('Cancel pressed')}
    />
  </View>
);

export const DarkMode = () => (
  <View style={{ backgroundColor: '#000' }}>
    <ReminderSetup
      title="Never miss a day of devotion"
      description="Set a reminder so you never miss the Daily Devotion and lose your streak."
      timePicker={<MockTimePicker />}
      backgroundColor="#000000"
      descriptionBackgroundColor="rgba(255, 255, 255, 0.05)"
      saveButtonBackgroundColor="rgba(255, 255, 255, 0.15)"
      cancelButtonBackgroundColor="rgba(255, 255, 255, 0.05)"
      onSave={() => console.log('Save pressed')}
      onCancel={() => console.log('Cancel pressed')}
    />
  </View>
);
