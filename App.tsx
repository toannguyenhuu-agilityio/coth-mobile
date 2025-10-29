import React, { useEffect } from 'react';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib';
import { RootNavigator } from '@/navigation';
import { useAuthStore, useSubscriptionStore } from '@/stores';
import Constants from 'expo-constants';
import * as Sentry from '@sentry/react-native';
import { loadAsync } from 'expo-font';

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
  const initSubscription = useSubscriptionStore((state) => state.initialize);

  useEffect(() => {
    loadStoredUser();
  }, []);

  useEffect(() => {
    initSubscription();
  }, []);

  useEffect(() => {
    async function prepare() {
      await loadAsync({
        'Akzidenz-Grotesk-Pro-Regular': require('./assets/fonts/akzidenzgroteskpro_regular.ttf'),
        'Akzidenz-Grotesk-Pro-Medium': require('./assets/fonts/akzidenzgroteskpro_md.ttf'),
        'Akzidenz-Grotesk-Pro-Bold': require('./assets/fonts/akzidenzgroteskpro_bold.ttf'),
        'Akzidenz-Grotesk-Pro-Light': require('./assets/fonts/akzidenzgroteskpro_light.ttf'),
        'Roboto Mono': require('./assets/fonts/RobotoMono-VariableFont_wght.ttf'),
        'Franklin Gothic': require('./assets/fonts/FranklinGothic.ttf'),
      });
    }

    prepare();
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
