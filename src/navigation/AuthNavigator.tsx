import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, LoginScreen, SignupScreen } from '@/screens/auth';
import {
  OnboardingBibleClassesScreen,
  OnboardingDevotionalsScreen,
  OnboardingLiveEventsScreen,
  OnboardingGospelBotScreen,
  OnboardingSpiritualToolsScreen,
  OnboardingSpiritualUnlockScreen,
} from '@/screens/onboarding';

// Constants
import { ROUTES } from '@/constants';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.SPLASH} component={SplashScreen} />
      <Stack.Screen
        name={ROUTES.ONBOARDING_BIBLE_CLASSES}
        component={OnboardingBibleClassesScreen}
      />
      <Stack.Screen name={ROUTES.ONBOARDING_DEVOTIONALS} component={OnboardingDevotionalsScreen} />
      <Stack.Screen name={ROUTES.ONBOARDING_LIVE_EVENTS} component={OnboardingLiveEventsScreen} />
      <Stack.Screen name={ROUTES.ONBOARDING_GOSPEL_BOT} component={OnboardingGospelBotScreen} />
      <Stack.Screen
        name={ROUTES.ONBOARDING_SPIRITUAL_TOOLS}
        component={OnboardingSpiritualToolsScreen}
      />
      <Stack.Screen
        name={ROUTES.ONBOARDING_SPIRITUAL_UNLOCK}
        component={OnboardingSpiritualUnlockScreen}
      />
      <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTES.SIGNUP} component={SignupScreen} />
    </Stack.Navigator>
  );
};
