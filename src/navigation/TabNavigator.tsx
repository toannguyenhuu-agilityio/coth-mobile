import React from 'react';

// Navigators
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import { HomeScreen, DailyDevoScreen, GospelBot, NotesList, Streams } from '@/screens/tabs';

// Types
import { TabParamList } from '@/types';

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="DailyDevo" component={DailyDevoScreen} />
      <Tab.Screen name="Notes" component={GospelBot} />
      <Tab.Screen name="AIChat" component={NotesList} />
      <Tab.Screen name="Streams" component={Streams} />
    </Tab.Navigator>
  );
};
