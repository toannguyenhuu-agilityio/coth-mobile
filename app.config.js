import 'dotenv/config';

export default ({ config }) => ({
  ...config,
  expo: {
    name: 'COTH',
    slug: 'coth-mobile',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    newArchEnabled: true,
    extra: {
      env: process.env.EXPO_PUBLIC_APP_ENV,
      apiUrl: process.env.EXPO_PUBLIC_API_URL,
      storybookEnabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED,
      sentryDsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
      revenueCatApiKey: process.env.EXPO_PUBLIC_REVENUECAT_API_KEY,
      revenueCatAppUserID: process.env.EXPO_PUBLIC_REVENUECAT_APP_USER_ID,
      eas: {
        projectId: '78f3cb94-fad0-46e4-8401-b79de8a80dff',
      },
    },

    splash: {
      image: './assets/splash-icon.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },

    ios: {
      supportsTablet: true,
      entitlements: {
        'com.apple.security.application-groups': ['group..expowidgets'],
        'aps-environment': 'development',
      },
      infoPlist: {
        NSSupportsLiveActivities: false,
        NSSupportsLiveActivitiesFrequentUpdates: false,
      },
      bundleIdentifier: 'com.coth.dev',
    },

    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      edgeToEdgeEnabled: true,
      package: 'com.coth.dev',
    },

    web: {
      favicon: './assets/favicon.png',
    },

    plugins: [
      [
        '@bittingz/expo-widgets',
        {
          ios: {
            src: './widgets/ios',
            mode: 'development',
            moduleDependencies: ['MyData.swift', 'LogHandler.swift'],
            xcode: {
              configOverrides: {
                SWIFT_VERSION: '5.0',
              },
            },
          },
          android: {
            src: './widgets/android',
            packageName: 'com.coth.dev',
            widgets: [
              {
                name: 'SampleWidget',
                resourceName: '@xml/sample_widget_info',
              },
            ],
          },
        },
      ],
      [
        '@sentry/react-native/expo',
        {
          url: 'https://sentry.io/',
          note: 'Use SENTRY_AUTH_TOKEN env to authenticate with Sentry.',
          project: 'coth-mobile',
          organization: 'asnet',
        },
      ],
      'expo-asset',
      'expo-secure-store',
      'react-native-video',
    ],
  },
});
