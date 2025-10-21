import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabNavigator } from './TabNavigator';
import { ProfileScreen } from '@/screens/drawer/Profile';
// import EditProfileScreen from "../screens/drawer/Profile/EditProfileScreen";
// import SettingsScreen from "../screens/drawer/Profile/SettingsScreen";
// import BibleScreen from "../screens/drawer/Bible/BibleScreen";
// import SearchScreen from "../screens/drawer/Bible/SearchScreen";
// import AnnouncementsScreen from "../screens/drawer/AnnouncementsScreen";
// import TicketsScreen from "../screens/drawer/TicketsScreen";

const Drawer = createDrawerNavigator();

export const AppNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="MainTabs" component={TabNavigator} options={{ title: 'Home' }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      {/* <Drawer.Screen name="EditProfile" component={EditProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Bible" component={BibleScreen} />
      <Drawer.Screen name="SearchBible" component={SearchScreen} />
      <Drawer.Screen name="Announcements" component={AnnouncementsScreen} />
      <Drawer.Screen name="Tickets" component={TicketsScreen} /> */}
    </Drawer.Navigator>
  );
};
