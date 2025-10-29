import React, { useState } from 'react';
import { View } from 'react-native';
import { BillingToggle, BillingPeriod } from './index';

export default {
  title: 'Components/BillingToggle',
  component: BillingToggle,
  argTypes: {
    annuallyText: { control: 'text' },
    monthlyText: { control: 'text' },
    backgroundColor: { control: 'color' },
    selectedBackgroundColor: { control: 'color' },
    selectedBorderColor: { control: 'color' },
    unselectedTextColor: { control: 'color' },
    selectedTextColor: { control: 'color' },
  },
  args: {
    annuallyText: 'Annually',
    monthlyText: 'Monthly',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    selectedBackgroundColor: 'rgba(112, 153, 167, 0.3)',
    selectedBorderColor: '#7099A7',
    unselectedTextColor: 'rgba(255, 255, 255, 0.6)',
    selectedTextColor: '#FFFFFF',
  },
};

export const Default = () => {
  const [selected, setSelected] = useState<BillingPeriod>('annually');

  return (
    <View style={{ padding: 20, backgroundColor: '#000' }}>
      <BillingToggle selected={selected} onSelect={setSelected} />
    </View>
  );
};

export const AnnuallySelected = () => {
  const [selected, setSelected] = useState<BillingPeriod>('annually');

  return (
    <View style={{ padding: 20, backgroundColor: '#000' }}>
      <BillingToggle selected={selected} onSelect={setSelected} />
    </View>
  );
};

export const MonthlySelected = () => {
  const [selected, setSelected] = useState<BillingPeriod>('monthly');

  return (
    <View style={{ padding: 20, backgroundColor: '#000' }}>
      <BillingToggle selected={selected} onSelect={setSelected} />
    </View>
  );
};

export const CustomText = () => {
  const [selected, setSelected] = useState<BillingPeriod>('annually');

  return (
    <View style={{ padding: 20, backgroundColor: '#000' }}>
      <BillingToggle
        selected={selected}
        onSelect={setSelected}
        annuallyText="Yearly"
        monthlyText="Monthly"
      />
    </View>
  );
};

export const CustomColors = () => {
  const [selected, setSelected] = useState<BillingPeriod>('annually');

  return (
    <View style={{ padding: 20, backgroundColor: '#000' }}>
      <BillingToggle
        selected={selected}
        onSelect={setSelected}
        backgroundColor="rgba(37, 135, 160, 0.1)"
        selectedBackgroundColor="rgba(37, 135, 160, 0.3)"
        selectedBorderColor="#2587A0"
      />
    </View>
  );
};
