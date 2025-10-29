import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const LockedFeature = ({
  locked,
  children,
  onUpgradePress,
}: {
  locked: boolean;
  children: React.ReactNode;
  onUpgradePress: () => void;
}) => {
  if (!locked) return <>{children}</>;

  return (
    <View style={styles.lockedContainer}>
      {children}
      <View style={styles.overlay}>
        <Text style={styles.lockedText}>Locked 🔒</Text>
        <TouchableOpacity style={styles.upgradeButton} onPress={onUpgradePress}>
          <Text style={styles.upgradeText}>Upgrade to Unlock</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lockedContainer: { position: 'relative' },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  lockedText: { color: '#fff', fontSize: 18, marginBottom: 12 },
  upgradeButton: {
    backgroundColor: '#FFD700',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  upgradeText: { color: '#000', fontWeight: '600' },
});
