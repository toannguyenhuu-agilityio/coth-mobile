import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { View } from 'react-native';
import { fn } from 'storybook/test';

import { Tab } from './index';
import { TabGroup } from './TabGroup';

const meta = {
  title: 'Components/Tab',
  component: Tab,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: 'flex-start', padding: 16, backgroundColor: '#000' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: { onPress: fn() },
  argTypes: {
    label: {
      control: 'text',
      description: 'Tab label',
    },
    isActive: {
      control: 'boolean',
      description: 'Active state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    activeBackgroundColor: {
      control: 'color',
      description: 'Active background color',
    },
    inactiveBackgroundColor: {
      control: 'color',
      description: 'Inactive background color',
    },
    activeTextColor: {
      control: 'color',
      description: 'Active text color',
    },
    inactiveTextColor: {
      control: 'color',
      description: 'Inactive text color',
    },
  },
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

// Single Tab States
export const Active: Story = {
  args: {
    label: 'All',
    isActive: true,
  },
};

export const Inactive: Story = {
  args: {
    label: 'Bible Class',
    isActive: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    isActive: false,
    disabled: true,
  },
};

export const ActiveDisabled: Story = {
  args: {
    label: 'Active Disabled',
    isActive: true,
    disabled: true,
  },
};

// Long Text
export const LongText: Story = {
  args: {
    label: 'Prison ministry outreach program',
    isActive: false,
  },
};

export const LongTextActive: Story = {
  args: {
    label: 'Prison ministry outreach program',
    isActive: true,
  },
};

// Custom Colors
export const CustomActiveColors: Story = {
  args: {
    label: 'Custom',
    isActive: true,
    activeBackgroundColor: '#4CAF50',
    activeTextColor: '#000000',
  },
};

export const CustomInactiveColors: Story = {
  args: {
    label: 'Custom',
    isActive: false,
    inactiveBackgroundColor: '#333333',
    inactiveTextColor: '#999999',
  },
};

// Multiple Tabs Side by Side
export const MultipleTabs: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
      <Tab label="All" isActive={true} />
      <Tab label="Bible Class" isActive={false} />
      <Tab label="After Service" isActive={false} />
      <Tab label="Prison ministry" isActive={false} />
    </View>
  ),
};

// TabGroup Stories
export const TabGroupBasic: Story = {
  render: () => {
    const [selectedTab, setSelectedTab] = useState('all');

    const tabs = [
      { value: 'all', label: 'All' },
      { value: 'bible', label: 'Bible Class' },
      { value: 'service', label: 'After Service' },
      { value: 'prison', label: 'Prison ministry' },
    ];

    return <TabGroup options={tabs} value={selectedTab} onValueChange={setSelectedTab} />;
  },
};

export const TabGroupManyItems: Story = {
  render: () => {
    const [selectedTab, setSelectedTab] = useState('all');

    const tabs = [
      { value: 'all', label: 'All' },
      { value: 'bible', label: 'Bible Class' },
      { value: 'service', label: 'After Service' },
      { value: 'prison', label: 'Prison ministry' },
      { value: 'youth', label: 'Youth Group' },
      { value: 'worship', label: 'Worship' },
      { value: 'prayer', label: 'Prayer Meeting' },
      { value: 'missions', label: 'Missions' },
    ];

    return <TabGroup options={tabs} value={selectedTab} onValueChange={setSelectedTab} />;
  },
};

export const TabGroupWithDisabled: Story = {
  render: () => {
    const [selectedTab, setSelectedTab] = useState('all');

    const tabs = [
      { value: 'all', label: 'All' },
      { value: 'bible', label: 'Bible Class' },
      { value: 'service', label: 'After Service', disabled: true },
      { value: 'prison', label: 'Prison ministry' },
    ];

    return <TabGroup options={tabs} value={selectedTab} onValueChange={setSelectedTab} />;
  },
};

export const TabGroupCustomColors: Story = {
  render: () => {
    const [selectedTab, setSelectedTab] = useState('all');

    const tabs = [
      { value: 'all', label: 'All' },
      { value: 'bible', label: 'Bible Class' },
      { value: 'service', label: 'After Service' },
      { value: 'prison', label: 'Prison ministry' },
    ];

    return (
      <TabGroup
        options={tabs}
        value={selectedTab}
        onValueChange={setSelectedTab}
        activeBackgroundColor="#4CAF50"
        activeTextColor="#000000"
        inactiveBackgroundColor="#333333"
        inactiveTextColor="#999999"
      />
    );
  },
};

export const TabGroupRealWorld: Story = {
  render: () => {
    const [selectedTab, setSelectedTab] = useState('all');

    const tabs = [
      { value: 'all', label: 'All' },
      { value: 'bible', label: 'Bible Class' },
      { value: 'service', label: 'After Service' },
      { value: 'prison', label: 'Prison ministry' },
      { value: 'youth', label: 'Youth Group' },
      { value: 'worship', label: 'Worship' },
    ];

    return (
      <View style={{ width: '100%' }}>
        <TabGroup options={tabs} value={selectedTab} onValueChange={setSelectedTab} />
        <View
          style={{
            marginTop: 20,
            padding: 16,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 8,
          }}
        >
          <View style={{ color: '#FFFFFF' }}>{/* Content for selected tab would go here */}</View>
        </View>
      </View>
    );
  },
};
