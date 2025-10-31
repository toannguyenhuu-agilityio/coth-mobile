import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useAuthStore } from '@/stores';

export const SignupScreen = () => {
  const { signup } = useAuthStore();

  const handleSignup = async () => {
    await signup('newuser@example.com', 'password123', 'New User');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signup Screen</Text>
      <Button title="Sign Up (placeholder)" onPress={handleSignup} />
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
    fontSize: 18,
    marginBottom: 12,
  },
});
