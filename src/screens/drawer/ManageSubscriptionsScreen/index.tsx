import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useSubscriptionStore } from '@/stores/useSubscriptionStore';
import RevenueCatUI from 'react-native-purchases-ui';
import type { PurchasesPackage } from 'react-native-purchases';
import Purchases from 'react-native-purchases';

export const ManageSubscriptionsScreen = () => {
  const {
    currentTier,
    loading,
    restorePurchases,
    getPackagesForTier,
    getOfferingForTier,
    updateFromCustomerInfo,
  } = useSubscriptionStore();

  const [packages, setPackages] = useState<Record<string, PurchasesPackage[]>>({});
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    setPackages({
      gold: [...getPackagesForTier('gold', 'monthly'), ...getPackagesForTier('gold', 'annual')],
      silver: [
        ...getPackagesForTier('silver', 'monthly'),
        ...getPackagesForTier('silver', 'annual'),
      ],
    });
  }, [getPackagesForTier]);

  if (loading || processing)
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="#FFD700" size="large" />
      </View>
    );

  const tiers = [
    {
      id: 'gold',
      title: 'Gold',
      perks: ['Access to live Q&A', 'Priority event invites', 'All Silver & Bronze perks'],
      packages: packages.gold,
    },
    {
      id: 'silver',
      title: 'Silver',
      perks: ['Access to weekly live streams', 'Past devotionals archive', 'All Bronze perks'],
      packages: packages.silver,
    },
    {
      id: 'bronze',
      title: 'Bronze',
      perks: ['Daily devotionals', 'Bible access', 'Basic Gospel Bot usage'],
      packages: [],
    },
  ];

  const getActionLabel = (
    currentTier: 'bronze' | 'silver' | 'gold',
    targetTier: 'bronze' | 'silver' | 'gold',
  ) => {
    if (currentTier === targetTier) return 'Current Plan';

    const tierOrder = { bronze: 1, silver: 2, gold: 3 };
    const current = tierOrder[currentTier];
    const target = tierOrder[targetTier];

    if (target > current)
      return `Upgrade to ${targetTier.charAt(0).toUpperCase() + targetTier.slice(1)}`;

    return `Downgrade to ${targetTier.charAt(0).toUpperCase() + targetTier.slice(1)}`;
  };

  const handleTierPress = async (tierId: 'bronze' | 'silver' | 'gold') => {
    if (tierId === currentTier) return;

    if (tierId === 'bronze') {
      try {
        await RevenueCatUI.presentCustomerCenter();
      } catch (e) {
        console.error('Error presenting Customer Center:', e);
        Alert.alert('Error', 'Unable to open the Customer Center.');
      }
      return;
    }

    const offering = getOfferingForTier(tierId);

    if (!offering) {
      Alert.alert('Unavailable', 'No offering found for this tier.');
      return;
    }

    try {
      setProcessing(true);

      await RevenueCatUI.presentPaywall({
        offering,
        displayCloseButton: true,
      });

      // Force refresh after paywall completion
      const info = await Purchases.getCustomerInfo();
      updateFromCustomerInfo(info);
    } catch (err) {
      console.error('Error presenting paywall:', err);
      Alert.alert('Error', 'Failed to present the paywall.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Manage Subscription</Text>

      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {tiers.map((tier) => {
          const isCurrent = currentTier === tier.id;
          const pkgExample = tier.packages?.[0];
          const displayPrice =
            pkgExample?.product.priceString || (tier.id === 'bronze' ? 'Free' : '—');

          return (
            <View key={tier.id} style={styles.card}>
              <View style={styles.row}>
                <Text style={styles.tierTitle}>{tier.title}</Text>
                {tier.id === 'gold' && <Text style={styles.badge}>Best Value</Text>}
              </View>

              <Text style={styles.price}>{displayPrice}</Text>
              {tier.perks.map((perk) => (
                <Text key={perk} style={styles.perk}>
                  • {perk}
                </Text>
              ))}

              {isCurrent ? (
                <View style={styles.currentButton}>
                  <Text style={styles.currentText}>Current Plan</Text>
                </View>
              ) : (
                <TouchableOpacity
                  style={styles.upgradeButton}
                  onPress={() => handleTierPress(tier.id as 'bronze' | 'silver' | 'gold')}
                >
                  <Text style={styles.upgradeText}>
                    {getActionLabel(currentTier, tier.id as 'bronze' | 'silver' | 'gold')}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}

        <TouchableOpacity onPress={restorePurchases}>
          <Text style={styles.restoreText}>Restore Purchases</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', padding: 20 },
  header: { color: '#fff', fontSize: 22, fontWeight: '700', marginBottom: 20 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: {
    backgroundColor: '#1C1C1C',
    borderRadius: 14,
    padding: 20,
    marginBottom: 16,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  tierTitle: { color: '#fff', fontSize: 18, fontWeight: '600' },
  badge: {
    backgroundColor: '#FFD700',
    color: '#000',
    borderRadius: 6,
    paddingHorizontal: 6,
    fontSize: 12,
    fontWeight: '700',
  },
  price: { color: '#FFD700', fontSize: 16, marginTop: 6 },
  perk: { color: '#aaa', marginTop: 4, fontSize: 14 },
  upgradeButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  upgradeText: { fontWeight: '600' },
  currentButton: {
    backgroundColor: '#444',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  currentText: { color: '#ccc' },
  restoreText: {
    color: '#ccc',
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  manageBtn: {
    backgroundColor: '#333',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  manageText: { color: '#FFD700', fontWeight: '600' },
});
