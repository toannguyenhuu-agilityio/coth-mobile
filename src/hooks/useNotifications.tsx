import { useState, useEffect, useRef } from 'react';
import * as Notifications from 'expo-notifications';
import {
  registerForPushNotificationsAsync,
  configureNotificationHandler,
} from '../lib/pushNotifications';
import { AppNotification, NotificationResponse } from '../types/notification';

export interface UseNotificationsReturn {
  expoPushToken: string | undefined;
  notification: AppNotification | undefined;
  error: Error | undefined;
  isLoading: boolean;
}

/**
 * Custom hook to handle push notifications
 * Registers for push notifications and sets up listeners for incoming notifications
 *
 * @returns {UseNotificationsReturn} Object containing push token, notification state, error, and loading state
 */
export function useNotifications(): UseNotificationsReturn {
  const [expoPushToken, setExpoPushToken] = useState<string>();
  const [notification, setNotification] = useState<AppNotification>();
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(true);

  const notificationListener = useRef<Notifications.Subscription | null>(null);
  const responseListener = useRef<Notifications.Subscription | null>(null);

  useEffect(() => {
    // Configure notification handler
    configureNotificationHandler();

    // Register for push notifications
    registerForPushNotificationsAsync()
      .then((token) => {
        setExpoPushToken(token);
        setIsLoading(false);
      })
      .catch((err: Error) => {
        setError(err);
        setIsLoading(false);
        console.error('Failed to register for push notifications:', err);
      });

    // Listener for notifications received while app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      console.log('Notification received:', notification);
      setNotification(notification as AppNotification);
    });

    // Listener for when a notification is tapped/clicked
    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response: NotificationResponse) => {
        console.log('Notification response:', response);
        // Handle the notification response here
        // For example, navigate to a specific screen based on the notification data
        const data = response.notification.request.content.data;
        console.log('Notification data:', data);
      },
    );

    // Cleanup listeners on unmount
    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current);
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  return {
    expoPushToken,
    notification,
    error,
    isLoading,
  };
}
