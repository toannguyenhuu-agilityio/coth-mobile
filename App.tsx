import { RootNavigator } from '@/navigation';
import { useEffect } from 'react';
import { useAuthStore } from '@/stores';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib';
import { useNotifications } from '@/hooks/useNotifications';

export default function App() {
  const loadStoredUser = useAuthStore((state) => state.loadStoredUser);
  const { expoPushToken, notification, error } = useNotifications();

  useEffect(() => {
    async function loadUser() {
      await loadStoredUser();
    }

    loadUser();
  }, []);

  // Log push token for testing (remove in production)
  useEffect(() => {
    if (expoPushToken) {
      console.log('Expo Push Token:', expoPushToken);
    }
  }, [expoPushToken]);

  // Log notification errors
  useEffect(() => {
    if (error) {
      console.error('Notification Error:', error);
    }
  }, [error]);

  // Handle incoming notifications
  useEffect(() => {
    if (notification) {
      console.log('Received notification:', notification);
      // You can add custom logic here to handle the notification
      // For example: show an alert, navigate to a specific screen, etc.
    }
  }, [notification]);

  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigator />
    </QueryClientProvider>
  );
}
