import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, DailyDevoScreen, GospelBot, NotesList, Streams } from '@/screens/tabs';

const Tab = createBottomTabNavigator();

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
