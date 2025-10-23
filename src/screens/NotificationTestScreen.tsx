import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNotifications } from '@/hooks/useNotifications';
import {
  sendPushNotification,
  scheduleLocalNotification,
  getBadgeCount,
  setBadgeCount,
} from '@/lib/pushNotifications';

export function NotificationTestScreen() {
  const { expoPushToken, notification, error, isLoading } = useNotifications();

  const handleSendPushNotification = async () => {
    if (!expoPushToken) {
      Alert.alert('Error', 'No push token available');
      return;
    }

    try {
      await sendPushNotification(
        expoPushToken,
        'Test Notification',
        'This is a test push notification from your app!',
        { testData: 'Hello from test screen' },
      );
      Alert.alert('Success', 'Push notification sent!');
    } catch (err) {
      Alert.alert('Error', 'Failed to send notification');
    }
  };

  const handleScheduleLocal = async () => {
    try {
      await scheduleLocalNotification(
        'Scheduled Notification',
        'This notification was scheduled 5 seconds ago',
        { scheduled: true },
        5,
      );
      Alert.alert('Success', 'Local notification scheduled for 5 seconds from now');
    } catch (err) {
      Alert.alert('Error', 'Failed to schedule notification');
    }
  };

  const handleGetBadge = async () => {
    try {
      const count = await getBadgeCount();
      Alert.alert('Badge Count', `Current badge count: ${count}`);
    } catch (err) {
      Alert.alert('Error', 'Failed to get badge count');
    }
  };

  const handleSetBadge = async () => {
    try {
      await setBadgeCount(5);
      Alert.alert('Success', 'Badge count set to 5');
    } catch (err) {
      Alert.alert('Error', 'Failed to set badge count');
    }
  };

  const handleClearBadge = async () => {
    try {
      await setBadgeCount(0);
      Alert.alert('Success', 'Badge count cleared');
    } catch (err) {
      Alert.alert('Error', 'Failed to clear badge count');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>🔔 Notification Test</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Push Token</Text>
          {isLoading ? (
            <Text style={styles.infoText}>Loading...</Text>
          ) : error ? (
            <Text style={styles.errorText}>Error: {error.message}</Text>
          ) : (
            <Text style={styles.tokenText} selectable>
              {expoPushToken || 'No token'}
            </Text>
          )}
        </View>

        {notification && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Last Notification</Text>
            <Text style={styles.infoText}>Title: {notification.request.content.title}</Text>
            <Text style={styles.infoText}>Body: {notification.request.content.body}</Text>
            <Text style={styles.infoText}>
              Data: {JSON.stringify(notification.request.content.data, null, 2)}
            </Text>
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Actions</Text>

          <TouchableOpacity
            style={[styles.button, styles.primaryButton]}
            onPress={handleSendPushNotification}
            disabled={!expoPushToken}
          >
            <Text style={styles.buttonText}>📤 Send Push Notification</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={handleScheduleLocal}
          >
            <Text style={styles.buttonText}>⏰ Schedule Local (5s)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={handleGetBadge}
          >
            <Text style={styles.buttonText}>🔢 Get Badge Count</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={handleSetBadge}
          >
            <Text style={styles.buttonText}>➕ Set Badge to 5</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.tertiaryButton]}
            onPress={handleClearBadge}
          >
            <Text style={styles.buttonText}>🧹 Clear Badge</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.instructionsTitle}>📝 Instructions:</Text>
          <Text style={styles.instructions}>
            1. Copy your Push Token above{'\n'}
            2. Go to: https://expo.dev/notifications{'\n'}
            3. Paste your token and send a test notification{'\n'}
            4. Or use the buttons above to test locally
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  tokenText: {
    fontSize: 12,
    color: '#666',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    fontFamily: 'monospace',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  errorText: {
    fontSize: 14,
    color: '#e74c3c',
    marginBottom: 8,
  },
  button: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#007AFF',
  },
  secondaryButton: {
    backgroundColor: '#34C759',
  },
  tertiaryButton: {
    backgroundColor: '#FF9500',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  instructionsTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  instructions: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
  },
});
