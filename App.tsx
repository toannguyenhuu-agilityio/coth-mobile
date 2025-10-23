import { RootNavigator } from '@/navigation';
import { useEffect } from 'react';
import { useAuthStore } from '@/stores';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib';

// Env
import Constants from 'expo-constants';

function App() {
  const loadStoredUser = useAuthStore((state) => state.loadStoredUser);

  useEffect(() => {
    async function loadUser() {
      await loadStoredUser();
    }

    loadUser();
  }, []);

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
