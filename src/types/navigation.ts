import { NavigatorScreenParams } from '@react-navigation/native';

// --- Auth Stack ---
export type AuthStackParamList = {
  Splash: undefined;
  Intro1: undefined;
  Intro2: undefined;
  Intro3: undefined;
  Login: undefined;
  Signup: undefined;
};

// --- Tab Navigator ---
export type TabParamList = {
  Home: undefined;
  DailyDevo: undefined;
  GospelBot: undefined;
  Notes: undefined;
  AIChat: undefined;
  Streams: undefined;
};

// --- Drawer Navigator ---
export type DrawerParamList = {
  MainTabs: NavigatorScreenParams<TabParamList>;
  Profile: undefined;
  ManageSubscriptions: undefined;
};

// --- Root Navigator ---
export type RootStackParamList = {
  Splash: undefined;
  Auth: NavigatorScreenParams<AuthStackParamList>;
  App: NavigatorScreenParams<DrawerParamList>;
};
