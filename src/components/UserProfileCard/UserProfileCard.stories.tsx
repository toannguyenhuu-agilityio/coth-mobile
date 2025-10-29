import React from 'react';
import { View } from 'react-native';
import { UserProfileCard } from './index';

export default {
  title: 'Components/UserProfileCard',
  component: UserProfileCard,
  argTypes: {
    name: { control: 'text' },
    tierText: { control: 'text' },
    showChevron: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    borderWidth: { control: 'number' },
    borderRadius: { control: 'number' },
    avatarSize: { control: 'number' },
  },
  args: {
    name: 'James Smith',
    tierText: 'Gold Tier',
    showChevron: true,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderRadius: 20,
    avatarSize: 64,
  },
};

// Mock tier icon
const GoldTierIcon = () => (
  <View
    style={{
      width: 20,
      height: 20,
      backgroundColor: '#C2B067',
      borderRadius: 4,
    }}
  />
);

const SilverTierIcon = () => (
  <View
    style={{
      width: 20,
      height: 20,
      backgroundColor: '#AAAAAA',
      borderRadius: 4,
    }}
  />
);

export const Default = (props: any) => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <UserProfileCard
      {...props}
      avatarUrl="https://i.pravatar.cc/150?img=12"
      tierIcon={<GoldTierIcon />}
      onPress={() => console.log('Profile pressed')}
    />
  </View>
);

export const GoldTier = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <UserProfileCard
      name="James Smith"
      tierText="Gold Tier"
      avatarUrl="https://i.pravatar.cc/150?img=12"
      tierIcon={<GoldTierIcon />}
      onPress={() => console.log('Profile pressed')}
    />
  </View>
);

export const SilverTier = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <UserProfileCard
      name="Sarah Johnson"
      tierText="Silver Tier"
      avatarUrl="https://i.pravatar.cc/150?img=45"
      tierIcon={<SilverTierIcon />}
      onPress={() => console.log('Profile pressed')}
    />
  </View>
);

export const WithoutTier = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <UserProfileCard
      name="John Doe"
      avatarUrl="https://i.pravatar.cc/150?img=33"
      onPress={() => console.log('Profile pressed')}
    />
  </View>
);

export const WithoutChevron = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <UserProfileCard
      name="James Smith"
      tierText="Gold Tier"
      avatarUrl="https://i.pravatar.cc/150?img=12"
      tierIcon={<GoldTierIcon />}
      showChevron={false}
      onPress={() => console.log('Profile pressed')}
    />
  </View>
);

export const WithPlaceholderAvatar = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <UserProfileCard
      name="James Smith"
      tierText="Gold Tier"
      tierIcon={<GoldTierIcon />}
      onPress={() => console.log('Profile pressed')}
    />
  </View>
);

export const SmallAvatar = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <UserProfileCard
      name="James Smith"
      tierText="Gold Tier"
      avatarUrl="https://i.pravatar.cc/150?img=12"
      tierIcon={<GoldTierIcon />}
      avatarSize={48}
      onPress={() => console.log('Profile pressed')}
    />
  </View>
);

export const LargeAvatar = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <UserProfileCard
      name="James Smith"
      tierText="Gold Tier"
      avatarUrl="https://i.pravatar.cc/150?img=12"
      tierIcon={<GoldTierIcon />}
      avatarSize={80}
      onPress={() => console.log('Profile pressed')}
    />
  </View>
);

export const NonInteractive = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <UserProfileCard
      name="James Smith"
      tierText="Gold Tier"
      avatarUrl="https://i.pravatar.cc/150?img=12"
      tierIcon={<GoldTierIcon />}
    />
  </View>
);

export const LongName = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <UserProfileCard
      name="James Alexander Smith-Johnson III"
      tierText="Gold Tier"
      avatarUrl="https://i.pravatar.cc/150?img=12"
      tierIcon={<GoldTierIcon />}
      onPress={() => console.log('Profile pressed')}
    />
  </View>
);

export const CustomBorderRadius = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <UserProfileCard
      name="James Smith"
      tierText="Gold Tier"
      avatarUrl="https://i.pravatar.cc/150?img=12"
      tierIcon={<GoldTierIcon />}
      borderRadius={12}
      onPress={() => console.log('Profile pressed')}
    />
  </View>
);

export const CustomColors = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <UserProfileCard
      name="James Smith"
      tierText="Gold Tier"
      avatarUrl="https://i.pravatar.cc/150?img=12"
      tierIcon={<GoldTierIcon />}
      backgroundColor="rgba(37, 135, 160, 0.1)"
      borderColor="#2587A0"
      onPress={() => console.log('Profile pressed')}
    />
  </View>
);

export const MultipleProfiles = () => (
  <View style={{ padding: 20, backgroundColor: '#000', gap: 16 }}>
    <UserProfileCard
      name="James Smith"
      tierText="Gold Tier"
      avatarUrl="https://i.pravatar.cc/150?img=12"
      tierIcon={<GoldTierIcon />}
      onPress={() => console.log('James pressed')}
    />
    <UserProfileCard
      name="Sarah Johnson"
      tierText="Silver Tier"
      avatarUrl="https://i.pravatar.cc/150?img=45"
      tierIcon={<SilverTierIcon />}
      onPress={() => console.log('Sarah pressed')}
    />
    <UserProfileCard
      name="John Doe"
      avatarUrl="https://i.pravatar.cc/150?img=33"
      onPress={() => console.log('John pressed')}
    />
  </View>
);
