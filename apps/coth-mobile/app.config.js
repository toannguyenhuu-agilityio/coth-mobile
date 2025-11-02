import 'dotenv/config';

const APP_VARIANTS = {
  development: {
    name: 'COTH Dev',
    slug: 'coth-mobile',
    iosBundleId: 'com.coth.dev',
    androidPackage: 'com.coth.dev',
  },
  staging: {
    name: 'COTH Preview',
    slug: 'coth-mobile',
    iosBundleId: 'com.coth.staging',
    androidPackage: 'com.coth.staging',
  },
  production: {
    name: 'COTH',
    slug: 'coth-mobile',
    iosBundleId: 'com.coth',
    androidPackage: 'com.coth',
  },
};

export default ({ config = {} }) => {
  const env = process.env.EXPO_PUBLIC_APP_ENV;
  const variant = APP_VARIANTS[env];

  if (!variant) {
    throw new Error(`❌ Invalid EXPO_PUBLIC_APP_ENV: ${env}`);
  }

  return {
    ...config,
    name: variant.name,
    slug: variant.slug,
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    newArchEnabled: true,
    extra: {
      env,
      apiUrl: process.env.EXPO_PUBLIC_API_URL,
      storybookEnabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED,
      sentryDsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
      eas: {
        projectId: process.env.EXPO_PUBLIC_EAS_PROJECT_ID,
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
      bundleIdentifier: variant.iosBundleId,
    },

    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      edgeToEdgeEnabled: true,
      package: variant.androidPackage,
    },

    web: {
      favicon: './assets/favicon.png',
    },

    plugins: [
      './plugins/withWidgetDexFix.js',
      [
        '@bittingz/expo-widgets',
        {
          ios: {
            src: './widgets/ios',
            mode: env,
            moduleDependencies: ['MyData.swift', 'LogHandler.swift'],
            xcode: {
              configOverrides: {
                SWIFT_VERSION: '5.0',
              },
            },
          },
          android: {
            src: './widgets/android',
            packageName: variant.androidPackage,
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
  };
};
