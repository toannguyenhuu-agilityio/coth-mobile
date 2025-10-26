import React, { useEffect } from 'react';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib';
import { RootNavigator } from '@/navigation';
import { useAuthStore } from '@/stores';
import Constants from 'expo-constants';
import * as Sentry from '@sentry/react-native';

// Initialize Sentry before anything else
Sentry.init({
  dsn: Constants.expoConfig?.extra?.sentryDsn,
  debug: process.env.NODE_ENV !== 'production', // optional: enable debug logs only in dev
  tracesSampleRate: 1.0, // performance monitoring
  enableNative: true,
  enableNativeCrashHandling: true,
  sendDefaultPii: true,
});

function App() {
  const loadStoredUser = useAuthStore((state) => state.loadStoredUser);

  useEffect(() => {
    loadStoredUser();
  }, []);

  return (
    <KeyboardProvider>
      <QueryClientProvider client={queryClient}>
        <RootNavigator />
      </QueryClientProvider>
    </KeyboardProvider>
  );
}

let AppEntryPoint = App;
const SHOW_STORYBOOK = Constants.expoConfig?.extra?.storybookEnabled === 'true';

if (SHOW_STORYBOOK) {
  AppEntryPoint = require('./.rnstorybook').default;
}

export default AppEntryPoint;
