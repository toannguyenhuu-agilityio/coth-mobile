import React, { useState } from 'react';
import { View } from 'react-native';
import { BillingToggle, BillingPeriod } from './index';
import { PricingOption } from '../PricingOption';

export default {
  title: 'Components/BillingToggle',
  component: BillingToggle,
};

export const WithPricingOptions = () => {
  const [selected, setSelected] = useState<BillingPeriod>('annually');

  return (
    <View style={{ padding: 20, backgroundColor: '#000', gap: 20 }}>
      {/* Billing Toggle */}
      <BillingToggle selected={selected} onSelect={setSelected} />

      {/* Pricing Options */}
      {selected === 'annually' ? (
        <PricingOption title="Pay Annually" price="$29 per month" badgeText="Save 12%" />
      ) : (
        <PricingOption title="Pay Monthly" price="$35 per month" />
      )}
    </View>
  );
};

export const FullExample = () => {
  const [selected, setSelected] = useState<BillingPeriod>('annually');

  const annualPrice = '$29 per month';
  const monthlyPrice = '$35 per month';

  return (
    <View style={{ padding: 20, backgroundColor: '#000', gap: 20 }}>
      {/* Billing Toggle */}
      <BillingToggle selected={selected} onSelect={setSelected} />

      {/* Show both options */}
      <View style={{ gap: 16 }}>
        <PricingOption
          title="Pay Annually"
          price={annualPrice}
          badgeText="Save 12%"
          backgroundColor={
            selected === 'annually' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)'
          }
          borderColor={
            selected === 'annually' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)'
          }
        />
        <PricingOption
          title="Pay Monthly"
          price={monthlyPrice}
          backgroundColor={
            selected === 'monthly' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)'
          }
          borderColor={
            selected === 'monthly' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)'
          }
        />
      </View>
    </View>
  );
};

export const GoldTierExample = () => {
  const [selected, setSelected] = useState<BillingPeriod>('annually');

  return (
    <View style={{ padding: 20, backgroundColor: '#000', gap: 20 }}>
      {/* Billing Toggle */}
      <BillingToggle selected={selected} onSelect={setSelected} />

      {/* Pricing Options */}
      {selected === 'annually' ? (
        <PricingOption title="Pay Annually" price="$68 per month" badgeText="Best Value" />
      ) : (
        <PricingOption title="Pay Monthly" price="$78 per month" />
      )}
    </View>
  );
};
