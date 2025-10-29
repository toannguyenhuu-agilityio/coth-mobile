import React from 'react';
import { View } from 'react-native';
import { PricingOption } from './index';

export default {
  title: 'Components/PricingOption',
  component: PricingOption,
  argTypes: {
    title: { control: 'text' },
    price: { control: 'text' },
    badgeText: { control: 'text' },
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    borderWidth: { control: 'number' },
    borderRadius: { control: 'number' },
  },
  args: {
    title: 'Pay Annually',
    price: '$29 per month',
    badgeText: 'Save 12%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderRadius: 16,
  },
};

export const Default = (props: any) => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <PricingOption {...props} />
  </View>
);

export const WithBadge = (props: any) => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <PricingOption title="Pay Annually" price="$29 per month" badgeText="Save 12%" />
  </View>
);

export const WithoutBadge = (props: any) => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <PricingOption title="Pay Monthly" price="$35 per month" />
  </View>
);

export const DifferentPricing = () => (
  <View style={{ padding: 20, backgroundColor: '#000', gap: 16 }}>
    <PricingOption title="Pay Annually" price="$29 per month" badgeText="Save 12%" />
    <PricingOption title="Pay Monthly" price="$35 per month" />
  </View>
);

export const CustomBadgeText = (props: any) => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <PricingOption title="Pay Annually" price="$68 per month" badgeText="Best Value" />
  </View>
);

export const LongPrice = (props: any) => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <PricingOption title="Enterprise Plan" price="$199.99 per month" badgeText="Save 25%" />
  </View>
);

export const CustomColors = (props: any) => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <PricingOption
      title="Pay Annually"
      price="$29 per month"
      badgeText="Save 12%"
      backgroundColor="rgba(37, 135, 160, 0.1)"
      borderColor="#2587A0"
    />
  </View>
);
