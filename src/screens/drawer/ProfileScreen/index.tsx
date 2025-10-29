import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useAuthStore } from '@/stores';

export const ProfileScreen = () => {
  const { logout, user } = useAuthStore();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
      {user && <Text style={styles.subtext}>Logged in as: {user.email}</Text>}
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  subtext: {
    fontSize: 14,
    marginBottom: 16,
  },
});
