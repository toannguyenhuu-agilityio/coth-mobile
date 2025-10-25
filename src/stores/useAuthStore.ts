import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';
import * as Sentry from 'sentry-expo';

type User = {
  id: string;
  name: string;
  email: string;
} | null;

interface AuthState {
  user: User;
  loading: boolean;
  loadStoredUser: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, _get) => ({
  user: null,
  loading: true,

  loadStoredUser: async () => {
    try {
      const storedUser = await SecureStore.getItemAsync('user');

      if (storedUser) {
        set({ user: JSON.parse(storedUser) });
      }
    } catch (error) {
      console.warn('Error loading user from SecureStore:', error);
      Sentry.Native.captureException(error);
    } finally {
      set({ loading: false });
    }
  },

  login: async (email: string, password: string) => {
    console.log('login', email, password);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newUser = { id: '1', name: 'John Doe', email };
    set({ user: newUser });
    await SecureStore.setItemAsync('user', JSON.stringify(newUser));
  },

  signup: async (email: string, password: string, name: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newUser = { id: '1', name, email };
    set({ user: newUser });
    await SecureStore.setItemAsync('user', JSON.stringify(newUser));
  },

  logout: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({ user: null });
    await SecureStore.deleteItemAsync('user');
  },
}));
