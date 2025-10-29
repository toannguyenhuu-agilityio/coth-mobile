import React from 'react';
import { View } from 'react-native';
import { UpgradeSheet } from './index';

export default {
  title: 'Components/UpgradeSheet',
  component: UpgradeSheet,
  argTypes: {
    title: { control: 'text' },
    message: { control: 'text' },
    buttonText: { control: 'text' },
    backgroundColor: { control: 'color' },
    borderRadius: { control: 'number' },
  },
  args: {
    title: 'Upgrade To Gold Tier',
    message: 'Live Mentorship requires Gold tier. Upgrade your tier to access it.',
    buttonText: 'Upgrade',
    backgroundColor: '#1E1E1E',
    borderRadius: 38,
  },
};

// Mock lock icon component
const LockIcon = () => (
  <View
    style={{
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      backgroundColor: 'rgba(194, 176, 103, 0.1)',
    }}
  >
    <View
      style={{
        width: 24,
        height: 28,
        backgroundColor: '#C2B067',
        borderRadius: 4,
      }}
    />
  </View>
);

// Mock close icon
const CloseIcon = () => (
  <View
    style={{
      width: 16,
      height: 16,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <View
      style={{
        width: 16,
        height: 2,
        backgroundColor: '#FFFFFF',
        transform: [{ rotate: '45deg' }],
        position: 'absolute',
      }}
    />
    <View
      style={{
        width: 16,
        height: 2,
        backgroundColor: '#FFFFFF',
        transform: [{ rotate: '-45deg' }],
        position: 'absolute',
      }}
    />
  </View>
);

export const Default = (props: any) => (
  <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
  >
    <UpgradeSheet
      {...props}
      icon={<LockIcon />}
      onButtonPress={() => console.log('Upgrade pressed')}
      onClosePress={() => console.log('Close pressed')}
      closeIcon={<CloseIcon />}
    />
  </View>
);

export const WithoutIcon = (props: any) => (
  <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
  >
    <UpgradeSheet
      {...props}
      onButtonPress={() => console.log('Upgrade pressed')}
      onClosePress={() => console.log('Close pressed')}
      closeIcon={<CloseIcon />}
    />
  </View>
);

export const WithoutCloseButton = (props: any) => (
  <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
  >
    <UpgradeSheet
      {...props}
      icon={<LockIcon />}
      onButtonPress={() => console.log('Upgrade pressed')}
    />
  </View>
);

export const CustomTitle = (props: any) => (
  <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
  >
    <UpgradeSheet
      {...props}
      title="Premium Feature"
      message="This feature is available for premium members only."
      buttonText="Get Premium"
      icon={<LockIcon />}
      onButtonPress={() => console.log('Get Premium pressed')}
      onClosePress={() => console.log('Close pressed')}
      closeIcon={<CloseIcon />}
    />
  </View>
);

export const LongMessage = (props: any) => (
  <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
  >
    <UpgradeSheet
      {...props}
      title="Upgrade Required"
      message="This exclusive content requires a Gold tier membership. Upgrade now to unlock all premium features including live mentorship, exclusive videos, and personalized guidance."
      icon={<LockIcon />}
      onButtonPress={() => console.log('Upgrade pressed')}
      onClosePress={() => console.log('Close pressed')}
      closeIcon={<CloseIcon />}
    />
  </View>
);

export const CustomBorderRadius = (props: any) => (
  <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
  >
    <UpgradeSheet
      {...props}
      borderRadius={16}
      icon={<LockIcon />}
      onButtonPress={() => console.log('Upgrade pressed')}
      onClosePress={() => console.log('Close pressed')}
      closeIcon={<CloseIcon />}
    />
  </View>
);

export const CustomBackgroundColor = (props: any) => (
  <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
  >
    <UpgradeSheet
      {...props}
      backgroundColor="rgba(30, 30, 30, 0.98)"
      icon={<LockIcon />}
      onButtonPress={() => console.log('Upgrade pressed')}
      onClosePress={() => console.log('Close pressed')}
      closeIcon={<CloseIcon />}
    />
  </View>
);

export const NonInteractive = (props: any) => (
  <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
  >
    <UpgradeSheet {...props} icon={<LockIcon />} />
  </View>
);

export const DifferentTiers = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      gap: 20,
    }}
  >
    <UpgradeSheet
      title="Upgrade To Silver Tier"
      message="This feature requires Silver tier membership."
      buttonText="Upgrade to Silver"
      icon={<LockIcon />}
      onButtonPress={() => console.log('Silver upgrade')}
      onClosePress={() => console.log('Close')}
      closeIcon={<CloseIcon />}
    />
  </View>
);
