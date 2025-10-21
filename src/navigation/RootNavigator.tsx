import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppNavigator } from './AppNavigator';
import { AuthNavigator } from './AuthNavigator';
import { SplashScreen } from '@/screens/auth';
import { useAuthStore } from '@/stores';

const RootStack = createNativeStackNavigator();

export const RootNavigator = () => {
  const { user, loading } = useAuthStore();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {loading ? (
          <RootStack.Screen name="Splash" component={SplashScreen} />
        ) : user ? (
          <RootStack.Screen name="App" component={AppNavigator} />
        ) : (
          <RootStack.Screen name="Auth" component={AuthNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
