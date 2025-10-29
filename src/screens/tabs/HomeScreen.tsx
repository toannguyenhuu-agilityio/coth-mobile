import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { CameraExample, ImagePickerExample, VideoPlayer, LockedFeature } from '@/components';

import { useSubscriptionStore } from '@/stores';
import { typography } from '@/theme/typography';

type RootStackParamList = {
  ManageSubscriptions: undefined;
};

// simple mapping: which tier can use which component
const FEATURE_ACCESS = {
  ImagePickerExample: ['silver', 'gold'],
  CameraExample: ['gold'],
};

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const currentTier = useSubscriptionStore((s) => s.currentTier);

  const canUse = (feature: keyof typeof FEATURE_ACCESS) =>
    FEATURE_ACCESS[feature]?.includes(currentTier ?? 'bronze');

  const goToManage = () => {
    navigation.navigate('ManageSubscriptions');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome Home{' '}
        {currentTier === 'gold'
          ? '👑 Gold Member'
          : currentTier === 'silver'
            ? '🥈 Silver Member'
            : ''}
      </Text>

      <TouchableOpacity onPress={goToManage} style={styles.manageButton}>
        <Text style={styles.manageText}>Manage Subscription</Text>
      </TouchableOpacity>

      {/* Bronze always accessible */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bronze Feature</Text>
        <Text style={styles.sectionDesc}>Always available</Text>
      </View>

      {/* Silver Feature */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Silver Feature</Text>
        <LockedFeature locked={!canUse('ImagePickerExample')} onUpgradePress={goToManage}>
          <ImagePickerExample />
        </LockedFeature>
      </View>

      {/* Gold Feature */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Gold Feature</Text>
        <LockedFeature locked={!canUse('CameraExample')} onUpgradePress={goToManage}>
          <CameraExample />
          <VideoPlayer />
        </LockedFeature>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 16,
  },
  welcomeText: {
    fontSize: 22,
    fontFamily: typography.fontWeight.bold,
    color: '#1F2937',
    marginBottom: 16,
  },
  manageButton: {
    backgroundColor: '#FFD700',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  manageText: { fontWeight: '600', color: '#000' },
  section: {
    width: '100%',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 12,
    padding: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: typography.fontWeight.medium,
    marginBottom: 8,
    color: '#111',
  },
  sectionDesc: { color: '#555' },
});
