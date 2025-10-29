import React from 'react';
import { View } from 'react-native';
import { PricingTierCard } from './index';

export default {
  title: 'Components/PricingTierCard',
  component: PricingTierCard,
  argTypes: {
    tierName: { control: 'text' },
    price: { control: 'text' },
    billingPeriod: { control: 'text' },
    badgeText: { control: 'text' },
    buttonText: { control: 'text' },
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    borderWidth: { control: 'number' },
    borderRadius: { control: 'number' },
    showShadow: { control: 'boolean' },
    showPerksToggle: { control: 'boolean' },
  },
  args: {
    tierName: 'Gold',
    price: '$68/mo',
    billingPeriod: 'Pay Annually',
    badgeText: 'Best Value',
    buttonText: 'Upgrade to Gold',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: '#3FC9ED',
    borderWidth: 1,
    borderRadius: 16,
    showShadow: true,
    showPerksToggle: true,
  },
};

// Mock gold badge icon
const GoldBadgeIcon = () => (
  <View
    style={{
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: '#C2B067',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#C2B067',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 8,
    }}
  >
    <View
      style={{
        width: 16,
        height: 16,
        backgroundColor: '#FFF',
        borderRadius: 8,
      }}
    />
  </View>
);

// Mock silver badge icon
const SilverBadgeIcon = () => (
  <View
    style={{
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: '#AAAAAA',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#AAAAAA',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 8,
    }}
  >
    <View
      style={{
        width: 16,
        height: 16,
        backgroundColor: '#FFF',
        borderRadius: 8,
      }}
    />
  </View>
);

const goldFeatures = [
  'Access to live Q&A session with Johnny every week',
  '5 free month memberships to gift',
  '300 guided conversations per month for Gospel Bot',
  'Everything in Silver tier',
];

const goldFeaturesExpanded = [
  'Access to daily devotionals',
  'Access to bible',
  'QR code for live events',
  'View comments',
  'Access to past devotionals',
  'Access to weekly bible study live streams',
  'Access to live Q&A session with Johnny every week',
  '5 free month memberships to gift',
  '300 guided conversations per month for Gospel Bot',
];

const silverFeatures = [
  'Access to exclusive content library',
  '100 guided conversations per month',
  'Priority customer support',
  'Everything in Bronze tier',
];

export const GoldTier = (props: any) => (
  <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
  >
    <PricingTierCard
      {...props}
      icon={<GoldBadgeIcon />}
      features={goldFeatures}
      onButtonPress={() => console.log('Gold upgrade pressed')}
    />
  </View>
);

export const SilverTier = (props: any) => (
  <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
  >
    <PricingTierCard
      tierName="Silver"
      price="$38/mo"
      billingPeriod="Pay Annually"
      badgeText="Popular"
      buttonText="Upgrade to Silver"
      icon={<SilverBadgeIcon />}
      features={silverFeatures}
      backgroundColor="rgba(255, 255, 255, 0.1)"
      borderColor="#7099A7"
      onButtonPress={() => console.log('Silver upgrade pressed')}
    />
  </View>
);

export const WithoutBadge = (props: any) => (
  <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
  >
    <PricingTierCard
      tierName="Bronze"
      price="$18/mo"
      billingPeriod="Pay Annually"
      buttonText="Upgrade to Bronze"
      icon={<GoldBadgeIcon />}
      features={['Access to basic content', 'Community forum access', '50 conversations per month']}
      backgroundColor="rgba(255, 255, 255, 0.1)"
      borderColor="rgba(255, 255, 255, 0.3)"
      onButtonPress={() => console.log('Bronze upgrade pressed')}
    />
  </View>
);

export const WithoutIcon = (props: any) => (
  <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
  >
    <PricingTierCard
      {...props}
      features={goldFeatures}
      onButtonPress={() => console.log('Upgrade pressed')}
    />
  </View>
);

export const WithoutBillingPeriod = (props: any) => (
  <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
  >
    <PricingTierCard
      tierName="Gold"
      price="$68"
      badgeText="Best Value"
      buttonText="Upgrade to Gold"
      icon={<GoldBadgeIcon />}
      features={goldFeatures}
      onButtonPress={() => console.log('Upgrade pressed')}
    />
  </View>
);

export const WithoutPerksToggle = (props: any) => (
  <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
  >
    <PricingTierCard
      {...props}
      icon={<GoldBadgeIcon />}
      features={goldFeatures}
      showPerksToggle={false}
      onButtonPress={() => console.log('Upgrade pressed')}
    />
  </View>
);

