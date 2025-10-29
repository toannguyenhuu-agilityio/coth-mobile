// components/PaywallSheet.tsx
import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useSubscriptionStore } from '@/stores/useSubscriptionStore';

interface Props {
  visible: boolean;
  tier: 'gold' | 'silver';
  onClose: () => void;
}

export const PaywallSheet = ({ visible, tier, onClose }: Props) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const { getPackagesForTier, purchasePackage } = useSubscriptionStore();

  const pkgs = getPackagesForTier(tier, isAnnual ? 'annual' : 'monthly');
  const selected = pkgs[0];

  const handlePurchase = async () => {
    if (!selected) return;

    await purchasePackage(selected);

    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <Text style={styles.title}>Upgrade to {tier.toUpperCase()}</Text>
          <View style={styles.switchRow}>
            <TouchableOpacity onPress={() => setIsAnnual(true)}>
              <Text style={[styles.option, isAnnual && styles.active]}>Annually</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsAnnual(false)}>
              <Text style={[styles.option, !isAnnual && styles.active]}>Monthly</Text>
            </TouchableOpacity>
          </View>

          {selected ? (
            <TouchableOpacity style={styles.button} onPress={handlePurchase}>
              <Text style={styles.buttonText}>
                {selected.product.priceString} / {isAnnual ? 'year' : 'month'}
              </Text>
            </TouchableOpacity>
          ) : (
            <ActivityIndicator color="#FFD700" style={{ marginTop: 16 }} />
          )}

          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' },
  sheet: {
    backgroundColor: '#1E1E1E',
    padding: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: { fontSize: 20, fontWeight: '700', color: '#fff', marginBottom: 16 },
  switchRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 24 },
  option: { fontSize: 16, color: '#888' },
  active: { color: '#fff', textDecorationLine: 'underline' },
  button: {
    backgroundColor: '#FFD700',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
  },
  buttonText: { fontWeight: '600', color: '#000' },
  closeText: { color: '#ccc', textAlign: 'center', marginTop: 16 },
});
