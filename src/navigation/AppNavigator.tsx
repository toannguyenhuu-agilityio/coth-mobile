import React from 'react';

// Navigators
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabNavigator } from './TabNavigator';

// Screens
import { ProfileScreen } from '@/screens/drawer/Profile';

// Types
import { DrawerParamList } from '@/types';

const Drawer = createDrawerNavigator<DrawerParamList>();

export const AppNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="MainTabs" component={TabNavigator} options={{ title: 'Home' }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};