export const WithoutShadow = (props: any) => (
  <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
  >
    <PricingTierCard
      {...props}
      icon={<GoldBadgeIcon />}
      features={goldFeatures}
      showShadow={false}
      onButtonPress={() => console.log('Upgrade pressed')}
    />
  </View>
);

export const CustomButtonText = (props: any) => (
  <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
  >
    <PricingTierCard
      {...props}
      buttonText="Get Started"
      icon={<GoldBadgeIcon />}
      features={goldFeatures}
      onButtonPress={() => console.log('Get Started pressed')}
    />
  </View>
);

export const LongFeaturesList = (props: any) => (
  <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
  >
    <PricingTierCard
      tierName="Platinum"
      price="$98/mo"
      billingPeriod="Pay Annually"
      badgeText="Premium"
      buttonText="Upgrade to Platinum"
      icon={<GoldBadgeIcon />}
      features={[
        'All Gold tier benefits',
        'Unlimited Gospel Bot conversations',
        '1-on-1 mentorship sessions',
        'Exclusive retreat invitations',
        'Early access to new features',
        'Personalized spiritual guidance',
        'Custom prayer journal templates',
      ]}
      onButtonPress={() => console.log('Platinum upgrade pressed')}
    />
  </View>
);

export const NonInteractive = (props: any) => (
  <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
  >
    <PricingTierCard
      {...props}
      icon={<GoldBadgeIcon />}
      features={goldFeatures}
      showPerksToggle={false}
    />
  </View>
);

export const CollapsedState = () => (
  <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
  >
    <PricingTierCard
      tierName="Gold"
      price="$68/mo"
      billingPeriod="Pay Annually"
      badgeText="Best Value"
      buttonText="Upgrade to Gold"
      icon={<GoldBadgeIcon />}
      features={goldFeaturesExpanded}
      collapsedFeaturesCount={4}
      initialExpanded={false}
      onButtonPress={() => console.log('Upgrade pressed')}
    />
  </View>
);

export const ExpandedState = () => (
  <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
  >
    <PricingTierCard
      tierName="Gold"
      price="$68/mo"
      billingPeriod="Pay Annually"
      badgeText="Best Value"
      buttonText="Upgrade to Gold"
      icon={<GoldBadgeIcon />}
      features={goldFeaturesExpanded}
      collapsedFeaturesCount={4}
      initialExpanded={true}
      onButtonPress={() => console.log('Upgrade pressed')}
    />
  </View>
);

export const CustomCollapsedCount = () => (
  <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
  >
    <PricingTierCard
      tierName="Gold"
      price="$68/mo"
      billingPeriod="Pay Annually"
      badgeText="Best Value"
      buttonText="Upgrade to Gold"
      icon={<GoldBadgeIcon />}
      features={goldFeaturesExpanded}
      collapsedFeaturesCount={3}
      onButtonPress={() => console.log('Upgrade pressed')}
    />
  </View>
);

export const CustomToggleText = () => (
  <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
  >
    <PricingTierCard
      tierName="Gold"
      price="$68/mo"
      billingPeriod="Pay Annually"
      badgeText="Best Value"
      buttonText="Upgrade to Gold"
      icon={<GoldBadgeIcon />}
      features={goldFeaturesExpanded}
      collapsedFeaturesCount={4}
      collapsedText="Show More Features"
      expandedText="Show Less"
      onButtonPress={() => console.log('Upgrade pressed')}
    />
  </View>
);

export const NoCollapseAllFeatures = () => (
  <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
  >
    <PricingTierCard
      tierName="Gold"
      price="$68/mo"
      billingPeriod="Pay Annually"
      badgeText="Best Value"
      buttonText="Upgrade to Gold"
      icon={<GoldBadgeIcon />}
      features={goldFeaturesExpanded}
      collapsedFeaturesCount={0}
      onButtonPress={() => console.log('Upgrade pressed')}
    />
  </View>
);

export const MultipleTiers = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      gap: 16,
      padding: 16,
    }}
  >
    <PricingTierCard
      tierName="Gold"
      price="$68/mo"
      billingPeriod="Pay Annually"
      badgeText="Best Value"
      buttonText="Upgrade to Gold"
      icon={<GoldBadgeIcon />}
      features={goldFeaturesExpanded}
      collapsedFeaturesCount={4}
      onButtonPress={() => console.log('Gold upgrade')}
    />
    <PricingTierCard
      tierName="Silver"
      price="$38/mo"
      billingPeriod="Pay Annually"
      buttonText="Upgrade to Silver"
      icon={<SilverBadgeIcon />}
      features={silverFeatures}
      borderColor="#7099A7"
      onButtonPress={() => console.log('Silver upgrade')}
    />
  </View>
);
