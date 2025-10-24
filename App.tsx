import { RootNavigator } from '@/navigation';
import { useEffect, useState } from 'react';
import { useAuthStore } from '@/stores';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib';
import * as SplashScreen from 'expo-splash-screen';

// Env
import Constants from 'expo-constants';

// Keep splash visible - will be controlled by SplashScreen component
SplashScreen.preventAutoHideAsync();

function App() {
  const [isAppReady, setIsAppReady] = useState(false);
  const loadStoredUser = useAuthStore((state) => state.loadStoredUser);

  useEffect(() => {
    async function loadUser() {
      await loadStoredUser();
    }

    loadUser();
  }, []);

  useEffect(() => {
    async function prepare() {
      try {
        // Mark app as ready (but don't hide splash yet)
        await SplashScreen.hide();
        setIsAppReady(true);
      } catch (error) {
        console.error('App initialization error:', error);
        // Still mark as ready to show error UI
        setIsAppReady(true);
      }
    }

    prepare();
  }, []);

  // Don't render navigation until app is ready
  if (!isAppReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigator />
    </QueryClientProvider>
  );
}

let AppEntryPoint = App;

const SHOW_STORYBOOK = Constants.expoConfig?.extra?.storybookEnabled === 'true';

if (SHOW_STORYBOOK) {
  AppEntryPoint = require('./.rnstorybook').default;
}

export default AppEntryPoint;
