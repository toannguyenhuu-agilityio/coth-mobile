// src/stores/useSubscriptionStore.ts
import { create } from 'zustand';
import Purchases, {
  CustomerInfo,
  PurchasesOffering,
  PurchasesPackage,
} from 'react-native-purchases';
import Constants from 'expo-constants';

type Tier = 'bronze' | 'silver' | 'gold';

interface SubscriptionState {
  customerInfo: CustomerInfo | null;
  currentOffering: PurchasesOffering | null;
  currentTier: Tier;
  isProUser: boolean;
  loading: boolean;
  initialized: boolean;

  // actions
  initialize: () => Promise<void>;
  purchasePackage: (pkg: PurchasesPackage) => Promise<void>;
  restorePurchases: () => Promise<CustomerInfo>;
  getPackagesForTier: (tier: Tier, frequency: 'monthly' | 'annual') => PurchasesPackage[];
  checkPremiumAccess: (onLocked?: () => void) => boolean;
}

export const useSubscriptionStore = create<SubscriptionState>((set, get) => ({
  customerInfo: null,
  currentOffering: null,
  currentTier: 'bronze',
  isProUser: false,
  loading: true,
  initialized: false,

  initialize: async () => {
    try {
      Purchases.configure({ apiKey: Constants.expoConfig?.extra?.revenueCatApiKey });

      const [info, offerings] = await Promise.all([
        Purchases.getCustomerInfo(),
        Purchases.getOfferings(),
      ]);

      // Determine tier from entitlements
      const tier = determineTierFromCustomerInfo(info);

      set({
        customerInfo: info,
        currentOffering: offerings.current,
        currentTier: tier,
        isProUser: tier !== 'bronze',
        loading: false,
        initialized: true,
      });

      // Optionally subscribe to purchaser info updates:
      Purchases.addCustomerInfoUpdateListener((updatedInfo) => {
        const newTier = determineTierFromCustomerInfo(updatedInfo);
        set({
          customerInfo: updatedInfo,
          currentTier: newTier,
          isProUser: newTier !== 'bronze',
        });
      });
    } catch (err) {
      console.error('RevenueCat init error', err);
      set({ loading: false, initialized: true });
    }
  },

  purchasePackage: async (pkg: PurchasesPackage) => {
    try {
      const { customerInfo } = await Purchases.purchasePackage(pkg);
      const newTier = determineTierFromCustomerInfo(customerInfo);
      set({
        customerInfo,
        currentTier: newTier,
        isProUser: newTier !== 'bronze',
      });
    } catch (error: any) {
      if (!error.userCancelled) console.error('Purchase failed', error);
      throw error;
    }
  },

  restorePurchases: async () => {
    try {
      const info = await Purchases.restorePurchases();
      const newTier = determineTierFromCustomerInfo(info);
      set({
        customerInfo: info,
        currentTier: newTier,
        isProUser: newTier !== 'bronze',
      });
      return info;
    } catch (error) {
      console.error('Restore failed', error);
      throw error;
    }
  },

  getPackagesForTier: (tier: Tier, frequency: 'monthly' | 'annual') => {
    const offering = get().currentOffering;
    if (!offering) return [];

    // availablePackages contains all; we filter by product id naming convention
    // possible packageType: 'MONTHLY', 'ANNUAL' etc, but product id is more reliable
    return offering.availablePackages.filter((p) => {
      const id = p.product.identifier.toLowerCase();
      const tierMatch = id.includes(tier); // e.g. 'silver' in 'com.app.silver.monthly'
      const freqMatch =
        frequency === 'monthly'
          ? id.includes('month') || id.includes('monthly')
          : id.includes('annual') || id.includes('year');
      return tierMatch && freqMatch;
    });
  },

  checkPremiumAccess: (onLocked) => {
    const isPro = get().isProUser;

    if (!isPro && onLocked) onLocked();

    return isPro;
  },
}));

/**
 * Helper: deduce the current tier from RevenueCat's CustomerInfo entitlements.
 * This assumes you set entitlements in RevenueCat named 'gold','silver','bronze'
 */
function determineTierFromCustomerInfo(info: CustomerInfo | null): Tier {
  if (!info) return 'bronze';
  const active = info.entitlements?.active || {};

  // Check highest tier first
  if (active.gold) return 'gold';
  if (active.silver) return 'silver';
  // bronze is default/no purchase
  return 'bronze';
}
