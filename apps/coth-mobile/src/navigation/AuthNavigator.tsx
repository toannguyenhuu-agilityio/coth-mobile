import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SplashScreen,
  Intro1Screen,
  Intro2Screen,
  Intro3Screen,
  LoginScreen,
  SignupScreen,
} from '@/screens/auth';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Intro1" component={Intro1Screen} />
      <Stack.Screen name="Intro2" component={Intro2Screen} />
      <Stack.Screen name="Intro3" component={Intro3Screen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};
